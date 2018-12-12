class Store {
    constructor () {
        this.state = { todos: [] };
        this.callback = null;
    }

    getState () {
        return this.state;
    }

    populateState (state) {
        this.state = state;
        if (this.callback) this.callback(this.state);
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

    registerCallback (fn) {
        this.callback = fn;
    }
}

module.exports = Store;
