const React = require('react');
const classNames = require('classnames');

const ToDo = ({ todo, indx, toggleToDo }) => {
    const { title, completed } = todo;

    const key = `todo-${indx}`;
    const className = classNames('todo', { completed });
    const onClick = () => toggleToDo(id);
    const props = { key, className, onClick };

    return React.createElement('div', props, title);
};

const ToDos = ({ todos, toggleToDo }) => {
    const props = { className: 'todos' };
    const children = todos.map((todo, indx) => ToDo({ todo, indx, toggleToDo }));
    return React.createElement('div', props, children);
};

module.exports = ToDos;
