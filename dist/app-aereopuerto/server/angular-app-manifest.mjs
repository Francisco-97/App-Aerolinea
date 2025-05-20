
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/listaVuelo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23649, hash: 'f18c4a7bbb5558a11182fdc8451d344a913d83f570803ee7b0acf828d4e2df86', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17245, hash: 'b06f8383c15cec5ffdbbb68ea45977fe03210cb7dd4386022cb586efc322f1dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 64877, hash: 'a181e80d35eb804654d5da0e10000a2e1ecca9276d8432e93d9682f4a553aa4d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'listaVuelo/index.html': {size: 25117, hash: '53db80ee0fa6117f2552c493471bb2f91b81f067605e3e0547a86306cd51ea35', text: () => import('./assets-chunks/listaVuelo_index_html.mjs').then(m => m.default)},
    'styles-SX5L76Z2.css': {size: 12484, hash: 'lV2OQlM5mdY', text: () => import('./assets-chunks/styles-SX5L76Z2_css.mjs').then(m => m.default)}
  },
};
