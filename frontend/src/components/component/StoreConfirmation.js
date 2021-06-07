import React from 'react'
import { Container, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import Dashboard from "../dashboard/Dashboard";

const StoreConfirmation = ({ prevStep, nextStep, store_values, branch_values }) => {
  const { name, description, website_url, default_opening_hours, store_rep, has_branch } = store_values;
  const { branch, address, city, state_province, country, store } = branch_values;

  const Continue = e => {
    e.preventDefault();
    const [user, setUser] = useState({});

    return (<Dashboard />);
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }


  return (
    <Container  component="main" maxWidth="xl">
      <div>
        <List>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="Store Name" secondary={name}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="description" secondary={description}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="default_opening_hours" secondary={default_opening_hours}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="branch" secondary={branch}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="address" secondary={address}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="city" secondary={city}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="state_province" secondary={state_province}/>
          </ListItem>
          <ListItem>
            <ListItemText className="formFieldLabel" primary="country" secondary={country}/>
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
  )
}

export default StoreConfirmation;