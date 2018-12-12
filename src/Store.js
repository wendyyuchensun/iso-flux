class Store {
    constructor () {
        this.state = { todos: [] };
        this.callback = null;
        this.toggleToDo = this.toggleToDo.bind(this);
    }

    getState () {
        return this.state;
    }

    populateState (state) {
        this.state = state;
        if (this.callback) this.callback();
    }

    toggleToDo (id) {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.populateState({ todos: newTodos });
    }

    registerCallback (fn) {
        this.callback = fn;
    }
}

module.exports = Store;
