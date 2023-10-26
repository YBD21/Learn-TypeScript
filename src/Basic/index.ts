import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// type of information that exist 
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((respond) => {
  const todo = respond.data as Todo; // compare with interface todo
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id,title,completed)

});

const logTodo = (id : number ,title : string,completed : boolean) => {
    console.log(` The Todo With ID : ${id}`);
} 
