import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

class Integer extends React.Component {
  static propTypes = {
    maxLength: PropTypes.number,
  };

  static defaultProps = {
    maxLength: 11,
  };

  render() {
    const { id, name, onChange, maxLength, inputRef, ...other } = this.props;
    return (
      <NumberFormat
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              id,
              name,
              value: values.formattedValue.replace(/[^0-9]/g, "").replace(".", ""),
            },
          });
        }}
        isAllowed={values => {
          const { formattedValue } = values;
          return formattedValue.length <= maxLength;
        }}
        {...other}
      />
    );
  }
}

export default Integer;
