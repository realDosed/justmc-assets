# Code actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Вызвать функцию | call_function | call_function |  | function_name: text<br/>args: map | Вызывает строку кода функции. |
| Выйти из блока с меткой | control_break_label | control |  | label: text | Прерывает код, помеченный указанным именем. |
| Вызвать ошибку | control_call_exception | control |  | id: text<br/>message: text<br/>type: enum | Вызывает определённую ошибку с указанным ID и сообщением. |
| Остановить последовательность | control_end_thread | control |  |  | Останавливает текущую последовательность блоков кода. Любой код после этого блока не будет выполнен. |
| Вернуться до вызова | control_return_function | control |  |  | Останавливает текущую последовательность блоков кода в функции и возвращает к блоку вызова этой самой функции. |
| Пропустить повторение | control_skip_iteration | control |  |  | Пропускает одну итерацию в текущем повторении. |
| Остановить повторение | control_stop_repeat | control |  |  | Полностью останавливает текущее повторение. |
| Ждать | control_wait | control |  | duration: number<br/>time_unit: enum | Приостанавливает текущую последовательность блоков кода на определённое время. |
| Иначе | else | else |  |  | ... |
| Запустить процесс | start_process | start_process |  | process_name: text<br/>target_mode: enum<br/>local_variables_mode: enum<br/>args: map | Запускает строку кода процесса. |
