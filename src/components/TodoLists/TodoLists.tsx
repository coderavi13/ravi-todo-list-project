import ListItem from "../ListItem/ListItem";
import { useState } from "react";
function TodoLists() {
  const handleSaveChanges = (id: number, taskDetail: string) => {
    let curr = [...tasksList];
    curr.forEach((task) => {
      if (task.id == id) {
        task.task = taskDetail;
      }
    });
    setTaskList(curr);
  };

  const handleDeleteItem = (id: number) => {
    let curr = tasksList.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    setTaskList(curr);
  };

  const [tasksList, setTaskList] = useState([
    {
      task: "Task 1",
      id: 1,
      isDone: false,
    },
    {
      task: "Task 2",
      id: 2,
      isDone: false,
    },
    {
      task: "Task 3",
      id: 3,
      isDone: false,
    },
    {
      task: "Task 4",
      id: 4,
      isDone: false,
    },
  ]);
  return (
    <>
      {tasksList.map((taskItem) => {
        return (
          <ListItem
            taskItem={taskItem}
            key={taskItem.id}
            handleSaveChanges={handleSaveChanges}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </>
  );
}

export default TodoLists;
