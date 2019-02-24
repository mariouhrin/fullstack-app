import React, { useState } from 'react';

// name, balance, phone, company, gender, age, email, address

export function Form() {
  const [data, setData] = useState({
    name: '',
    balance: undefined,
    phone: '',
    company: '',
    gender: '',
    age: undefined,
    email: '',
    address: ''
  });

  const handleOnChange = (e, field) => {
    setData({ ...data, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Customer Information</legend>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-gender">
          Gender
          <select id="input-gender">
            <option>male</option>
            <option>female</option>
          </select>
        </label>
        <label htmlFor="input-name">
          Name
          <input
            id="input-name"
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => handleOnChange(e, 'name')}
          />
        </label>
        <label htmlFor="input-balance">
          Balance
          <input
            id="input-balance"
            type="number"
            placeholder="Balance"
            value={data.balance}
            onChange={(e) => handleOnChange(e, 'balance')}
          />
        </label>
        <label htmlFor="input-phone">
          Phone
          <input
            id="input-phone"
            type="text"
            placeholder="Phone"
            value={data.phone}
            onChange={(e) => handleOnChange(e, 'phone')}
          />
        </label>
        <label htmlFor="input-company">
          Company
          <input
            id="input-company"
            type="text"
            placeholder="Company"
            value={data.company}
            onChange={(e) => handleOnChange(e, 'company')}
          />
        </label>
        <label htmlFor="input-age">
          Age
          <input
            id="input-age"
            type="number"
            placeholder="Age"
            value={data.age}
            onChange={(e) => handleOnChange(e, 'age')}
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => handleOnChange(e, 'email')}
          />
        </label>
        <button type="submit" className="pure-button">
          Sign in
        </button>
      </fieldset>
    </form>
  );
}
