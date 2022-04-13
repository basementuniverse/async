## Table of contents

- [asyncFilter](modules.md#asyncfilter)
- [asyncForEach](modules.md#asyncforeach)
- [asyncMap](modules.md#asyncmap)
- [asyncReduce](modules.md#asyncreduce)

## Functions

### asyncFilter

▸ **asyncFilter**<`T`\>(`array`, `predicate`): `Promise`<`T`[]\>

Async version of `Array.filter`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `predicate` | (`value`: `T`, `index?`: `number`, `array?`: `T`[]) => `Promise`<`boolean`\> |

#### Returns

`Promise`<`T`[]\>

#### Defined in

index.ts:32

___

### asyncForEach

▸ **asyncForEach**<`T`\>(`array`, `predicate`): `Promise`<`void`\>

Async version of `Array.forEach`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `predicate` | (`value`: `T`, `index?`: `number`, `array?`: `T`[]) => `Promise`<`void`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

index.ts:4

___

### asyncMap

▸ **asyncMap**<`TIn`, `TOut`\>(`array`, `predicate`): `Promise`<`TOut`[]\>

Async version of `Array.map`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIn` | `any` |
| `TOut` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `TIn`[] |
| `predicate` | (`value`: `TIn`, `index?`: `number`, `array?`: `TIn`[]) => `Promise`<`TOut`\> |

#### Returns

`Promise`<`TOut`[]\>

#### Defined in

index.ts:20

___

### asyncReduce

▸ **asyncReduce**<`TIn`, `TOut`\>(`array`, `reducer`, `initial`): `Promise`<`TOut`\>

Async version of `Array.reduce`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIn` | `any` |
| `TOut` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `TIn`[] |
| `reducer` | (`previous`: `TOut`, `current`: `TIn`, `index?`: `number`, `array?`: `TIn`[]) => `Promise`<`TOut`\> |
| `initial` | `TOut` |

#### Returns

`Promise`<`TOut`\>

#### Defined in

index.ts:47
