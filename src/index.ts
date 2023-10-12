import axios from "axios";


const url = 'https://jsonplaceholder.typicode.com/todos/1'


axios.get(url).then(respond => {
    console.log(respond.data)
})