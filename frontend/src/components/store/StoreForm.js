import React, { Component } from "react";
import { Link } from "react-router-dom";


class StoreForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      website_url: "",
      default_opening_hours: "",
      store_rep: null,
      has_branch: false,
      errors: {
        name: 'Please enter store name.',
        description: 'Please enter description.',
        website_url: 'Please enter url.',
        default_opening_hours: 'Please enter opening hours.',
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

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name': 
        errors.name = value.length < 1 && value.length > 255 ? 'Please enter store name.' : '';
        break;
      case 'description': 
        errors.description = value.length < 1 && value.length > 1000 ? '' : 'Please enter description.';
        break;
      case 'website_url': 
        errors.website_url = value.length < 1 && value.length > 500 ? 'Please enter url.' : '';
        break;
      case 'default_opening_hours': 
        errors.default_opening_hours = value.length < 1 && value.length > 50 ? `Please enter opening hours.` : '';
        break;
      default:
        break;
    }

    this.setState({ errors });
  }

  render() {
    return (
      <div>
      <div className="formTitle">
        Sign Up
      </div>
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
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
              value={this.state.name}
              onChange={this.handleChange}
            />
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
              value={this.state.description}
              onChange={this.handleChange}
            />
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
              value={this.state.website_url}
              onChange={this.handleChange}
            />
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
              value={this.state.default_opening_hours}
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

export default StoreForm;