const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
const port = process.env.PORT || 5000

const email = "kipson@example.com"
const password = "kipson123"


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res)
{
    if(req.body.email === email && req.body.password === password)
    {
        res.send(true)
    }

    else{
        res.send(false)
    }

})

app.listen(port,function(){
    console.log(`Server Started on port ${port}.....`)
})
