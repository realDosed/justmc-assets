# Code actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Call Function | call_function | call_function |  | function_name: text<br/>args: map | Calls a function code string. |
| Break From Labeled Block | control_break_label | control |  | label: text | Interrupts the code labeled with the specified name. |
| Call Error | control_call_exception | control |  | id: text<br/>message: text<br/>type: enum | Calls a specific error with the specified ID and message. |
| Stop Sequence | control_end_thread | control |  |  | Stops the current code block sequence. Any code after this block will not be executed. |
| Return From Function | control_return_function | control |  |  | Stops the current sequence of code blocks in a function and returns to the function call block. |
| Skip Iteration | control_skip_iteration | control |  |  | Skip one iteration in the current iteration. |
| Stop Repeat | control_stop_repeat | control |  |  | Completely stops the current repeat. |
| Wait | control_wait | control |  | duration: number<br/>time_unit: enum | Pauses the current sequence of code blocks for a certain amount of time. |
| Else | else | else |  |  | ... |
| Start Process | start_process | start_process |  | process_name: text<br/>target_mode: enum<br/>local_variables_mode: enum<br/>args: map | Starts a line of process code. |
