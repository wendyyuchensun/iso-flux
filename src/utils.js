const React = require('react');
const ReactDOMServer = require('react-dom/server');

// connect

class Container extends React.Component {
    constructor (props) {
        super(props);

        this.state = { updateTime: 0 };

        this.update = this.update.bind(this);
        this.props.store.registerCallback(this.update);
    }

    update () {
        const { updateTime } = this.state;
        const newUpdateTime = updateTime + 1;
        this.setState({ updateTime: newUpdateTime });
    }

    render () {
        const { children, getViewProps } = this.props;
        return React.createElement(children, getViewProps(), null);
    }
};

const connect = (View, store) => {
    const getViewProps = () => ({
        todos: store.getState().todos,
        toggleToDo: store.toggleToDo
    });

    const props = { getViewProps, store };
    return React.createElement(Container, props, View);
};


// createHTML

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
            <script src="./dist/client.js"></script>
        </body>
    </html>
`;

// mockedToDos

const mockedToDos = [
    {
        id: 1,
        title: 'wash car',
        completed: false
    },
    {
        id: 2,
        title: 'read novel',
        completed: false
    },
    {
        id: 3,
        title: 'cook dinner',
        completed: true
    },
    {
        id: 4,
        title: 'walk dog',
        completed: false
    }
];

module.exports = { connect, createPageHTML, mockedToDos };
