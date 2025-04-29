export async function GET(request) {
  const startTime = Date.now();
  const endTime = Date.now();
  const totalLatency = endTime - startTime;

  return new Response(
    JSON.stringify({
      message: "helloworld!",
      edgeLatency: edgeLatency ? `${edgeLatency} ms` : "unknown",
      functionLatency: `${totalLatency} ms`,
      totalLatency: edgeLatency ? `${edgeLatency + totalLatency} ms` : "unknown"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
