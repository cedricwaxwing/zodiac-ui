import React from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton } from '@material-ui/core'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, color, size, label, ...props }) => {
  return (
    <MUIButton
      variant={variant}
      color={color}
      size={size}
      // {...props}
    >
      {label}
    </MUIButton>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  /**
   * What background color to use
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'contained',
  color: 'secondary',
  size: 'medium',
  onClick: undefined,
};
