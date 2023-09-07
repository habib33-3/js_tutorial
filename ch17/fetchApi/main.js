const BASE_URL = "https://jsonplaceholder.typicode.com";

fetch(`${BASE_URL}/users/1`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
