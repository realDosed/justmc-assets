# World actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Додати рецепт виплавки | game_add_custom_cooking_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>result: item<br/>experience: number<br/>cooking_time: number<br/>recipe_type: enum<br/>category: enum | Додає власний рецепт для печі або коптильні в гру |
| Додати рецепт крафту | game_add_custom_crafting_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>items: item<br/>input_only_types: enum<br/>result: item<br/>recipe_type: enum<br/>category: enum | Додає власний рецепт крафту у світ. |
| Додати ковальський рецепт поліпшення | game_add_custom_smithing_transform_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>template: item<br/>template_only_type: enum<br/>base: item<br/>base_only_type: enum<br/>addition: item<br/>addition_only_type: enum<br/>result: item<br/>copy_data_components: enum | Додає власний рецепт поліпшення спорядження в ковальському столі |
| Додати ковальський рецепт оздоблення | game_add_custom_smithing_trim_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>template: item<br/>template_only_type: enum<br/>base: item<br/>base_only_type: enum<br/>addition: item<br/>addition_only_type: enum<br/>trim: item<br/>copy_data_components: enum | Додає власний рецепт прикрашання/оздоблення броні в ковальському столі |
| Додати рецепт камнеріза | game_add_custom_stonecutting_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>result: item | Додає власний рецепт розпилу блоків у камнерізі |
| Додати рецепт трансмутації | game_add_custom_transmute_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>material: item<br/>material_only_type: enum<br/>result: item<br/>category: enum | Додає власний рецепт трансмутації предмета у світ. |
| Установить стадию роста блока | game_block_growth | game | block | location: location<br/>growth_stage: number<br/>growth_type: enum | Устанавливает стадию роста для блока на выбранном местоположении. |
| Продовжити скалк-зараження до місцезнаходження | game_bloom_skulk_catalyst | game | block | location: location<br/>bloom_location: location<br/>charge: number | Продовжує скалк-зараження до місцезнаходження. |
| Удобрить блок | game_bone_meal_block | game | block | location: location<br/>count: number | Удобряет блок на выбранном местоположении. |
| Сломать блок | game_break_block | game | block | locations: location<br/>tool: item<br/>drop_exp: enum | Разрушает блоки на указанных местоположениях, как если бы это сделал игрок в режиме выживания нужным инструментом. |
| Отмена события | game_cancel_event | game | event |  | Отменяет начальное событие, который вызвал этот код. |
| Отримати кастомний тег чанку | game_chunk_get_custom_tag | game | block | variable: variable<br/>location: location<br/>tag_name: text<br/>default_value: any | Отримує кастомний тег чанку та присвоює результат змінній. |
| Отримати кастомні теги чанку | game_chunk_get_custom_tags | game | block | variable: variable<br/>location: location | Отримує кастомні теги чанку та присвоює результат змінній. |
| Видалити кастомний тег чанку | game_chunk_remove_custom_tag | game | block | location: location<br/>tag_names: text | Видаляє вказані кастомні теги чанку. |
| Видалити кастомні теги чанку | game_chunk_remove_custom_tags | game | block | location: location | Видаляє всі кастомні теги чанку. |
| Встановити кастомний тег чанку | game_chunk_set_custom_tag | game | block | location: location<br/>tag_names: text<br/>tag_values: text | Встановлює вказані кастомні теги чанку. |
| Очистить контейнер | game_clear_container | game | block | location: location | Удаляет все предметы из контейнера на выбранном местоположении. |
| Очистить предметы в контейнере | game_clear_container_items | game | block | location: location<br/>items: item | Очищает указанные предметы из контейнера. |
| Очистити кастомні рецепти | game_clear_custom_recipes | game | recipe |  | Очищає всі кастомні рецепти. |
| Очистить взорванные блоки | game_clear_exploded_blocks | game | event | location: location | Возвращает взорванные блоки в исходное положение. |
| Очистить регион | game_clear_region | game | block | pos_1: location<br/>pos_2: location | Удаляет все блоки в регионе. |
| Очистити значення скорборду | game_clear_scoreboard_scores | game | scoreboard | id: text | Очищає всі значення вказаного скорборду. |
| Клонировать блоки региона | game_clone_region | game | block | pos_1: location<br/>pos_2: location<br/>target_pos: location<br/>paste_pos: location<br/>ignore_air: enum<br/>copy_entity: enum | Клонирует регион на выбраное местоположение. |
| Создать взрыв | game_create_explosion | game | entity | location: location<br/>power: number<br/>name_or_uuid: text<br/>fire: enum<br/>break_blocks: enum | Создаёт взрыв в указанном местоположении. |
| Створити скорборд | game_create_scoreboard | game | scoreboard | id: text<br/>display_name: text | Створює скорборд з певним ID. Щоб відобразити скорборд гравцю, використовуйте дію "Показати скорборд". |
| Заполнить контейнер | game_fill_container | game | block | location: location<br/>items: item | Заполняет контейнер на выбранном местоположении указанными предметами. |
| Создать дерево | game_generate_tree | game | block | location: location<br/>tree_type: enum | Создаёт дерево на выбранном местоположении. |
| creative_plus.action.game_get_tile_block_custom_tags.name | game_get_tile_block_custom_tags | game | block | variable: variable<br/>location: location | creative_plus.action.game_get_tile_block_custom_tags.description |
| Убрать сообщение события | game_hide_event_message | game | event | hide: enum | Убирает отправку сообщения события, который вызвал этот код. |
| Создать фейерверк | game_launch_firework | game | entity | firework: item<br/>location: location<br/>movement: enum<br/>instant: enum | Запускает фейерверк в указанном местоположении. |
| Запустить снаряд | game_launch_projectile | game | entity | projectile: item<br/>location: location<br/>speed: number<br/>inaccuracy: number<br/>custom_name: text<br/>trail: particle | Запускает снаряд в указанном местоположении. |
| Викликати випадковий тік | game_random_tick_block | game | block | location: location<br/>times: number | Викликає випадковий тік на вибраному місцезнаходженні. |
| Удалить предметы из контейнера | game_remove_container_items | game | block | location: location<br/>items: item | Удаляет из контейнера на выбранном местоположении указанные предметы. |
| Видалити кастомний рецепт | game_remove_custom_recipe | game | recipe | names: text<br/>remove_vanilla: enum | Видаляє кастомний рецепт зі світу. |
| Видалити скорборд | game_remove_scoreboard | game | scoreboard | id: text | Видаляє вказаний скорборд. |
| Видалити значення скорборду за текстом | game_remove_scoreboard_score_by_name | game | scoreboard | id: text<br/>text: text | Видаляє значення вказаного рядка у скорборді. |
| Видалити значення скорборду за рахунком | game_remove_scoreboard_score_by_score | game | scoreboard | id: text<br/>score: number | Видаляє значення вказаного скорборду за рахунком. |
| Видалити кастомний тег блока-сутності | game_remove_tile_block_custom_tag | game | block | location: location<br/>tag_name: text | Видаляє вказаний кастомний тег блока-сутності на місцеположенні. |
| Видалити кастомні теги сутності блока | game_remove_tile_block_custom_tags | game | block | location: location | Видаляє всі кастомні теги сутності блока (тайл-блока). |
| Заменить блоки в регионе | game_replace_blocks_in_region | game | block | old_block: block<br/>pos_1: location<br/>pos_2: location<br/>new_block: block | Заменяет одни блоки на другие в выбранном регионе. |
| Заменить предметы в контейнере | game_replace_container_items | game | block | items: item<br/>location: location<br/>replace: item<br/>count: number | Заменяет указанные предметы в контейнере на выбранном местоположении на определённый предмет. |
| Отправить веб-запрос | game_send_web_request | game | web | url: text<br/>content_body: text<br/>headers: map<br/>request_type: enum<br/>content_type: enum | Отправляет веб-запрос с выбранным методом и телом на выбранный URL. |
| Установить возраст | game_set_age | game | block | location: location<br/>tick: number | Устанавливает возраст блока на выбранном местоположении. |
| Установить блок | game_set_block | game | block | block: block<br/>locations: location<br/>update_blocks: enum | Устанавливает выбранный тип блока на выбранных местоположениях. |
| Встановити силу редстоун-сигналу | game_set_block_analogue_power | game | block | location: location<br/>power_level: number | Встановлює на вибраному місцезнаходженні певну силу сигналу. |
| Встановити параметри блоку | game_set_block_data | game |  | location: location<br/>block_data: text | ... |
| Установить выпадение блоков | game_set_block_drops_enabled | game | settings | enable: enum | Устанавливает правило в мире на выпадение блоков при их разрушении. |
| Встановити NBT-теги блока-сутності | game_set_block_nbt | game | block | location: location<br/>tag_names: text<br/>tag_values: text | Встановлює вказаний NBT-тег блоку-сутності на місцеположенні. |
| Активувати блок | game_set_block_powered | game | block | location: location<br/>powered: enum | Активує блок на вибраному місцезнаходженні. |
| Встановити параметр блоку | game_set_block_single_data | game | block | location: location<br/>data: text<br/>value: text | Встановлює вказаний параметр блоку на місцезнаходженні на задане значення. |
| Встановити предмет у підозрілий блок | game_set_brushable_block_item | game | block | location: location<br/>item: item | Встановлює предмет у підозрілий блок (пісок, гравій) на вибраному місцезнаходженні. |
| Установить предмет в костёр | game_set_campfire_item | game | block | location: location<br/>item: item<br/>cooking_time: number<br/>slot: enum | Устанавливает предмет в костёр на выбранном местоположении. |
| Установить предметы в контейнере | game_set_container | game | block | location: location<br/>items: item | Устанавливает указанные предметы в контейнер на выбранном местоположении. |
| Установить ключ контейнера | game_set_container_lock | game | block | location: location<br/>container_key: text | Устанавливает определённый ключ контейнеру на выбранном местоположении. |
| Установить имя контейнеру | game_set_container_name | game | block | location: location<br/>name: text | Устанавливает имя контейнеру на выбранном местоположении. |
| Встановити позу статуї мідного голема | game_set_copper_golem_statue_pose | game | block | location: location<br/>pose: enum | Встановлює вказану позу для статуї мідного голема на вказаному місцеположенні. |
| Встановити натуральність скрипцевини | game_set_creaking_heart_natural | game | block | location: location<br/>natural: enum | Встановлює натуральність скрипцевини, що знаходиться у вказаному місцерозташуванні. |
| Встановити стан скрипцевині | game_set_creaking_heart_state | game | block | location: location<br/>heart_state: enum | Встановлює стан скрипцевині, що знаходиться у вказаному місцерозташуванні. |
| Встановити прикрасу вази | game_set_decorate_pot_sherd | game | block | location: location<br/>item: item<br/>side: enum | Встановлює вказаний черепок вибраній стороні вази на вказаному місцезнаходженні. |
| Встановити вологість Висушеному гасту | game_set_dried_ghast_hydration | game | block | location: location<br/>hydration: number | Встановлює вологість Висушеному гасту, що знаходиться у вказаному місцерозташуванні. |
| Встановити стан поломки ковадла | game_set_event_anvil_damage_state | game | event | damage_state: enum | Встановлює стан поломки ковадла. |
| Встановити вартість дії ковадла | game_set_event_anvil_repair_cost | game | event | repair_cost: number<br/>repair_cost_type: enum<br/>bypass_cost: enum | Встановлює вартість дії, що здійснюється в ковадлі. |
| Встановити час горіння події | game_set_event_combust_duration | game | event | duration: number | Встановлює час горіння, пов'язаний з цією подією. |
| Установить урон события | game_set_event_damage | game | event | damage: number | Устанавливает урон связанный с этим событием. |
| Встановити повідомлення при смерті | game_set_event_death_screen_message | game | event | message: text | Встановлює повідомлення при смерті, що відображається на екрані смерті, пов'язане з цією подією. |
| Встановити пропоновані зачарування події | game_set_event_enchantment_offers | game | event | enchantments: text<br/>levels: number<br/>costs: number | Встановлює пропоновані зачарування події. |
| Встановити виснаження події | game_set_event_exhaustion | game | event | exhaustion: number | Встановлює значення виснаження, пов'язане з цією подією. |
| Установить опыт события | game_set_event_experience | game | event | experience: number | Устанавливает значение опыта связанное с этим событием. |
| Встановити режим гри події | game_set_event_gamemode | game | event | gamemode: enum | Встановлює режим гри, пов'язаний з подією. |
| Установить лечение события | game_set_event_heal | game | event | heal: number | Устанавливает значение лечения связанное с этим событием. |
| Встановити предмет події | game_set_event_item | game | event | item: item | Встановлює предмет, пов'язаний з цією подією. |
| Встановити затримку предмета події | game_set_event_item_cooldown | game | event | cooldown: number | Встановлює затримку предмета, пов'язану з цією подією. |
| Встановити предмети події | game_set_event_items | game | event | items: item | Встановлює предмети, пов'язані з цією подією. |
| Встановити вектор відштовхування події | game_set_event_knockback_vector | game | event | knockback: vector | Встановлює вектор відштовхування, пов'язаний із цією подією. |
| Дозволити переміщення | game_set_event_move_allowed | game | event | allowed: enum | Дозволяє переміщення, якщо воно не вдалося. |
| Установить снаряд события | game_set_event_projectile | game | event | projectile: item<br/>name: text | Заменяет снаряд, который связан с этим событием. |
| Встановити випадання повідка | game_set_event_should_drop_leash | game | event | should_drop_leash: enum | Встановлює випадання повідка, пов'язаного з подією. |
| Встановити створення частинок події | game_set_event_should_play_effect | game | event | should_play_effect: enum | Встановлює, чи будуть створені частинки, пов'язані з подією. |
| Установить звук события | game_set_event_sound | game | event | sound: sound | Устанавливает звук для проигрывания связанный с этим событием, заменяя изначальный. |
| Встановити початковий слот події | game_set_event_source_slot | game | event | source_slot: number | Встановлює початковий слот, пов'язаний з цією подією. |
| Встановити кінцевий слот події | game_set_event_target_slot | game | event | target: number | Встановлює кінцевий слот, пов'язаний з цією подією. |
| Встановити теги в отриману інформацію | game_set_event_uery_info | game | event | information: text | Встановлює додаткові теги в отриману налагоджувальну інформацію, яка скопіюється в буфер обміну, якщо подію не скасовано. |
| Встановити вектор швидкості події | game_set_event_velocity | game | event | velocity: vector | Встановлює вектор швидкості, пов'язаний із цією подією. |
| Установить время готовки печи | game_set_furnace_cook_time | game | block | location: location<br/>time: number | Устанавливает время готовки печи на выбранном местоположении. |
| creative_plus.action.game_set_hardcore.name | game_set_hardcore | game |  | hardcore: enum | creative_plus.action.game_set_hardcore.description |
| Установить предмет в слот контейнера | game_set_item_in_container_slot | game | block | location: location<br/>item: item<br/>slot: number | Устанавливает предмет в указанный слот контейнера на выбранном местоположении. |
| Установить книгу в кафедру | game_set_lectern_book | game | block | location: location<br/>item: item<br/>page: number | Устанавливает книгу в кафедру на выбранном местоположении. |
| Установить голову игрока | game_set_player_head | game | block | location: location<br/>name_or_uuid: text<br/>receive_type: enum | Устанавливает голову игрока на выбранном местоположении. |
| Встановити стан активної сірки | game_set_potent_sulfur_state | game | block | location: location<br/>state: enum | Встановлює стан активної сірки. |
| Установить блоки в регионе | game_set_region | game | block | block: block<br/>pos_1: location<br/>pos_2: location | Устанавливает выбранный тип блока на весь выбранный регион. |
| Встановити рядок у скорборді | game_set_scoreboard_line | game | scoreboard | id: text<br/>line: text<br/>display: text<br/>score: number<br/>format_content: text<br/>format: enum | Встановлює рядок у скорборді. |
| Встановити відображуваний текст рядка скорборду | game_set_scoreboard_line_display | game | scoreboard | id: text<br/>line: text<br/>display: text | Встановлює вказаному рядку скорборду відображуваний текст. |
| Встановити формат тексту рядка скорборду | game_set_scoreboard_line_format | game | scoreboard | id: text<br/>line: text<br/>format_content: text<br/>format: enum | Встановлює форматування тексту вказаного рядка скорборду. |
| Встановити форматування значень скорборду | game_set_scoreboard_number_format | game | scoreboard | id: text<br/>format_content: text<br/>format: enum | Встановлює форматування значень для скорборду. |
| Встановити значення скорборду | game_set_scoreboard_score | game | scoreboard | id: text<br/>text: text<br/>score: number | Встановлює значення вказаному рядку у скорборді. |
| Змінити заголовок скорборду | game_set_scoreboard_title | game | scoreboard | id: text<br/>title: text | Змінює заголовок вказаного скорборду. |
| Встановити скалк-крикуну можливість виклику | game_set_sculk_shrieker_can_summon | game | block | location: location<br/>can_summon: enum | Встановлює вказаному скалк-крикуну можливість виклику Вардена. |
| Встановити стан скалк-крикуну | game_set_sculk_shrieker_shrieking | game | block | location: location<br/>shrieking: enum | Встановлює вказаному скалк-крикуну стан. |
| Встановити скалк-крикуну рівень небезпеки | game_set_sculk_shrieker_warning_level | game | block | location: location<br/>warning_level: number | Встановлює вказаному скалк-крикуну рівень небезпеки. |
| Установить текст таблички | game_set_sign_text | game | block | location: location<br/>text: text<br/>line: number<br/>side: enum | Устанавливает текст таблички на выбранном местоположении. |
| Установить цвет текста таблички | game_set_sign_text_color | game | block | location: location<br/>side: enum<br/>sign_text_color: enum<br/>glowing: enum | Устанавливает цвет текста таблички на выбранном местоположении. |
| Встановити вощеність таблички | game_set_sign_waxed | game | block | location: location<br/>waxed: enum | Встановлює вощеність таблички на вибраному місцезнаходженні. |
| Встановити сутність у спавнері | game_set_spawner_entity | game | block | location: location<br/>entity: item | Встановлює спавнеру на вибраному місцезнаходженні сутність всередині. |
| Встановити кастомний тег блоку-сутності | game_set_tile_block_custom_tag | game | block | location: location<br/>tag_name: text<br/>tag_value: text | Встановлює вказаний кастомний тег блоку-сутності на місцеположенні. |
| Встановити відображуваний предмет скарбниці | game_set_vault_displayed_item | game | block | location: location<br/>item: item | Встановлює відображуваний предмет скарбниці, що знаходиться у вказаному місцерозташуванні. |
| Встановити час до наступного стану скарбниці | game_set_vault_next_state_update_time | game | block | location: location<br/>time: number | Встановлює час до переходу у наступний стан скарбниці, що знаходиться у вказаному місцерозташуванні. |
| Встановити складність світу | game_set_world_difficulty | game | settings | difficulty: enum | Встановлює певну складність у світі. |
| Встановити ігрове правило світу | game_set_world_gamerule | game | settings | gamerule: enum<br/>value: text | Встановлює певне ігрове правило (gamerule) світу. |
| Встановити дистанцію симуляції світу | game_set_world_simulation_distance | game | settings | distance: number | Встановлює дистанцію симуляції чанків для світу. |
| Установить время мира | game_set_world_time | game | settings | time: number | Устанавливает время мира в тиках. |
| Встановити погоду світу | game_set_world_weather | game | settings | weather_type: enum<br/>weather_duration: number | Встановлює погоду світу на певний час. |
| Создать стойку для брони | game_spawn_armor_stand | game | entity | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>right_hand: item<br/>left_hand: item<br/>gravity: enum<br/>marker: enum<br/>small: enum<br/>show_arms: enum<br/>base_plate: enum<br/>invisible: enum<br/>location: location<br/>custom_name: text | Создаёт стойку для брони в указанном местоположении. |
| Створити візуалізатор блоку | game_spawn_block_display | game | entity | spawn_location: location<br/>custom_name: text<br/>block: block | Створює візуалізатор блоку у вказаному місцезнаходженні. |
| Создать облако туманного зелья | game_spawn_effect_cloud | game | entity | location: location<br/>effects: potion<br/>radius: number<br/>duration: number<br/>particle: particle<br/>custom_name: text | Создаёт облако туманного зелья, которое пропитывает эффектами сущностей в нём. |
| Создать кристалл Энда | game_spawn_end_crystal | game | entity | location: location<br/>custom_name: text<br/>show_bottom: enum | Создаёт кристалл Энда в указанном местоположении. |
| Создать челюсти заклинателя | game_spawn_evoker_fangs | game | entity | location: location<br/>custom_name: text | Создаёт челюсти заклинателя в указанном местоположении. |
| Создать сферу опыта | game_spawn_experience_orb | game | entity | location: location<br/>experience_amount: number<br/>custom_name: text | Создаёт сферу опыта в указанном местоположении с выбранными параметрами. |
| Создать око Энда | game_spawn_eye_of_ender | game | entity | location: location<br/>destination: location<br/>lifespan: number<br/>custom_name: text<br/>end_of_lifespan: enum | Создаёт в указанном местоположении око Энда, которое будет двигаться в сторону цели. |
| Создать падающий блок | game_spawn_falling_block | game | entity | block: block<br/>location: location<br/>name: text<br/>should_expire: enum | Создаёт падающий блок в указанном местоположении. |
| Створити сутність взаємодії | game_spawn_interaction_entity | game | entity | location: location<br/>custom_name: text<br/>width: number<br/>height: number<br/>responsive: enum | Створює сутність взаємодії у вказаному місцезнаходженні. |
| Создать предмет | game_spawn_item | game | entity | item: item<br/>location: location<br/>custom_name: text<br/>apply_motion: enum<br/>can_mob_pickup: enum<br/>can_player_pickup: enum | Создаёт предмет в указанном местоположении с выбранными параметрами. |
| Створити візуалізатор предмета | game_spawn_item_display | game | entity | spawn_location: location<br/>custom_name: text<br/>displayed_item: item | Створює візуалізатор предмета у вказаному місцезнаходженні. |
| Створити рамку | game_spawn_item_frame | game | entity | spawn_location: location<br/>item: item<br/>rotation: enum<br/>block_face: enum<br/>glowing: enum<br/>visible: enum<br/>fixed: enum | Створює рамку у вказаному місцерозташуванні. |
| Создать молнию | game_spawn_lightning_bolt | game | entity | location: location | Создаёт молнию в указанном местоположении. |
| Создать моба | game_spawn_mob | game | entity | mob: item<br/>location: location<br/>health: number<br/>custom_name: text<br/>potion_effects: potion<br/>main_hand: item<br/>helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>off_hand: item<br/>natural_equipment: enum | Создаёт моба в указанном местоположении с выбранными параметрами. |
| Створити картину | game_spawn_painting | game | entity | spawn_location: location<br/>art: text<br/>block_face: enum | Створює картину у вказаному місцерозташуванні. |
| Создать подожженный динамит | game_spawn_primed_tnt | game | entity | location: location<br/>tnt_power: number<br/>fuse_duration: number<br/>custom_name: text<br/>block: block | Создаёт подожжённый динамит в указанном местоположении. |
| Створити снаряд Шалкера | game_spawn_shulker_bullet | game | entity | location: location<br/>custom_name: text | Створює снаряд Шалкера у вказаному місцезнаходженні. |
| Створити візуалізатор тексту | game_spawn_text_display | game | entity | spawn_location: location<br/>custom_name: text<br/>merging_mode: enum<br/>displayed_text: text | Створює візуалізатор тексту у вказаному місцезнаходженні. |
| Создать транспорт | game_spawn_vehicle | game | entity | vehicle: item<br/>location: location<br/>custom_name: text | Создаёт транспорт в указанном местоположении с выбранными параметрами. |
| Возврат события | game_uncancel_event | game | event |  | Возвращает отмену события, который вызвал этот код. |
| Оновити суміжні блоки | game_update_block | game | block | location: location | Оновлює сусідні блоки на вказаному місцезнаходженні, якщо блок на місцезнаходженні не є повітрям. Сам блок на місцезнаходженні не оновлюється, але може оновитися від сусідніх. |
| Встановити гойдання вази | game_wobble_decorated_pot | game | block | location: location<br/>style: enum | Встановлює вказаний тип гойдання вази на вказаному місцеположенні. |
| Блок равен | if_game_block_equals | if_game |  | location: location<br/>blocks: block | Проверяет, является ли блок в определённом местоположении определённым типом блока. |
| Блок запитан редстоуном | if_game_block_powered | if_game |  | locations: location<br/>power_mode: enum | Проверяет, запитан ли блок в определённом местоположении редстоуном. |
| Чанк має кастомний тег | if_game_chunk_has_custom_tag | if_game |  | location: location<br/>tag: text<br/>tag_value: text<br/>compare_type: enum | Перевіряє, чи має чанк вказаний кастомний тег. |
| Чанк завантажено | if_game_chunk_is_loaded | if_game |  | location: location | Перевіряє, чи завантажено чанк у місцезнаходженні. |
| Контейнер имеет предмет | if_game_container_has | if_game |  | location: location<br/>items: item<br/>check_mode: enum<br/>comparison_mode: enum | Проверяет, имеет ли контейнер в определённом местоположении определённые предметы в его инвентаре. |
| Контейнер имеет место для предметов | if_game_container_has_room_for_item | if_game |  | location: location<br/>items: item<br/>check_mode: enum | Проверяет, имеет ли контейнер в определённом местоположении место для предметов в его инвентаре. |
| Источник урона события равен | if_game_damage_cause_equals | if_game |  | cause: enum | Проверяет, равен ли источник урона события выбранному. |
| Атака була критичною | if_game_event_attack_is_critical | if_game |  |  | Перевіряє, чи була атака у події критичною. |
| Блок события равен | if_game_event_block_equals | if_game |  | blocks: block<br/>locations: location | Проверяет, равен ли блок текущего события определенному блоку. |
| Клавіша пересування дорівнює | if_game_event_has_input | if_game |  | input_type: enum | Перевіряє, чи є клавіша пересування з події вибраною клавішею. |
| Ріст зупинено | if_game_event_is_age_locked | if_game |  |  | Перевіряє, чи було зупинено поширення/ріст для цієї події. |
| Событие отменено | if_game_event_is_canceled | if_game |  |  | Проверяет, отменено ли событие. |
| Предмет события равен | if_game_event_item_equals | if_game |  | items: item<br/>comparison_mode: enum | Проверяет, равен ли предмет текущего события определенному предмету. |
| Сутність у світі | if_game_has_entity | if_game |  | names_or_uuids: text<br/>check_mode: enum | Перевіряє, чи існує певна сутність у світі. |
| Гравець в мережі | if_game_has_player | if_game |  | names_or_uuids: text<br/>check_mode: enum | Перевіряє, чи перебуває певний гравець у грі. |
| Источник исцеления равен | if_game_heal_cause_equals | if_game |  | heal_cause: enum | Проверяет, равен ли источник исцеления выбранному. |
| Источник огня равен | if_game_ignite_cause_equals | if_game |  | cause: enum | Проверяет, равен ли источник огня выбранному. |
| Инструмент равен | if_game_instrument_equals | if_game |  | instrument: enum | Проверяет, равен ли инструмент в событии выбранному. |
| Якщо місцеположення всередині блоку | if_game_location_in_block | if_game |  | location: location | Перевіряє, чи знаходиться вказане місцеположення всередині блоку. |
| Табличка содержит текст | if_game_sign_contains | if_game |  | location: location<br/>texts: text<br/>check_side: enum<br/>check_mode: enum<br/>lines: enum | Проверяет, содержит ли табличка в определённом местоположении определённый текст. |
| Блок-сутність має кастомний тег | if_game_tile_block_has_custom_tag | if_game |  | location: location<br/>tag: text<br/>tag_value: text<br/>compare_type: enum | Перевіряє, чи має блок-сутність вказаний кастомний тег. |
