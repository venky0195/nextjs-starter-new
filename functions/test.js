export default function handler(req, res) {
    const startTimeHeader = req.headers["x-start-time"];
    let latency = null;
  
    if (startTimeHeader) {
      const start = parseInt(startTimeHeader, 10);
      latency = Date.now() - start;
      console.log(`Latency from edge to cloud function: ${latency} ms`);
    } else {
      console.log("x-start-time header not found");
    }
  
    res.status(200).json({ message: "helloworld!", latency: latency ? `${latency} ms` : "unknown" });
  }
  