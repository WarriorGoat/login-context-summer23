import React, {createContext, useReducer} from "react"

export const LoginContext = createContext(null)
export const LoginDispatchContext = createContext(null)

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
            console.log(action.data)
            if (action.data.password === "123456"){
                return {
                    username: action.data.username,
                    password: action.data.password,
                    isAuth: true,
                    message: "Welcome " + action.data.username
                }
            } else{
                return {
                    username: action.data.username,
                    isAuth: false,
                    message: "User Not Authorized!"
                }
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