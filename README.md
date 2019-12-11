# Magpie for Node.js

Node.js client for [Magpie](https://magpie.im/) [API](https://magpie.im/documentation/#section/Introduction).

![npm bundle size](https://img.shields.io/bundlephobia/min/magpie-node?style=flat-square)

### Contents 

- [Charges](#charges)

### Installation

```bash
$ npm install magpie
```

```bash
$ yarn add magpie
```

### Usage

```javascript
import Magpie from 'magpie-node';

// Retrieve the secret key from your magpie 
// dashboard under developers tab.
const magpie = new Magpie(process.env.SECRET_KEY);
```

## Charges

### Create a Charge

> ### magpie.charges.create(payload)

To charge a credit card, you create a charge object. If your API key is in test mode, the supplied card won’t actually be charged, though everything else will occur as if in live mode.

**Payload**

Refer to [Magpie documentation](https://magpie.im/documentation/#operation/createCharge) for request body guidelines.

**Sample**

```js
const payload = {
  amount: 50000,
  currency: 'php',
  source: 'tok_MTQ1ODAyOczNDJkj',
  description: 'Pet food and other supplies',
  statement_descriptor: 'Pet Shop Inc',
  capture: true
}
const charge = await magpie.charges.create(payload);
```

**Success Response** 

`201`

Made with :heart: by Jofferson Ramirez Tiquez