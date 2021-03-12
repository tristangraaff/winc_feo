const createListItems = (array) => {
  document.getElementById("task-list").innerHTML = ""; 
  array.forEach(task => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.classList.add("trashcan");
    img.src = "trash.png";
    img.width = "20";
    li.id = task._id;
    p.innerHTML = task.description;
    const taskList = document.getElementById("task-list");
    li.appendChild(p);
    li.appendChild(img);
    taskList.appendChild(li);
  });
};

const addApiDataToDom = async () => {
  const tasks = await getData();
  createListItems(tasks);
};

addApiDataToDom();

const addTask = () => {
  document.getElementById("add-button").addEventListener("click", async () => {
    const data = {description: document.getElementById("input").value, done: false};
    await postData(data);
    await addApiDataToDom();
    });
};

addTask();

const deleteTask = () => {
  document.getElementById("task-list").addEventListener("click", async e => {
    if (e.target.classList.value === "trashcan") {
      console.log(e.target.parentElement.id);
      await deleteData(e.target.parentElement.id);
      addApiDataToDom();
    }
  });
};

deleteTask();
