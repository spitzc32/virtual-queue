import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import axios from 'axios';

import StoreItem from "../elements/StoreItem";
import Message from "../elements/Message";

import { StoreContext } from "../../context/StoreContext";
import { UserContext } from "../../context/UserContext";


const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  const [store, setStore] = useContext(StoreContext);
  const [userProf, setUserProf] = useState({});

  const [opening_hour, set_opening_hour] = useState(0);
  const [closing_hour, set_closing_hour] = useState(0);
  const [num_of_workers, set_num_of_workers] = useState(0);
  const [min_customers, set_min_customers] = useState(0);
  const [max_customers, set_max_customers] = useState(0);
  const [store_branch, set_store_branch] = useState(store.length > 0 ? store[0].branches[0].id : 0);

  const [openModal, setOpenModal] = useState(false);
  const message = "Success! Updated the daily store info.";

  console.log(user);
  let isWorking = store.length > 0;
  const check = () => {
    console.log("prop");
  }

  const handleModalOpen = () => {
   setOpenModal(!openModal);
  }

  useEffect(() => {
    setUserProf(user[0]);
  },[])

  const Continue = e => {
    const payload = {
        opening_hour: opening_hour,
        closing_hour: closing_hour,
        num_of_workers: num_of_workers,
        min_customers: min_customers,
        max_customers: max_customers,
        store_branch: store_branch,
    }
    const url = 'http://127.0.0.1:8000/api/v1/order/create/';
    axios.post(url, payload)
    .then(response => {
      if (response.status == 200 || response.status == 201) {
        setOpenModal(true);
      } else {
        console.log(response.data);
      }
    });
  }

  return(
  <div>
    <div className="appItem">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="formFieldProf">
            <div className="formFieldPic">{user[0].first_name[0]}</div>
            <p className="formTitle" >
              Personal Details
            </p>
            <List>
              <ListItem>
                  <ListItemText
                    className="formFieldLabel"
                    primary='Email:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {user[0].email}
                    </Typography>
                    }
                  />
              </ListItem>
              <ListItem>
                <ListItemText
                    className="formFieldLabel"
                    primary='Username:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {user[0].username}
                    </Typography>
                    }
                  />
              </ListItem>
              <ListItem>
                <ListItemText
                    className="formFieldLabel"
                    primary='First Name:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {user[0].first_name}
                    </Typography>
                    }
                  />
              </ListItem>
              <ListItem>
                <ListItemText
                    className="formFieldLabel"
                    primary='Last Name:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {user[0].last_name}
                    </Typography>
                    }
                  />
              </ListItem>
              <ListItem>
                <ListItemText
                    className="formFieldLabel"
                    primary='Preferred Name:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {user[0].preferred_name}
                    </Typography>
                    }
                  />
              </ListItem>
              <ListItem>
                <ListItemText
                    className="formFieldLabel"
                    primary='Secondary Email:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {user[0].secondary_email}
                    </Typography>
                    }
                  />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          { isWorking ? (
            <div className="formFieldCon">
              <p className="formTitle" >
                Store Details
              </p>
              <StoreItem
                prop={store[0]}
                func={check}
              />

            </div>
          ) : (
            <div className="formFieldCon">
              <p className="itemTitle" >
                Password Section
              </p>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  value={user[0].password}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="secondary_email">
                 Repeat Password:
                </label>
                <input
                  type="password"
                  id="secondary_email"
                  className="formFieldInput"
                  placeholder="Repeat your password"
                  name="secondary_email"
                  value={user[0].password}
                />
              </div>
            </div>
          )}
          {isWorking ? (
            <div className="formFieldCon">
              <p className="itemTitle" >
                Store Updates Section
              </p>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="opening_hour">
                      Opening Hour:
                    </label>
                    <input
                      type="number"
                      id="opening_hour"
                      className="formFieldInput"
                      placeholder="Enter your opening hour"
                      name="opening_hour"
                      value={opening_hour}
                      onChange={e => set_opening_hour(e.target.value)}
                    />
                  </div>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="closing_hour">
                      Closing Hour:
                    </label>
                    <input
                      type="number"
                      id="closing_hour"
                      className="formFieldInput"
                      placeholder="Enter your closing hour"
                      name="closing_hour"
                      value={closing_hour}
                      onChange={e => set_closing_hour(e.target.value)}
                    />
                  </div>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="num_of_workers">
                      Number of Workers:
                    </label>
                    <input
                      type="number"
                      id="num_of_workers"
                      className="formFieldInput"
                      placeholder="Enter your number of workers"
                      name="num_of_workers"
                      value={num_of_workers}
                      onChange={e => set_num_of_workers(e.target.value)}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="min_customers">
                      Minimmum Customers:
                    </label>
                    <input
                      type="number"
                      id="min_customers"
                      className="formFieldInput"
                      placeholder="Enter your min customers you can handle"
                      name="min_customers"
                      value={min_customers}
                      onChange={e => set_min_customers(e.target.value)}
                    />
                  </div>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="max_customers">
                      Maximum Customers:
                    </label>
                    <input
                      type="number"
                      id="max_customers"
                      className="formFieldInput"
                      placeholder="Enter your max customers you can handle"
                      name="max_customers"
                      value={max_customers}
                      onChange={e => set_max_customers(e.target.value)}
                    />
                  </div>
                </Grid>
              </Grid>
              <div className="formField">
                <button
                  className="formFieldButton"
                  type="submit"
                  onClick= { Continue }
                 >
                  set up store today
                </button>
                <Message
                  show={openModal}
                  handleModalOpen={handleModalOpen}
                  message={message}
                />
              </div>
            </div>
          ) : (<div />)}
        </Grid>
      </Grid>
    </div>
  </div>
  );
}
export default Profile;
