import React from 'react';
import AugmentedInput from './AugmentedInput';
import { ArrowDownOutlined } from '@ant-design/icons';
import { inputManager } from '../lib/inputManager';
import AugmentedOutput from './AugmentedOutput';

const ManageConvert = () => {
  const reducer = React.useCallback((state, action) => {
    const newState = { ...state };

    switch (action.type) {
      case 'update':
        newState.value = action.data;
        if (newState.init) {
          newState.init = false;
        }
        newState.valid = inputManager.validate(newState);
        newState.valueInDec =
          action.data === '' || newState.valid
            ? ''
            : String(parseInt(action.data, 2));
        return newState;
      default:
        return newState;
    }
  }, []);

  const [input, dispatchInput] = React.useReducer(reducer, {
    value: '',
    init: true,
    valid: true,
    valueInDec: '',
  });

  return (
    <>
      <AugmentedInput
        placeholder="Binary"
        suffix="(2)"
        input={input}
        dispatchInput={dispatchInput}
      />
      <ArrowDownOutlined />
      <AugmentedOutput placeholder="decimal" suffix="(10)" input={input} />
    </>
  );
};

export default ManageConvert;
