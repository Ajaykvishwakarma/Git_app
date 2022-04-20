async function getUser(user){

    try{
        let response = await fetch(`https://api.github.com/users/${user}`)

        let data = await response.json()
        console.log(data)
        return data

        
    }
    catch(err){
        console.log(err)
    }


}

export default getUser