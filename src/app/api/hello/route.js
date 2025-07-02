export async function GET(req) {
  try {
    const requestHeaders = Object.fromEntries(req.headers.entries());
    console.log("req headers from Next.js API route -->", requestHeaders);

    return new Response(
      JSON.stringify({
        message: "helloworld!",
        "visitor-ip-country": requestHeaders["x-visitor-ip-country"],
        "visitor-ip-city": requestHeaders["x-visitor-ip-city"],
        "visitor-ip-region": requestHeaders["x-visitor-ip-region"],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
        error: JSON.stringify(error),
      }),
      { status: 500 }
    );
  }
}
