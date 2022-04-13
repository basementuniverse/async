/**
 * Async version of `Array.forEach`
 */
export const asyncForEach = async <T = any>(
  array: T[],
  predicate: (
    value: T,
    index?: number,
    array?: T[]
  ) => Promise<void>
): Promise<void> => {
  for (const item of array) {
    await predicate(item);
  }
};

/**
 * Async version of `Array.map`
 */
export const asyncMap = async <TIn = any, TOut = any>(
  array: TIn[],
  predicate: (
    value: TIn,
    index?: number,
    array?: TIn[]
  ) => Promise<TOut>
): Promise<TOut[]> => Promise.all(array.map(predicate));

/**
 * Async version of `Array.filter`
 */
export const asyncFilter = async <T = any>(
  array: T[],
  predicate: (
    value: T,
    index?: number,
    array?: T[]
  ) => Promise<boolean>
): Promise<T[]> =>
  Promise.all(array.map(predicate)).then(results =>
    array.filter((_, index) => results[index])
  );

/**
 * Async version of `Array.reduce`
 */
export const asyncReduce = async <TIn = any, TOut = any>(
  array: TIn[],
  reducer: (
    previous: TOut,
    current: TIn,
    index?: number,
    array?: TIn[]
  ) => Promise<TOut>,
  initial: TOut
): Promise<TOut> => {
  let result: TOut = initial;
  for (const [index, current] of array.entries()) {
    result = await reducer(result, current, index, array);
  }
  return result;
}
