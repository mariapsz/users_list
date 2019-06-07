import React from 'react';
import ReactDOM from 'react-dom';
import {UsersPage} from './components/UsersPage/UsersPage';

const App = () => {
    const userParameters = require('./JSON_files/UserDataInfoParameters.json');
    return <div>
        <UsersPage userDataInfoParameters={userParameters}/>
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));


