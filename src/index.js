import React, { memo, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import iconDropdown from './images/icon-dropdown.png';

const AppSelect = ({
  items,
  theme,
  placeholder,
  defaultValue,
  valueKey,
  labelKey,
  containerStyle,
  optionContainerStyle,
  placeholderContainerStyle,
  placeholderStyle,
  textOptionStyle,
  iconStyle,
  iconDropdownComponent,
  onChange,
}) => {
  const [optionSelected, setOptionSelected] = useState(defaultValue);
  const [showOptionsBox, setShowOptionsBox] = useState(false);

  useEffect(() => {
    setOptionSelected(defaultValue);
  }, [defaultValue]);

  const objSelected = items.find((item) => (
    item[valueKey] ? item[valueKey].toString() === optionSelected.toString() : null
  ));

  const onSelectOption = (item) => () => {
    onChange(item[valueKey]);
    setOptionSelected(item[valueKey]);

    if (theme === 'dropdown') {
      setShowOptionsBox(false);
    }
  };

  const onToggleOptionsBox = () => {
    setShowOptionsBox((prevState) => !prevState);
  };

  let comp = null;

  const IconDropdownComponent = (() => iconDropdownComponent)();

  const optionsList = items.map((item) => {
    const isSelected = item[valueKey]
      && (item[valueKey].toString() === optionSelected.toString());

    return (
      <TouchableWithoutFeedback onPress={onSelectOption(item)} key={item[valueKey]}>
        <View style={[styles.option, optionContainerStyle]}>
          <View
            style={[
              styles.roundCheckbox,
              isSelected && styles.roundCheckboxActive,
            ]}
          >
            {isSelected && <View style={styles.roundCheckboxCore} />}
          </View>

          <Text style={[styles.txtOption, textOptionStyle]}>{item[labelKey]}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  if (theme === 'dropdown') {
    comp = (
      <>
        <TouchableWithoutFeedback onPress={onToggleOptionsBox}>
          <View style={[styles.selectInput, placeholderContainerStyle]}>
            <Text style={[styles.txtPlaceholder, placeholderStyle]}>
              {objSelected ? objSelected[labelKey] : placeholder}
            </Text>

            <View style={showOptionsBox && styles.rotateIcon}>
              {
                iconDropdownComponent ? (
                  <IconDropdownComponent style={[styles.icon, iconStyle]} />
                ) : (
                  <Image source={iconDropdown} style={[styles.icon, iconStyle]} />
                )
              }
            </View>
          </View>
        </TouchableWithoutFeedback>

        {
          showOptionsBox && (
            <View style={styles.optionsBox}>
              {optionsList}
            </View>
          )
        }
      </>
    );
  } else {
    comp = optionsList;
  }

  return (
    <View style={containerStyle}>
      {comp}
    </View>
  );
};

AppSelect.propTypes = {
  items: PropTypes.instanceOf(Array),
  theme: PropTypes.oneOf(['simple', 'dropdown']),
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  containerStyle: PropTypes.instanceOf(Object),
  optionContainerStyle: PropTypes.instanceOf(Object),
  placeholderContainerStyle: PropTypes.instanceOf(Object),
  placeholderStyle: PropTypes.instanceOf(Object),
  textOptionStyle: PropTypes.instanceOf(Object),
  iconStyle: PropTypes.instanceOf(Object),
  iconDropdownComponent: PropTypes.func,
  onChange: PropTypes.func,
};

AppSelect.defaultProps = {
  items: [],
  theme: 'simple',
  valueKey: 'value',
  labelKey: 'label',
  placeholder: '',
  containerStyle: null,
  optionContainerStyle: null,
  placeholderContainerStyle: null,
  placeholderStyle: null,
  textOptionStyle: null,
  iconStyle: null,
  defaultValue: '',
  iconDropdownComponent: null,
  onChange: () => { },
};

export default memo(AppSelect);
