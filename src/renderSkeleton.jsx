import React from 'react';
import {isValidElement} from 'react';
import {
  textSkeleton,
  imageSkeleton,
  inputSkeleton,
  videoSkeleton,
  audioSkeleton,
  svgSkeleton,
  canvasSkeleton,
} from './utils/elementSkeletons';

export function renderSkeleton(element) {
  if (element == null) return null;

  if (
    typeof element === 'string' ||
    typeof element === 'number' ||
    typeof element === 'bigint'
  ) {
    return textSkeleton(element.toString());
  }

  if (Array.isArray(element)) {
    return element.map((child, i) =>
      React.createElement('span', {key: i}, renderSkeleton(child))
    );
  }

  if (isValidElement(element)) {
    const reactEl = element;
    const {children, style, ...rest} = reactEl.props || {};

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
        return React.createElement(
          reactEl.type,
          {...rest, style: {...style, minHeight: '1em'}},
          renderSkeleton(children)
        );
    }
  }

  return null;
}
