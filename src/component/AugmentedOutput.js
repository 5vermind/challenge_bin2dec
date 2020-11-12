import React from 'react';
import { inputManager } from '../lib/inputManager';
import { Input, Tooltip } from 'antd';

const AugmentedOutput = (props) => {
  const { input } = props;

  return (
    <Tooltip
      title={inputManager.getTooltipMassage(input, 10)}
      placement="bottomLeft"
    >
      <Input {...props} value={input.valueInDec} disabled />
    </Tooltip>
  );
};

export default AugmentedOutput;
