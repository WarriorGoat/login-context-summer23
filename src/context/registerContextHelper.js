import Axios from "../lib/Axios"

const fetchRegister = async(dispatch, userData) => {
    try{
        console.log("---------user data--------")
        console.log (userData)

        let response = await Axios.post('/users/register', userData)
        console.log("---------response--------")
        console.log (response.data)

        dispatch({
            type: "REGISTER",
            data: response.data
          })
    }
    catch(error){
        throw new Error(error)
    }
    
}

export default fetchRegister