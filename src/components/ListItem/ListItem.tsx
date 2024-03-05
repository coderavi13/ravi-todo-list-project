import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { SyntheticEvent } from "react";
import "./ListItem.css";
function ListItem(props: any) {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [task, setTask] = useState(props.taskItem.task);
  const [checked, setChecked] = useState(false);
  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleDiscardChange = () => {
    setIsReadOnly(true);
    setTask(props.taskItem.task);
  };
  const handleCheckboxChange = (e) => {
    console.log(e.target.value);
    setChecked(!checked);
  };
  return (
    <>
      <div className="list-item">
        <input
          className="me-4 cursorPointer form-check-input"
          type="checkbox"
          value={props.taskItem.id}
          checked={checked}
          id="flexCheckDefault"
          onChange={(e) => handleCheckboxChange(e)}
        />
        <input
          className="me-4 cursorPointer"
          readOnly={isReadOnly}
          value={task}
          onChange={handleChange}
        />
        <FaEdit
          className="me-4 cursorPointer"
          color="blue"
          title="Edit"
          onClick={() => {
            setIsReadOnly(false);
          }}
        />
        <FaTimes
          className="me-4 cursorPointer"
          title="Discard Changes"
          color="red"
          onClick={() => {
            handleDiscardChange();
          }}
        />
        <FaCheck
          className="me-4 cursorPointer"
          title="Save Changes"
          color="green"
          onClick={() => {
            props.handleSaveChanges(props.taskItem.id, task);
          }}
        />
        <FaTrashAlt
          className="me-4 "
          title="Delete"
          color="red"
          cursor="pointer"
          onClick={() => {
            props.handleDeleteItem(props.taskItem.id);
          }}
        />
      </div>
    </>
  );
}

export default ListItem;
