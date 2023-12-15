function SignUpModalValidator(state) {
  console.log('validator called !');
  console.log('state', state);
  let valid = true;
  Object.keys(state).forEach((fieldKey) => {
    console.log(state?.[fieldKey]);
    if (!state?.[fieldKey].toString().trim()) {
      if (fieldKey === 'pronoun') {
        valid = state.gender !== 'custom';
      } else if (fieldKey !== 'genderOptional') {
        valid = false;
      }
    }
  });
  return valid;
}

export { SignUpModalValidator as validator };
