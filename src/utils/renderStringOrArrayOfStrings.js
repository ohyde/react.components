import React from 'react';
import R from 'ramda';
import { mapIndexed, isObject } from './ramdaUtils';


export const renderStringOrArrayOfStrings = (toRender) => {

  if (R.isNil(toRender)) { return; }

  if (R.isArrayLike(toRender)) {
    return mapIndexed((item, i) => {
    	return renderStringOrArrayOfStrings(item);
    }, toRender);
  }

  if (isObject(typeof toRender)) { return renderObject(toRender); }

  return (<div>{toRender}</div>);
}

const renderObject = (toRender) => {
	if(!R.has('content', toRender)) { return; }

	return (<div>{toRender.content}</div>);
}