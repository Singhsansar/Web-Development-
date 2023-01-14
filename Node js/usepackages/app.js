const _ = require('loadsh')

const items = [1,[2,[3,[4,[5]]]]]
const newitems = _.flattenDeep(items) //returns a clean array out of the messed ones 
console.log(newitems)