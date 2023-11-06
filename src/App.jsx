import { useState } from "react";

function App() {
    const initialState = { id: 0, title: "", body: "", isDone: false };
    const [todoTitle, setTodoTitle] = useState("");
    const [todoContent, setTodoContent] = useState("");
    const [todos, setTodos] = useState([initialState]);
    let idNum = 0;

    const addButtonHandler = (e) => {
        if (todoTitle === "" || todoContent === "") {
            alert("내용을 입력해주세요!");
        } else {
            e.preventDefault();
            console.log("todos.id", todos[idNum].id);
            const newTodo = {
                id: todos[idNum].id + 1,
                title: todoTitle,
                content: todoContent,
                isDone: false,
            };
            idNum++;
            console.log("todos.id", todos[idNum].id);
            console.log(newTodo);
            setTodos([...todos, newTodo]);

            // 인풋 초기화
            setTodoTitle("");
            setTodoContent("");
        }
    };

    const addWorkingCard = () => {
        todos.map(function (todo) {});
    };

    const changeState = (todo) => {
        // console.log(todo);
    };

    const lolo = todos.map((todo) => (
        <li key={todo.id} id={todo.id} className="todoCard">
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button className="TodoRemove">삭제하기</button>
            <button className="TodoIsdone" onClick={changeState(todo)}>
                {todo.isDone ? "완료 취소" : "완료"}
            </button>
        </li>
    ));

    return (
        <div className="layout">
            <header>
                <h1>
                    <a href="#" rel="noopener noreferrer">
                        Todo List
                    </a>
                </h1>
            </header>
            <main>
                <form onSubmit={addButtonHandler}>
                    <label>제목</label>
                    <input
                        type="text"
                        value={todoTitle}
                        onChange={(e) => setTodoTitle(e.target.value)}
                        placeholder="제목을 입력해 보세요"
                    />
                    <label>내용</label>
                    <textarea
                        className="content"
                        type="text"
                        value={todoContent}
                        onChange={(e) => setTodoContent(e.target.value)}
                        placeholder="내용을 입력해 보세요"
                    ></textarea>

                    <button type="submit">추가하기</button>
                </form>
                <div className="list">
                    <div className="todo cardList">
                        <h2>Working</h2>
                        <ul className="todoList">{lolo}</ul>
                    </div>
                    <div className="done cardList">
                        <h2>Done</h2>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
