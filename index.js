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

const addBtn = document.getElementById("add-btn").addEventListener("click", function () {
    /* read form value, add task to the array first */
    const taskElem = document.createElement("li")
    // const textnode = document.createTextNode("Water");
    // const textnode = `Task ${tasks[0].id}: ${tasks[0].title}. Status: ${tasks[0].status}`
    const textnode = document.getElementById("title").value
    const datenode = document.getElementById("date").value
    const statusnode = document.getElementById("status").value
    const addDeleteBtn = document.createElement("button")
    addDeleteBtn.innerText = "Delete"
    const addEditBtn = document.createElement("button")
    addEditBtn.innerText = "Edit"
    
// Append the text node to the "li" node:
    // taskElem.appendChild(textnode);
    taskElem.innerText = `Task ${textnode}: Deadline: ${datenode}. Status: ${statusnode}.`
    taskElem.appendChild(addDeleteBtn)
    taskElem.appendChild(addEditBtn)

// Append the "li" node to the list:
    document.getElementById("task-container").appendChild(taskElem);
    addDeleteBtn.addEventListener("click", deleteBtn(taskElem))
    

    // addDeleteBtn(taskElem)
    // addEditBtn(taskElem)
    // taskElem.innerText = `Task ${tasks[0].id}: ${tasks[0].title}. Status: ${tasks[0].status}`
    // taskElem.appendChild(editBtn)
    // taskElem.appendChild(deleteBtn)
    // taskContainer.appendChild(taskElem)
    // const newtask = readForm()
    // return taskContainer
})

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







