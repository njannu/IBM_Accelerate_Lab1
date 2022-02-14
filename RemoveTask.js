import React from 'react';
import { Delete } from '@material-ui/icons';

const RemoveTask = (deleteTodo) => {
    return (
        <div>
            const deleteTodo=(id)= {
                setTodos(todos.filter(todo => todo.id !== id))
            }

            <IconButton style={{float: "right"}} onClick={delTodo}>
                <Delete style={{ color: "red" }}/>
            </IconButton>
        </div>
        
    )
}


export default RemoveTask;
