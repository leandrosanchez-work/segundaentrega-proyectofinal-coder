const express = require('express')
const router = require('./router/router.js')
const app = express()
app.use(express.json())

dotenv.config()

app.use('/api' , router)

app.use(express.urlencoded({extended:true}))
app.use(express.static('assets'))

if(process.env.TIPO == ) 

app.listen(8080, ()=> {
    console.log("corriendo")
})
