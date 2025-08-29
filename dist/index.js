'use strict';

var React = require('react');

const baseSkeletonStyle = {
  backgroundColor: '#e5e7eb',
  animation: 'pulse 1.5s infinite',
  opacity: 0.6,
  pointerEvents: 'none',
  userSelect: 'none'
};

const textSkeleton = element => /*#__PURE__*/React.createElement('span', {
  style: {
    ...baseSkeletonStyle,
    display: 'inline-block',
    width: `${String(element).length * 8}px`,
    height: '1em',
    borderRadius: '4px',
    color: 'transparent'
  }
});
const imageSkeleton = (style, rest) => /*#__PURE__*/React.createElement('div', {
  ...rest,
  style: {
    ...baseSkeletonStyle,
    display: 'inline-block',
    width: style && style.width || '120px',
    height: style && style.height || '120px',
    borderRadius: '8px'
  }
});
const inputSkeleton = (type, style, rest) => /*#__PURE__*/React.createElement('div', {
  ...rest,
  style: {
    ...baseSkeletonStyle,
    display: 'inline-block',
    width: style && style.width || '200px',
    height: style && style.height || (type === 'textarea' ? '80px' : '40px'),
    borderRadius: '6px'
  }
});
const videoSkeleton = (style, rest) => /*#__PURE__*/React.createElement('div', {
  ...rest,
  style: {
    ...baseSkeletonStyle,
    display: 'block',
    width: style && style.width || '320px',
    height: style && style.height || '180px',
    borderRadius: '10px',
    backgroundColor: '#d1d5db'
  }
});
const audioSkeleton = (style, rest) => /*#__PURE__*/React.createElement('div', {
  ...rest,
  style: {
    ...baseSkeletonStyle,
    display: 'block',
    width: style && style.width || '300px',
    height: style && style.height || '40px',
    borderRadius: '6px',
    backgroundColor: '#d1d5db'
  }
});
const svgSkeleton = (style, rest) => /*#__PURE__*/React.createElement('div', {
  ...rest,
  style: {
    ...baseSkeletonStyle,
    display: 'inline-block',
    width: style && style.width || '50px',
    height: style && style.height || '50px',
    borderRadius: '8px'
  }
});
const canvasSkeleton = (style, rest) => /*#__PURE__*/React.createElement('div', {
  ...rest,
  style: {
    ...baseSkeletonStyle,
    display: 'inline-block',
    width: style && style.width || '300px',
    height: style && style.height || '150px',
    borderRadius: '6px'
  }
});

function renderSkeleton(element) {
  if (element == null) return null;
  if (typeof element === 'string' || typeof element === 'number' || typeof element === 'bigint') {
    return textSkeleton(element.toString());
  }
  if (Array.isArray(element)) {
    return element.map((child, i) => /*#__PURE__*/React.createElement('span', {
      key: i
    }, renderSkeleton(child)));
  }
  if (/*#__PURE__*/React.isValidElement(element)) {
    const reactEl = element;
    const {
      children,
      style,
      ...rest
    } = reactEl.props || {};
    switch (reactEl.type) {
      case 'img':
        return imageSkeleton(style, rest);
      case 'input':
      case 'textarea':
      case 'select':
        return inputSkeleton(reactEl.type, style, rest);
      case 'video':
        return videoSkeleton(style, rest);
      case 'audio':
        return audioSkeleton(style, rest);
      case 'svg':
        return svgSkeleton(style, rest);
      case 'canvas':
        return canvasSkeleton(style, rest);
      default:
        return /*#__PURE__*/React.createElement(reactEl.type, {
          ...rest,
          style: {
            ...style,
            minHeight: '1em'
          }
        }, renderSkeleton(children));
    }
  }
  return null;
}

function AutoSkeleton({
  children,
  loading = true
}) {
  if (!loading) return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderSkeleton(children));
}

exports.AutoSkeleton = AutoSkeleton;
