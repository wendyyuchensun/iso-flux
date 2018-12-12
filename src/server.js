const express = require('express');
const Store = require('./Store');
const ToDos = require('./ToDos');
const { connect, createPageHTML, mockedToDos } = require('./utils');

const server = express();

server.get('/', (req, res) => {
    // create a store
    const store = new Store();

    // populate the store with initial data
    store.populateState({ todos: mockedToDos });

    // connect app to store
    // app props dealt in connect
    const App = connect(ToDos, store);

    // dehydrate & send to client
    const storeState = store.getState();
    const pageHTML = createPageHTML(App, storeState);
    res.send(pageHTML);
});

server.listen(8080, () => console.log('Server on.'));
