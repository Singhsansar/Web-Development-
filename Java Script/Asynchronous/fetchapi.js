/* // working with the fetch Method

// get all the data from API

// fetch web API 

const gitApi = fetch('https://api.github.com/users/andrew')

gitApi.then((res)=>res.json()).then((profile)=>console.log(profile))
.catch((err)=>console.log(err))

console.log(gitApi)

*/

async function getInfofromgit()
{
    const res =await fetch('https://api.github.com/users/andrew')

    const profile =await res.json()

    console.log(profile)
}

getInfofromgit()