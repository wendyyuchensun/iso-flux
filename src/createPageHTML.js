const ReactDOMServer = require('react-dom/server');

const createPageHTML = (App, storeState) => `
    <html>
        <head>
            <title>ToDos</title>
            <style>
                body {
                    font-family: monospace;
                    padding: 100px;
                    text-align: center;
                }

                h1 {
                    font-size: 40px;
                }

                .todo {
                    cursor: pointer;
                    font-size: 30px;
                    line-height: 40px;
                }

                .todo.completed {
                    opacity: 0.2;
                }
            </style>
        </head>
        <body>
            <h1>ToDos</h1>
            <div class="root">${ReactDOMServer.renderToString(App)}</div>
            <script>
                window.storeState = ${JSON.stringify(storeState)};
            </script>
        </body>
    </html>
`;

module.exports = createPageHTML;
