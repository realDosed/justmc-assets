# Code actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Вызвать функцию | call_function | call_function |  | function_name: text<br/>args: map | Вызывает строку кода функции. |
| Вийти з блоку з міткою | control_break_label | control |  | label: text | Перериває код, позначений вказаним ім'ям. |
| Викликати помилку | control_call_exception | control |  | id: text<br/>message: text<br/>type: enum | Викликає певну помилку із вказаним ID та повідомленням. |
| Остановить последовательность | control_end_thread | control |  |  | Останавливает текущую последовательность блоков кода. Любой код после этого блока не будет выполнен. |
| Повернутися до виклику | control_return_function | control |  |  | Зупиняє поточну послідовність блоків коду у функції та повертає до блоку виклику цієї самої функції. |
| Пропустити повторення | control_skip_iteration | control |  |  | Пропускає одну ітерацію у поточному повторенні. |
| CONTROL_STOP_REPEAT | control_stop_repeat | control |  |  | ... |
| Ждать | control_wait | control |  | duration: number<br/>time_unit: enum | Приостанавливает текущую последовательность блоков кода на определённое время. |
| Інакше | else | else |  |  | ... |
| Запустить процесс | start_process | start_process |  | process_name: text<br/>target_mode: enum<br/>local_variables_mode: enum<br/>args: map | Запускает строку кода процесса. |
