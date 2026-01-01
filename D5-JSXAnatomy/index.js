const getApi = async () => {
  const api = await fetch("https://dogapi.dog/api/v2/breeds");
  // console.log(api);
  const data = await api.json()
  console.log(data.data.id);
};

getApi();