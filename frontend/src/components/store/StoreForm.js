import React, { Component } from "react";
import { Link } from "react-router-dom";

import StoreDetails from "../component/StoreDetails";
import StoreBranchDetails from "../component/StoreBranchDetails";
import StoreConfirmation from "../component/StoreConfirmation";
import StepBar from "../elements/StepBar";

class StoreForm extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      percentage: 33,
      name: "",
      description: "",
      website_url: "",
      default_opening_hours: "",
      store_rep: null,
      has_branch: false,
      branch: "",
      address: "",
      city: "",
      state_province: "",
      country: "",
      store: 0,
      error: {
        name: '',
        description: '',
        website_url: '',
        default_opening_hours: '',
      },
      errors: {
        branch: '',
        address: '',
        city: '',
        state_province: '',
        country: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  prevStep(event) {
    const { step, percentage } = this.state;
    this.setState({
        step: step - 1,
        percentage: percentage - 33
    });
  }

  nextStep(event) {
    const { step, percentage } = this.state;
    this.setState({
        step: step + 1,
        percentage: percentage + 33
    });
  }

  render() {
    const { step } = this.state;

    const { name, description, website_url, default_opening_hours, store_rep, has_branch, error } = this.state;
    const store_values = { name, description, website_url, default_opening_hours, store_rep, has_branch, error };

    const { branch, address, city, state_province, country, store, errors } = this.state;
    const store_branch_values = { branch, address, city, state_province, country, store, errors };

    switch (step){
      case 1:
        return (
          <div>
          <StepBar percentage={this.state.percentage}/>
          <StoreDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ store_values }
          />
          </div>
        );
      case 2:
        return (
          <div>
          <StepBar percentage={this.state.percentage}/>
          <StoreBranchDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ store_branch_values }
          />
          </div>
        );
      case 3:
        return(
          <div>
          <StepBar percentage={this.state.percentage}/>
          <StoreConfirmation
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            store_values={ store_values }
            branch_values= { store_branch_values }
          />
          </div>
        );
    }

  }
}

export default StoreForm;