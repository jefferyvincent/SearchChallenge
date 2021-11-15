import React from 'react';
import {Button} from './MinimalButton.styles'

function MinimalButton({ children, onClick, ...props }) {
  return (
    <Button
      {...props}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default MinimalButton;
