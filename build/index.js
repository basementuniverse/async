"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncReduce = exports.asyncFilter = exports.asyncMap = exports.asyncForEach = void 0;
/**
 * Async version of `Array.forEach`
 */
const asyncForEach = async (array, predicate) => {
    for (const item of array) {
        await predicate(item);
    }
};
exports.asyncForEach = asyncForEach;
/**
 * Async version of `Array.map`
 */
const asyncMap = async (array, predicate) => Promise.all(array.map(predicate));
exports.asyncMap = asyncMap;
/**
 * Async version of `Array.filter`
 */
const asyncFilter = async (array, predicate) => Promise.all(array.map(predicate)).then(results => array.filter((_, index) => results[index]));
exports.asyncFilter = asyncFilter;
/**
 * Async version of `Array.reduce`
 */
const asyncReduce = async (array, reducer, initial) => {
    let result = initial;
    for (const [index, current] of array.entries()) {
        result = await reducer(result, current, index, array);
    }
    return result;
};
exports.asyncReduce = asyncReduce;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNJLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFDL0IsS0FBVSxFQUNWLFNBSWtCLEVBQ0gsRUFBRTtJQUNqQixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN4QixNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUMsQ0FBQztBQVhXLFFBQUEsWUFBWSxnQkFXdkI7QUFFRjs7R0FFRztBQUNJLE1BQU0sUUFBUSxHQUFHLEtBQUssRUFDM0IsS0FBWSxFQUNaLFNBSWtCLEVBQ0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBUDNDLFFBQUEsUUFBUSxZQU9tQztBQUV4RDs7R0FFRztBQUNJLE1BQU0sV0FBVyxHQUFHLEtBQUssRUFDOUIsS0FBVSxFQUNWLFNBSXFCLEVBQ1AsRUFBRSxDQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDL0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMzQyxDQUFDO0FBVlMsUUFBQSxXQUFXLGVBVXBCO0FBRUo7O0dBRUc7QUFDSSxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQzlCLEtBQVksRUFDWixPQUtrQixFQUNsQixPQUFhLEVBQ0UsRUFBRTtJQUNqQixJQUFJLE1BQU0sR0FBUyxPQUFPLENBQUM7SUFDM0IsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM5QyxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdkQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUE7QUFmWSxRQUFBLFdBQVcsZUFldkIifQ==