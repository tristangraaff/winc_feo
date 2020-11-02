const showDataWhenReady = async function () {
    const data = await getData();
    console.log("The data is ready ", data);
}

showDataWhenReady();

