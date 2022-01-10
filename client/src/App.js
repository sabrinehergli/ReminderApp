import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {Jumbotron,Button,Form} from "react-bootstrap"
import {useEffect,useState} from "react"
import UpdateTask from './components/UpadateTask';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from'./components/Register';
import {getTasks,deleteTasks,addTasks,auth} from './actions/index'
import {Switch,Link,Route, Redirect} from 'react-router-dom'
function App() {
  const tasks=useSelector(state=>state.reducer.tasks)
  const loading=useSelector(state=>state.reducer.loading)
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const [newTask, setNewTask] = useState('')
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(auth())
    dispatch(getTasks())
  }, [dispatch])

  const funcDel=(id)=>{
    dispatch(deleteTasks(id))
  }

  const funcAdd=()=>{
    if(newTask.trim())
    dispatch(addTasks(newTask))
  }

  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path='/'>
          <Register/>
      </Route>
      <Route path='/login'>
          {isAuth?<Redirect  to ='/main'/>:<div>
          <Login/>
          
          </div>}
          </Route>
     
          {isAuth?<Route path='/main' render={()=>
        <div>     
                          <div>
                <h2 style={{textAlign:'center'}}>To Do List</h2>
                </div>
                <div className='frm'>
                <Form.Control style={{width: "50%",margin:'5px'}} type="text" placeholder="task description" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                <Button variant="secondary" onClick={funcAdd}>Add</Button>
                </div>
      {loading?<h1>Loading</h1>:tasks.map(task=>{
              return(
                  <div className='container' key={task._id}>
                  <Jumbotron>
                    <h3>Task Description:</h3>
                    <div className='task'>
                    <span>{task.name}</span>
                    <div className='all'>
                    <Button variant="danger" className='btns' onClick={()=>funcDel(task._id)}>Delete</Button>
                    <UpdateTask id={task._id} name={task.name}></UpdateTask>
                    </div>
                  </div>
                  </Jumbotron>
                </div>
              )
      })}
        
        </div>}> 
   
    </Route>
      :
      <Redirect to='/login'/>
      }
     

      </Switch>
     
     

    </div>
  );
}

export default App;
