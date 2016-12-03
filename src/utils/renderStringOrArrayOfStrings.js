import React from 'react';
import _ from 'lodash';
import { mapIndexed } from './ramdaUtils';

export const renderStringOrArrayOfStrings = (toRender) => {
  if (_.isNil(toRender)) { return; }

  if (_.isArray(toRender)) {
    return mapIndexed((item, i) => {
    	return renderStringOrArrayOfStrings(item);
    }, toRender);
  }

  if (_.isObject(toRender)) { return renderObject(toRender); }

  return (<div>{toRender}</div>);
}

const renderObject = (toRender) => {
	if(!_.has(toRender, 'content')) { return; }

	return (<div>{toRender.content}</div>);
}