import classNames from 'classnames'
import PropTypes from 'prop-types'
import {useCallback, useState} from 'react'
import Slider from 'rn-range-slider';
import noop from 'lodash/noop';
import '../../style/components/range.scss';
import Thumb from "./rn/Thumb";
import Rail from "./rn/Rail";
import RailSelected from "./rn/RailSelected";
import Label from "./rn/Label";
import Notch from "./rn/Notch";

function AtRange({min = 0, max = 100, value = [0, 0], onChange = noop, onAfterChange = noop, disabled = false}) {
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(v => <Label text={v} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    onChange([low, high]);
  }, []);

  return (
    <Slider
      min={min}
      max={max}
      step={1}
      floatingLabel
      disabled={disabled}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={handleValueChange}
    />
  );
}

AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0
}

AtRange.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  sliderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  railStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  blockSize: PropTypes.number,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func
}

export default AtRange;
