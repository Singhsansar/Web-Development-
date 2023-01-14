
const path = require('path');

//returns the seperator that is using in ths pc , or say os at that time 
console.log(path.sep)

//joints the path that is it will join the path, so that we can manipulate it 

// joined-all the paths we have provided to the os.join() sequencally 
const o_path = path.join('/home/singh/Desktop/','Java Script/Node js','/inbuildmodules')
console.log(o_path)

//base name is the final location where the path is following to 
console.log(path.basename(o_path))

//simply joins the path
console.log(path.resolve(__dirname,'/home/singh/Desktop/','inbuildmodules'))
console.log(path.isAbsolute(o_path))