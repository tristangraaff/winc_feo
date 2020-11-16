const addDataToDom = async () => {
    const data = await getData();
    //await data.splice(4);
    await console.log(data);
    // let taskObj = {};
    // await data.forEach(element => {
    //     const task = element.description;
    //     if (!(task in taskObj)){
    //         taskObj = taskObj + task;
    //     };
    //     console.log(taskObj);
    // });
    // let taskElements = [];
    // for (let i = 0; i < data.length; i++) {
    //     if (!(data[i].description in taskElements)) {
    //         taskElements.push(data[i].description);
    //         const li = document.createElement("li");
    //         const img = document.createElement("img");
    //         img.src = "trash.png";
    //         img.width = "20";
    //         li.innerHTML = data[i].description;
    //         const taskList = document.getElementById("taskList");
    //         taskList.appendChild(li);
    //         taskList.appendChild(img);
    //     };
    // };
    // console.log(taskElements);

    await data.forEach(element => {
        if (!(element.description in data[element])) {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = "trash.png";
            img.width = "20";
            li.innerHTML = element.description;
            const taskList = document.getElementById("taskList");
            taskList.appendChild(li);
            taskList.appendChild(img);
        };       
      });
};

const processAllData = (async () => {
    await postData();
    //await updateData();
    await addDataToDom();
  })();

const updateList = (() => {
    document.getElementById("add-button").addEventListener("click", async () => {
        //const inputText = document.getElementById("input").value;
        await updateData();
        await addDataToDom();
    });
})();


  
