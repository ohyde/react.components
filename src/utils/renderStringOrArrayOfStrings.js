/* @flow */

import React from 'react';
import R from 'ramda';
import { mapIndexed } from './ramdaUtils';

export const renderStringOrArrayOfStrings = (toRender: any) => {
  return R.cond([
    [R.is(String), stringRender],
    [R.isArrayLike, arrayRender],
    [R.allPass([R.is(Object), R.has('content')]), objectRender],
    [R.T, R.always(undefined)]
  ])(toRender);
};

const stringRender = (toRender: string) => { return (<div>{toRender}</div>) };
const arrayRender = (toRender: Array<any>) => { return mapIndexed(renderStringOrArrayOfStrings, toRender); };
const objectRender = (toRender: {content: string}) => { return (<div>{toRender.content}</div>); };
