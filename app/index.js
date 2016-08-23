import React from 'react';
import ReactDOM from  'react-dom';

const component = (
    <div>New application</div>
);

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(component,  document.querySelector('#root'));
});