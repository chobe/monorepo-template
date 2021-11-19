/**
 * @public
 */
export type ResolveHandler<T> = (value: T | PromiseLike<T>) => void;
/**
 * @public
 */
export type RejectHandler = (reason: unknown) => void;

/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
class Deferred<T> {
  __promise: Promise<T>;
  __resolve!: ResolveHandler<T>;
  __reject!: RejectHandler;
  constructor() {
    this.__promise = new Promise((resolve, reject) => {
      this.__resolve = resolve;
      this.__reject = reject;
    });
  }
  get promise(): Promise<T> {
    return this.__promise;
  }
  get resolve(): ResolveHandler<T> {
    return this.__resolve;
  }
  get reject(): RejectHandler {
    return this.__reject;
  }
}
export default Deferred;
