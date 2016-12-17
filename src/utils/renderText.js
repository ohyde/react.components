/* @flow */

import React from 'react';
import R from 'ramda';

export const renderText = (toRender: any) => {
  return R.cond([
    [R.is(String), stringRender],
    [R.isArrayLike, arrayRender],
    [R.allPass([R.is(Object), R.has('text')]), objectRender],
    [R.T, R.always(undefined)]
  ])(toRender);
};

export const stringRender = (toRender: string) => { return (<div>{toRender}</div>) };
export const objectRender = (toRender: {text: string, classes: string}) => {
  return (
    <div classNames={toRender.classes}>
      {toRender.text}
    </div>
  );
};
export const arrayRender = (toRender: Array<any>) => { return R.map(renderText, toRender); };
