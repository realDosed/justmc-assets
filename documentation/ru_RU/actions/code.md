# Code actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Вызвать функцию | call_function | call_function |  | basic | function_name: text<br/>args: map |  |  | false | false | Вызывает строку кода функции. |
| Выйти из блока с меткой | control_break_label | control |  | basic | label: text | Действием "Пометить код" |  | false | false | Прерывает код, помеченный указанным именем. |
| Вызвать ошибку | control_call_exception | control |  | basic | id: text<br/>message: text<br/>type: enum |  | Рекомендуется использовать это в действии "Уловить ошибку". | false | false | Вызывает определённую ошибку с указанным ID и сообщением. |
| Остановить последовательность | control_end_thread | control |  | basic |  |  | Если действие было использовано в функциях, то остановит родительскую строку, в которой вызвали функцию. | false | false | Останавливает текущую последовательность блоков кода. Любой код после этого блока не будет выполнен. |
| Вернуться до вызова | control_return_function | control |  | basic |  |  | Возвращает до блока вызова текущей функции в родительской строке. | false | false | Останавливает текущую последовательность блоков кода в функции и возвращает к блоку вызова этой самой функции. |
| Пропустить повторение | control_skip_iteration | control |  | basic |  |  |  | false | false | Пропускает одну итерацию в текущем повторении. |
| Остановить повторение | control_stop_repeat | control |  | basic |  |  |  | false | false | Полностью останавливает текущее повторение. |
| Ждать | control_wait | control |  | basic | duration: number<br/>time_unit: enum |  | Минимальная задержка - 1 тик; в режиме Тики можно установить только целые числа. | false | false | Приостанавливает текущую последовательность блоков кода на определённое время. |
| Иначе | else | else |  | container |  |  |  | false | false | ... |
| Запустить процесс | start_process | start_process |  | basic | process_name: text<br/>target_mode: enum<br/>local_variables_mode: enum<br/>args: map |  |  | false | false | Запускает строку кода процесса. |
