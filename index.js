// DOM give you access to
/* READ content
 * Modify attribute
 * Modify behaviour
 */

let tasks = []

const taskContainer = document.getElementById("task-container")
const title = document.getElementById("title")
const status = document.getElementById("status")
const date = document.getElementById("date")

// const addBtn = document.getElementById("add-btn").addEventListener("click", function () {
//     /* read form value, add task to the array first */
//     const taskElem = document.createElement("li")
//     const textnode = document.getElementById("title").value
//     const datenode = document.getElementById("date").value
//     const statusnode = document.getElementById("status").value
//     const addEditBtn = document.createElement("button")
    // addEditBtn.innerText = "Edit"
    // const addDeleteBtn = document.createElement("button")
    // addDeleteBtn.innerText = "Delete"
    
    const addBtn = document.getElementById("add-btn").addEventListener("click", function () {
        // read form value, add task to the array first
        const taskElem = document.createElement("li");
        const textnode = document.getElementById("title").value;
        const datenode = document.getElementById("date").value;
        const statusnode = document.getElementById("status").value;
    
        // create task object and add to tasks array
            const task = {
            id: tasks.length + 1,
            title: textnode,
            date: datenode,
            status: statusnode,
        };
        tasks.push(task);
    
        // create task element with delete button
        taskElem.innerText = `Task ${task.id}: Deadline: ${task.date}. Status: ${task.status}.`;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        taskElem.appendChild(deleteBtn);
    
        // add task element to DOM
        taskContainer.appendChild(taskElem);
    
        // add event listener to delete button
        deleteBtn.addEventListener("click", function () {
            // remove task from array
            tasks.splice(task.id - 1, 1);
    
            // remove task element from DOM
            // taskElem.remove();
            deleteBtn.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this task?")) {
                //   taskContainer.removeChild(taskElem);
                taskElem.remove();
                }
              });
        });
    });
    




function deleteBtn(taskElem) {
    console.log(taskElem)
    // const deleteBtn = document.createElement("button")
    // deleteBtn.innerText = "Delete"
    // deleteBtn.addEventListener("click", function () {

    // })
}

function editBtn(taskElem) {
    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    editBtn.addEventListener("click", function () {
        
    })
}

function readForm() {
    const titleValue = title.value
    const statusValue = status.value
    const datevalue = date.value
    return {
        id: tasks[-1].id + 1,
        title: titleValue,
        status: statusValue,
        deadline: datevalue
    }
}

function createElement() {

}







