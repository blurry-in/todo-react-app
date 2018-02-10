export const hideDataAction = name => ({
  type: 'HIDE_DATA',
  payload: {
    name,
  },
});

export const showDataAction = name => ({
  type: 'SHOW_DATA',
  payload: {
    name,
  },
});
