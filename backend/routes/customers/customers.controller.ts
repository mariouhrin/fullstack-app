import {
  createTransaction,
  getAllCustomersDao,
  getCustomerByGuidDao,
  createCustomerDao
} from '../../dao/customers.dao';
import { NotFoundError } from '../../lib/error-utils';
import _ from 'lodash';

export async function getAllCustomers(): Promise<Customer[]> {
  const customers = await getAllCustomersDao();

  if (_.isEmpty(customers)) {
    throw new NotFoundError('Customers not found.');
  }

  return customers;
}

export async function getCustomerByGuid(guid: string): Promise<Customer> {
  const customer: Customer = await getCustomerByGuidDao(guid);

  if (_.isEmpty(customer)) {
    throw new NotFoundError('Not found customer guid');
  }

  return customer;
}

export async function createCustomer(customer: Customer): Promise<string> {
  const transaction = await createTransaction();

  try {
    const newCustomerGuid = await createCustomerDao(customer, transaction);
    transaction.commit();
    return newCustomerGuid;
  } catch (e) {
    transaction.rollback(e);
    throw e;
  }
}
