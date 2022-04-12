import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {FontTypes, Colors} from '../../constants';

const AppText = ({
  fontType = FontTypes.regular,
  size = 14,
  color = Colors.black,
  uppercase = false,
  style = null,
  ...props
}) => {
  function getFontWeight() {
    switch (fontType) {
      case FontTypes.bold:
        return '700';

      case FontTypes.semibold:
        return '600';

      case FontTypes.medium:
        return '500';

      case FontTypes.regular:
        return '400';

      default:
        return '400';
    }
  }

  return (
    <Text
      {...props}
      style={[
        props.style,
        style,
        {
          fontSize: size,
          color: color,
          fontWeight: getFontWeight(),
          textTransform: uppercase ? 'uppercase' : 'none',
        },
      ]}
    />
  );
};

AppText.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
  fontType: PropTypes.oneOf([
    FontTypes.bold,
    FontTypes.semibold,
    FontTypes.medium,
    FontTypes.regular,
  ]),
};

export default AppText;
