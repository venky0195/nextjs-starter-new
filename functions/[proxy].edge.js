export default async function handler(request, context) {
  const edgeStart = Date.now();

  // Clone and modify headers
  const headers = new Headers(request.headers);
  headers.set("x-start-time", edgeStart.toString());

  const modifiedRequest = new Request(request, { headers });

  // Get the URL from the request
  const url = new URL(modifiedRequest.url);

  // Check and modify host if needed
  if (url.host === 'nextjs-starter-new.eu-contentstackapps.com') {
    url.host = 'nextjs-starter-new.eu-gcpgcontentstackapps.com';
  } else if (url.host === 'nextjs-starter-new.eu-gcpgcontentstackapps.com') {
    url.host = 'nextjs-starter-new.eu-contentstackapps.com';
  }

  // Create new request with modified URL
  modifiedRequest = new Request(url, modifiedRequest);
  const response = await fetch(modifiedRequest);

  const fetchLatency = Date.now() - edgeStart;
  console.log(`Edge Fetch Latency: ${fetchLatency} ms`);

  return response;
}
