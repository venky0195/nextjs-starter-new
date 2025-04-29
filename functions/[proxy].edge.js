export default async function handler(request, context) {
  const edgeStart = Date.now();

  const headers = new Headers(request.headers);
  headers.set("x-start-time", edgeStart.toString());

  let url = new URL(request.url);

  if (url.hostname === "nextjs-starter-new.eu-gcpcontentstackapps.com") {
    url.hostname = "nextjs-starter-new.eu-contentstackapps.com";
  } else if (url.hostname === "nextjs-starter-new.eu-contentstackapps.com") {
    url.hostname = "nextjs-starter-new.eu-gcpcontentstackapps.com";
  }

  const modifiedRequest = new Request(url.toString(), {
    method: request.method,
    headers,
    body: request.body,
    redirect: request.redirect,
    credentials: request.credentials,
    cache: request.cache,
    mode: request.mode,
    referrer: request.referrer,
    referrerPolicy: request.referrerPolicy,
    integrity: request.integrity,
    keepalive: request.keepalive,
  });

  const response = await fetch(modifiedRequest);

  const fetchLatency = Date.now() - edgeStart;
  console.log(`Edge Fetch Latency: ${fetchLatency} ms`);

  return response;
}
