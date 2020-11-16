const getData = async function () {
  try{
      const apiUrl = `https://jsonbox.io/box_149e1841594e257b6901`;
      const res = await fetch (apiUrl, {method: "GET"});
      console.log(res);
      const convertedRes = await res.json();
      await convertedRes.splice(1);
      await  console.log(convertedRes);
      const addToDom = () => {
        convertedRes.forEach(element => {
          const logres = document.getElementById("logres");
          const p = document.createElement("p");
          const pContent = document.createTextNode(element);
          p.appendChild(pContent);
          logres.appendChild(p);
        });
      };
      await addToDom();
      return convertedRes;
  } catch (error) {
      console.log(error);
  };
};

const postData = () => {
  const data = {description: "buy oatmeal", done: false};
  fetch(`https://jsonbox.io/box_149e1841594e257b6901`, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
});
};

const processAllData = (async () => {
await postData();
await getData();
})();