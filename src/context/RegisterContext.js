import React, {createContext, useReducer} from "react"

export const RegisterContext = createRegisterContext(null)
export const RegisterDispatchContext = createRegisterContext(null)

const initialState = {
    username: "",
    password: "",
    isAuth: false,
    message: "Please Log In"

}

export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initialState)

    return (
        <LoginContext.Provider value ={login}>
            <LoginDispatchContext.Provider value ={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginContext.Provider>
    )
}

const loginReducer = (login, action)=>{
    switch (action.type){
        case "LOGIN":
            return {
                ...action.data,
                isAuth:true
            }
           

        case "LOGOUT":
            return ({
                username: "",
                password: "",
                isAuth: false,
                message: "User Logged Out.  Please Log In!"
            })
        default : 
            return login
    }
}