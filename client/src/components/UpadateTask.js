import {useState} from "react"
import {Modal,Button,Form} from "react-bootstrap"
import {useDispatch} from "react-redux"
import { updateTasks } from "../actions/index"
const UpdateTask=({id,name})=>{
const dispatch=useDispatch()
const [newname, setNewname] = useState(name)
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const updateFunc=()=>{
  if(newname.trim()){
    dispatch(updateTasks(id,newname))
    handleClose()
  }
}
    return(
        <div>
        <Button variant="success" onClick={handleShow}>
        Update
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task description</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form.Control type="text" value={newname} onChange={e=>setNewname(e.target.value)}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateFunc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )

}

export default UpdateTask;