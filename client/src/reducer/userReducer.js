const initialState={loading:false,isAuth:false}

const userReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case 'registerprocess':
        case 'loginprocess':
        case 'authprocess':
            return({...state,loading:true})
        case 'registersucceeded':
            return({...state,loading:false})
        case 'loginsucceeded':
        case 'authsucceeded':
            return({...state,loading:false,isAuth:true})
        case 'registerfailed':
        case 'loginfailed':
        case 'authfailed':
            return({...state,loading:false,isAuth:false,error:payload})
        case 'logout':
            return({...state,loading:false,isAuth:false})
            
        default:
            return(state)
    }
}

export default userReducer;