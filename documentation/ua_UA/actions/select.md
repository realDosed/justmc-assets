# Select actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Додати всіх сутностей | select_add_all_entities | select | add | basic |  |  |  | false | false | Додає до вибірки всіх сутностей зі світу. |
| Додати всіх мобів | select_add_all_mobs | select | add | basic |  |  |  | false | false | Додає до вибірки всіх мобів зі світу. |
| Додати всіх гравців | select_add_all_players | select | add | basic |  |  |  | false | false | Додає до вибірки всіх гравців зі світу. |
| Додати сутність за умовою | select_add_entity_by_conditional | select | add | basic_with_conditional |  |  |  | false | false | Додає сутностей, якщо виконується зазначена умова. |
| Додати сутність за іменем/UUID | select_add_entity_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Додає до вибірки сутність із зазначеним іменем/UUID. |
| Додати ціль події | select_add_event_target | select | add | basic | selection_type: enum |  |  | false | false | Додає до вибірки ціль, яка запустила подію. |
| Додати останню сутність, що з'явилася | select_add_last_entity | select | add | basic |  |  |  | false | false | Додає до вибірки останню сутність, що з'явилася у світі. |
| Додати останнього моба, що з'явився | select_add_last_mob | select | add | basic |  |  |  | false | false | Додає до вибірки останнього моба, що з'явився у світі. |
| Додати моба за іменем/UUID | select_add_mob_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Додає до вибірки моба із зазначеним іменем/UUID. |
| Додати гравця за умовою | select_add_player_by_conditional | select | add | basic_with_conditional |  |  |  | false | false | Додає гравців, якщо виконується зазначена умова. |
| Додати гравця за іменем/UUID | select_add_player_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Додає до вибірки гравця із зазначеним іменем/UUID. |
| Додати випадкову сутність | select_add_random_entity | select | add | basic |  |  |  | false | false | Додає до вибірки випадкову сутність зі світу. |
| Додати випадкового моба | select_add_random_mob | select | add | basic |  |  |  | false | false | Додає до вибірки випадкового моба зі світу. |
| Додати випадкового гравця | select_add_random_player | select | add | basic |  |  |  | false | false | Додає до вибірки випадкового гравця зі світу. |
| Выбрать всех сущностей | select_all_entities | select | creation | basic |  |  |  | false | false | Выбирает всех сущностей в мире. |
| Выбрать всех мобов | select_all_mobs | select | creation | basic |  |  |  | false | false | Выбирает всех мобов в мире. |
| Выбрать всех игроков | select_all_players | select | creation | basic |  |  |  | false | false | Выбирает всех игроков в мире. |
| Выбрать сущность по условию | select_entity_by_conditional | select | creation | basic_with_conditional |  |  |  | false | false | Выбирает сущностей, если выполняется указанное условие. |
| Выбрать сущность по имени | select_entity_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Выбирает сущность или сущностей по имени или UUID. |
| Выбрать цель события | select_event_target | select | creation | basic | selection_type: enum |  |  | false | false | Выбирает цель, которая запустила событие. |
| Відфільтрувати вибірку за умовою | select_filter_by_conditional | select | filter | basic_with_conditional |  |  |  | false | false | Залишає у вибірці ті цілі, які відповідають обраній умові. |
| Відфільтрувати вибірку за відстанню | select_filter_by_distance | select | filter | basic | location: location<br/>selection_size: number<br/>ignore_y_axis: enum<br/>compare_mode: enum |  |  | false | false | Залишає у вибірці ті цілі, які знаходяться на відстані до місцезнаходження. |
| Фільтр рейкастом | select_filter_by_raycast | select | filter | basic | variable: variable<br/>origin: location<br/>max_distance: number<br/>ray_size: number<br/>selection_size: number<br/>consider_blocks: enum<br/>ignore_passable_blocks: enum<br/>fluid_collision_mode: enum |  |  | false | false | Залишає у вибірці лише ті цілі, в які потрапив запущений промінь. Ширина променя працює лише на сутностей (збільшує або зменшує хітбокси істот). |
| Выбрать случайную сущность с выборки | select_filter_randomly | select | filter | basic | size: number |  |  | false | false | Выбирает случайную сущность с выборки. |
| Інвертувати вибірку | select_invert | select | creation | basic |  |  |  | false | false | Створює нову вибірку, до якої входять усі істоти, крім обраних. |
| Выбрать последнюю появившуюся сущность | select_last_entity | select | creation | basic |  |  |  | false | false | Выбирает последнюю появившуюся сущность в мире. |
| Выбрать последнего появившегося моба | select_last_mob | select | creation | basic |  |  |  | false | false | Выбирает последнего появившегося моба в мире. |
| Выбрать моба по имени | select_mob_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Выбирает моба или мобов по имени или UUID. |
| Выбрать игрока по условию | select_player_by_conditional | select | creation | basic_with_conditional |  |  |  | false | false | Выбирает игроков, если выполняется указанное условие. |
| Выбрать игрока по имени | select_player_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Выбирает игрока или игроков по имени или UUID. |
| Выбрать случайную сущность | select_random_entity | select | creation | basic |  |  |  | false | false | Выбирает случайную сущность в мире. |
| Выбрать случайного моба | select_random_mob | select | creation | basic |  |  |  | false | false | Выбирает случайного моба в мире. |
| Выбрать случайного игрока | select_random_player | select | creation | basic |  |  |  | false | false | Выбирает случайного игрока в мире. |
| Сбросить выборку | select_reset | select | creation | basic |  |  |  | false | false | Сбрасывает всю выборку. |
