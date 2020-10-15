import React from 'react';

function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={props.handleChange}
      />
      {props.firstName}
      <br />
      <br />
      <input
        type="text"
        value={props.lastName}
        name="lastName"
        placeholder="Last Name"
        onChange={props.handleChange}
      />
      {props.lastName}
      <br />
      <br />
      <input
        type="number"
        min="0"
        value={props.age}
        name="age"
        placeholder="Age"
        onChange={props.handleChange}
      />
      {props.age}
      <br />
      <br />
      <label>
        <input
          type="radio"
          value="male"
          checked={props.gender === "male"}
          onChange={props.handleChange}
          name="gender"
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={props.gender === "female"}
          onChange={props.handleChange}
          name="gender"
        />
        Female
      </label>
      <p>Your gender is {props.gender}</p>
      <br />
      <br />
      <label>Choose your location: </label>
      <select
        value={props.location}
        name="location"
        onChange={props.handleChange}
      >
        <option value="Paris">Paris</option>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Rome">Rome</option>
      </select>
      <p>You chose: {props.location}</p>
      <br />
      <br />
      <p>Choose dietary restrictions: </p>
      <br />
      <label>
        <input
          type="checkbox"
          name="isVegan"
          checked={props.dietaryRestrictions.isVegan}
          onChange={props.handleChange}
        />{" "}
        Vegan?
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isVegetarian"
          checked={props.dietaryRestrictions.isVegetarian}
          onChange={props.handleChange}
        />{" "}
        Vegetarian?
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isKosher"
          checked={props.dietaryRestrictions.isKosher}
          onChange={props.handleChange}
        />{" "}
        Kosher?
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.dietaryRestrictions.isLactoseFree}
          onChange={props.handleChange}
        />{" "}
        Lactose free?
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isGlutenFree"
          checked={props.dietaryRestrictions.isGlutenFree}
          onChange={props.handleChange}
        />{" "}
        Gluten free?
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
