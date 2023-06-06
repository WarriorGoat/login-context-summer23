import Axios from "../lib/Axios"

export const fetchLogin = async(dispatch, userData) => {
    try{
        console.log("---------user data--------")
        console.log (userData)

        let response = await Axios.post('/users/login', userData)
        console.log("---------response--------")
        console.log (response.data)

        dispatch({
            type: "LOGIN",
            data: userData
          })
    }
    catch(error){
        console.log(error)
    }
    
}