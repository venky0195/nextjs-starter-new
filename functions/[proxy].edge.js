import Personalize from '@contentstack/personalize-edge-sdk';
import getRedirects from "../redirects";
import axios from 'axios';


export default async function handler(request, context) {

  const redirects = async () => {
    try {
      const modifiedUrl = new URL(request.url);
      const route = modifiedUrl.pathname;
      const redirectsData = (await getRedirects(context)) || [];

      // for (const redirect of redirectsData) {
      //   if (route === redirect.source && request.method === 'GET') {
      //     modifiedUrl.pathname = redirect.destination;
      //     return Response.redirect(decodeURIComponent(modifiedUrl), 307);
      //   }
      // }
      for (const redirect of redirectsData) {
        if (route === redirect.source && request.method === 'GET') {
          if (redirect.destination.includes('https')) {
            const destinationUrl = redirect.destination;
            return Response.redirect(decodeURIComponent(destinationUrl), 308);
          } else {
            modifiedUrl.pathname = redirect.destination;
            return Response.redirect(decodeURIComponent(modifiedUrl), 308);
          }
        }
      }
      return await fetch(request);
    } catch (error) {
      console.error("Redirects ERROR:\n", error);
      // return new Response("Internal Server Error", { status: 500 });
    }
  }

  const personalizeHandler = async () => {
    let id = Math.random().toString(36).substring(7);
    try {
      // const initStatus = Personalize.getInitializationStatus();
      const parsedUrl = new URL(request?.url);
      const pathname = parsedUrl?.pathname;
      const requestBody = JSON.stringify(request?.body);
      const headers = new Headers(request?.headers);
      const method = request?.method;
      const query = request?.query;
      const params = request?.params;

      const requestURL = parsedUrl.toString();
      console.log("requestURL", typeof requestURL, requestURL);
      console.log("parsedUrl", typeof parsedUrl, parsedUrl);
      console.log("pathname", typeof pathname, pathname);
      console.log("method", method);
      console.log("params", params);
      console.log("query", query);
      console.log('requestBody', requestBody);



      if (['_next', 'favicon.ico'].some((path) => pathname.includes(path))) {
        return fetch(request);
      } else if (pathname.startsWith('/api/') || pathname.startsWith('/api')) {
        console.log(JSON.stringify(context));
        
        console.log("API request", JSON.parse(JSON.stringify(request.body)));

        const data = await fetch(requestURL, {
          method: method,
          headers: headers,
          body: method === 'GET' ? null : requestBody
        });

        console.log("data", JSON.stringify(data));
        return data
      }

      // Personalize.reset();

      if (context.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_EDGE_API_URL) {
        Personalize.setEdgeApiUrl(context.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_EDGE_API_URL);
      }

      const PersonalizeSDK = await Personalize.init(context.env.NEXT_PUBLIC_CONTENTSTACK_PERSONALIZE_PROJECT_UID, { request });

      // const initStatus1 = Personalize.getInitializationStatus();

      const variantParam = PersonalizeSDK.getVariantParam();
      parsedUrl.searchParams.set(PersonalizeSDK.VARIANT_QUERY_PARAM, variantParam);

      const modifiedRequest = new Request(parsedUrl.toString(), request);
      const response = await fetch(modifiedRequest);

      let modifiedResponse = new Response(response.body, response);

      // const initStatus2 = Personalize.getInitializationStatus();
      PersonalizeSDK.addStateToResponse(modifiedResponse);
      modifiedResponse.headers.set('cache-control', 'no-store');

      return modifiedResponse;

    } catch (error) {
      console.log(id + ' Personalize ERROR:\n', error);
      return fetch(request);
      // return new Response("Internal Server Error", { status: 500 });
    }
  }

  const redirectResponse = await redirects();
  if (redirectResponse && redirectResponse.status !== 200) {
    return redirectResponse;
  }
  return await personalizeHandler();
}