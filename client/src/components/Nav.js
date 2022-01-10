import React from 'react'
import { Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
const Nav = () => {
    const dispatch = useDispatch()
    const logoutFunc=()=>{
        localStorage.removeItem('token');
        dispatch({type:'logout'})
    }
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Reminder App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/" onClick={logoutFunc}>Log Out</Link>
                        <Link to='/login' style={{margin:10}}>Sign in</Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav