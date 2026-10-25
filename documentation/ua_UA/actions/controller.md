# Controller actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Запуск в окремому потоці | controller_async_run | controller |  | container |  |  | Деякі дії всередині поршнів можуть не працювати. | false | true | Запускає код всередині поршнів в окремому потоці, що може зменшити навантаження. Скасування та повернення події не працюватимуть після поршнів. |
| Ігнорувати виконання | controller_do_not_run | controller |  | container |  |  |  | false | false | Ігнорує код, що знаходиться всередині дужок, під час виконання. |
| Зловити помилку | controller_exception | controller |  | container | variable: variable |  | Не ловить глобальні та критичні помилки. | false | false | Ловить помилку в коді всередині поршнів та присвоює її ідентифікатор змінній (приклад: function_not_found). |
| Ізолювати вибірку | controller_isolated_selection | controller |  | container | selection_mode: enum |  | Вибірка, створена всередині, буде активна лише в межах дужок. | false | false | Ізолює вибірку всередині дужок. |
| Позначити код | controller_label | controller |  | container | label: text |  | Працює у зв'язці з дією "Вийти з блоку з міткою" | false | false | Позначає код між поршнями вказаним ім'ям та дозволяє його перервати. |
| Виміряти час виконання | controller_measure_time | controller |  | container | variable: variable<br/>duration: enum |  | Враховує блоки "Чекати". | false | false | Вимірює час виконання коду всередині поршнів та присвоює результат змінній. |
