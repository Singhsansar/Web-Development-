// import * as os from './math'
// console.log(os.add(10,20))

//Importing os module is like importing os class 
const os = require('os') 
const math = require('math')
// console.log(math)

//info about current user , it work even in the local system returning own system info 
const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds , means from how much time your system is running
console.log(`System uptime is : ${os.uptime} seconds`)

const currentos =
{
    name:os.type(),
    release: os.release(),
    total_mem:os.totalmem(),
    free_mem:os.freemem(),
}
console.log(currentos)