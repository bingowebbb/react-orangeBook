const {
  NODE_ENV,
  REACT_APP_REMOTE,
  REACT_APP_BASENAME,
  REACT_APP_ENABLE_LOGGER
} = process.env

const project = {
  is: {
    development: NODE_ENV === 'development',
    production: NODE_ENV === 'production',
    test: NODE_ENV === 'test'
  },
  enableLogger: REACT_APP_ENABLE_LOGGER === 'true',
  remote: REACT_APP_REMOTE || '/api',
  router: {
    basename: REACT_APP_BASENAME || '/'
  },
  ga: 'UA-97991350-2'
}

export default project

