import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import project from 'project'

export default [
  thunk,
  project.is.development &&
    project.enableLogger &&
    createLogger({
      collapsed: true,
      timestamp: false
    })
].filter(Boolean)
