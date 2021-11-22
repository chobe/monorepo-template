/**
 * Generic dictionary
 *
 * @example
 * ```ts
 * const config: Dictionary<string> = {
 *  key: 'value',
 * }
 * ```
 */
export interface Dictionary<T> {
  [k: string]: T;
}

/**
 * Dictionary of string values
 *
 * @example
 * ```ts
 * type keyNames = 'key1' | 'key2'
 *
 * const config: DictionaryOfKeys<keyNames, string> = {
 *  key1: 'value',
 *  key2: 'value',
 * }
 *
 * config.key3 // throws error
 * ``` *
 */
export type DictionaryOfKeys<Keys extends string, T> = {
  [K in Keys]: T | undefined;
};

/**
 * Has Id
 *
 * Is used to check if an object has or extend an id property
 *
 * @example
 * ```ts
 * function listToDictionaryById<T extends hasId>(list: T[]): { [key: string]: T }
 * ```
 */
export interface hasId {
  id: string;
}

/**
 * Infer the first argument of a constructor
 *
 * @example
 * ```ts
 * let dateFirst: ConstructorArg<typeof Date>
 * // -> dateFirst: string | number | Date
 * ```
 */
export type ConstructorArg<C> = C extends {
  new (arg: infer A, ...args: unknown[]): unknown;
}
  ? A
  : never;

/**
 * JSONPrimitive are the permitted primitive values for JSON
 */
export type JSONPrimitive = string | number | boolean | null;

/**
 * Dictionary of JSONValue
 */
export type JSONObject = Dictionary<JSONValue>;

/**
 * Array of JSONValue
 */
export type JSONArray = JSONValue[];

/**
 * Any JSON value permitted by JSON.parse
 */
export type JSONValue = JSONPrimitive | JSONArray | JSONObject;
