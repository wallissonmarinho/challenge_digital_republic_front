import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

class Float extends React.Component {
  render() {
    const {
      prefix,
      suffix,
      name,
      onChange,
      inputRef,
      decimal,
      ...other
    } = this.props;

    return (
      <NumberFormat
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              name,
              value: values.formattedValue
            }
          });
        }}
        fixedDecimalScale
        decimalScale={decimal}
        decimalSeparator="."
        prefix={prefix}
        suffix={suffix}
        {...other}
      />
    );
  }
}

Float.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Float;
