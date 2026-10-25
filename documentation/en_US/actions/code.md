# Code actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Call Function | call_function | call_function |  | basic | function_name: text<br/>args: map |  |  | false | false | Calls a function code string. |
| Break From Labeled Block | control_break_label | control |  | basic | label: text | Action "Label Code" |  | false | false | Interrupts the code labeled with the specified name. |
| Call Error | control_call_exception | control |  | basic | id: text<br/>message: text<br/>type: enum |  | It is recommended to use this in the Catch Error action. | false | false | Calls a specific error with the specified ID and message. |
| Stop Sequence | control_end_thread | control |  | basic |  |  | If the action was used in functions, it will stop the parent line where the function was called. | false | false | Stops the current code block sequence. Any code after this block will not be executed. |
| Return From Function | control_return_function | control |  | basic |  |  | Returns up to the current function call block in the parent row. | false | false | Stops the current sequence of code blocks in a function and returns to the function call block. |
| Skip Iteration | control_skip_iteration | control |  | basic |  |  |  | false | false | Skip one iteration in the current iteration. |
| Stop Repeat | control_stop_repeat | control |  | basic |  |  |  | false | false | Completely stops the current repeat. |
| Wait | control_wait | control |  | basic | duration: number<br/>time_unit: enum |  | Minimum delay is 1 tick; in Tiki mode, only whole numbers can be set. | false | false | Pauses the current sequence of code blocks for a certain amount of time. |
| Else | else | else |  | container |  |  |  | false | false | ... |
| Start Process | start_process | start_process |  | basic | process_name: text<br/>target_mode: enum<br/>local_variables_mode: enum<br/>args: map |  |  | false | false | Starts a line of process code. |
