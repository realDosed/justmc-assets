# Repeat actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Проход по смежным блокам | repeat_adjacently | repeat |  | container | variable: variable<br/>origin: location<br/>change_rotation: enum<br/>include_self: enum<br/>pattern: enum |  |  | false | false | Присваивает текущее местоположение в указанную переменную среди соседних блоков относительно заданного местоположения. |
| Проход по списку | repeat_for_each_in_list | repeat |  | container | index_variable: variable<br/>value_variable: variable<br/>list: array |  |  | false | false | Обращается к каждому элементу из указанного списка и выдаёт его индекс и значение в указанные переменные. |
| Проход по словарю | repeat_for_each_map_entry | repeat |  | container | key_variable: variable<br/>value_variable: variable<br/>map: map |  |  | false | false | Обращается к каждому элементу из указанного словаря и выдаёт его индекс и значение в указанные переменные. |
| Повторять вечно | repeat_forever | repeat |  | container |  |  |  | false | false | Постоянно повторяет код внутри поршней. |
| Цикл со счётчиком | repeat_multi_times | repeat |  | container | variable: variable<br/>amount: number |  |  | false | false | Выполняет код заданное количество раз. |
| Проход по окружности | repeat_on_circle | repeat |  | container | variable: variable<br/>center: location<br/>radius: number<br/>circle_points: number<br/>perpendicular_to_plane: vector<br/>start_angle: number<br/>angle_unit: enum |  |  | false | false | Последовательно выдаёт местоположение каждого блока окружности с указанными параметрами. |
| Проход по региону | repeat_on_grid | repeat |  | container | variable: variable<br/>start: location<br/>end: location |  |  | false | false | Выдаёт местоположение каждого блока из заданного региона в указанную переменную. |
| Проход по пути | repeat_on_path | repeat |  | container | variable: variable<br/>step: number<br/>locations: location<br/>rotation: enum |  |  | false | false | Проходит от одного местоположения к другому с определённым шагом, присваивая текущее местоположение в указанную переменную. |
| Цикл в диапазоне | repeat_on_range | repeat |  | container | variable: variable<br/>start: number<br/>end: number<br/>interval: number |  |  | false | false | Присваивает текущее число в указанную переменную из заданного диапазона с определённым шагом. |
| Проход по сфере | repeat_on_sphere | repeat |  | container | variable: variable<br/>center: location<br/>radius: number<br/>points: number<br/>rotate_location: enum |  |  | false | false | Последовательно выдаёт местоположение каждой точки на сфере с указанными параметрами. |
| Цикл с условием | repeat_while | repeat |  | container_with_conditional |  |  |  | false | false | Выполняет код до тех пор, пока выбранное условие является истиной. |
