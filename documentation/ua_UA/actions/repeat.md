# Repeat actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Прохід по суміжних блоках | repeat_adjacently | repeat |  | container | variable: variable<br/>origin: location<br/>change_rotation: enum<br/>include_self: enum<br/>pattern: enum |  |  | false | false | Присвоює поточне місцезнаходження у вказану змінну серед сусідніх блоків відносно заданого місцезнаходження. |
| Прохід по списку | repeat_for_each_in_list | repeat |  | container | index_variable: variable<br/>value_variable: variable<br/>list: array |  |  | false | false | Звертається до кожного елемента із вказаного списку та видає його індекс і значення у вказані змінні. |
| Прохід по словнику | repeat_for_each_map_entry | repeat |  | container | key_variable: variable<br/>value_variable: variable<br/>map: map |  |  | false | false | Звертається до кожного елемента із вказаного словника та видає його індекс і значення у вказані змінні. |
| REPEAT_FOREVER | repeat_forever | repeat |  | container |  |  |  | false | false | ... |
| Цикл із лічильником | repeat_multi_times | repeat |  | container | variable: variable<br/>amount: number |  |  | false | false | Виконує код задану кількість разів. |
| Прохід по колу | repeat_on_circle | repeat |  | container | variable: variable<br/>center: location<br/>radius: number<br/>circle_points: number<br/>perpendicular_to_plane: vector<br/>start_angle: number<br/>angle_unit: enum |  |  | false | false | Послідовно видає місцезнаходження кожного блоку кола з вказаними параметрами. |
| Прохід по регіону | repeat_on_grid | repeat |  | container | variable: variable<br/>start: location<br/>end: location |  |  | false | false | Видає місцезнаходження кожного блоку із заданого регіону у вказану змінну. |
| Прохід по шляху | repeat_on_path | repeat |  | container | variable: variable<br/>step: number<br/>locations: location<br/>rotation: enum |  |  | false | false | Проходить від одного місцезнаходження до іншого з певним кроком, присвоюючи поточне місцезнаходження у вказану змінну. |
| Цикл у діапазоні | repeat_on_range | repeat |  | container | variable: variable<br/>start: number<br/>end: number<br/>interval: number |  |  | false | false | Присвоює поточне число у вказану змінну із заданого діапазону з певним кроком. |
| Прохід по сфері | repeat_on_sphere | repeat |  | container | variable: variable<br/>center: location<br/>radius: number<br/>points: number<br/>rotate_location: enum |  |  | false | false | Послідовно видає місцезнаходження кожної точки на сфері з вказаними параметрами. |
| REPEAT_WHILE | repeat_while | repeat |  | container_with_conditional |  |  |  | false | false | ... |
