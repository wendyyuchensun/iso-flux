const express = require('express');
const Store = require('./Store');
const mockedToDos = require('./mockedToDos');
const ToDos = require('./ToDos');
const connect = require('./connect');
const createPageHTML = require('./createPageHTML');

const server = express();

server.get('/', (req, res) => {
    const store = new Store();
    store.populateState({ todos: mockedToDos });

    const App = connect(ToDos, store);
    const storeState = store.getState();
    const pageHTML = createPageHTML(App, storeState);

    res.send(pageHTML);
});

server.listen(8080, () => console.log('Server on.'));
