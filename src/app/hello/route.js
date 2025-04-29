export async function GET(request) {
  const startTimeHeader = request.headers.get("x-start-time");
  let latency = null;

  if (startTimeHeader) {
    const start = parseInt(startTimeHeader, 10);
    latency = Date.now() - start;
    console.log(`Latency from edge to cloud function: ${latency} ms`);
  } else {
    console.log("x-start-time header not found");
  }

  return new Response(
    JSON.stringify({
      message: "helloworld!",
      latency: latency ? `${latency} ms` : "unknown"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
