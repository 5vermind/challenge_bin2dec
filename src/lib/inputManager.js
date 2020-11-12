export const inputManager = {
  state: {
    VALID: 0,
    INVALID_NO_MATCH_BASE: 1,
    INVALID_START_WITH_0: 2,
    INVALID_NOT_NUMBER: 3,
  },
  validate: (inputState) => {
    const inputValue = inputState.value;
    const regexBin = /^[0-1]+$/;
    const regexStartWith0 = /^0.\b$/;
    const regexNotNumber = /^[\D]+$/;

    if (inputValue === '') {
      return inputManager.state.VALID;
    }
    if (inputValue.match(regexNotNumber)) {
      return inputManager.state.INVALID_NOT_NUMBER;
    } else if (inputValue.match(regexStartWith0)) {
      return inputManager.state.INVALID_START_WITH_0;
    } else if (!inputValue.match(regexBin)) {
      return inputManager.state.INVALID_NO_MATCH_BASE;
    }
    return inputManager.state.VALID;
  },
  getTooltipMassage: (input, base) => {
    if (base === 2) {
      if (input.init) {
        return 'Enter a number';
      }
      if (input.valid === inputManager.state.INVALID_NOT_NUMBER) {
        return 'You can only type number';
      } else if (input.valid === inputManager.state.INVALID_NO_MATCH_BASE) {
        return `You have to type Binary`;
      } else if (input.valid === inputManager.state.INVALID_START_WITH_0) {
        return 'You can not start number with 0';
      } else {
        return input.value;
      }
    } else if (base === 10) {
      if (input.valid === inputManager.VALID) {
        return `${input.valueInDec}`;
      }
    }
  },
};
