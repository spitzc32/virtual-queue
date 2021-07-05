import React, { Component, useContext, useState, useEffect } from "react";
import axios from 'axios';

import { StoreContext } from "../../context/StoreContext";
import { UserContext } from "../../context/UserContext";

import User from "./User";
import Demo from "./Worker";
import Message from "../elements/Message";

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  const [store, setStore] = useContext(StoreContext);
  const [array, setArray] = useState([]);
  const [openModal, setOpenModal] = useState(true);

  const message = "You are not logged in. Please log in first!";
  let isWorking = store.length > 0;

  const handleModalOpen = () => {
   setOpenModal(!openModal);
   window.location.href = "http://127.0.0.1:3000/#/auth/";
  }

  useEffect(() => {
    let d = new Date();
    if( user.length > 0) {
    const url = 'http://localhost:8000/api/v1/order/'+ d.getHours() +'/list/?account=' + user[0].id;
    axios.get(url)
    .then(response => {
      if (response.status == 200 || response.status == 201) {
          let arrs = response.data.map( item => {
            let payload = {
              title: "Queue No " + item.queue_no + " : " + item.queue_sub,
              startDate: new Date(d.getFullYear(), d.getMonth(), d.getDate() , item.queue_hour, 0),
              endDate: new Date(d.getFullYear(), d.getMonth(), d.getDate() , item.queue_hour+1, 0),
              id: item.id,
              notes:  item.account_bar.qr_code,
            };
            console.log(payload);
            return payload;
          });
          console.log(arrs);
          setArray(arrs);
      }
    })
  }
  },[]);

  if (isWorking && user.length > 0) {
    return (<><Demo data={array}/></>);
  } else if (user.length > 0) {
    return (<User />);
  } else {
    return <Message
             show={openModal}
             handleModalOpen={handleModalOpen}
             message={message}
           />
  }

}

export default Home;