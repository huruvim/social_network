import * as serviceWorker from './serviceWorker';
import state, {addPostCallback, changeNewTextCallback, subscriber} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPostCallback={addPostCallback}
                 changeNewTextCallback={changeNewTextCallback}
                 message={state.profilePage.posts[1].message}
                 newPostText={state.profilePage.newPostText}
                 likesCount={state.profilePage.posts[2].likesCount}
            />,
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

subscriber(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();