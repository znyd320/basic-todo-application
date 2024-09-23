import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [runningTodo, setRunningTodo] = useState([
    {
      content: "Learn React",
      id: Math.random().toString(),
    },
  ]);

  const [completedTodo, setCompletedTodo] = useState([
    {
      content: "Learn PHP",
      id: Math.random().toString(),
    },
  ]);

  function handleCompleteTodo(id) {
    let selectedTodo = runningTodo.find((todo) => todo.id === id);
    let filteredTodo = runningTodo.filter((todo) => todo.id !== id);
    setRunningTodo(filteredTodo);
    setCompletedTodo([...completedTodo, selectedTodo]);
  }

  function handleAddTodo() {
    
    if(inputValue === "Learn") {
      alert("Please Enter A Valid Todo")

    }else if (inputValue !== "") {
      let payload = {
        content: inputValue,
        id: Math.random().toString(),
      };
      setInputValue("");

      setRunningTodo([...runningTodo, payload]);

    }else {
      alert("Please Enter A Todo")
    }
  }

  return (
    <>
      <div
        style={{
          height: "50px",
          width: "500px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="todo-make-container"
      >
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          style={{ flexGrow: 1 }}
          type="text"
          placeholder="Add Todo"
        />

        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div
        style={{
          height: "200px",
          width: "500px",
          border: "1px solid black",
        }}
        className="running-todo-container"
      >
        <span className="title">Running Todo</span>

        <ul>
          {runningTodo.map((todo) => {
            return (
              <li>
                <button onClick={() => handleCompleteTodo(todo.id)}>
                  Done
                </button>
                <span> {todo.content}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          height: "200px",
          width: "500px",
          border: "1px solid black",
        }}
        className="completed-todo-container"
      >
        <span className="title">Completed Todo</span>

        <ul>
          {completedTodo.map((todo) => {
            return <li>{todo.content}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
