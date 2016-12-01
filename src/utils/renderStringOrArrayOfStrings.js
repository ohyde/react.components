import _ from 'lodash';
import { mapIndexed } from './ramdaUtils';

export const renderStringOrArrayOfStrings = (toRender) => {
  if (_.isNil(toRender)) { return; }

  if (_.isObject(toRender)) { return (<div>{toRender.content}</div>); }
                                      
  if (_.isArray(toRender)) {
    return mapIndexed((item, i) => {
      return (<div classNames={item.classes} key={i}>{item.content}</div>);
    }, toRender);
  }

  return (<div>{toRender}</div>);
}
