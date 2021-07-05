import React, {useContext} from "react";
import { Container } from '@material-ui/core';
import axios from 'axios';

import { StoreContext } from "../../context/StoreContext";
import { BranchContext } from "../../context/BranchContext";

const StoreBranchDetails = ({ nextStep, handleChange, values }) => {
  const [store, setStore] = useContext(StoreContext);
  const [branch, setBranch] = useContext(BranchContext);

  // for continue event listener
  const Continue = e => {
    e.preventDefault();

    const payload = {
      branch: values.branch,
      address: values.address,
      city: values.city,
      state_province: values.state_province,
      country: values.country,
      store: store.id,
    }

    axios.post('http://127.0.0.1:8000/api/v1/store/branch/list/', payload)
      .then(response => {
        if (response.status == 200 || response.status == 201) {
          setBranch(response.data);
          nextStep();
        } else {
          console.log(response.data);
        }
      });
  }

  const validationErrorMessage = (event) => {
    let err = false;

    if (values.branch.length < 1 || values.branch.length > 128) {
      values.errors.branch = 'Please input your branch name';
      err = true;
    } else if (values.address.length < 1 || values.address.length > 128) {
      err = true;
      values.errors.addresss = 'Please input a short address';
    } else if (values.city.length < 1 || values.city.length > 150) {
      err = true;
      values.errors.city = 'Please input your city';
    } else if (values.state_province.length < 1 || values.state_province.length > 150) {
      err = true;
      values.errors.state_province = 'Please input your state/province';
    } else if (values.country.length < 1 || values.country.length > 150) {
      err = true;
      values.errors.country = 'Please input your country';
    } if (!err) {
      Continue(event);
    }
  }

  return (
    <Container  component="main" maxWidth="xl">
      <div className="formTitle">
        Step 2: Add your Initial Branch
        <p className="formSub">
          In this section we will gather your branch details
          for the users to select the nearest branch. This
          will be the initial part, so add your main branch
          if your only have one store.
        </p>
      </div>
      <div className="formCenter">
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="branch">
              branch Name
            </label>
            <input
              type="text"
              id="branch"
              className="formFieldInput"
              placeholder="Enter your branch name"
              name="branch"
              value={values.branch}
              onChange={handleChange('branch')}
            />
            <br/>
            { values.errors.branch }
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="formFieldInput"
              placeholder="Enter the address of your store"
              name="address"
              value={values.address}
              onChange={handleChange('address')}
            />
            <br/>
            { values.errors.address }
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              className="formFieldInput"
              placeholder="Enter the city"
              name="city"
              value={values.city}
              onChange={handleChange('city')}
            />
            <br/>
            { values.errors.city }
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="state_province">
             State/Province
            </label>
            <input
              type="text"
              id="state_province"
              className="formFieldInput"
              placeholder="Enter the state/province"
              name="state_province"
              value={values.state_province}
              onChange={handleChange('state_province')}
            />
            <br/>
            { values.errors.state_province }
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="country">
             country
            </label>
            <input
              type="text"
              id="country"
              className="formFieldInput"
              placeholder="Enter the country"
              name="country"
              value={values.country}
              onChange={handleChange('country')}
            />
            <br/>
            { values.errors.country }
          </div>

          <div className="formField">
            <button
              className="formFieldButton"
              onClick={ validationErrorMessage }
              type="submit"
             >
              Next
            </button>
          </div>

        </form>
      </div>
    </Container>
  );
}

export default StoreBranchDetails;

