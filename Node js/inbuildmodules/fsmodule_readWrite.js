const {readFileSync,writeFileSync,appendFileSync}=require('fs')

//initially files are visiable in the hexadecimal , so encoding must be applied 
const first_file = readFileSync("inbuildmodules/write.txt",'utf8')
const second_file = readFileSync("inbuildmodules/write.txt",'utf8')
console.log(first_file)
console.log(second_file)

let text = "initially files are visiable in the hexadecimal , so encoding must be applied "
// text to be written will be passed as an another arguement
writeFileSync('inbuildmodules/write.txt',` its working ${text}`,

//if flag:a , then the file start appending the contents
{flag:'a'})

console.log('done with this task')
console.log('starting a newtask')
