# Controller actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Run On Separate Thread | controller_async_run | controller |  | container |  |  | Some actions inside pistons may not work. | false | true | Runs the code inside the pistons on a separate thread, which can reduce load. Undo and redo events will not work after pistons. |
| Ignore Execution | controller_do_not_run | controller |  | container |  |  |  | false | false | Ignores the code inside the brackets during execution. |
| Catch Error | controller_exception | controller |  | container | variable: variable |  | Does not catch global or fatal errors. | false | false | Catches a code error inside the pistons as a "ID - Message" dictionary, assigns the result to a variable. |
| Isolate Selection | controller_isolated_selection | controller |  | container | selection_mode: enum |  | The selection created inside will only be active within the brackets. | false | false | Isolates the selection inside the brackets. |
| Label Code | controller_label | controller |  | container | label: text |  | Works together with the "Break From Labeled Block" action | false | false | Labels the code between pistons with the specified name and allows it to be interrupted. |
| Measure Execution Time | controller_measure_time | controller |  | container | variable: variable<br/>duration: enum |  | Accounts for "Wait" blocks. | false | false | Measures the execution time of the code inside the pistons and assigns the result to a variable. |
