export default async function handler(request, context) {
  const edgeStart = Date.now();
  // Get the URL and append timestamp query parameter
  const url = new URL(request.url);
  url.searchParams.set('t', edgeStart.toString());
  
  console.log('Request timestamp parameter:', url.searchParams.get('t'));

  const modifiedRequest = new Request(url, request);

  const response = await fetch(modifiedRequest);
  
  // Clone the response to read it without consuming the body
  const responseClone = response.clone();
  
  // Get the content type
  const contentType = response.headers.get('content-type') || '';
  
  let responseBody;
  if (contentType.includes('application/json')) {
    responseBody = await responseClone.json();
  } else if (contentType.includes('text/')) {
    responseBody = await responseClone.text();
  } else {
    // For other content types, read as array buffer
    responseBody = await responseClone.arrayBuffer();
  }

  console.log('Response:', JSON.stringify({
    response: responseBody,
    EdgeResponseReceivedtimestamp: Date.now()
  }));

  const fetchLatency = Date.now() - edgeStart;
  console.log(`Edge Fetch Latency: ${fetchLatency} ms`);

  return response;
}
