import React from 'react';
import { NavLink } from "react-router-dom";

export const Aside = () => (
    <aside>
        <header><div className="logo"/></header>
        <nav>
            <ul>
                <li>
                <NavLink to="/" activeClassName="active" exact>User List</NavLink>
                </li>
                <li>
                <NavLink to="/users" activeClassName="active">Users</NavLink>
                </li>
            </ul>
        </nav>
    </aside>
);