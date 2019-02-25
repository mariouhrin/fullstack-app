import React, { useState } from 'react';

import { axiosHandler } from '../utils/utils';
import { inititialFormData } from './helpers';

export function Form({ dataForUpdate, handleAppState, crudAction, notify }) {
  const [data, setData] = useState(() => inititialFormData(dataForUpdate));

  const handleChange = (e, field) => {
    setData({ ...data, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { guid, ...sendData } = data;

    const requests = {
      create: {
        method: 'post',
        endpoint: 'api/customers'
      },
      update: {
        method: 'put',
        endpoint: `api/customers/${guid}`
      }
    };

    await axiosHandler(requests[crudAction].method, requests[crudAction].endpoint, sendData);
    await handleAppState();
  };

  return (
    <article className="form-wrapper">
      <div>
        <h3>Please {crudAction === 'create' ? 'fill ' : 'edit '}the form</h3>
        <form className="pure-form pure-form-stacked" onSubmit={(e) => handleSubmit(e)}>
          <section className="form-inputs-wrapper">
            <fieldset>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="input-gender">
                Gender
                <select
                  id="input-gender"
                  value={data.gender}
                  className="form-dropdown"
                  onChange={(e) => handleChange(e, 'gender')}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label htmlFor="input-name">
                Name
                <input
                  id="input-name"
                  type="text"
                  placeholder="Name"
                  className="form-inputs"
                  value={data.name}
                  onChange={(e) => handleChange(e, 'name')}
                  required
                />
              </label>
              <label htmlFor="input-balance">
                Balance
                <input
                  id="input-balance"
                  type="number"
                  placeholder="Balance"
                  className="form-inputs"
                  value={data.balance}
                  onChange={(e) => handleChange(e, 'balance')}
                  required
                />
              </label>
              <label htmlFor="input-phone">
                Phone
                <input
                  id="input-phone"
                  type="text"
                  placeholder="Phone"
                  className="form-inputs"
                  value={data.phone}
                  onChange={(e) => handleChange(e, 'phone')}
                  required
                />
              </label>
            </fieldset>
            <fieldset>
              <label htmlFor="input-company">
                Company
                <input
                  id="input-company"
                  type="text"
                  placeholder="Company"
                  className="form-inputs"
                  value={data.company}
                  onChange={(e) => handleChange(e, 'company')}
                  required
                />
              </label>
              <label htmlFor="input-age">
                Age
                <input
                  id="input-age"
                  type="number"
                  placeholder="Age"
                  className="form-inputs"
                  value={data.age}
                  onChange={(e) => handleChange(e, 'age')}
                  required
                />
              </label>
              <label htmlFor="input-email">
                Email
                <input
                  id="input-email"
                  type="email"
                  placeholder="Email"
                  className="form-inputs"
                  value={data.email}
                  onChange={(e) => handleChange(e, 'email')}
                  required
                />
              </label>
              <label htmlFor="input-address">
                Address
                <input
                  id="input-address"
                  type="text"
                  placeholder="Address"
                  className="form-inputs"
                  value={data.address}
                  onChange={(e) => handleChange(e, 'address')}
                  required
                />
              </label>
            </fieldset>
          </section>
          <button type="submit" className="pure-button button-custom" onClick={notify}>
            Submit
          </button>
        </form>
      </div>
    </article>
  );
}
