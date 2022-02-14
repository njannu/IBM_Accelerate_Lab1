import React from 'react';
showTasks();
addBtn.onclick = ()=> {
    let userEnteredValue = inputBox.value;
    let getLocalStrorageData = localStorage.getItem("New Todo");
    if (getLocalStrorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStrorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
}
function showTasks(){
    let getLocalStrorageData = localStorage.getItem("New Todo");
    if(getLocalStrorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStrorageData);
    }
    const pendingTaskNumb = document.querySelector(".pendingTask");
    pendingTaskNumb.textContent = listArray.length;
    if(listArray.length > 0){
        deleteAllBtn.classList.remove("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.forEach((Element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

export default Tasks
