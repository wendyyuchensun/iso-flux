class Store {
    constructor () {
        this.state = {};
    }

    getState () {
        return this.state;
    }

    populateState (state) {
        this.state = state;
    }

    getToDos () {
        return this.state.todos;
    }

    populateToDos (todos) {
        this.state.todos = todos;
    }

    toggleToDo (id) {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.state.todos = newTodos;
    }
}

module.exports = Store;
