export const RESTORE_STATE = 'RESTORE_STATE'

//TODO: Decouple from localStorage
export function restoreState() {
  const stateJSON = localStorage.getItem('appState')
  const state = JSON.parse(stateJSON)
  return {
    type: RESTORE_STATE,
    payload: state
  }
}

export function saveState(state) {
  localStorage.setItem('appState', JSON.stringify(state))
}
