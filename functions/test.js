export default function handlers(req, res) {
    console.log("process.env",process.env)
    console.log("This is a console")

    
    res
    .status(200)
    .json({ message: "helloworld!" })
}
