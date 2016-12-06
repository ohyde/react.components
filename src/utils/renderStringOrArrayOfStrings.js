/* @flow */

import React from 'react';
import R from 'ramda';
import { mapIndexed, isObject } from './ramdaUtils';


export const renderStringOrArrayOfStrings = (toRender: any) => {

  // const actionToTake = R.cond([
  //   [R.isNil, toRender => undefined ],
  //   [R.isArrayLike, mapRender],
  //   [typeOfIsObject, renderObject],
  //   [R.T, (toRender) => { return stringRender(toRender) }]
  // ]);

  // return actionToTake(toRender);


  if (R.isNil(toRender)) { return; }

  if (R.isArrayLike(toRender)) { return mapRender(toRender); }

  if (isObject(toRender)) { return renderObject(toRender); }

  return stringRender(toRender);
}

const thingWithAString = (theString: string) => theString.length

const typeOfIsObject = (toRender) => { return isObject(typeof toRender) }

const stringRender = (toRender) => { return (<div>{toRender}</div>) }

const mapRender = (toRender) => {
  return mapIndexed(renderStringOrArrayOfStrings, toRender);
}

const renderObject = (toRender) => {
  if(!R.has('content', toRender)) { return; }

  return (<div>{toRender.content}</div>);
}