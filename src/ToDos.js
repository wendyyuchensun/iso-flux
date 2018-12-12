const React = require('react');
const classNames = require('classnames');

const ToDo = ({ todo, indx }) => {
    const { title, completed } = todo;

    const key = `todo-${key}`;
    const className = classNames('todo', { completed });
    const props = { key, className };

    return React.createElement('div', props, title);
};

const ToDos = ({ todos }) => {
    const props = { classNames: 'todos' };
    const children = todos.map((todo, indx) => Todo({ todo, indx }));
    return React.createElement('div', props, children);
};

module.exports = ToDos;
