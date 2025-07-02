export default async function handler(request, context) {
  try {
    const requestHeaders = Object.fromEntries(request.headers);
    console.log("req headers from edge fn-->", requestHeaders)

    const response = await fetch(request);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    console.log('🚀 ~ handler ~ error:', error)

  }

}