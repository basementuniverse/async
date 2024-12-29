[**@basementuniverse/async**](../README.md)

***

[@basementuniverse/async](../globals.md) / asyncReduce

# Function: asyncReduce()

> **asyncReduce**\<`TIn`, `TOut`\>(`array`, `reducer`, `initial`): `Promise`\<`TOut`\>

Async version of `Array.reduce`

## Type Parameters

• **TIn** = `any`

• **TOut** = `any`

## Parameters

### array

`TIn`[]

### reducer

(`previous`, `current`, `index`?, `array`?) => `Promise`\<`TOut`\>

### initial

`TOut`

## Returns

`Promise`\<`TOut`\>

## Defined in

[index.ts:47](https://github.com/basementuniverse/async/blob/b24367ddc53f5950bf46159d9da3857bd4e67a06/index.ts#L47)
