import React from 'react';
import { Switch, Route } from "react-router-dom";

import UserForm from '../components/UserForm/UserForm';
import UserList from '../components/UserList/UserList';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={UserList}/>
            <Route exact path="/users" component={UserForm} />
        </Switch>
    );
}