'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

const RoWriter = ( items, maxWidth ) => {
	
	const number = items.length;

	const rows = Math.ceil(number / maxWidth);

	const width = Math.ceil(number / rows);

	const rowMaker = (row, rowWidth, source, sourceLength) => {

			const insertPoint = (row * rowWidth);

			const rowLength = sourceLength - insertPoint >= rowWidth ? rowWidth : sourceLength % rowWidth;


			let rowArray = [];

			for (let i = 0; i < rowLength; i++){

			rowArray.push(source[insertPoint+i]); 

			}

			return rowArray

	};


	let outputArray = [];

	for (let i=0; i<rows; i++){

		outputArray.push( rowMaker(i, width, items, number ));

	}

	return outputArray
};

var DefaultRow = function DefaultRow(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, props.children);
};

var RoWrite = function RoWrite(_ref) {
  var className = _ref.className,
      list = _ref.list,
      maxWidth = _ref.maxWidth,
      rowComponent = _ref.rowComponent,
      setWidth = _ref.setWidth;
  var width = maxWidth;
  var roList = RoWriter(list, width);
  var length = roList[0].length;
  typeof setWidth === 'function' ? setWidth(length) : null;
  var Row = rowComponent || DefaultRow;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: '100%'
    }
  }, roList.map(function (r, i) {
    return /*#__PURE__*/React.createElement(Row, {
      style: {
        justifyContent: "".concat(r.length < length ? 'flexStart' : null)
      },
      key: i
    }, r.map(function (item, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, item);
    }));
  }));
};

module.exports = RoWrite;
