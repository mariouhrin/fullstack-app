import * as dao from '../../dao/customers.dao';
import { NotFoundError } from '../../lib/error-utils';
import _ from 'lodash';

export async function getAllCustomers(): Promise<Customer[]> {
  const customers = await dao.getAllCustomersDao();

  if (_.isEmpty(customers)) {
    throw new NotFoundError('Customers not found.');
  }

  return customers;
}

export async function getCustomerByGuid(guid: string): Promise<Customer> {
  const customer: Customer = await dao.getCustomerByGuidDao(guid);

  if (_.isEmpty(customer)) {
    throw new NotFoundError('Not found customer by guid');
  }

  return customer;
}

export async function createCustomer(customer: Customer): Promise<string> {
  const transaction = await dao.createTransaction();

  try {
    const newCustomerGuid = await dao.createCustomerDao(customer, transaction);
    transaction.commit();
    return newCustomerGuid;
  } catch (e) {
    transaction.rollback(e);
    throw e;
  }
}

export async function updateCustomer(customer: Customer, guid: string): Promise<void> {
  const checkCustomer = await dao.getCustomerByGuidDao(guid);

  if (_.isEmpty(checkCustomer)) {
    throw new NotFoundError('Not found customer by guid');
  }

  const transaction = await dao.createTransaction();

  try {
    await dao.updateCustomerDao(customer, guid, transaction);
    transaction.commit();
    return;
  } catch (e) {
    transaction.rollback(e);
    throw e;
  }
}

export async function deleteCustomerByGuid(guid: string): Promise<void> {
  const transaction = await dao.createTransaction();

  try {
    await dao.deleteCustomerByGuidDao(guid, transaction);
    transaction.commit();
    return;
  } catch (e) {
    transaction.rollback(e);
    throw e;
  }
}
