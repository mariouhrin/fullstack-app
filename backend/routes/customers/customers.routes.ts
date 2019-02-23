import Joi from 'joi';
import * as handler from './customers.handler';
import { JoiCustomer } from './customers.validation';

export default [
  {
    method: 'GET',
    path: '/api/customers',
    options: {
      description: 'Get all customers'
    },
    handler: handler.getAllCustomersHandler
  },
  {
    method: 'GET',
    path: '/api/customers/{guid}',
    options: {
      validate: {
        params: {
          guid: Joi.string()
            .required()
            .description('ID of User')
        }
      },
      description: 'Get customer by guid'
    },
    handler: handler.getCustomerByGuidHandler
  },
  {
    method: 'POST',
    path: '/api/customers',
    options: {
      validate: {
        payload: JoiCustomer
      },
      description: 'Creates new User'
    },
    handler: handler.createCustomerHandler
  }
];
