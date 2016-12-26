import React from 'react';
import R from 'ramda';

export const renderText = (toRender) => {
  return R.cond([
    [R.is(String), stringRender],
    [R.isArrayLike, arrayRender],
    [R.allPass([R.is(Object), R.has('text')]), objectRender],
    [R.T, R.always(undefined)]
  ])(toRender);
};

export const stringRender = (toRender) => { return (<div>{toRender}</div>) };
export const arrayRender = (toRender) => { return R.map(renderText, toRender); };

export const objectRender = (toRender) => {
  return R.cond([
    [R.has('element'), objectRenderWithElement],
    [R.T, objectRenderInDiv]
  ])(toRender);
};
export const objectRenderInDiv = (toRender) => {
  return (
    <div className={toRender.classes}>
      {toRender.text}
    </div>
  );
}
export const objectRenderWithElement = (toRender) => {
  return (
    <toRender.element className={toRender.classes}>
      {toRender.text}
    </toRender.element>
  );
}
