const apiUrl = "http://localhost:3000/";

const getData = async () => {
  try {
    const res = await fetch (apiUrl, {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    });
    const convRes = await res.json();
    await console.log(convRes);
    return await convRes;
  } catch (error) {
    console.log(error)
  }
};

const postData = async (data) => {
  try {
    const res = await fetch (apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    });
    const convRes = await res.json();
    console.log(convRes)
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (id) => {
  const res = await fetch(apiUrl + id, {
    method: "DELETE",
    headers: {'Content-Type': 'application/json'}
  });
  console.log(res);
};

const deleteAllData = async () => {
  const list = await getData();
  console.log(list);
  list.forEach(item => {
    deleteData(item._id);
  })
};




