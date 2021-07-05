import React, { Component, useEffect } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Container, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import axios from 'axios';

import Branch from "../elements/Branch";
import Header from "../Header/Header";
import shop from './images/shop.png';
import Message from "../elements/Message";

import { UserContext } from "../../context/UserContext";
import { StoreContext } from "../../context/StoreContext";
import { OrderContext } from "../../context/OrderContext";
import { BranchContext } from "../../context/BranchContext";


const Order = () => {
  const [user, setUser] = React.useContext(UserContext);
  const [store, setStore] = React.useContext(StoreContext);
  const [order, setOrder] = React.useContext(OrderContext);
  const [branch, setBranch] = React.useContext(BranchContext);

  const [queue_hour, set_queue_hour] = React.useState(0);
  const [queue_sub, set_queue_sub] = React.useState('');
  const [step, setStep] = React.useState(3);
  const [openModal, setOpenModal] = React.useState(false);
  const message = "Success! Your order has been processed. Please proceed to the branch of your choice at your schedule hour.";
  const handleModalOpen = () => {
   setOpenModal(!openModal);
   window.location.href = "http://127.0.0.1:3000/#/auth/dashboard/";
  }

  const toHome = () => {
    setStep(1);
  }

  const toProfile = () => {
    setStep(2);
  }

  const check = ({branch}) => {
    console.log(branch);
  }

  const Order = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      const payload = {
        store_branch: branch.branches[0].id,
        account_bar: null,
        queue_hour: queue_hour,
        queue_no: 0,
        queue_sub: queue_sub,
        longitude: long,
        latitude: lat,
        is_active: true,
      };

      axios.post('http://127.0.0.1:8000/api/v1/order/'+user[0].id+'/create/', payload)
        .then(response => {
          if (response.status == 200 || response.status == 201) {
            let arr = response.data
            axios.get('http://127.0.0.1:8000/api/v1/account/barcode/'+arr.account_bar+'/details/')
            .then(res1 =>{ arr.account_barcode = res1.data});
            setOrder(arr);
            setOpenModal(true);
          } else {
            console.log(response.data);
          }
        });
    });
  }

  return (
    <div className="App">
      <div className="appDashboard">
        <Header
          step={step}
          toHome={toHome}
          toProfile={toProfile}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className="formFieldProf">
              <div className="formFieldPic"><img src={shop} /></div>
              <p className="itemTitle">
                {branch.name}, {branch.branches[0].branch} branch
              </p>
              <List>
                <ListItem>
                  <ListItemText
                    className="formFieldLabel"
                    primary='Description:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {branch.description}
                    </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="formFieldLabel"
                    primary='Opening hours:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {branch.default_opening_hours}
                    </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="formFieldLabel"
                    primary='Branch Address:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {branch.branches[0].address}, {branch.branches[0].city}
                    </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="formFieldLabel"
                    primary='Country:'
                    secondary={
                    <Typography className="formFieldDisplay">
                      {branch.branches[0].country}
                    </Typography>
                    }
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="formFieldCon">
              <div className="formCenter">
                <div className="formFields">
                  <p className="formTitle" >
                    Order Details
                  </p>
                  <p className="formSub">
                    In this section, you can choose to fill out
                    your desired branch selection to order to. The
                    branch shown on the left is the branch you chose
                    in the store given earlier. By ordering in this section,
                    you will be presented a qr code on your dashboard later
                    on. You can use the  qr code to present it to the store
                    youve queued up upon.
                  </p>
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="queue_hour">
                      What time do you want to Queue Up?
                    </label>
                    <input
                      type="number"
                      id="queue_hour"
                      className="formFieldInput"
                      placeholder="Enter the Hour"
                      name="queue_hour"
                      value={queue_hour}
                      onChange={e => set_queue_hour(e.target.value)}
                    />
                  </div>

                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="queue_sub">
                      How large is your order?
                    </label>
                    <Select
                      name="queue_sub"
                      id="queue_sub"
                      value={queue_sub}
                      onChange={e => set_queue_sub(e.target.value)}
                      className="formFieldInput"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'small'}>Small</MenuItem>
                      <MenuItem value={'medium'}>Medium</MenuItem>
                      <MenuItem value={'large'}>Large</MenuItem>
                    </Select>
                  </div>

                  <div className="formField">

                    <button
                      className="formFieldButton"
                      type="submit"
                      onClick= { Order }
                     >
                      Queue me Up
                    </button>
                  </div>
                </div>
                <Message
                 show={openModal}
                 handleModalOpen={handleModalOpen}
                 message={message}
               />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Order;
