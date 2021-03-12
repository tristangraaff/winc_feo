const showDataWhenReady = async () => {
  console.log("Yo")
  const data = await getData();
  console.log("Ready!" + data);
}

showDataWhenReady();