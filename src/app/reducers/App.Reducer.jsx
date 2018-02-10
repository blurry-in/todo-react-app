const initialState = {
  dataVisible: false,
};

const appReducer = (state = initialState, action) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case 'HIDE_DATA':
      tempState.dataVisible = false;
      break;
    case 'SHOW_DATA':
      tempState.dataVisible = true;
      break;
    default:
  }
  return tempState;
};

export default appReducer;
