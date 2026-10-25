# Controller actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Запуск в отдельном потоке | controller_async_run | controller |  | container |  |  | Некоторые действия внутри поршней могут не работать. | false | true | Запускает код внутри поршней в отдельном потоке, что может уменьшить нагрузку. Отмена и возврат события не будут работать после поршней. |
| Игнорировать выполнение | controller_do_not_run | controller |  | container |  |  |  | false | false | Игнорирует код, находящийся внутри скобок, во время выполнения. |
| Уловить ошибку | controller_exception | controller |  | container | variable: variable |  | Не улавливает глобальные и критические ошибки. | false | false | Улавливает ошибку в коде внутри поршней и присваивает её идентификатор к переменной (пример: function_not_found). |
| Изолировать выборку | controller_isolated_selection | controller |  | container | selection_mode: enum |  | Созданная внутри выборка будет активна лишь в рамках скобок. | false | false | Изолирует выборку внутри скобок. |
| Пометить код | controller_label | controller |  | container | label: text |  | Работает в связке с действием "Выйти из блока с меткой" | false | false | Помечает код между поршнями указанным именем и позволяет его прервать. |
| Замерить время выполнения | controller_measure_time | controller |  | container | variable: variable<br/>duration: enum |  | Учитывает блоки "Ждать". | false | false | Замеряет время выполнения кода внутри поршней и присваивает результат к переменной. |
