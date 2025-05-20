import lodashSnakeCase from 'lodash.snakecase';
import { SnakeCase, SnakeCasedPropertiesDeep } from 'type-fest';
import { transformCaseDeep } from 'src/utils/transform-case-deep';

export const snakeCase = <T>(text: T) =>
  lodashSnakeCase(text as unknown as string) as SnakeCase<T>;

export const snakeCaseDeep = <T>(value: T): SnakeCasedPropertiesDeep<T> =>
  transformCaseDeep<T, SnakeCasedPropertiesDeep<T>>(value, snakeCase);
