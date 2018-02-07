const APIURL = 'https://todo-api-mernstack.herokuapp.com/api/todos';

export async function getTodos() {
  return fetch(APIURL)
  .then(response => {
    if(!response.ok) {
      if(response.status >= 400 && response.status < 500) {
        return response.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is not responding.'};
        throw err;
      }
    }
    return response.json();
  })
}

export async function createTodo(value) {
  return fetch(APIURL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({name: value})
  })
  .then(response => {
    if(!response.ok) {
      if(response.status >= 400 && response.status < 500) {
        return response.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is not responding.'};
        throw err;
      }
    }
    return response.json();
  })
}

export async function removeTodo(id) {
  const deleteURL = APIURL + '/' + id;
  return fetch(deleteURL, {
    method: 'DELETE'
  })
  .then(response => {
    if(!response.ok) {
      if(response.status >= 400 && response.status < 500) {
        return response.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is not responding.'};
        throw err;
      }
    }
    return response.json();
  })
}

export async function updateTodo(todo) {
  const updateURL = APIURL + '/' + todo._id;
  return fetch(updateURL, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({completed: !todo.completed})
  })
  .then(response => {
    if(!response.ok) {
      if(response.status >= 400 && response.status < 500) {
        return response.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is not responding.'};
        throw err;
      }
    }
    return response.json();
  })
}
