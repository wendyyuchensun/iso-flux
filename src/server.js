const express = require('express');
const ReactDOMServer = require('react-dom/server');
const Store = require('./Store');
const mockedToDos = require('./mockedToDos');
const ToDos = require('./ToDos');
const connect = require('./connect');

const createPageHTML = (App, storeState) => `
    <html>
        <head>
            <title>ToDos</title>
        </head>
        <body>
            <div class="root">${ReactDOMServer.renderToString(App)}</div>
            <script>
                window.storeState = ${JSON.stringify(storeState)};
            </script>
        </body>
    </html>
`;

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
