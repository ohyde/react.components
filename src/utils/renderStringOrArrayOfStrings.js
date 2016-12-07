/* @flow */

import React from 'react';
import R from 'ramda';
import { mapIndexed } from './ramdaUtils';


export const renderStringOrArrayOfStrings = (toRender: any) => {
  return R.cond([
    [R.isNil, R.always(undefined) ],
    [R.isArrayLike, arrayRender],
    [R.is(Object), objectRender],
    [R.T, stringRender]
  ])(toRender);
}

const stringRender = (toRender: string) => { return (<div>{toRender}</div>) }
const arrayRender = (toRender: Array<any>) => { return mapIndexed(renderStringOrArrayOfStrings, toRender); }
const objectRender = (toRender: {content: string}) => {
  if(!R.has('content', toRender)) { return; }

  return (<div>{toRender.content}</div>);
}
