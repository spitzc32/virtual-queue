import React, {useContext} from "react";
import { Container } from '@material-ui/core';
import axios from 'axios';

import { StoreContext } from "../../context/StoreContext";

const StoreDetails = ({ nextStep, handleChange, values }) => {
  const [store, setStore] = useContext(StoreContext);

  // for continue event listener
  const Continue = e => {

    e.preventDefault();

    const payload = {
      name: values.name,
      description: values.description,
      website_url: values.website_url,
      default_opening_hours: values.default_opening_hours,
      store_rep: 1,
      has_branch: values.has_branch,
    }
    axios.post('http://127.0.0.1:8000/api/v1/store/list/', payload)
      .then(response => {
        if (response.status == 200 || response.status == 201) {
          setStore(response.data);
          nextStep();
        } else {
          console.log(res.data);
        }
      });
  }

  const validationErrorMessage = (event) => {
    let err = false;

    if (values.name.length < 1 || values.name.length > 128) {
      values.error.name = 'Please input your store name';
      err = true;
    } else if (values.description.length < 1 || values.description.length > 128) {
      err = true;
      values.error.description = 'Please input a short description';
    } else if (values.website_url.length < 1 || values.website_url.length > 150) {
      err = true;
      values.error.website_url = 'Please input your website url';
    } else if (values.default_opening_hours.length < 1 || values.default_opening_hours.length > 150) {
      err = true;
      values.error.default_opening_hours = 'Please input your Opening Hours';
    } if (!err) {
      Continue(event);
    }
  }

  return (
    <Container  component="main" maxWidth="xl">
      <div className="formTitle">
        Step 1: Add your Store Details
        <p className="formSub">
          In this section we will gather your store details
          to display when users are browsing.
        </p>
      </div>
      <div className="formCenter">
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Store Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your store name"
              name="name"
              value={values.name}
              onChange={handleChange('name')}
            />
            <br/>
            { values.error.name }
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="formFieldInput"
              placeholder="Enter a short description to describe your store"
              name="description"
              value={values.description}
              onChange={handleChange('description')}
            />
             <br/>
            { values.error.description }
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="website_url">
              Website Url
            </label>
            <input
              type="text"
              id="website_url"
              className="formFieldInput"
              placeholder="Enter the site of your store(if any)"
              name="website_url"
              value={values.website_url}
              onChange={handleChange('website_url')}
            />
            <br/>
            { values.error.website_url }
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="default_opening_hours">
              Default Opening Hours
            </label>
            <input
              type="text"
              id="default_opening_hours"
              className="formFieldInput"
              placeholder="Enter the default opening hours"
              name="default_opening_hours"
              value={values.default_opening_hours}
              onChange={handleChange('default_opening_hours')}
            />
            <br/>
            { values.error.default_opening_hours }
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={values.has_branch}
                onChange={handleChange('has_branch')}
              />
              I have multiple branches
            </label>
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

export default StoreDetails;

