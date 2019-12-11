import request from 'request';
const MAGPIE_API_URL = 'https://api.magpie.im/v1.1';

export const makeRequest = (opts) => {
  return new Promise((resolve, reject) => {
    const { secret, method, path, data } = opts;
    const options = {
      method,
      url: `${MAGPIE_API_URL}/${path}`,
      json: true,
      auth: {
        username: secret,
        password: ''
      }
    };

    if (data) {
      options.body = data;
    }

    request(options, (err, res, body) => {
      if (err) reject(err);
      if (res && res.statusCode && res.statusCode >= 400) {
        reject(body);
      }
      resolve(body);
    });
  });
}