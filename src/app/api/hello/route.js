export async function GET(req) {
  try {
    console.log("in api route");
    const requestHeaders = Object.fromEntries(req.headers.entries());
    console.log("req headers from Next.js API route -->", requestHeaders);

    return new Response(
      JSON.stringify({
        message: "helloworld@!",
        headers: requestHeaders,
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
