/**
 * Async version of `Array.forEach`
 */
export declare const asyncForEach: <T = any>(array: T[], predicate: (value: T, index?: number | undefined, array?: T[] | undefined) => Promise<void>) => Promise<void>;
/**
 * Async version of `Array.map`
 */
export declare const asyncMap: <TIn = any, TOut = any>(array: TIn[], predicate: (value: TIn, index?: number | undefined, array?: TIn[] | undefined) => Promise<TOut>) => Promise<TOut[]>;
/**
 * Async version of `Array.filter`
 */
export declare const asyncFilter: <T = any>(array: T[], predicate: (value: T, index?: number | undefined, array?: T[] | undefined) => Promise<boolean>) => Promise<T[]>;
/**
 * Async version of `Array.reduce`
 */
export declare const asyncReduce: <TIn = any, TOut = any>(array: TIn[], reducer: (previous: TOut, current: TIn, index?: number | undefined, array?: TIn[] | undefined) => Promise<TOut>, initial: TOut) => Promise<TOut>;
