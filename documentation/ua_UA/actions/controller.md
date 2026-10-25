# Controller actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Запуск в окремому потоці | controller_async_run | controller |  |  | Запускає код всередині поршнів в окремому потоці, що може зменшити навантаження. Скасування та повернення події не працюватимуть після поршнів. |
| Ігнорувати виконання | controller_do_not_run | controller |  |  | Ігнорує код, що знаходиться всередині дужок, під час виконання. |
| Зловити помилку | controller_exception | controller |  | variable: variable | Ловить помилку в коді всередині поршнів та присвоює її ідентифікатор змінній (приклад: function_not_found). |
| Ізолювати вибірку | controller_isolated_selection | controller |  | selection_mode: enum | Ізолює вибірку всередині дужок. |
| Позначити код | controller_label | controller |  | label: text | Позначає код між поршнями вказаним ім'ям та дозволяє його перервати. |
| Виміряти час виконання | controller_measure_time | controller |  | variable: variable<br/>duration: enum | Вимірює час виконання коду всередині поршнів та присвоює результат змінній. |
