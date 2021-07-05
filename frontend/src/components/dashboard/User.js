import React, { Component, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';

import { StoreContext } from "../../context/StoreContext";
import { UserContext } from "../../context/UserContext";
import { BranchContext } from "../../context/BranchContext";
import { OrderContext } from "../../context/OrderContext";

import StoreItem from "../elements/StoreItem";
import Order from "../order/Order";

const User = () => {
  const [user, setUser] = useContext(UserContext);
  const [store, setStore] = useContext(StoreContext);
  const [branch, setBranch] = React.useContext(BranchContext);
  const [order, setOrder] = React.useContext(OrderContext);

  const [storeList, setStoreList] = useState([]);

  console.log( 'Dashboard', user);
  let isWorking = store.length > 0;

  const check = (id, branch) => {
    setBranch(branch);
    window.location.href = "http://127.0.0.1:3000/#/auth/dashboard/order/";
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/store/list/')
    .then(response => {
      if (response.status == 200 || response.status == 201) {
        let arr = response.data;
        arr.forEach((item) => {
          item.branch= item.branches.length;
          item.branches.forEach((branch) => {
            branch.uid= item;
          });
        });
        console.log('arr', arr);
        setStoreList(arr);
      } else {
        console.log('error');
      }
    });
  },[])

  return(
    <div className="appItem">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="formFieldProf">
            <div className="formFieldPic">{user[0].first_name[0]}</div>
            <p className="formSub">{user[0].preferred_name}</p>
            <p className="formTitle" >
              QR Code
            </p>
            <img src={Object.keys(order).length ? order.account_barcode.qr_code : 'ads'}/>

          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
            <div className="formFieldBro">
              <p className="formTitle" >
                Browse Store
              </p>
              {storeList.map((data)=> {
                return <div key={data.id}>
                <StoreItem
                   prop={data}
                   func={check}
                />
                </div>
              })}
            </div>
        </Grid>
      </Grid>
    </div>
    );
}

export default User;
