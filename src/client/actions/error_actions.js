export const SHOW_ERROR = 'show_error'

export const showErrorAlert = () => dispatch => {
  alert('Något gick fel :(', 'Det är vårt fel, gå och gör något annat')
  dispatch({ type: SHOW_ERROR })
}
