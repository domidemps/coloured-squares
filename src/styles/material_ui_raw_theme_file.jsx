import {createMuiTheme} from '@material-ui/core/styles'

const rawBaseTheme = {
  palette: {
    type: 'dark',
    background: {
      default: '#1f1f1f',
      paper: '#2f2f2f'
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: '#e0e0e0',
        backgroundColor: '#2f2f2f',
      }
    }
  }
}

export default createMuiTheme(rawBaseTheme)