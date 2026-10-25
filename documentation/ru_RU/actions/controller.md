# Controller actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Запуск в отдельном потоке | controller_async_run | controller |  |  | Запускает код внутри поршней в отдельном потоке, что может уменьшить нагрузку. Отмена и возврат события не будут работать после поршней. |
| Игнорировать выполнение | controller_do_not_run | controller |  |  | Игнорирует код, находящийся внутри скобок, во время выполнения. |
| Уловить ошибку | controller_exception | controller |  | variable: variable | Улавливает ошибку в коде внутри поршней и присваивает её идентификатор к переменной (пример: function_not_found). |
| Изолировать выборку | controller_isolated_selection | controller |  | selection_mode: enum | Изолирует выборку внутри скобок. |
| Пометить код | controller_label | controller |  | label: text | Помечает код между поршнями указанным именем и позволяет его прервать. |
| Замерить время выполнения | controller_measure_time | controller |  | variable: variable<br/>duration: enum | Замеряет время выполнения кода внутри поршней и присваивает результат к переменной. |
