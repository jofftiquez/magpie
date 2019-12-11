import { makeRequest } from './rest';

export default {
  secret: '',
  async create (data) {
    return makeRequest({
      secret: this.secret,
      method: 'POST',
      path: '/charges',
      data
    });
  }
};