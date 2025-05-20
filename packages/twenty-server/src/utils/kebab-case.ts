import lodashKebabCase from 'lodash.kebabcase';
import { KebabCase, KebabCasedPropertiesDeep } from 'type-fest';
import { transformCaseDeep } from 'src/utils/transform-case-deep';

export const kebabCase = <T>(text: T) =>
  lodashKebabCase(text as unknown as string) as KebabCase<T>;

export const kebabCaseDeep = <T>(value: T): KebabCasedPropertiesDeep<T> =>
  transformCaseDeep<T, KebabCasedPropertiesDeep<T>>(value, kebabCase);
