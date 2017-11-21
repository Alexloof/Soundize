import Alert from 'react-s-alert'

export const showSuccessAlert = text => dispatch => {
  Alert.success(text, {
    position: 'top-right',
    effect: 'slide',
    beep: false,
    timeout: 3000,
    offset: 30
  })
}
