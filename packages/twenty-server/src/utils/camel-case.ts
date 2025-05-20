import lodashCamelCase from 'lodash.camelcase';
import { CamelCase, CamelCasedPropertiesDeep } from 'type-fest';
import { transformCaseDeep } from 'src/utils/transform-case-deep';

export const camelCase = <T>(text: T) =>
  lodashCamelCase(text as unknown as string) as CamelCase<T>;

export const camelCaseDeep = <T>(value: T): CamelCasedPropertiesDeep<T> =>
  transformCaseDeep<T, CamelCasedPropertiesDeep<T>>(value, camelCase);
