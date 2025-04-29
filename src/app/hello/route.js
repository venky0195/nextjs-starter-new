export async function GET(request) {
  const startTime = Date.now();
  const endTime = Date.now();
  const totalLatency = endTime - startTime;
  const url = new URL(request.url);
  console.log('Request timestamp parameter:', url.searchParams.get('t'));
  console.log('Current timestamp:', Date.now());
  return new Response(
    JSON.stringify({
      message: "helloworld!",
      functionLatency: `${totalLatency} ms`,
      ISOString: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
