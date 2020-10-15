import React from "react";

import FormComponent from './FormComponent';

import "./style.css";

class FormContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "male",
      location: "Paris",
      dietaryRestrictions: {
        isVegetarian: false,
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
        isGlutenFree: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;

    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit() {
    alert(
      "First name: " +
        this.state.firstName +
        "\nLast name: " +
        this.state.lastName +
        "\nAge: " +
        this.state.age +
        "\nGender: " +
        this.state.gender +
        "\nLocation: " +
        this.state.location +
        "\nDietary restrictions:" +
        "\nVegan: " +
        this.state.dietaryRestrictions.isVegan +
        "\nVegetarian: " +
        this.state.dietaryRestrictions.isVegetarian +
        "\nKosher: " +
        this.state.dietaryRestrictions.isKosher +
        "\nLactose free: " +
        this.state.dietaryRestrictions.isLactoseFree +
        "\nGluten free: " +
        this.state.dietaryRestrictions.isGlutenFree
    );
  }

  render() {
    return(
      <FormComponent
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      {...this.state}
      />
    );
  }
}

export default FormContainer;
