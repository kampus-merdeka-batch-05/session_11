function deleteTodos(todoId) {

  return $.ajax({
    method: "DELETE",
    url: "/todos/"+ todoId,
    contentType: "application/json",

    success: () => {
      location.reload()
    },

    error: (err) => {
      console.log(err);
    }
  })  
}

function updateTodos(todoId) {
  
  return $.ajax({
    method: "PUT",
    url: "/todos/"+todoId,
    contentType: "application/json",

    cache: false,
    
    error: (err) => {
      console.log(err);
    }

  })
}
