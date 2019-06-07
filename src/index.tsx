import React from 'react';
import ReactDOM from 'react-dom';
import {UsersPage} from './components/UsersPage/UsersPage';
import * as userParameters from './JSON_files/UserDataInfoParameters.json';
import {UserDataInfoParameter} from './Types/UserDataInfoParameter';

const App = () => {

    return <div>
        <UsersPage userDataInfoParameters={userParameters as UserDataInfoParameter[]}/>
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));


