import React, {useContext} from 'react';
import { Container, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';

import { UserContext } from "../../context/UserContext";
import Dashboard from "../dashboard/Dashboard";

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { email, profile_picture, username, first_name, last_name, password, preferred_name, secondary_email, longitude, latitude,  is_active, is_staff, is_worker, store, store_id } = values
  const [user, setUser] = useContext(UserContext);

  const Continue = e => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const isw = store_id > 0 ? 1 : 0;
      const urls = ['http://127.0.0.1:8000/api/v1/account/list/',
          'http://127.0.0.1:8000/api/v1/worker/'+store_id+'/details'];

      const payload = {
        email: email,
        profile_picture: profile_picture,
        username: username,
        first_name: first_name,
        last_name: last_name,
        password: password,
        preferred_name: preferred_name,
        secondary_email: secondary_email,
        longitude: long,
        latitude: lat,
        is_active: true,
        is_staff: false,
        is_worker: is_worker,
      };

      console.log(urls[isw])
      axios.post(urls[isw], payload)
        .then(response => {
          if (response.status == 200 || response.status == 201) {
            setUser(response.data);
            return (
              <Dashboard
              />
            );
          } else {
            console.log(res.data);
          }
        });
    });
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  };


  return (
    <Container  component="main" maxWidth="xl">
      <div className="formTitle">
        Step 3: Confirm the Entries Below
        <p className="formSub">
          In this section, you can view your changes to see if
          they are all good to go.
        </p>
      </div>
      <div>
        <List>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="Email" secondary={email}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="Profile Picture" secondary={profile_picture}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="Username" secondary={username}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="First Name" secondary={first_name}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="Last Name" secondary={last_name}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="Preferred Name" secondary={preferred_name}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="Secondary Email" secondary={secondary_email}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className="formField">
              <button
                className="formFieldButton"
                onClick={ Previous }
                type="submit"
               >
                Previous
              </button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="formField">
              <button
                className="formFieldButton"
                onClick={ Continue }
                type="submit"
               >
                Confirm & Continue
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Confirmation;