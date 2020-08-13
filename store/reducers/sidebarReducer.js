import * as actionTypes from "../actions/actionTypes"

const initialState = {
  isOpen: false,
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE:
      let prev = state.isOpen
      state.isOpen = !prev
      return { ...state }
    default:
      return state
  }
}

export default sidebarReducer
