const React = require('react');

class Container extends React.Component {
    constructor (props) {
        super(props);
        this.state = { updateTime: 0 };
        this.props.store.registerCallback(this.update);
    }

    update () {
        const { updateTime } = this.state;
        updateTime++;
        this.setState({ updateTime });
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

module.exports = connect;
