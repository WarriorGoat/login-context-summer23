import Axios from "../lib/Axios"


const errorHandler = async(dispatch, error) =>{
    dispatch({
        type: "ERROR",
        payload: error
    })
}

export const fetchLogin = async(dispatch, userData) => {
    try{
        console.log("---------user data--------")
        console.log (userData)

        let response = await Axios.post('/users/login', userData)
        console.log("---------response--------")
        console.log (response.data)

        dispatch({
            type: "LOGIN",
            data: response.data
          })
    }
    catch(error){
        errorHandler(dispatch, error)
    }
    
}

export const fetchRegister = async(dispatch, userData) => {
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
        errorHandler(dispatch, error)
    }
    
}

