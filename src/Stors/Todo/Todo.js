import { makeAutoObservable } from "mobx";

class Todo {
    todos = [
        {id: 1, title: 'go to shop', complatate: false},
        {id: 2, title: 'se Armenin one TV', complatate: false},
        {id: 3, title: 'like it', complatate: false}
    ];
    constructor() {
        makeAutoObservable(this);

    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo => todo.id !== id))
    }

    complateTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, complatate: !todo.complatate} : todo)

    }

    fatchTo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          this.todos = [...this.todos, ...json]
        })
      }

}

export default new Todo();