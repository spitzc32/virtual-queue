import React, { useContext } from "react";
import { Link, Route, NavLink } from "react-router-dom";
import { Container } from '@material-ui/core';
import axios from 'axios';

import { UserContext } from "../../context/UserContext";
import { StoreContext } from "../../context/StoreContext";
import Dashboard from '../dashboard/Dashboard';

const SignInForm = ( { values } ) => {
    const [user, setUser] = useContext(UserContext);
    const [store, setStore] = useContext(StoreContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);

    const Continue = e => {
      const url = "http://127.0.0.1:8000/api/v1/account/login/details?email=" + email;
      axios.get(url)
        .then(response => {
          if (response.status == 200 || response.status == 201) {
            setUser(response.data);
            let isWorking = 'store' in response.data[0] &&
                    response.data[0].store.length > 0;
            if (response.data[0].password === password) {
              if (isWorking) {
                CustomStore(response.data[0].store);
              }
              window.location.href = "http://127.0.0.1:3000/#/auth/dashboard";
            } else {
               setError(true);
            }
          }
        })
    }

    const CustomStore = (store) => {
      let st = store[0].stores[0]
      let Store = [{
        id: st.id,
        name: st.name,
        description: st.description,
        default_opening_hours: st.default_opening_hours,
        website_url: st.website_url,
        branch: 1,
        branches: store,
      }];
      setStore(Store);
    }


    return (
      <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/signup"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
              <NavLink
                exact
                to="/store"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Apply Store
              </NavLink>
             </div>

              <div className="formCenter">
                <p className="formTitle">
                  Sign In
                </p>

                { error ? (
                  <div className="formFieldError" name='error'>
                    Error: Invalid Email/Password.
                  </div>
                ) : (<div />)}
                <div className="formFields">
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="email">
                      E-Mail Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="formFieldInput"
                      placeholder="Enter your email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="formFieldInput"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="formField">

                    <button
                      className="formFieldButton"
                      type="submit"
                      onClick= { Continue }
                     >
                      Sign In
                    </button>
                  </div>

                </div>
              </div>
          </div>
        </div>
    );
}

export default SignInForm;
