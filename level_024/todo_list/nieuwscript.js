let taskArray = []; 

const makeListItem = async () => {
    const data = await getData();
    await console.log(data);
    await data.forEach(object => {
        if (!(taskArray.includes(object.description))) { 
            //taskObj["task"] = object.description;
            //taskObj["id"] = object._id;                                               
            taskArray.push(object.description);                   
        };
    });
    await console.log(taskArray);
    await taskArray.sort();
    await taskArray.forEach(task => {
             const li = document.createElement("li");
             const img = document.createElement("img");
             img.classList.add("trashcan");
             img.src = "trash.png";
             img.width = "20";
             li.innerHTML = task;
             const taskList = document.getElementById("task-list");
             li.appendChild(img);
             taskList.appendChild(li);
    });
    await deleteListItem();
};

const addInitialDataToDom = (async () => {
    await postData();
    await makeListItem();
});

const addNewDataToDom = async () => {
    await document.getElementById("add-button").addEventListener("click", async () => {
        const newTask = await document.getElementById("input").value;
        await updateData(newTask);
        const data = await getData();
        await console.log(data);
        await data.forEach(object => {
            if (!(taskArray.includes(object.description))) {          
                taskArray.push(object.description);                   
            };
        });
        await console.log(taskArray);
        await taskArray.sort();
        await taskArray.forEach(task => {
                if (task === newTask) {
                    const li = document.createElement("li");
                    const img = document.createElement("img");
                    img.classList.add("trashcan");
                    img.src = "trash.png";
                    img.width = "20";
                    li.innerHTML = task;
                    const taskList = document.getElementById("task-list");
                    li.appendChild(img);
                    taskList.appendChild(li);
                };    
        });
    });
};

const deleteListItem = async () => {
    const classes = document.querySelectorAll(".trashcan");
    await classes.forEach(element => {
        element.addEventListener("click", (event) => {
            console.log(event.target);
           const button = event.target;
           button.parentNode.parentNode.removeChild(button.parentNode);
        });
    });
};

const exeAllFunctionsInOrder = (async () => {
    await addInitialDataToDom();
    await addNewDataToDom();
})();


