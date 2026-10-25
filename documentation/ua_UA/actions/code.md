# Code actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Вызвать функцию | call_function | call_function |  | basic | function_name: text<br/>args: map |  |  | false | false | Вызывает строку кода функции. |
| Вийти з блоку з міткою | control_break_label | control |  | basic | label: text | Дією "Позначити код" |  | false | false | Перериває код, позначений вказаним ім'ям. |
| Викликати помилку | control_call_exception | control |  | basic | id: text<br/>message: text<br/>type: enum |  | Рекомендується використовувати це в дії "Перехопити помилку". | false | false | Викликає певну помилку із вказаним ID та повідомленням. |
| Остановить последовательность | control_end_thread | control |  | basic |  |  | Якщо дію було використано у функціях, то зупинить батьківський рядок, у якому викликали функцію. | false | false | Останавливает текущую последовательность блоков кода. Любой код после этого блока не будет выполнен. |
| Повернутися до виклику | control_return_function | control |  | basic |  |  | Повертає до блоку виклику поточної функції у батьківському рядку. | false | false | Зупиняє поточну послідовність блоків коду у функції та повертає до блоку виклику цієї самої функції. |
| Пропустити повторення | control_skip_iteration | control |  | basic |  |  |  | false | false | Пропускає одну ітерацію у поточному повторенні. |
| CONTROL_STOP_REPEAT | control_stop_repeat | control |  | basic |  |  |  | false | false | ... |
| Ждать | control_wait | control |  | basic | duration: number<br/>time_unit: enum |  | Мінімальна затримка - 1 тік; у режимі Тіки можна встановити лише цілі числа. | false | false | Приостанавливает текущую последовательность блоков кода на определённое время. |
| Інакше | else | else |  | container |  |  |  | false | false | ... |
| Запустить процесс | start_process | start_process |  | basic | process_name: text<br/>target_mode: enum<br/>local_variables_mode: enum<br/>args: map |  |  | false | false | Запускает строку кода процесса. |
