import R from 'ramda';
import { stringRender, arrayRender, objectRender } from './renderTypes';

/*
* Object Structure
* {
*   text: String
* }
*/
export const renderText = R.cond([
  [R.isNil, R.always(undefined)],
  [R.is(String), stringRender],
  [R.isArrayLike, arrayRender],
  [R.allPass([R.is(Object), R.has('text')]), objectRender],
  [R.T, R.always(undefined)]
]);
