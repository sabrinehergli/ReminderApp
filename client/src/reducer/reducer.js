const initialState={tasks:[],isLoading:false}
const reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case 'getTaskprocess':
        case 'deleteTaskprocess':
        case 'addTaskprocess':
        case 'updateTaskprocess':
            return ({...state,isLoading:true});
        case 'getTasksucceeded':
            return ({tasks:payload,isLoading:false});
        case 'getTaskfailed':
        case 'deleteTaskfailed':
        case 'addTaskfailed':
        case 'updateTaskfailed':
            return ({...state,isLoading:false});
        default:
            return state;
    }
}

export default reducer;