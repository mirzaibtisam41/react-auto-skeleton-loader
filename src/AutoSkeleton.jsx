import React from 'react';
import {renderSkeleton} from './renderSkeleton';

export function AutoSkeleton({children, loading = true}) {
  if (!loading) return <React.Fragment>{children}</React.Fragment>;
  return <React.Fragment>{renderSkeleton(children)}</React.Fragment>;
}
