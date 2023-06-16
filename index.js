// Add your code here
function submitData(name, email) {
  let url = 'http://localhost:3000/users';

  let user = {
    name: name,
    email: email
  };

  let configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  };

  return fetch(url, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let body = document.getElementsByTagName('body')[0];
      let paragraph = document.createElement('p');
      paragraph.textContent = object.id;
      body.appendChild(paragraph);
    })
    .catch(function(error) {
      let body = document.getElementsByTagName('body')[0];
      let paragraph = document.createElement('p');
      paragraph.textContent = error.message;
      body.appendChild(paragraph);
    });
  }
