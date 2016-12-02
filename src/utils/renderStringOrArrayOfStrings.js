import React from 'react';
import _ from 'lodash';
import { mapIndexed } from './ramdaUtils';

export const renderStringOrArrayOfStrings = (toRender) => {
  if (_.isNil(toRender)) { return; }

  if (_.isArray(toRender)) {
    return mapIndexed((item, i) => {
      return (<div key={i}>{item.content}</div>);
    }, toRender);
  }

  if (_.isObject(toRender)) { return (<div>{toRender.content}</div>); }

  return (<div>{toRender}</div>);
}
