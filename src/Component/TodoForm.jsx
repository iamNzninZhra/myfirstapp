/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Button from "./Button";

const TodoForm = () => {
    const [todos, setTodos] = useState([
        { Title: "Task 1", Importance: "Importance 1", completed: false },
        { Title: "Task 2", Importance: "Importance 2", completed: false },
        { Title: "Task 3", Importance: "Importance 3", completed: false },
        { Title: "Task 4", Importance: "Importance 4", completed: false },
        { Title: "Task 5", Importance: "Importance 5", completed: false },
        { Title: "Task 6", Importance: "Importance 6", completed: false },
        { Title: "Task 7", Importance: "Importance 7", completed: false },
        { Title: "Task 8", Importance: "Importance 8", completed: false },
    ]);
    
    // delete button
    const [deletedTodos, setDeletedTodos] = useState([]);

    // complete and not complete buttons
    const handleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    // delete button
    const handleDelete = (index) => {
        const deletedTodo = todos.splice(index, 1);
        setDeletedTodos([...deletedTodos, deletedTodo[0]]);
    };

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "80%",
                height: "100%",
                margin: "10px auto",
            }}>
                <h3 style={{
                    borderBottom: "1px solid black",
                }}>
                    My Todo List
                </h3>


                <input type="text" placeholder="Add Your Task" style={{
                    position: "absolute",
                    top: "30px",
                    left: "160px",
                    height: "30px",
                    width: "150px",
                    border: "1px solid #000",
                    borderRadius: "5px",
                }} />
                <button style={{
                    position: "absolute",
                    top: "33px",
                    left: "320px",
                    height: "30px",
                    width: "80px",
                    border: "1px solid gray",
                    backgroundColor: "white",
                    borderRadius: "5px",
                }}>
                    Add To List
                </button>
            </div>

            {todos.map((element, index) => (
                <div
                    key={element.Title}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid black",
                        margin: "40px auto 0 auto",
                        width: "50%",
                        height: "80px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                    }}
                >
                    <div
                        style={{
                            textDecoration: element.completed ? "line-through" : "none",
                        }}
                    >
                        {element.Title} - {element.Importance}
                    </div>
                    <Button
                        backgroundColor="green"
                        buttonlable="Completed"
                        borderColor="green"
                        onClick={() => handleCompleted(index)}
                        completed={element.completed}
                    />
                    <Button
                        backgroundColor="red"
                        buttonlable="Not Completed"
                        borderColor="red"
                        onClick={() => handleCompleted(index)}
                        completed={!element.completed}
                    />
                    <Button borderColor="#F5E8DD" backgroundColor="#F6F5F5" buttonlable="Delete" onClick={() => handleDelete(index)} />
                    <div style={{ marginLeft: "20px" }}>
                        Date: / /
                    </div>
                </div>
            ))}
        </>
    );
};

export default TodoForm;