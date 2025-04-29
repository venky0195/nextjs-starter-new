export async function GET(request) {
  const startTime = Date.now();
  const endTime = Date.now();
  const totalLatency = endTime - startTime;

  return new Response(
    JSON.stringify({
      message: "helloworld!",
      functionLatency: `${totalLatency} ms`,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
