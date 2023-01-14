//  @import {"sayhi"} as fun from modules 

//local
const secret = 'Super Secret'

// share
const john = "john"

//Global
const peter = 'peter'

//shared with other classes, module.exports , not export , export will not export the functions 
module.exports = {john,peter}