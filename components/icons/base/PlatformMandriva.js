'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props;
      var className = _props.className;
      var colorIndex = _props.colorIndex;
      var _props2 = this.props;
      var a11yTitle = _props2.a11yTitle;
      var size = _props2.size;
      var responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-mandriva', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-mandriva');

      return _react2.default.createElement(
        'svg',
        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle },
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M14.5570931,17.2000288 C11.5359885,19.9198072 8.20256657,21.3464829 5.48168143,21.3477982 L5.47448141,21.3477982 C3.53623738,21.3469582 1.90939399,20.6221567 0.929831949,19.1255136 C-1.43057297,15.5191461 0.857831799,8.79721207 6.0417226,4.11132231 C6.48248351,3.71304149 6.93008445,3.34272071 7.38104539,3 C3.03835634,7.58232954 1.26883266,13.546462 3.44275718,16.8678289 C5.39538971,19.8509662 9.91672716,19.7668791 14.3554206,16.9971815 L13.0316172,15.6656664 C12.8748968,15.5090661 12.6040563,15.4076658 12.3402957,15.4076658 C12.2337355,15.4076658 12.1324553,15.4249459 12.0478551,15.4574659 L7.76936619,17.1139494 C7.66772598,17.1534295 7.57496579,17.1731095 7.49408562,17.1731095 C7.31780525,17.1731095 7.23512508,17.0811893 7.20176501,17.0262292 C7.1495649,16.940789 7.11452483,16.7857487 7.2444851,16.5305082 L9.33848946,12.4490597 C9.48608977,12.1594991 9.43796967,11.7014581 9.23264924,11.4486176 L6.33584321,7.89157019 C6.1409628,7.65300969 6.15512283,7.48608934 6.20168293,7.38816914 C6.235163,7.31748899 6.32816319,7.19892875 6.5736837,7.19892875 C6.6216838,7.19892875 6.67364391,7.20360876 6.72884403,7.21260877 L11.2574135,7.94185029 C11.2922135,7.9476103 11.3294136,7.95037031 11.3676937,7.95037031 C11.6742943,7.95037031 12.0216951,7.77084994 12.1756554,7.53348944 L14.6625406,3.67956142 C14.8154209,3.44304092 14.9649412,3.39336082 15.0633414,3.39336082 C15.1529816,3.39336082 15.368742,3.43704091 15.4313822,3.84156175 L16.1365036,8.3750512 C16.1864237,8.69701187 16.4945844,9.03925258 16.808865,9.12241275 L21.2429943,10.2967352 C21.5752749,10.3851754 21.6415151,10.5556957 21.6513551,10.6492959 C21.6613151,10.7426561 21.6323951,10.9227765 21.3261544,11.0781768 L17.2318659,13.1493811 C16.9415853,13.2957814 16.7119048,13.6941823 16.7297849,14.019503 L16.9825054,18.6005125 C16.9935454,18.7941929 16.9555053,18.9384332 16.8698251,19.0291534 C16.811985,19.0899935 16.7372249,19.1222736 16.6528647,19.1222736 C16.5299844,19.1222736 16.3999042,19.0537534 16.2657439,18.9186332 L14.5570935,17.2000293 L14.5570931,17.2000288 Z M24,11.4025855 C22.9364378,10.4706636 22.9040377,10.2918632 23.5756791,9.04710059 C22.6436372,10.1110228 22.4647168,10.1433029 21.2195942,9.47142148 C22.2838764,10.4035834 22.3162765,10.5826238 21.6445151,11.8272664 C22.576677,10.7632242 22.7552374,10.7310641 24,11.4025855 Z', stroke: 'none' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformMandriva';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];