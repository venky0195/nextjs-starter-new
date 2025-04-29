export default async function handler(request, context) {
  const edgeStart = Date.now();

  // Clone and modify headers
  const headers = new Headers(request.headers);
  headers.set("x-start-time", edgeStart.toString());

  const modifiedRequest = new Request(request, { headers });

  const response = await fetch(modifiedRequest);

  const fetchLatency = Date.now() - edgeStart;
  console.log(`Edge Fetch Latency: ${fetchLatency} ms`);

  return response;
}
