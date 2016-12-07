/* @flow */

import React from 'react';
import R from 'ramda';
import { mapIndexed } from './ramdaUtils';


export const renderStringOrArrayOfStrings = (toRender: any) => {
  return R.cond([
    [R.isNil, R.always(undefined) ],
    [R.isArrayLike, mapRender],
    [R.is(Object), renderObject],
    [R.T, stringRender]
  ])(toRender);
}

const stringRender = (toRender: any) => { return (<div>{toRender}</div>) }

const mapRender = (toRender: any) => {
  return mapIndexed(renderStringOrArrayOfStrings, toRender);
}

const renderObject = (toRender: any) => {
  if(!R.has('content', toRender)) { return; }

  return (<div>{toRender.content}</div>);
}