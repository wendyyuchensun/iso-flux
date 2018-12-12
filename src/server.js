const express = require('express');
const Store = require('./Store');
const mockedToDos = require('./mockedToDos');

const createPageHTML = storeState => `
    <html>
        <head>
            <title>ToDos</title>
        </head>
        <body>
            <script>
                window.storeState = ${JSON.stringify(storeState)};
            </script>
        </body>
    </html>
`;

const server = express();

server.get('/', (req, res) => {
    const store = new Store();
    store.populateToDos(mockedToDos);

    const storeState = store.getState();
    const pageHTML = createPageHTML(storeState);

    res.send(pageHTML);
});

server.listen(8080, () => console.log('Server on.'));
