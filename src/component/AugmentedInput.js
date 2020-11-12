import React from 'react';
import { Input, Tooltip } from 'antd';
import { inputManager } from '../lib/inputManager';

const AugmentedInput = (props) => {
  const { input, dispatchInput } = props;

  const onChange = React.useCallback(
    (e) => {
      dispatchInput({ type: 'update', data: e.target.value });
    },
    [dispatchInput]
  );

  return (
    <Tooltip
      trigger={['focus']}
      title={inputManager.getTooltipMassage(input, 2)}
    >
      <Input {...props} value={input.value} onChange={onChange} />
    </Tooltip>
  );
};

export default AugmentedInput;
