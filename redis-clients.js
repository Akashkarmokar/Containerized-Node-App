const Redis = require('ioredis')

class RedisGeneralChannel {
    constructor(){
        try{
            this.redis = new Redis({
                host: 'redis',
                port: 6379
            })
        }catch(err){
            console.log("Error : ", err)
            return null
        }
        
    }
}



module.exports = {
    RedisGeneralChannel : new RedisGeneralChannel()
}