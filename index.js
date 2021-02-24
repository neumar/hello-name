const express = require("express")
const app = express()

const port =  process.env.PORT || 3000

app.get('/', (req, res) => {
    return res.send("server is up")
})

app.get('/hello/:name', (req, res) => {
    return res.send("Oi "+req.params.name+ " !")
})

app.listen(port, () => {
    console.log("server is listening at port "+ port)
})
