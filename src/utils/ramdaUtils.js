/* @flow */

import R from 'ramda';

export const mapIndexed = R.addIndex(R.map);
export const defaultToUndefined = R.defaultTo(undefined);
