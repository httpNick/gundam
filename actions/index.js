export const toggleChoice = (text, checked) => {
  return {
    type: 'TOGGLE_CHOICE',
    text,
    checked
  }
};
