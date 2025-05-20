import isObject from 'lodash.isobject';

export const transformCaseDeep = <T, R>(value: T, caseFn: (text: string) => string): R => {
  if (Array.isArray(value)) {
    return value.map((item) => transformCaseDeep(item, caseFn)) as unknown as R;
  }

  if (isObject(value)) {
    const result: Record<string, unknown> = {};
    for (const key in value) {
      result[caseFn(key)] = transformCaseDeep((value as Record<string, unknown>)[key], caseFn);
    }
    return result as unknown as R;
  }

  return value as unknown as R;
};
