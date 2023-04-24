// // DOM give you access to
// /* READ content
//  * Modify attribute
//  * Modify behaviour
//  */

const taskContainer = document.getElementById("task-container");
const title = document.getElementById("title");
const status = document.getElementById("status");
const date = document.getElementById("date");

let tasks = [];

  

  const addBtn = document.getElementById("add-btn").addEventListener("click", function () {

    const taskElem = document.createElement("li");
    const textnode = document.getElementById("title").value;
    const datenode = document.getElementById("date").value;
    const statusnode = document.getElementById("status").value;

    const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const saveBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
//   taskElem.appendChild(deleteBtn);
  editBtn.innerText = "Edit";
//   taskElem.appendChild(editBtn);
//   taskElem.appendChild(saveBtn);
  saveBtn.innerText = "Save";
  saveBtn.style.display = "none";
    // read form value, add task to the array first
  // create task object and add to tasks array
  const task = {
    id: tasks.length + 1,
    title: textnode,
    date: datenode,
    status: statusnode,
  };
  tasks.push(task);

  // create task element with delete & edit button
  taskElem.innerText = `Title ${task.title}: Deadline: ${task.date}. Status: ${task.status}.`;
  taskElem.appendChild(deleteBtn)
  taskElem.appendChild(editBtn)
  taskElem.appendChild(saveBtn)

  // add task element to DOM
  taskContainer.appendChild(taskElem);

  // add event listener to delete button
  deleteBtn.addEventListener("click", function () {
    // remove task from array
    tasks.splice(task.id - 1, 1);
    // remove task element from DOM
    if (confirm("Are you sure you want to delete this task?")) {
        taskElem.remove();
      }
  });

  // add event listener to edit button
  editBtn.addEventListener("click", function () {
    // update form values with task details
    title.value = task.title;
    date.value = task.date;
    status.value = task.status;

    // hide edit button and show save button
    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";

    // save the edited task
      saveBtn.addEventListener("click", function () {
      task.title = title.value;
      task.date = date.value;
      task.status = status.value;

      // update task element text
      taskElem.innerText = `Title ${task.title}: Deadline: ${task.date}. Status: ${task.status}.`;

      saveBtn.style.display = "none";
      editBtn.style.display = "inline-block";
      taskElem.appendChild(deleteBtn)
      taskElem.appendChild(editBtn)
      taskElem.appendChild(saveBtn)

      // hide save button and show add button
    //   saveBtn.style.display = "none";
    });
  });
});
