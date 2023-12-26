const express = require('express')
const { RedisGeneralChannel } = require('./redis-clients.js')
const app = express()
const APP_PORT = process.env.APP_PORT || 8000;

app.use(express.json())
app.get('/', async (req,res, next) => {
    const { key_name = 'Test' } = req.query
    const data = await RedisGeneralChannel.redis.get(key_name)
    return res.status(200).json({
        message:"MSG",
        data
    })
})

app.post('/', async (req,res,next) => {
    const { key , value } = req.body
    const CacheData = await RedisGeneralChannel.redis.set(key, value)
    return res.status(200).json({
        message: "MSG",
    })
})

app.listen(APP_PORT, ()=> {
    console.log(`Server is listening on port : ${APP_PORT}`)
})