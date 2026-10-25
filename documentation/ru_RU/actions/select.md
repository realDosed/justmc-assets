# Select actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Добавить всех сущностей | select_add_all_entities | select | add | basic |  |  |  | false | false | Добавляет в выборку всех сущностей из мира. |
| Добавить всех мобов | select_add_all_mobs | select | add | basic |  |  |  | false | false | Добавляет в выборку всех мобов из мира. |
| Добавить всех игроков | select_add_all_players | select | add | basic |  |  |  | false | false | Добавляет в выборку всех игроков из мира. |
| Добавить сущность по условию | select_add_entity_by_conditional | select | add | basic_with_conditional |  |  |  | false | false | Добавляет сущностей, если выполняется указанное условие. |
| Добавить сущность по имени/UUID | select_add_entity_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Добавляет в выборку сущность с указанным именем/UUID. |
| Добавить цель события | select_add_event_target | select | add | basic | selection_type: enum |  |  | false | false | Добавляет в выборку цель, которая запустила событие. |
| Добавить последнюю появившуюся сущность | select_add_last_entity | select | add | basic |  |  |  | false | false | Добавляет в выборку последнюю появившуюся сущность из мира. |
| Добавить последнего появившегося моба | select_add_last_mob | select | add | basic |  |  |  | false | false | Добавляет в выборку последнего появившегося моба из мира. |
| Добавить моба по имени/UUID | select_add_mob_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Добавляет в выборку моба с указанным именем/UUID. |
| Добавить игрока по условию | select_add_player_by_conditional | select | add | basic_with_conditional |  |  |  | false | false | Добавляет игроков, если выполняется указанное условие. |
| Добавить игрока по имени/UUID | select_add_player_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Добавляет в выборку игрока с указанным именем/UUID. |
| Добавить случайную сущность | select_add_random_entity | select | add | basic |  |  |  | false | false | Добавляет в выборку случайную сущность из мира. |
| Добавить случайного моба | select_add_random_mob | select | add | basic |  |  |  | false | false | Добавляет в выборку случайного моба из мира. |
| Добавить случайного игрока | select_add_random_player | select | add | basic |  |  |  | false | false | Добавляет в выборку случайного игрока из мира. |
| Выбрать всех сущностей | select_all_entities | select | creation | basic |  |  |  | false | false | Выбирает всех сущностей в мире. |
| Выбрать всех мобов | select_all_mobs | select | creation | basic |  |  |  | false | false | Выбирает всех мобов в мире. |
| Выбрать всех игроков | select_all_players | select | creation | basic |  |  |  | false | false | Выбирает всех игроков в мире. |
| Выбрать сущность по условию | select_entity_by_conditional | select | creation | basic_with_conditional |  |  |  | false | false | Выбирает сущностей, если выполняется указанное условие. |
| Выбрать сущность по имени | select_entity_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Выбирает сущность или сущностей по имени или UUID. |
| Выбрать цель события | select_event_target | select | creation | basic | selection_type: enum |  |  | false | false | Выбирает цель, которая запустила событие. |
| Отфильтровать выборку по условию | select_filter_by_conditional | select | filter | basic_with_conditional |  |  |  | false | false | Оставляет в выборке те цели, которые подходят под выбранное условие. |
| Отфильтровать выборку по расстоянию | select_filter_by_distance | select | filter | basic | location: location<br/>selection_size: number<br/>ignore_y_axis: enum<br/>compare_mode: enum |  |  | false | false | Оставляет в выборке те цели, которые находятся на расстоянии до местоположения. |
| Фильтр рейкастом | select_filter_by_raycast | select | filter | basic | variable: variable<br/>origin: location<br/>max_distance: number<br/>ray_size: number<br/>selection_size: number<br/>consider_blocks: enum<br/>ignore_passable_blocks: enum<br/>fluid_collision_mode: enum |  |  | false | false | Оставляет в выборке только те цели, в которые попал запущенный луч. Ширина луча работает только на сущностей (увеличивает или уменьшает хитбоксы существ). |
| Отфильтровать выборку случайно | select_filter_randomly | select | filter | basic | size: number |  |  | false | false | Оставляет в выборке указанное количество случайных целей. |
| Инвертировать выборку | select_invert | select | creation | basic |  |  |  | false | false | Создаёт новую выборку, в которую входят все существа, кроме выбранных. |
| Выбрать последнюю появившуюся сущность | select_last_entity | select | creation | basic |  |  |  | false | false | Выбирает последнюю появившуюся сущность в мире. |
| Выбрать последнего появившегося моба | select_last_mob | select | creation | basic |  |  |  | false | false | Выбирает последнего появившегося моба в мире. |
| Выбрать моба по имени | select_mob_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Выбирает моба или мобов по имени или UUID. |
| Выбрать игрока по условию | select_player_by_conditional | select | creation | basic_with_conditional |  |  |  | false | false | Выбирает игроков, если выполняется указанное условие. |
| Выбрать игрока по имени | select_player_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Выбирает игрока или игроков по имени или UUID. |
| Выбрать случайную сущность | select_random_entity | select | creation | basic |  |  |  | false | false | Выбирает случайную сущность в мире. |
| Выбрать случайного моба | select_random_mob | select | creation | basic |  |  |  | false | false | Выбирает случайного моба в мире. |
| Выбрать случайного игрока | select_random_player | select | creation | basic |  |  |  | false | false | Выбирает случайного игрока в мире. |
| Сбросить выборку | select_reset | select | creation | basic |  |  |  | false | false | Сбрасывает всю выборку. |
