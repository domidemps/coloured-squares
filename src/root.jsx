import React from 'react'
import {Provider} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {PersistGate} from 'redux-persist/integration/react'

import theme from 'styles/material_ui_raw_theme_file'
import MainPage from './containers/MainPage'
import {persistor, store} from './store/configureStore'

require('./main.css')

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <div>
            <CssBaseline />
            <MainPage />
          </div>
        </MuiThemeProvider>
        </PersistGate>
    </Provider>
  )
}
export default App