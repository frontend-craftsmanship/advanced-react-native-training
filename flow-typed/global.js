// @flow

type StyleValue = {[key: string]: Object} | number | false | null;
declare type StyleSet = StyleValue | Array<StyleValue>;

declare type ObjectOf<T> = {[string]: T};
