# gux-advanced-dropdown

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                 | Type      | Default     |
| ------------- | ------------- | ------------------------------------------- | --------- | ----------- |
| `disabled`    | `disabled`    | Disable the input and prevent interactions. | `boolean` | `false`     |
| `placeholder` | `placeholder` | The dropdown's placeholder.                 | `string`  | `undefined` |


## Events

| Event   | Description                                            | Type                  |
| ------- | ------------------------------------------------------ | --------------------- |
| `input` | Fires when the value of the advanced dropdown changes. | `CustomEvent<string>` |


## Methods

### `getSelectedValues() => Promise<string[]>`

Gets the currently selected values.

#### Returns

Type: `Promise<string[]>`

The array of selected values.

### `setLabeledBy(id: string) => Promise<void>`



#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| `id` | `string` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*