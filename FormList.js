import React from "react";
import Form from "./Form"

const FormList = ({ todoforms, deleteTodo }) => {
    return (
        <div>
            {todoforms.map(todoform => (
                <Form key={todoform.id} todoforms={todoform.title} deleteTodo={deleteTodo} id={todoform.id} />

            ))}
        </div>
    );
};

export default FormList
