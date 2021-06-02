import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";


class StoreBranchForm extends Component {
  constructor() {
    super();

    this.state = {
      branch: "",
      address: "",
      city: "",
      state_province: "",
      country: "",
      store: 0,
      errors: {
        branch: 'Please enter branch name.',
        address: 'Please enter address.',
        city: 'Please enter city.',
        state_province: 'Please enter state or province.',
        country: 'Please enter country.'
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  validationErrorMessage(event) {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'branch': 
        errors.branch = value.length < 1 && value.length > 100 ? 'Please enter branch name.' : '';
        break;
      case 'address': 
        errors.address = value.length < 1 && value.length > 500 ? '' : 'Please enter address.';
        break;
      case 'city': 
        errors.city = value.length < 1 && value.length > 50 ? 'Please enter city.' : '';
        break;
      case 'state_province': 
        errors.state_province = value.length < 1 && value.length > 80 ? `Please enter state or province.` : '';
        break;
      case 'country': 
        errors.country = value.length < 1 && value.length > 50 ? `Please enter country.` : '';
        break;
      default:
        break;
    }

    this.setState({ errors });
  }

  render () {
    return (
      <div>
      <div className="formTitle">
        Store Branch Form
      </div>

      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="branch">
              Branch Name
            </label>
            <input
              type="text"
              id="branch"
              className="formFieldInput"
              placeholder="Enter your store branch location (default: main)"
              name="branch"
              value={this.state.branch}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="formFieldInput"
              placeholder="Enter the address of your branch"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
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
              value={this.state.city}
              onChange={this.handleChange}
            />
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
              value={this.state.state_province}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="formFieldInput"
              placeholder="Enter the Country"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <Link to="/storebranch">
              <button className="formFieldButton">Next</button>
            </Link>
          </div>

        </form>
      </div>
      </div>
    );
  }
}

export default StoreBranchForm;