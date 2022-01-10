import axios from 'axios'
import { Link } from 'react-router-dom'
export const getTasks=()=>async(dispatch)=>{
    try {
        dispatch({type:'getTaskprocess'})
        const res=await axios.get('http://localhost:4000/api/tasks')
        console.log(res.data);
        dispatch({type:'getTasksucceeded',payload:res.data})
    } catch (error) {
        dispatch({type:'getTaskfailed'})
    }

}

export const deleteTasks=(id)=>async(dispatch)=>{
    try {
        dispatch({type:'deleteTaskprocess'})
        await axios.delete(`http://localhost:4000/api/tasks/${id}`)
        dispatch(getTasks())
       
    } catch (error) {
        dispatch({type:'deleteTaskfailed'})
    }

}

export const addTasks=(newname)=>async(dispatch)=>{
    try {
        dispatch({type:'addTaskprocess'})
        await axios.post(`http://localhost:4000/api/tasks`,{name:newname})
        dispatch(getTasks())
    } catch (error) {
        dispatch({type:'addTaskfailed'})
    }

}

export const updateTasks=(id,newname)=>async(dispatch)=>{
    try {
        dispatch({type:'updateTaskprocess'})
        await axios.put(`http://localhost:4000/api/tasks/${id}`,{name:newname})
        dispatch(getTasks())
    } catch (error) {
        dispatch({type:'updateTaskfailed'})
    }

}

export const register=({name,email,password})=>async(dispatch)=>{
    try {
        dispatch({type:'registerprocess'})
        await axios.post('http://localhost:4000/api/users/register',{name,email,password})
        await alert('You can go to sign in')
        dispatch({type:'registersucceeded'})
    } catch (error) {
       alert(error.response.data.msg);
        dispatch({type:'registerfailed',payload:error.response.data.msg})
    }
}

export const login=({email,password})=>async(dispatch)=>{
    try {
        dispatch({type:'loginprocess'})
        const res=await axios.post('http://localhost:4000/api/users/login',{email,password})
        await localStorage.setItem('token', res.data.token);
        dispatch({type:'loginsucceeded'})
    } catch (error) {
       alert(error.response.data.msg);
        dispatch({type:'loginfailed',payload:error.response.data.msg})
    }
}

export const auth=()=>async(dispatch)=>{
    try {
        dispatch({type:'authprocess'})

        const token= await localStorage.getItem('token');
        const res=await axios.get('http://localhost:4000/api/users/auth',
        {
            headers:{'authorization':token}
        })
        
        dispatch({type:'authsucceeded'})
    } catch (error) {
       alert(error.response.data.msg);
        dispatch({type:'authfailed',payload:error.response.data.msg})
    }
}