const express = require(`express`)
const cors = require(`cors`)
const path = require(`path`)

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get(`/`, (req,resp)=>{
    resp.status(200).sendFile(__dirname, '../public/index.html')
})





app.listen(4000, console.log(`app running on 4000`))