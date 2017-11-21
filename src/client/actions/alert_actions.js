import Alert from 'react-s-alert'

export const showSuccessAlert = text => dispatch => {
  Alert.success(text, {
    position: 'top-right',
    effect: 'slide',
    beep: false,
    timeout: 4000,
    offset: 30
  })
}

export const showErrorAlert = text => dispatch => {
  Alert.error(text, {
    position: 'top-right',
    effect: 'slide',
    beep: false,
    timeout: 4000,
    offset: 30
  })
}
