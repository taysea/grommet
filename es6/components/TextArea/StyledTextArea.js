import styled, { css } from 'styled-components';
import { focusStyle, inputStyle, placeholderStyle } from '../../utils';
import { defaultProps } from '../../default-props';
var plainStyle = css(["border:none;width:100%;-webkit-appearance:none;"]);
var StyledTextArea = styled.textarea.withConfig({
  displayName: "StyledTextArea",
  componentId: "sc-17i3mwp-0"
})(["", " width:100%;", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", ";"], inputStyle, function (props) {
  return props.fillArg && 'height: 100%;';
}, function (props) {
  return props.plain && plainStyle;
}, placeholderStyle, function (props) {
  return props.focus && !props.plain && focusStyle;
}, function (props) {
  return props.theme.textArea && props.theme.textArea.extend;
});
StyledTextArea.defaultProps = {};
Object.setPrototypeOf(StyledTextArea.defaultProps, defaultProps);
export { StyledTextArea };