# Controller actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Run On Separate Thread | controller_async_run | controller |  |  | Runs the code inside the pistons on a separate thread, which can reduce load. Undo and redo events will not work after pistons. |
| Ignore Execution | controller_do_not_run | controller |  |  | Ignores the code inside the brackets during execution. |
| Catch Error | controller_exception | controller |  | variable: variable | Catches a code error inside the pistons as a "ID - Message" dictionary, assigns the result to a variable. |
| Isolate Selection | controller_isolated_selection | controller |  | selection_mode: enum | Isolates the selection inside the brackets. |
| Label Code | controller_label | controller |  | label: text | Labels the code between pistons with the specified name and allows it to be interrupted. |
| Measure Execution Time | controller_measure_time | controller |  | variable: variable<br/>duration: enum | Measures the execution time of the code inside the pistons and assigns the result to a variable. |
