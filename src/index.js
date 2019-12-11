import charges from './charges';
import customers from './customers';

export default class Magpie {
  constructor (secret) {
    if (!secret) throw new Error('Private key is required!');
    charges.secret = secret;
    customers.secret = secret;
    this.charges = charges;
    this.customers = customers;
  }
}