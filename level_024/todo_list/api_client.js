const getData = async function () {
    try{
        const apiUrl = `https://jsonbox.io/box_149e1841594e257b6901`;
        const res = await fetch (apiUrl, {method: "GET"});
        const convertedRes = await res.json();
        return convertedRes;
    } catch (error) {
        console.log(error);
    };
};

const postData = async () => {
    const data = [{description: "buy oatmeal", done: false}, {description: "clean room", done: false}, {description: "finish to-do list", done: false}];
    await fetch(`https://jsonbox.io/box_149e1841594e257b6901`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const updateData = async (userInput) => {
    const data = [{description: userInput, done: false}];
    await fetch(`https://jsonbox.io/box_149e1841594e257b6901`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deleteData = async () => {
    const data = [{description: userInput, done: false}];
    await fetch(`https://jsonbox.io/box_149e1841594e257b6901`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

