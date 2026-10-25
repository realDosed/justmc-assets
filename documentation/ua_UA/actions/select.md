# Select actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Додати всіх сутностей | select_add_all_entities | select | add |  | Додає до вибірки всіх сутностей зі світу. |
| Додати всіх мобів | select_add_all_mobs | select | add |  | Додає до вибірки всіх мобів зі світу. |
| Додати всіх гравців | select_add_all_players | select | add |  | Додає до вибірки всіх гравців зі світу. |
| Додати сутність за умовою | select_add_entity_by_conditional | select | add |  | Додає сутностей, якщо виконується зазначена умова. |
| Додати сутність за іменем/UUID | select_add_entity_by_name | select | add | name_or_uuid: text | Додає до вибірки сутність із зазначеним іменем/UUID. |
| Додати ціль події | select_add_event_target | select | add | selection_type: enum | Додає до вибірки ціль, яка запустила подію. |
| Додати останню сутність, що з'явилася | select_add_last_entity | select | add |  | Додає до вибірки останню сутність, що з'явилася у світі. |
| Додати останнього моба, що з'явився | select_add_last_mob | select | add |  | Додає до вибірки останнього моба, що з'явився у світі. |
| Додати моба за іменем/UUID | select_add_mob_by_name | select | add | name_or_uuid: text | Додає до вибірки моба із зазначеним іменем/UUID. |
| Додати гравця за умовою | select_add_player_by_conditional | select | add |  | Додає гравців, якщо виконується зазначена умова. |
| Додати гравця за іменем/UUID | select_add_player_by_name | select | add | name_or_uuid: text | Додає до вибірки гравця із зазначеним іменем/UUID. |
| Додати випадкову сутність | select_add_random_entity | select | add |  | Додає до вибірки випадкову сутність зі світу. |
| Додати випадкового моба | select_add_random_mob | select | add |  | Додає до вибірки випадкового моба зі світу. |
| Додати випадкового гравця | select_add_random_player | select | add |  | Додає до вибірки випадкового гравця зі світу. |
| Выбрать всех сущностей | select_all_entities | select | creation |  | Выбирает всех сущностей в мире. |
| Выбрать всех мобов | select_all_mobs | select | creation |  | Выбирает всех мобов в мире. |
| Выбрать всех игроков | select_all_players | select | creation |  | Выбирает всех игроков в мире. |
| Выбрать сущность по условию | select_entity_by_conditional | select | creation |  | Выбирает сущностей, если выполняется указанное условие. |
| Выбрать сущность по имени | select_entity_by_name | select | creation | name_or_uuid: text | Выбирает сущность или сущностей по имени или UUID. |
| Выбрать цель события | select_event_target | select | creation | selection_type: enum | Выбирает цель, которая запустила событие. |
| Відфільтрувати вибірку за умовою | select_filter_by_conditional | select | filter |  | Залишає у вибірці ті цілі, які відповідають обраній умові. |
| Відфільтрувати вибірку за відстанню | select_filter_by_distance | select | filter | location: location<br/>selection_size: number<br/>ignore_y_axis: enum<br/>compare_mode: enum | Залишає у вибірці ті цілі, які знаходяться на відстані до місцезнаходження. |
| Фільтр рейкастом | select_filter_by_raycast | select | filter | variable: variable<br/>origin: location<br/>max_distance: number<br/>ray_size: number<br/>selection_size: number<br/>consider_blocks: enum<br/>ignore_passable_blocks: enum<br/>fluid_collision_mode: enum | Залишає у вибірці лише ті цілі, в які потрапив запущений промінь. Ширина променя працює лише на сутностей (збільшує або зменшує хітбокси істот). |
| Выбрать случайную сущность с выборки | select_filter_randomly | select | filter | size: number | Выбирает случайную сущность с выборки. |
| Інвертувати вибірку | select_invert | select | creation |  | Створює нову вибірку, до якої входять усі істоти, крім обраних. |
| Выбрать последнюю появившуюся сущность | select_last_entity | select | creation |  | Выбирает последнюю появившуюся сущность в мире. |
| Выбрать последнего появившегося моба | select_last_mob | select | creation |  | Выбирает последнего появившегося моба в мире. |
| Выбрать моба по имени | select_mob_by_name | select | creation | name_or_uuid: text | Выбирает моба или мобов по имени или UUID. |
| Выбрать игрока по условию | select_player_by_conditional | select | creation |  | Выбирает игроков, если выполняется указанное условие. |
| Выбрать игрока по имени | select_player_by_name | select | creation | name_or_uuid: text | Выбирает игрока или игроков по имени или UUID. |
| Выбрать случайную сущность | select_random_entity | select | creation |  | Выбирает случайную сущность в мире. |
| Выбрать случайного моба | select_random_mob | select | creation |  | Выбирает случайного моба в мире. |
| Выбрать случайного игрока | select_random_player | select | creation |  | Выбирает случайного игрока в мире. |
| Сбросить выборку | select_reset | select | creation |  | Сбрасывает всю выборку. |
