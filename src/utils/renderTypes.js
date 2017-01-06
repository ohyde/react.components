import React from 'react';
import R from 'ramda';
import { renderText } from './renderText';

export const stringRender = (toRender) => { return (<div>{toRender}</div>) };
export const arrayRender = (toRender) => { return (<div>{R.map(renderText, toRender)}</div>); };

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
