const proxy = [
  {
    context: '/api',
    target: 'https://sandbox.api.pagseguro.com/charges',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = proxy;