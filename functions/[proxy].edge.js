export default async function handler(request, context) {
  const edgeStart = Date.now();
  // Get the URL and append timestamp query parameter
  const url = new URL(request.url);
  url.searchParams.set('t', edgeStart.toString());
  
  console.log('Request timestamp parameter:', url.searchParams.get('t'));

  const modifiedRequest = new Request(url, request);

  const response = await fetch(modifiedRequest);

  const fetchLatency = Date.now() - edgeStart;
  console.log(`Edge Fetch Latency: ${fetchLatency} ms`);

  return response;
}
