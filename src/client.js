const ReactDOM = require('react-dom');
const Store = require('./Store');
const ToDos = require('./ToDos');
const { connect, createPageHTML, mockedToDos } = require('./utils');

// create a store
const store = new Store();

// populate the store with data sent from server
store.populateState(window.storeState);

// connect app to store
// app props dealt in connect
const App = connect(ToDos, store);

// rehydrate
const root = document.querySelector('.root');
ReactDOM.hydrate(App, root);
