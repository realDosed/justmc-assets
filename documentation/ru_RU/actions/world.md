# World actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Добавить рецепт выплавки | game_add_custom_cooking_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>result: item<br/>experience: number<br/>cooking_time: number<br/>recipe_type: enum<br/>category: enum | Добавляет собственный рецепт для печи или коптильни в игру |
| Добавить рецепт крафта | game_add_custom_crafting_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>items: item<br/>input_only_types: enum<br/>result: item<br/>recipe_type: enum<br/>category: enum | Добавляет собственный рецепт крафта в мир. |
| Добавить кузнечный рецепт улучшения | game_add_custom_smithing_transform_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>template: item<br/>template_only_type: enum<br/>base: item<br/>base_only_type: enum<br/>addition: item<br/>addition_only_type: enum<br/>result: item<br/>copy_data_components: enum | Добавляет собственный рецепт улучшения снаряжения в кузнечном столе |
| Добавить кузнечный рецепт отделки | game_add_custom_smithing_trim_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>template: item<br/>template_only_type: enum<br/>base: item<br/>base_only_type: enum<br/>addition: item<br/>addition_only_type: enum<br/>trim: item<br/>copy_data_components: enum | Добавляет собственный рецепт украшения/отделки брони в кузнечном столе |
| Добавить рецепт камнереза | game_add_custom_stonecutting_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>result: item | Добавляет собственный рецепт распила блоков в камнерезе |
| Добавить рецепт трансмутации | game_add_custom_transmute_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>material: item<br/>material_only_type: enum<br/>result: item<br/>category: enum | Добавляет собственный рецепт трансмутации предмета в мир. |
| Установить стадию роста блока | game_block_growth | game | block | location: location<br/>growth_stage: number<br/>growth_type: enum | Устанавливает стадию роста для блока на выбранном местоположении. |
| Продлить скалк-заражение к местоположению | game_bloom_skulk_catalyst | game | block | location: location<br/>bloom_location: location<br/>charge: number | Продлевает скалк-заражение к местоположению. |
| Удобрить блок | game_bone_meal_block | game | block | location: location<br/>count: number | Удобряет блок на выбранном местоположении. |
| Сломать блок | game_break_block | game | block | locations: location<br/>tool: item<br/>drop_exp: enum | Разрушает блоки на указанных местоположениях, как если бы это сделал игрок в режиме выживания нужным инструментом. |
| Отмена события | game_cancel_event | game | event |  | Отменяет начальное событие, которое вызвало этот код. |
| Получить кастомный тег чанка | game_chunk_get_custom_tag | game | block | variable: variable<br/>location: location<br/>tag_name: text<br/>default_value: any | Получает кастомный тег чанка и присваивает результат к переменной. |
| Получить кастомные теги чанка | game_chunk_get_custom_tags | game | block | variable: variable<br/>location: location | Получает кастомные теги чанка и присваивает результат к переменной. |
| Удалить кастомный тег чанка | game_chunk_remove_custom_tag | game | block | location: location<br/>tag_names: text | Удаляет указанные кастомные теги чанка. |
| Удалить кастомные теги чанка | game_chunk_remove_custom_tags | game | block | location: location | Удаляет все кастомные теги чанка. |
| Установить кастомный тег чанка | game_chunk_set_custom_tag | game | block | location: location<br/>tag_names: text<br/>tag_values: text | Устанавливает указанные кастомные теги чанка. |
| Очистить контейнер | game_clear_container | game | block | location: location | Удаляет все предметы из контейнера на выбранном местоположении. |
| Очистить предметы в контейнере | game_clear_container_items | game | block | location: location<br/>items: item | Очищает указанные предметы из контейнера. |
| Очистить кастомные рецепты | game_clear_custom_recipes | game | recipe |  | Очищает все кастомные рецепты. |
| Очистить взорванные блоки | game_clear_exploded_blocks | game | event | location: location | Возвращает взорванные блоки в исходное положение. |
| Очистить регион | game_clear_region | game | block | pos_1: location<br/>pos_2: location | Удаляет все блоки в регионе. |
| Очистить значения скорборда | game_clear_scoreboard_scores | game | scoreboard | id: text | Очищает все значения указанного скорборда. |
| Клонировать блоки региона | game_clone_region | game | block | pos_1: location<br/>pos_2: location<br/>target_pos: location<br/>paste_pos: location<br/>ignore_air: enum<br/>copy_entity: enum | Клонирует регион на выбраное местоположение. |
| Создать взрыв | game_create_explosion | game | entity | location: location<br/>power: number<br/>name_or_uuid: text<br/>fire: enum<br/>break_blocks: enum | Создаёт взрыв в указанном местоположении. |
| Создать скорборд | game_create_scoreboard | game | scoreboard | id: text<br/>display_name: text | Создаёт скорборд с определённым ID. Чтобы отобразить скорборд игроку, используйте действие "Показать скорборд". |
| Заполнить контейнер | game_fill_container | game | block | location: location<br/>items: item | Заполняет контейнер на выбранном местоположении указанными предметами. |
| Создать дерево | game_generate_tree | game | block | location: location<br/>tree_type: enum | Создаёт дерево на выбранном местоположении. |
| Получить кастомные теги блока-сущности | game_get_tile_block_custom_tags | game | block | variable: variable<br/>location: location | Получает кастомные теги блока-сущности и присваивает результат к переменной. |
| Убрать сообщение события | game_hide_event_message | game | event | hide: enum | Убирает отправку сообщения события, которое вызвало этот код. |
| Создать фейерверк | game_launch_firework | game | entity | firework: item<br/>location: location<br/>movement: enum<br/>instant: enum | Запускает фейерверк в указанном местоположении. |
| Запустить снаряд | game_launch_projectile | game | entity | projectile: item<br/>location: location<br/>speed: number<br/>inaccuracy: number<br/>custom_name: text<br/>trail: particle | Запускает снаряд в указанном местоположении. |
| Вызвать случайный тик | game_random_tick_block | game | block | location: location<br/>times: number | Вызывает случайный тик на выбранном местоположении. |
| Удалить предметы из контейнера | game_remove_container_items | game | block | location: location<br/>items: item | Удаляет из контейнера на выбранном местоположении указанные предметы. |
| Удалить кастомный рецепт | game_remove_custom_recipe | game | recipe | names: text<br/>remove_vanilla: enum | Удаляет кастомный рецепт из мира. |
| Удалить скорборд | game_remove_scoreboard | game | scoreboard | id: text | Удаляет указанный скорборд. |
| Удалить значение скорборда по тексту | game_remove_scoreboard_score_by_name | game | scoreboard | id: text<br/>text: text | Удаляет значение указанной строки в скорборде. |
| Удалить значение скорборда по счёту | game_remove_scoreboard_score_by_score | game | scoreboard | id: text<br/>score: number | Удаляет значение указанного скорборда по счёту. |
| Удалить кастомный тег блока-сущности | game_remove_tile_block_custom_tag | game | block | location: location<br/>tag_name: text | Удаляет указанный кастомный тег блока-сущности на местоположении. |
| Удалить кастомные теги блока-сущности | game_remove_tile_block_custom_tags | game | block | location: location | Удаляет все кастомные теги блока-сущности. |
| Заменить блоки в регионе | game_replace_blocks_in_region | game | block | old_block: block<br/>pos_1: location<br/>pos_2: location<br/>new_block: block | Заменяет одни блоки на другие в выбранном регионе. |
| Заменить предметы в контейнере | game_replace_container_items | game | block | items: item<br/>location: location<br/>replace: item<br/>count: number | Заменяет указанные предметы в контейнере на выбранном местоположении на определённый предмет. |
| Отправить веб-запрос | game_send_web_request | game | web | url: text<br/>content_body: text<br/>headers: map<br/>request_type: enum<br/>content_type: enum | Отправляет веб-запрос с выбранным методом и телом на выбранный URL. |
| Установить возраст | game_set_age | game | block | location: location<br/>tick: number | Устанавливает возраст блока на выбранном местоположении. |
| Установить блок | game_set_block | game | block | block: block<br/>locations: location<br/>update_blocks: enum | Устанавливает выбранный тип блока на выбранных местоположениях. |
| Установить силу редстоун-сигнала | game_set_block_analogue_power | game | block | location: location<br/>power_level: number | Устанавливает на выбранном местоположении определённую силу сигнала. |
| Установить параметры блоку | game_set_block_data | game |  | location: location<br/>block_data: text | Устанавливает параметры блоку на определённом местоположении. |
| Установить выпадение блоков | game_set_block_drops_enabled | game | settings | enable: enum | Устанавливает правило в мире на выпадение блоков при их разрушении. |
| Установить NBT-теги блока-сущности | game_set_block_nbt | game | block | location: location<br/>tag_names: text<br/>tag_values: text | Устанавливает указанный NBT-тег блоку-сущности на местоположении. |
| Активировать блок | game_set_block_powered | game | block | location: location<br/>powered: enum | Активирует блок на выбранном местоположении. |
| Установить параметр блоку | game_set_block_single_data | game | block | location: location<br/>data: text<br/>value: text | Устанавливает указанный параметр блоку на местоположении на заданое значение. |
| Установить предмет в подозрительный блок | game_set_brushable_block_item | game | block | location: location<br/>item: item | Устанавливает предмет в подозрительный блок (песок, гравий) на выбранном местоположении. |
| Установить предмет в костёр | game_set_campfire_item | game | block | location: location<br/>item: item<br/>cooking_time: number<br/>slot: enum | Устанавливает предмет в костёр на выбранном местоположении. |
| Установить предметы в контейнере | game_set_container | game | block | location: location<br/>items: item | Устанавливает указанные предметы в контейнер на выбранном местоположении. |
| Установить ключ контейнера | game_set_container_lock | game | block | location: location<br/>container_key: text | Устанавливает определённый ключ контейнеру на выбранном местоположении. |
| Установить имя контейнеру | game_set_container_name | game | block | location: location<br/>name: text | Устанавливает имя контейнеру на выбранном местоположении. |
| Установить позу статуи медного голема | game_set_copper_golem_statue_pose | game | block | location: location<br/>pose: enum | Устанавливает указанную позу для статуи медного голема на указанном местоположении. |
| Установить натуральность скрипцевины | game_set_creaking_heart_natural | game | block | location: location<br/>natural: enum | Устанавливает натуральность скрипцевины, находящейся на указанном местоположении. |
| Установить состояние скрипцевине | game_set_creaking_heart_state | game | block | location: location<br/>heart_state: enum | Устанавливает состояние скрипцевине, находящейся на указанном местоположении. |
| Установить украшение вазы | game_set_decorate_pot_sherd | game | block | location: location<br/>item: item<br/>side: enum | Устанавливает указанный черепок выбранной стороне вазы на указанном местоположении. |
| Установить влажность Высушенному гасту | game_set_dried_ghast_hydration | game | block | location: location<br/>hydration: number | Устанавливает влажность Высушенному гасту, который находится на указанном местоположении. |
| Установить состояние поломки наковальни | game_set_event_anvil_damage_state | game | event | damage_state: enum | Устанавливает состояние поломки наковальни. |
| Установить стоимость действия наковальни | game_set_event_anvil_repair_cost | game | event | repair_cost: number<br/>repair_cost_type: enum<br/>bypass_cost: enum | Устанавливает стоимость совершаемого действия в наковальне. |
| Установить время горения события | game_set_event_combust_duration | game | event | duration: number | Устанавливает время горения, связанное с этим событием. |
| Установить урон события | game_set_event_damage | game | event | damage: number | Устанавливает урон, связанный с этим событием. |
| Установить сообщение при смерти | game_set_event_death_screen_message | game | event | message: text | Устанавливает сообщение при смерти, отображаемое на экране смерти, связанное с этим событием. |
| Установить предлагаемые зачарования события | game_set_event_enchantment_offers | game | event | enchantments: text<br/>levels: number<br/>costs: number | Устанавливает предлагаемые зачарования события. |
| Установить истощение события | game_set_event_exhaustion | game | event | exhaustion: number | Устанавливает значение истощения, связанное с этим событием. |
| Установить опыт события | game_set_event_experience | game | event | experience: number | Устанавливает значение опыта, связанное с этим событием. |
| Установить режим игры события | game_set_event_gamemode | game | event | gamemode: enum | Устанавливает режим игры, связанный с событием. |
| Установить лечение события | game_set_event_heal | game | event | heal: number | Устанавливает значение лечения, связанное с этим событием. |
| Установить предмет события | game_set_event_item | game | event | item: item | Устанавливает предмет, связанный с этим событием. |
| Установить задержку предмета события | game_set_event_item_cooldown | game | event | cooldown: number | Устанавливает задержку предмета, связанную с этим событием. |
| Установить предметы события | game_set_event_items | game | event | items: item | Устанавливает предметы, связанные с этим событием. |
| Установить вектор отталкивания события | game_set_event_knockback_vector | game | event | knockback: vector | Устанавливает вектор отталкивания, связанный с этим событием. |
| Разрешить передвижение | game_set_event_move_allowed | game | event | allowed: enum | Разрешает передвижение, если оно не удалось. |
| Установить снаряд события | game_set_event_projectile | game | event | projectile: item<br/>name: text | Заменяет снаряд, который связан с этим событием. |
| Установить выпадение поводка | game_set_event_should_drop_leash | game | event | should_drop_leash: enum | Устанавливает выпадение поводка, связанного с событием. |
| Установить создание частиц события | game_set_event_should_play_effect | game | event | should_play_effect: enum | Устанавливает, будут ли созданы частицы, связанные с событием. |
| Установить звук события | game_set_event_sound | game | event | sound: sound | Устанавливает звук для проигрывания, связанный с этим событием, заменяя изначальный. |
| Установить начальный слот события | game_set_event_source_slot | game | event | source_slot: number | Устанавливает начальный слот, связанный с этим событием. |
| Установить конечный слот события | game_set_event_target_slot | game | event | target: number | Устанавливает конечный слот, связанный с этим событием. |
| Установить теги в полученную информацию | game_set_event_uery_info | game | event | information: text | Устанавливает дополнительные теги в полученную отладочную информацию, которые скопируются в буфер обмена, если событие не отменено. |
| Установить вектор скорости события | game_set_event_velocity | game | event | velocity: vector | Устанавливает вектор скорости, связанный с этим событием. |
| Установить время готовки печи | game_set_furnace_cook_time | game | block | location: location<br/>time: number | Устанавливает время готовки печи на выбранном местоположении. |
| creative_plus.action.game_set_hardcore.name | game_set_hardcore | game |  | hardcore: enum | creative_plus.action.game_set_hardcore.description |
| Установить предмет в слот контейнера | game_set_item_in_container_slot | game | block | location: location<br/>item: item<br/>slot: number | Устанавливает предмет в указанный слот контейнера на выбранном местоположении. |
| Установить книгу в кафедру | game_set_lectern_book | game | block | location: location<br/>item: item<br/>page: number | Устанавливает книгу в кафедру на выбранном местоположении. |
| Установить голову игрока | game_set_player_head | game | block | location: location<br/>name_or_uuid: text<br/>receive_type: enum | Устанавливает голову игрока на выбранном местоположении. |
| Установить состояние активной серы | game_set_potent_sulfur_state | game | block | location: location<br/>state: enum | Устанавливает состояние активной серы. |
| Установить блоки в регионе | game_set_region | game | block | block: block<br/>pos_1: location<br/>pos_2: location | Устанавливает выбранный тип блока на весь выбранный регион. |
| Установить линию в скорборде | game_set_scoreboard_line | game | scoreboard | id: text<br/>line: text<br/>display: text<br/>score: number<br/>format_content: text<br/>format: enum | Устанавливает линию в скорборде. |
| Установить отображаемый текст линии скорборда | game_set_scoreboard_line_display | game | scoreboard | id: text<br/>line: text<br/>display: text | Устанавливает указанной линии скорборда отображаемый текст. |
| Установить формат текста линии скорборда | game_set_scoreboard_line_format | game | scoreboard | id: text<br/>line: text<br/>format_content: text<br/>format: enum | Устанавливает форматирование текста указанной линии скорборда. |
| Установить форматирование значений скорборда | game_set_scoreboard_number_format | game | scoreboard | id: text<br/>format_content: text<br/>format: enum | Устанавливает форматирование значений для скорборда. |
| Установить значение скорборда | game_set_scoreboard_score | game | scoreboard | id: text<br/>text: text<br/>score: number | Устанавливает значение указанной строке в скорборде. |
| Изменить заголовок скорборда | game_set_scoreboard_title | game | scoreboard | id: text<br/>title: text | Изменяет заголовок указанного скорборда. |
| Установить скалк-крикуну возможность призыва | game_set_sculk_shrieker_can_summon | game | block | location: location<br/>can_summon: enum | Устанавливает указанному скалк-крикуну возможность призыва Вардена. |
| Установить состояние скалк-крикуну | game_set_sculk_shrieker_shrieking | game | block | location: location<br/>shrieking: enum | Устанавливает указанному скалк-крикуну состояние. |
| Установить скалк-крикуну уровень опасности | game_set_sculk_shrieker_warning_level | game | block | location: location<br/>warning_level: number | Устанавливает указанному скалк-крикуну уровень опасности. |
| Установить текст таблички | game_set_sign_text | game | block | location: location<br/>text: text<br/>line: number<br/>side: enum | Устанавливает текст таблички на выбранном местоположении. |
| Установить цвет текста таблички | game_set_sign_text_color | game | block | location: location<br/>side: enum<br/>sign_text_color: enum<br/>glowing: enum | Устанавливает цвет текста таблички на выбранном местоположении. |
| Установить вощённость таблички | game_set_sign_waxed | game | block | location: location<br/>waxed: enum | Устанавливает вощённость таблички на выбранном местоположении. |
| Установить сущность в спавнере | game_set_spawner_entity | game | block | location: location<br/>entity: item | Устанавливает спавнеру на выбранном местоположении сущность внутри. |
| Установить кастомный тег блоку-сущности | game_set_tile_block_custom_tag | game | block | location: location<br/>tag_name: text<br/>tag_value: text | Устанавливает указанный кастомный тег блоку-сущности на местоположении. |
| Установить отображаемый предмет сокровищнице | game_set_vault_displayed_item | game | block | location: location<br/>item: item | Устанавливает отображаемый предмет сокровищнице, находящейся на указанном местоположении. |
| Установить время до следующего состояния сокровищнице | game_set_vault_next_state_update_time | game | block | location: location<br/>time: number | Устанавливает время до перехода в следующее состоянии сокровищнице, находящейся на указанном местоположении. |
| Установить сложность мира | game_set_world_difficulty | game | settings | difficulty: enum | Устанавливает определённую сложность в мире. |
| Установить игровое правило мира | game_set_world_gamerule | game | settings | gamerule: enum<br/>value: text | Устанавливает определённое игровое правило (gamerule) мира. |
| Установить дистанцию симуляции мира | game_set_world_simulation_distance | game | settings | distance: number | Устанавливает дистанцию симуляции чанков для мира. |
| Установить время мира | game_set_world_time | game | settings | time: number | Устанавливает время мира в тиках. |
| Установить погоду мира | game_set_world_weather | game | settings | weather_type: enum<br/>weather_duration: number | Устанавливает погоду мира на определённое время. |
| Создать стойку для брони | game_spawn_armor_stand | game | entity | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>right_hand: item<br/>left_hand: item<br/>gravity: enum<br/>marker: enum<br/>small: enum<br/>show_arms: enum<br/>base_plate: enum<br/>invisible: enum<br/>location: location<br/>custom_name: text | Создаёт стойку для брони в указанном местоположении. |
| Создать визуализатор блока | game_spawn_block_display | game | entity | spawn_location: location<br/>custom_name: text<br/>block: block | Создаёт визуализатор блока на указанном местоположении. |
| Создать облако туманного зелья | game_spawn_effect_cloud | game | entity | location: location<br/>effects: potion<br/>radius: number<br/>duration: number<br/>particle: particle<br/>custom_name: text | Создаёт облако туманного зелья, которое пропитывает эффектами сущностей в нём. |
| Создать кристалл Энда | game_spawn_end_crystal | game | entity | location: location<br/>custom_name: text<br/>show_bottom: enum | Создаёт кристалл Энда в указанном местоположении. |
| Создать челюсти заклинателя | game_spawn_evoker_fangs | game | entity | location: location<br/>custom_name: text | Создаёт челюсти заклинателя в указанном местоположении. |
| Создать сферу опыта | game_spawn_experience_orb | game | entity | location: location<br/>experience_amount: number<br/>custom_name: text | Создаёт сферу опыта в указанном местоположении с выбранными параметрами. |
| Создать око Энда | game_spawn_eye_of_ender | game | entity | location: location<br/>destination: location<br/>lifespan: number<br/>custom_name: text<br/>end_of_lifespan: enum | Создаёт в указанном местоположении око Энда, которое будет двигаться в сторону цели. |
| Создать падающий блок | game_spawn_falling_block | game | entity | block: block<br/>location: location<br/>name: text<br/>should_expire: enum | Создаёт падающий блок в указанном местоположении. |
| Создать сущность взаимодействия | game_spawn_interaction_entity | game | entity | location: location<br/>custom_name: text<br/>width: number<br/>height: number<br/>responsive: enum | Создаёт сущность взаимодействия на указанном местоположении. |
| Создать предмет | game_spawn_item | game | entity | item: item<br/>location: location<br/>custom_name: text<br/>apply_motion: enum<br/>can_mob_pickup: enum<br/>can_player_pickup: enum | Создаёт предмет в указанном местоположении с выбранными параметрами. |
| Создать визуализатор предмета | game_spawn_item_display | game | entity | spawn_location: location<br/>custom_name: text<br/>displayed_item: item | Создаёт визуализатор предмета на указанном местоположении. |
| Создать рамку | game_spawn_item_frame | game | entity | spawn_location: location<br/>item: item<br/>rotation: enum<br/>block_face: enum<br/>glowing: enum<br/>visible: enum<br/>fixed: enum | Создаёт рамку в указанном местоположении. |
| Создать молнию | game_spawn_lightning_bolt | game | entity | location: location | Создаёт молнию в указанном местоположении. |
| Создать моба | game_spawn_mob | game | entity | mob: item<br/>location: location<br/>health: number<br/>custom_name: text<br/>potion_effects: potion<br/>main_hand: item<br/>helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>off_hand: item<br/>natural_equipment: enum | Создаёт моба в указанном местоположении с выбранными параметрами. |
| Создать картину | game_spawn_painting | game | entity | spawn_location: location<br/>art: text<br/>block_face: enum | Создаёт картину в указанном местоположении. |
| Создать подожжённый динамит | game_spawn_primed_tnt | game | entity | location: location<br/>tnt_power: number<br/>fuse_duration: number<br/>custom_name: text<br/>block: block | Создаёт подожжённый динамит в указанном местоположении. |
| Создать снаряд Шалкера | game_spawn_shulker_bullet | game | entity | location: location<br/>custom_name: text | Создаёт снаряд Шалкера в указанном местоположении. |
| Создать визуализатор текста | game_spawn_text_display | game | entity | spawn_location: location<br/>custom_name: text<br/>merging_mode: enum<br/>displayed_text: text | Создаёт визуализатор текста на указанном местоположении. |
| Создать транспорт | game_spawn_vehicle | game | entity | vehicle: item<br/>location: location<br/>custom_name: text | Создаёт транспорт в указанном местоположении с выбранными параметрами. |
| Возврат события | game_uncancel_event | game | event |  | Возвращает отмену события, которое вызвало этот код. |
| Обновить смежные блоки | game_update_block | game | block | location: location | Обновляет соседние блоки на указанном местоположении, если блок на местоположении не является воздухом. Сам по себе блок на местоположении не обновляется, но может обновиться от соседних. |
| Установить качание вазы | game_wobble_decorated_pot | game | block | location: location<br/>style: enum | Устанавливает указанный тип качания вазы на указанном местоположении. |
| Блок равен | if_game_block_equals | if_game |  | location: location<br/>blocks: block | Проверяет, является ли блок в определённом местоположении определённым типом блока. |
| Блок запитан редстоуном | if_game_block_powered | if_game |  | locations: location<br/>power_mode: enum | Проверяет, запитан ли блок в определённом местоположении редстоуном. |
| Чанк имеет кастомный тег | if_game_chunk_has_custom_tag | if_game |  | location: location<br/>tag: text<br/>tag_value: text<br/>compare_type: enum | Проверяет, имеет ли чанк указанный кастомный тег. |
| Чанк загружен | if_game_chunk_is_loaded | if_game |  | location: location | Проверяет, загружен ли чанк на местоположении. |
| Контейнер имеет предмет | if_game_container_has | if_game |  | location: location<br/>items: item<br/>check_mode: enum<br/>comparison_mode: enum | Проверяет, имеет ли контейнер в определённом местоположении определённые предметы в его инвентаре. |
| Контейнер имеет место для предметов | if_game_container_has_room_for_item | if_game |  | location: location<br/>items: item<br/>check_mode: enum | Проверяет, имеет ли контейнер в определённом местоположении место для предметов в его инвентаре. |
| Источник урона события равен | if_game_damage_cause_equals | if_game |  | cause: enum | Проверяет, равен ли источник урона события выбранному. |
| Атака была критической | if_game_event_attack_is_critical | if_game |  |  | Проверяет, была ли атака в событии критической. |
| Блок события равен | if_game_event_block_equals | if_game |  | blocks: block<br/>locations: location | Проверяет, равен ли блок текущего события определённому блоку. |
| Клавиша передвижения равна | if_game_event_has_input | if_game |  | input_type: enum | Проверяет, является ли клавиша передвижения из события, выбранной клавишей. |
| Рост остановлен | if_game_event_is_age_locked | if_game |  |  | Проверяет, остановлен ли рост в событии |
| Событие отменено | if_game_event_is_canceled | if_game |  |  | Проверяет, отменено ли событие. |
| Предмет события равен | if_game_event_item_equals | if_game |  | items: item<br/>comparison_mode: enum | Проверяет, равен ли предмет текущего события определённому предмету. |
| Сущность в мире | if_game_has_entity | if_game |  | names_or_uuids: text<br/>check_mode: enum | Проверяет, существует ли определённая сущность в мире. |
| Игрок в игре | if_game_has_player | if_game |  | names_or_uuids: text<br/>check_mode: enum | Проверяет, находится ли определённый игрок в игре. |
| Источник исцеления равен | if_game_heal_cause_equals | if_game |  | heal_cause: enum | Проверяет, равен ли источник исцеления выбранному. |
| Источник огня равен | if_game_ignite_cause_equals | if_game |  | cause: enum | Проверяет, равен ли источник огня выбранному. |
| Инструмент равен | if_game_instrument_equals | if_game |  | instrument: enum | Проверяет, равен ли инструмент в событии выбранному. |
| Если местоположение внутри блока | if_game_location_in_block | if_game |  | location: location | Проверяет, находится ли указанное местоположение внутри блока. |
| Табличка содержит текст | if_game_sign_contains | if_game |  | location: location<br/>texts: text<br/>check_side: enum<br/>check_mode: enum<br/>lines: enum | Проверяет, содержит ли табличка в определённом местоположении определённый текст. |
| Блок-сущность имеет кастомный тег | if_game_tile_block_has_custom_tag | if_game |  | location: location<br/>tag: text<br/>tag_value: text<br/>compare_type: enum | Проверяет, имеет ли блок-сущность указанный кастомный тег. |
