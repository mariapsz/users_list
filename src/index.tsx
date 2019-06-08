import React from 'react';
import ReactDOM from 'react-dom';
import {UsersPage} from './components/UsersPage/UsersPage';

const App = () => {
    return <div>
        <UsersPage/>
    </div>
};

ReactDOM.render(<App/>, document.getElementById('root'));


