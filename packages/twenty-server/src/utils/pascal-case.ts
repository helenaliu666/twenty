import lodashCamelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';
import { PascalCase, PascalCasedPropertiesDeep } from 'type-fest';
import { transformCaseDeep } from 'src/utils/transform-case-deep';

export const pascalCase = <T>(text: T) =>
  upperFirst(lodashCamelCase(text as unknown as string)) as PascalCase<T>;

export const pascalCaseDeep = <T>(value: T): PascalCasedPropertiesDeep<T> =>
  transformCaseDeep<T, PascalCasedPropertiesDeep<T>>(value, pascalCase);
