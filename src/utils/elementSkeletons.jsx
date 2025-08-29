import {createElement} from 'react';
import {baseSkeletonStyle} from './baseStyle';

export const textSkeleton = (element) =>
  createElement('span', {
    style: {
      ...baseSkeletonStyle,
      display: 'inline-block',
      width: `${String(element).length * 8}px`,
      height: '1em',
      borderRadius: '4px',
      color: 'transparent',
    },
  });

export const imageSkeleton = (style, rest) =>
  createElement('div', {
    ...rest,
    style: {
      ...baseSkeletonStyle,
      display: 'inline-block',
      width: (style && style.width) || '120px',
      height: (style && style.height) || '120px',
      borderRadius: '8px',
    },
  });

export const inputSkeleton = (type, style, rest) =>
  createElement('div', {
    ...rest,
    style: {
      ...baseSkeletonStyle,
      display: 'inline-block',
      width: (style && style.width) || '200px',
      height:
        (style && style.height) || (type === 'textarea' ? '80px' : '40px'),
      borderRadius: '6px',
    },
  });

export const videoSkeleton = (style, rest) =>
  createElement('div', {
    ...rest,
    style: {
      ...baseSkeletonStyle,
      display: 'block',
      width: (style && style.width) || '320px',
      height: (style && style.height) || '180px',
      borderRadius: '10px',
      backgroundColor: '#d1d5db',
    },
  });

export const audioSkeleton = (style, rest) =>
  createElement('div', {
    ...rest,
    style: {
      ...baseSkeletonStyle,
      display: 'block',
      width: (style && style.width) || '300px',
      height: (style && style.height) || '40px',
      borderRadius: '6px',
      backgroundColor: '#d1d5db',
    },
  });

export const svgSkeleton = (style, rest) =>
  createElement('div', {
    ...rest,
    style: {
      ...baseSkeletonStyle,
      display: 'inline-block',
      width: (style && style.width) || '50px',
      height: (style && style.height) || '50px',
      borderRadius: '8px',
    },
  });

export const canvasSkeleton = (style, rest) =>
  createElement('div', {
    ...rest,
    style: {
      ...baseSkeletonStyle,
      display: 'inline-block',
      width: (style && style.width) || '300px',
      height: (style && style.height) || '150px',
      borderRadius: '6px',
    },
  });
