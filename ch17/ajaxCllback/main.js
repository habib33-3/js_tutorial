const getRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open("get", url);

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };

  xhr.send();
};

getRequest("https://jsonplaceholder.typicode.com/users", (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
