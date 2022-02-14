import React from 'react';

const CheckBox = ({deleteTodo, todoForms}) =>{
    <div>
        <label>CheckBox</label>
        <input type ='checkbox'
        checked={deleteTodo}
        value={deleteTodo}
        onChange={(e) => todoForms(e.currentTarget.checked)} />
    </div>
    }
    export default CheckBox;
