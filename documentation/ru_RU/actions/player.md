# Player actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Имеет цвета в чате | if_player_chat_colors_enabled | if_player | toggleable |  | Проверяет, включена ли настройка "Цвета в чате" у игрока. |
| Сообщение равно | if_player_chat_message_equals | if_player | misc | chat_messages: text<br/>ignore_case: enum | Проверяет, равно ли сообщение игрока выбранному. |
| Сталкивается на местоположении | if_player_collides_at_location | if_player | location | location: location | Проверяет, сталкивается ли игрок с блоками, шалкерами, лодками и границей мира на указанном местоположении. |
| Сталкивается используя кастомный хитбокс | if_player_collides_using_hitbox | if_player | location | min: location<br/>max: location | Проверяет, сталкивается ли игрок с блоками, шалкерами, лодками и границей мира используя кастомный хитбокс. |
| Сталкивается с сущностью | if_player_collides_with_entity | if_player | location | name_or_uuid: text<br/>check_type: enum | Проверяет, сталкивается ли хитбокс игрока с хитбоксом указанной сущности. |
| Предмет на курсоре равен | if_player_cursor_item_equals | if_player | item | items: item<br/>comparison_mode: enum | Проверяет, равен ли предмет, находящийся на курсоре игрока, выбранному предмету. |
| Режим игры равен | if_player_gamemode_equals | if_player | misc | gamemode: enum | Проверяет, равен ли режим игры игрока выбранному. |
| Клавиша передвижения нажата | if_player_has_input | if_player | misc | input_type: enum | Проверяет, нажата ли выбранная кнопка передвижения у игрока. |
| Имеет предмет | if_player_has_item | if_player | item | items: item<br/>check_mode: enum<br/>comparison_mode: enum | Проверяет, имеет ли игрок предмет в своём инвентаре. |
| Имеет предмет в количестве | if_player_has_item_at_least | if_player | item | item: item<br/>count: number<br/>comparison_mode: enum | Проверяет, имеет ли игрок предмет в определённом количестве. |
| Имеет предмет в слоте | if_player_has_item_in_slot | if_player | item | items: item<br/>slots: number<br/>comparison_mode: enum | Проверяет, имеет ли игрок предмет в определённом слоте инвентаря. |
| Имеет эффект от зелья | if_player_has_potion_effect | if_player | misc | potions: potion<br/>check_mode: enum | Проверяет, имеет ли игрок эффект от зелья. |
| Имеет права | if_player_has_privilege | if_player | misc | privilege: enum<br/>exact: enum | Проверяет, имеет ли игрок определённые права в мире. |
| Имеет место для предметов | if_player_has_room_for_item | if_player | item | items: item<br/>check_mode: enum<br/>checked_slots: enum | Проверяет, имеет ли игрок в своём инвентаре место для одного или нескольких предметов. |
| Слот в хот-баре равен | if_player_hotbar_slot_equals | if_player | misc | slot: number | Проверяет, совпадает ли текущий слот хот-бара игрока со слотом от 1 до 9 в сундуке. |
| Внутри региона | if_player_in_area | if_player | location | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum | Проверяет, находится ли игрок в определённом регионе. |
| Слот в инвентаре содержит | if_player_inventory_menu_slot_equals | if_player | item | items: item<br/>slots: number<br/>comparison_mode: enum | Проверяет, содержит ли сейчас игрок с открытым инвентарём определённый предмет в слоте. |
| Открыт инвентарь типа | if_player_inventory_type_open | if_player | misc | inventory_type: enum | Проверяет, открыт ли инвентарь определённого типа у игрока. |
| Отображается в списке игроков сервера | if_player_is_allow_server_listing | if_player | toggleable |  | Проверяет, включена ли настройка "Показывать в списках" у игрока. |
| Использует щит | if_player_is_blocking | if_player | toggleable |  | Проверяет, использует ли игрок щит. |
| Замаскирован для всех | if_player_is_disguised | if_player | toggleable |  | Проверяет, замаскирован ли игрок для остальных игроков. |
| Летит | if_player_is_flying | if_player | toggleable |  | Проверяет, летит ли игрок. |
| Парит | if_player_is_gliding | if_player | toggleable |  | Проверяет, парит ли игрок на элитрах. |
| Держит предмет | if_player_is_holding | if_player | item | items: item<br/>hand_slot: enum<br/>comparison_mode: enum | Проверяет, держит ли игрок предмет в своих руках. |
| Смотрит на блок | if_player_is_looking_at_block | if_player | location | blocks: block<br/>locations: location<br/>distance: number<br/>fluid_mode: enum | Проверяет, смотрит ли игрок на определённый блок или местоположение. |
| Рядом с местоположением | if_player_is_near | if_player | location | ignore_y_axis: enum<br/>location: location<br/>range: number | Проверяет, находится ли игрок рядом с указанным местоположением (По умолчанию: 5 блоков). |
| Стоит на земле | if_player_is_on_ground | if_player | toggleable |  | Проверяет, не находится ли игрок в воздухе. |
| Имеет лицензионный аккаунт | if_player_is_online_mode | if_player | toggleable |  | Проверяет, имеет ли игрок лицензионный аккаунт. |
| Оседлал существо | if_player_is_riding_entity | if_player | misc | entity_ids: text<br/>compare_mode: enum | Проверяет, оседлал ли игрок существо (включая транспорт). |
| Замаскирован для себя | if_player_is_self_disguised | if_player | toggleable |  | Проверяет, замаскирован ли игрок для себя. |
| Спит | if_player_is_sleeping | if_player | toggleable |  | Проверяет, спит ли игрок. |
| Крадется | if_player_is_sneaking | if_player | toggleable |  | Проверяет, крадется ли игрок. |
| Бежит | if_player_is_sprinting | if_player | toggleable |  | Проверяет, бежит ли игрок или использует клавишу бега при плавании. |
| Стоит на блоке | if_player_is_standing_on_block | if_player | location | blocks: block<br/>locations: location<br/>only_solid: enum | Проверяет, стоит ли игрок на определённом блоке или местоположении. |
| Плавает | if_player_is_swimming | if_player | toggleable |  | Проверяет, плавает ли игрок в воде или лаве. |
| Игрок перемещен на сервер | if_player_is_transferred | if_player | toggleable |  | Проверяет, перемещен ли игрок с другого сервера. |
| Использует предмет | if_player_is_using_item | if_player | item | items: item<br/>comparison_mode: enum | Проверяет, использует ли игрок лук, щит или любой другой предмет, который возможно использовать. |
| Одет в предмет | if_player_is_wearing_item | if_player | item | items: item<br/>check_mode: enum<br/>comparison_mode: enum | Проверяет, одет ли игрок в предмет. |
| Группа предметов не имеет задержку | if_player_item_group_is_not_on_cooldown | if_player | item | item_keys: text<br/>check_mode: enum | Проверяет, не имеет ли группа предметов у игрока задержку, применимую к определённому типу предметов. |
| Предмет не имеет задержку | if_player_item_is_not_on_cooldown | if_player | item | items: item<br/>check_mode: enum | Проверяет, не имеет ли предмет у игрока задержку, применимую к определённому типу предметов. |
| Имя равно | if_player_name_equals | if_player | misc | names_or_uuids: text | Проверяет, равно ли имя игрока имени в сундуке. |
| Имеет фильтр слов | if_player_text_filtering_enabled | if_player | toggleable |  | Проверяет, включен ли фильтр слов от Mojang у игрока. |
| Добавить строку меню | player_add_inventory_menu_row | player | inventory_menus | items: item<br/>position: enum | Добавляет строку с указанными предметами в инвентаре типа "Сундук". |
| creative_plus.action.player_allow_placing_breaking_blocks.name | player_allow_placing_breaking_blocks | player | settings | allow: enum<br/>blocks: block | creative_plus.action.player_allow_placing_breaking_blocks.description |
| Ускорить полёт на Элитрах | player_boost_elytra | player | movement | firework: item | Ускоряет полёт игрока на Элитрах с силой указанного фейерверка. |
| Прервать использование предмета | player_clear_active_item | player | item_management |  | Прерывает использование текущего предмета. |
| Очистить чат | player_clear_chat | player | communication |  | Удаляет все сообщения из окна чата выбранных игроков. |
| Удалить отладочные маркеры | player_clear_debug_markers | player | world |  | Удаляет все отладочные маркеры для игрока. |
| Очистить содержимое Эндер-сундука | player_clear_ender_chest_contents | player | item_management |  | Очищает предметы в инвентаре Эндер-сундука игрока. |
| Очистить инвентарь | player_clear_inventory | player | item_management | clear_mode: enum | Очищает инвентарь игрока. |
| Очистить предметы | player_clear_items | player | item_management | items: item | Удаляет все выбранные предметы из инвентаря игрока. |
| Очистить эффекты | player_clear_potion_effects | player | parameters |  | Очищает все эффекты у игрока. |
| Закрыть диалоговое окно | player_close_dialog_menu | player | communication |  | Закрывает текущее диалоговое окно игроку. |
| Закрыть меню | player_close_inventory | player | inventory_menus |  | Закрывает открытое инвентарное меню игрока. |
| Завершить использование предмета | player_complete_using_active_item | player | item_management |  | Завершает использование текущего предмета в руке с результатом. |
| Отправить игрока на другой сервер | player_connect_to_server | player | miscellaneous | server_name: text | Отправляет игрока на сервер с указанным именем (например, "cr-0"). |
| Нанести урон | player_damage | player | parameters | damage: number<br/>source: text | Наносит урон игроку. |
| Замаскировать игрока под блок | player_disguise_as_block | player | appearance | block: block<br/>visible_to_self: enum | Маскирует игрока под выбранный блок. |
| Замаскировать игрока под сущность | player_disguise_as_entity | player | appearance | entity_type: item<br/>visible_to_self: enum | Маскирует игрока под выбранную сущность. |
| Замаскировать игрока под предмет | player_disguise_as_item | player | appearance | item: item<br/>visible_to_self: enum | Маскирует игрока под предмет. |
| Показать удар в колокол | player_display_bell_ring | player | world | location: location<br/>direction: enum | Показывает игроку анимацию удара в колокол, не влияя на других игроков. |
| Показать блок | player_display_block | player | world | location: location<br/>block: block | Показать игроку блок, не влияя на других игроков. |
| Показать анимацию луча Врат Энда | player_display_end_gateway_beam | player | world | location: location<br/>color: enum | Показывает анимацию луча Врат Энда на определённом местоположении. |
| Показать голограмму | player_display_hologram | player | world | location: location<br/>text: text | Показывает игроку голограмму. Чтобы удалить голограмму на местоположении, оставьте текст пустым. |
| Отобразить эффект молнии | player_display_lightning | player | particle | location: location | Отобразить молнию игроку, не показывая её для других игроков и не поджигая местность. |
| Отобразить эффект частицы | player_display_particle | player | particle | particle: particle<br/>location: location | Отображает игроку эффект частицы на выбранном местоположении. |
| Отобразить окружность частиц | player_display_particle_circle | player | particle | particle: particle<br/>center: location<br/>radius: number<br/>points: number<br/>start_angle: number<br/>perpendicular: vector<br/>angle_unit: enum | Отображает игроку окружность из эффекта частиц с указанными параметрами. |
| Отобразить куб частиц | player_display_particle_cube | player | particle | particle: particle<br/>first_corner: location<br/>second_corner: location<br/>spacing: number<br/>type: enum | Отображает игроку куб из эффекта частиц с указанными параметрами. |
| Отобразить линию частиц | player_display_particle_line | player | particle | particle: particle<br/>start: location<br/>end: location<br/>divider: number<br/>unit_of_measurement: enum | Отображает игроку линию эффекта частиц от начального местоположения до конечного с определённым расстоянием. |
| Отобразить луч частиц | player_display_particle_ray | player | particle | particle: particle<br/>start: location<br/>ray: vector<br/>divider: number<br/>unit_of_measurement: enum | Отображает игроку луч эффекта частиц от начального местоположения по указанному вектору с определённым расстоянием. |
| Отобразить сферу частиц | player_display_particle_sphere | player | particle | particle: particle<br/>center: location<br/>radius: number<br/>points: number | Отображает игроку сферу из эффекта частиц с указанными параметрами. |
| Отобразить спираль частиц | player_display_particle_spiral | player | particle | particle: particle<br/>center: location<br/>distance: number<br/>radius: number<br/>points: number<br/>rotations: number<br/>start_angle: number<br/>angle_unit: enum | Отображает игроку спираль из эффекта частиц с указанными параметрами. |
| Показать анимацию подбора предмета | player_display_pick_up_animation | player | world | collected_name_or_uuid: text<br/>collector_name_or_uuid: text<br/>amount: number | Показывает игроку анимацию подбора предмета. |
| Показать текст таблички | player_display_sign_text | player | world | location: location<br/>line_1: text<br/>line_2: text<br/>line_3: text<br/>line_4: text<br/>side: enum | Показать игроку изменение текста таблички, не изменяя её текст для других игроков. |
| Отобразить частицу вибрации | player_display_vibration | player | particle | from: location<br/>to: location<br/>destination_time: number | Отображает игроку частицу вибрации движущуюся с одной точки на другую. |
| Расширить меню | player_expand_inventory_menu | player | inventory_menus | items: item<br/>size: number | Расширяет открытое инвентарное меню игрока на выбранное количество строк и заполняет его указанными предметами. |
| Повернуть к местоположению | player_face_location | player | movement | location: location | Поворачивает игрока в сторону к местоположению. |
| Получить значение атрибута игрока | player_get_attribute | player | parameters | variable: variable<br/>attribute_type: enum<br/>return_value: enum | Получает значение указанного атрибута игрока и присваивает результат к переменной. |
| Получить NBT-теги игрока | player_get_nbt | player | miscellaneous | variable: variable<br/>path: text<br/>value_type: enum | Получает NBT-теги игрока по введённому пути и присваивает результат к переменной. |
| Прибавить уровень | player_give_experience | player | parameters | experience: number<br/>mode: enum | Прибавляет уровень игроку. |
| Выдать предмет | player_give_items | player | item_management | items: item<br/>amount: number | Выдаёт игроку предметы из сундука. |
| Выдать эффект | player_give_potion_effect | player | parameters | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum | Выдаёт выбранные эффекты игроку. |
| Выдать случайный предмет | player_give_random_item | player | item_management | items: item | Выдаёт игроку случайный предмет или стак из предметов в сундуке. |
| Исцелить игрока | player_heal | player | parameters | heal: number | Исцеляет игрока. |
| Скрыть кастомный рецепт | player_hide_custom_recipe | player | miscellaneous | names: text<br/>is_vanilla_recipe: enum | Скрывает игроку рецепт. |
| Скрыть сущность игроку | player_hide_entity | player | world | name_or_uuid: text<br/>hide: enum | Скрывает указанную сущность для игрока. |
| Скрыть скорборд | player_hide_scoreboard | player | miscellaneous |  | Скрывает текущий скорборд игрока. |
| Выгнать игрока | player_kick | player | miscellaneous |  | Выгоняет игрока из мира. |
| Запустить вперёд | player_launch_forward | player | movement | power: number<br/>increment: enum<br/>launch_axis: enum | Запускает игрока вперёд или назад по направлению взгляда в зависимости от силы. |
| Запустить снаряд | player_launch_projectile | player | world | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle | Запустить снаряд из местоположения игрока. |
| Запустить к местоположению | player_launch_to_location | player | movement | location: location<br/>power: number<br/>increment: enum | Запускает игрока к выбранному местоположению. |
| Подбросить вверх | player_launch_up | player | movement | power: number<br/>increment: enum | Подбрасывает игрока вверх или вниз в зависимости от силы. |
| Высадить из транспорта | player_leave_vehicle | player | movement |  | Высаживает игрока из транспорта или существа. |
| Загрузить сохранённый инвентарь | player_load_inventory | player | item_management |  | Загружает выбранный сохранённый инвентарь. |
| Замаскировать игрока под сущность из мира | player_mimic_disguise_from_entity | player | appearance | name_or_uuid: text<br/>include_disguise: enum<br/>disguise: enum<br/>remove_original_entity: enum | Маскирует игрока под указанную сущность из мира. |
| Открыть книгу | player_open_book | player | communication | book: item | Открывает книгу определённому игроку. |
| Открыть меню блока | player_open_container_inventory | player | inventory_menus | location: location | Открывает для игрока меню блока в указанном местоположении. |
| Открыть Эндер-сундук | player_open_ender_chest | player | inventory_menus |  | Открывает для игрока Эндер-сундук. |
| Открыть функциональное меню | player_open_working_menu | player | inventory_menus | title: text<br/>menu_type: enum | Открывает для игрока меню, имеющее функционал. |
| Проиграть анимацию игроку | player_play_animation_action | player | appearance | animation: enum | Проигрывает для игрока определённую анимацию. |
| Проиграть анимацию получения урона | player_play_hurt_animation | player | appearance | yaw: number | Проигрывает для игрока анимацию получения урона с определённым наклоном. |
| Проиграть звук | player_play_sound | player | communication | sound: sound<br/>location: location | Проигрывает звук игроку. |
| Проиграть звук от сущности | player_play_sound_from_entity | player | communication | sounds: sound<br/>name_or_uuid: text | Проигрывает звук игроку от указанной сущности. |
| Проиграть последовательность звуков | player_play_sound_sequence | player | communication | sounds: sound<br/>delay: number<br/>location: location | Проигрывает игроку последовательность звуков с задержкой между каждым звуком. |
| Случайная телепортация | player_randomized_teleport | player | movement | locations: location<br/>keep_rotation: enum<br/>keep_velocity: enum<br/>dismount: enum | Телепортирует игрока в случайное местоположение. |
| Переместить игрока в другой мир | player_redirect_world | player | miscellaneous | world_id: text | Перемещает игрока в мир с указанным ID. |
| Удалить босс-бар | player_remove_boss_bar | player | communication | id: text | Удаляет имеющийся босс-бар у определённого игрока. |
| Убрать маскировку | player_remove_disguise | player | appearance |  | Убирает маскировку игроку. |
| Скрыть отображаемые блоки | player_remove_display_blocks | player | world | pos_1: location<br/>pos_2: location | Скрывает от игрока все отображаемые блоки в выбранном пространстве, не влияя на других игроков (максимальный размер пространства - 500 блоков). |
| Убрать строки меню | player_remove_inventory_menu_row | player | inventory_menus | size: number<br/>position: enum | Убирает одну или несколько строк в инвентаре типа "Сундук". |
| Удалить предметы | player_remove_items | player | item_management | items: item | Удаляет указанные предметы из инвентаря игрока. |
| Сбросить позу игроку | player_remove_pose | player | appearance |  | Сбрасывает позу игроку. |
| Удалить эффект | player_remove_potion_effect | player | parameters | potions: potion | Удаляет выбранные эффекты у игрока. |
| Убрать свою маскировку | player_remove_self_disguise | player | appearance |  | Убирает маскировку игрока, которую видно только ему. |
| Убрать скин | player_remove_skin | player | appearance |  | Возвращает обычный скин цели события. |
| Сбросить границу мира | player_remove_world_border | player | world |  | Установить границу мира для игрока на значение по умолчанию. |
| Заменить предметы | player_replace_items | player | item_management | items: item<br/>replace: item<br/>count: number | Заменяет указанные предметы в инвентаре на определённый предмет. |
| Сбросить цвет значка на локаторе | player_reset_waypoint_color | player | settings |  | Устанавливает игроку цвет значка, отображаемого на локаторе, по умолчанию. |
| Сбросить погоду | player_reset_weather | player | world |  | Сбрасывает погоду игроку. |
| Посадить на существо | player_ride_entity | player | movement | name_or_uuid: text | Сажает игрока на существо или другого игрока. |
| Сохранить текущий инвентарь | player_save_inventory | player | item_management |  | Сохраняет текущий инвентарь игрока. Его можно будет загрузить позже с помощью 'Загрузить сохранённый инвентарь'. |
| Замаскировать себя под блок | player_self_disguise_as_block | player | appearance | block: block | Маскирует игрока под блок, но эту маскировку видно только этому игроку. |
| Замаскировать себя под сущность | player_self_disguise_as_entity | player | appearance | entity_type: item | Маскирует игрока под сущность, но эту маскировку видно только этому игроку. |
| Замаскировать себя под предмет | player_self_disguise_as_item | player | appearance | item: item | Маскирует игрока под предмет, но эту маскировку видно только этому игроку. |
| Отправить экшн-бар | player_send_action_bar | player | communication | messages: text<br/>merging: enum | Высвечивает выбранному игроку экшн-бар. |
| Отправить достижение игроку | player_send_advancement | player | communication | frame: enum<br/>name: text<br/>icon: item | Высвечивает игроку пользовательское всплывающее достижение. |
| Показать анимацию ломания блока | player_send_break_animation | player | world | locations: location<br/>stage: number | Показывает анимацию ломания блока (трещины) для игрока, не влияя на других игроков. |
| Диалог | player_send_dialogue | player | communication | messages: text<br/>delay: number | Отправляет несколько сообщений в чат выбранным игрокам с задержкой после каждого сообщения. |
| Отправить сообщение с наведением | player_send_hover | player | communication | message: text<br/>hover: text | Отправляет сообщение выбранному игроку. Когда игрок 'наводит' на него курсор, появляется второе сообщение. |
| Отправить сообщение | player_send_message | player | communication | messages: text<br/>merging: enum | Отправляет сообщение в чат указанным игрокам. |
| Отправить сообщение формата MiniMessage | player_send_minimessage | player | communication | minimessage: text | Отправляет игроку сообщение в чат в формате MiniMessage. |
| Отправить титул | player_send_title | player | communication | title: text<br/>subtitle: text<br/>fade_in: number<br/>stay: number<br/>fade_out: number | Высвечивает выбранному игроку две надписи на экран - титул и подтитул. |
| Установить дополнительное здоровье | player_set_absorption_health | player | parameters | health: number | Устанавливает дополнительное здоровье игрока. |
| Установить оставшийся воздух | player_set_air_ticks | player | parameters | ticks: number | Устанавливает оставшийся воздух игроку. |
| Установить разрешение полёта игрока | player_set_allow_flying | player | settings | allow_flying: enum | Устанавливает разрешение полёта для игрока. |
| Установить броню | player_set_armor | player | item_management | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item | Устанавливает броню игрока. |
| Установить стрелы на игроке | player_set_arrows_in_body | player | appearance | amount: number | Отображает определённое количество стрел на игроке. |
| Установить скорость атаки | player_set_attack_speed | player | parameters | speed: number | Устанавливает скорость атаки игроку. |
| Установить атрибут | player_set_attribute | player | parameters | value: number<br/>attribute_type: enum | Устанавливает игроку указанное значение атрибута. |
| Установить жало пчелы на игроке | player_set_bee_stingers_in_body | player | appearance | amount: number | Отображает определённое количество жал пчёл на игроке. |
| Открыть/Закрыть блок | player_set_block_opened_state | player | world | location: location<br/>is_opened: enum | Отобразить игроку закрытие/открытие блока не меняя состояния блока для других игроков. |
| Установить босс-бар | player_set_boss_bar | player | communication | id: text<br/>title: text<br/>progress: number<br/>color: enum<br/>style: enum<br/>sky_effect: enum | Устанавливает у определённого игрока пользовательский босс-бар. |
| Обновление подсказок в чате | player_set_chat_completions | player | communication | completions: text<br/>setting_mode: enum | Обновляет игроку подсказки, показываемые при вводе текста в чате. |
| Установить режим столкновения | player_set_collidable | player | settings | collidable: enum | Устанавливает игроку режим столкновения с существами. |
| Установить цель компаса | player_set_compass_target | player | world | location: location | Установить цель компаса для игрока, в сторону которой будет крутиться стрелка компаса. |
| Установить предмет на курсор | player_set_cursor_item | player | item_management | item: item | Устанавливает предмет на курсор игрока. |
| Установить выпадение предметов | player_set_death_drops | player | settings | death_drops: enum | Устанавливает выпадение предметов из игрока при смерти. |
| Установить количество очков | player_set_death_screen_score | player | parameters | score: number | Устанавливает количество очков, отображаемых игроку на экране смерти. |
| Установить видимость | player_set_default_visible | player | settings | default_visible: enum | Устанавливает игроку видимость. |
| Установить сид зачарований | player_set_enchantment_seed | player | parameters | seed: number | Устанавливает игроку сид зачарований, определяющий набор зачарований в чародейском столе. |
| Установить содержимое Эндер-сундука | player_set_ender_chest_contents | player | item_management | items: item | Устанавливает предметы в инвентарь Эндер-сундука игрока. |
| Установить свечение сущности | player_set_entity_glowing | player | world | name_or_uuid: text<br/>color: enum<br/>glow: enum | Включает или выключает свечение сущности для данного игрока. |
| Установить экипировку | player_set_equipment | player | item_management | item: item<br/>slot: enum | Устанавливает предметы в один из слотов экипировки (броня и предметы в руках) игрока. |
| Установить уровень истощения | player_set_exhaustion | player | parameters | exhaustion: number<br/>mode: enum | Устанавливает уровень истощения игроку. |
| Установить уровень | player_set_experience | player | parameters | experience: number<br/>mode: enum | Устанавливает уровень игроку. |
| Установить дистанцию падения | player_set_fall_distance | player | parameters | distance: number | Устанавливает дистанцию, с которой падает игрок. |
| Поджечь игрока | player_set_fire_ticks | player | parameters | ticks: number | Поджигает игрока на выбранное время. |
| Установить полёт | player_set_flying | player | movement | is_flying: enum | Устанавливает для игрока состояние полёта. |
| Установить дистанцию прорисовки | player_set_fog_distance | player | world | distance: number | Устанавливает дистанцию прорисовки чанков для игрока. Значение "-1" сбрасывает до стандартной. |
| Установить голод | player_set_food | player | parameters | food: number<br/>mode: enum | Устанавливает уровень голода игроку. |
| Установить время заморозки | player_set_freeze_ticks | player | parameters | ticks: number<br/>ticking_locked: enum | Устанавливает игроку время заморозки (количество тиков, которое игрок провёл в рыхлом снегу). |
| Установить режим игры | player_set_gamemode | player | settings | gamemode: enum<br/>flight_mode: enum | Устанавливает режим игры для игрока. |
| Установить полёт на элитрах | player_set_gliding | player | movement | is_gliding: enum | Устанавливает для игрока состояние полёта на элитрах. |
| Установить здоровье игрока | player_set_health | player | parameters | health: number | Устанавливает здоровье игрока на выбранное количество. |
| Установить слот | player_set_hotbar_slot | player | parameters | slot: number | Устанавливает выбранный слот игроку. |
| Установить мгновенное возрождение | player_set_instant_respawn | player | settings | instant_respawn: enum | Устанавливает мгновенное возрождение игроку. |
| Установить сохранение инвентаря | player_set_inventory_kept | player | settings | kept: enum | Устанавливает игроку сохранение инвентаря при смерти. |
| Установить кастомный ID открытого инвентаря | player_set_inventory_menu_custom_id | player | inventory_menus | custom_id: text | Устанавливает кастомный ID для открытого меню игрока. |
| Установить предмет в слот | player_set_inventory_menu_item | player | inventory_menus | item: item<br/>slot: number | Устанавливает предмет в указанный слот открытого инвентарного меню игрока. |
| Установить название меню | player_set_inventory_menu_name | player | inventory_menus | text: text | Устанавливает новое название для открытого инвентарного меню игрока. |
| Установить длительность неуязвимости | player_set_invulnerability_ticks | player | parameters | ticks: number | Устанавливает длительность неуязвимости для игрока. |
| Установить задержку предмета | player_set_item_cooldown | player | item_management | item: item<br/>cooldown: number<br/>sound: sound | Применяет визуальный эффект шкалы задержки для всех предметов выбранного типа. |
| Установить задержку для группы предметов | player_set_item_group_cooldown | player | item_management | key: text<br/>cooldown: number | Применяет визуальный эффект шкалы задержки для всех предметов указанной группы. |
| Установить предметы | player_set_items | player | item_management | items: item | Устанавливает в инвентарь игрока соответственно предметы из сундука. |
| Установить максимальное здоровье игрока | player_set_max_health | player | parameters | health: number<br/>heal: enum | Устанавливает максимальное количество здоровья для игрока. |
| Установить максимальную длительность неуязвимости | player_set_max_invulnerability_ticks | player | parameters | ticks: number | Устанавливает максимальную длительность неуязвимости для игрока. |
| Установить скорость движения | player_set_movement_speed | player | parameters | distance: number<br/>movement_type: enum | Устанавливает скорость движения игрока. |
| Отображение ника игрока | player_set_nametag_visible | player | settings | visible: enum | Отобразит или скроет ник над головой. |
| Установить текст в списке игроков | player_set_player_list_info | player | communication | text: text<br/>position: enum<br/>merging: enum | Устанавливает текст над или под списком игроков для игрока. |
| Установить позу игроку | player_set_pose | player | appearance | pose: enum<br/>locked: enum | Устанавливает определённую позу игроку. |
| Установить разрешение атаковать игроков | player_set_pvp | player | settings | pvp: enum | Устанавливает разрешение игроку атаковать других игроков и наносить им урон. |
| Установить уровень дождя | player_set_rain_level | player | world | rain_level: number | Устанавливает уровень дождя игроку. |
| Установить поворот | player_set_rotation | player | movement | yaw: number<br/>pitch: number | Устанавливает поворот игрока. |
| Установить поворот по вектору | player_set_rotation_by_vector | player | movement | vector: vector | Устанавливает поворот игрока по вектору. |
| Установить скорость регенерации с насыщением | player_set_saturated_regen_rate | player | parameters | rate: number | Устанавливает игроку скорость регенерации с насыщением. |
| Установить насыщенность | player_set_saturation | player | parameters | saturation: number<br/>mode: enum | Устанавливает второстепенный уровень голода (насыщенность) игроку. |
| Установить дистанцию симуляции | player_set_simulation_distance | player | world | distance: number | Устанавливает дистанцию симуляции чанков для игрока. |
| Установить скин | player_set_skin | player | appearance | name_or_uuid: text<br/>server_type: enum | Устанавливает скин указанного игрока для цели события. |
| Установить предмет в слот | player_set_slot_item | player | item_management | item: item<br/>slot: number | Устанавливает предмет в слот в инвентаре игрока. |
| Установить местоположение возрождения | player_set_spawn_point | player | settings | spawn_point: location | Устанавливает игроку новое местоположение возрождения. |
| Установить скорость голодания | player_set_starvation_rate | player | parameters | rate: number | Устанавливает игроку скорость голодания. |
| Установить уровень грозы | player_set_thunder_level | player | world | thunder_level: number | Устанавливает уровень грозы игроку. |
| Установить тик-рейт | player_set_tick_rate | player | world | tick_rate: number | Устанавливает игроку тик-рейт, не влияя на других игроков. |
| Установить время игрока | player_set_time | player | world | time: number | Установить время игроку, не меняя его для остальных игроков. |
| Установить скорость регенерации без насыщения | player_set_unsaturated_regen_rate | player | parameters | rate: number | Устанавливает игроку скорость регенерации без насыщения. |
| Запустить по вектору | player_set_velocity | player | movement | velocity: vector<br/>increment: enum | Запускает игрока по указанному вектору. |
| Установить визуальный огонь | player_set_visual_fire | player | appearance | visual_fire: enum | Устанавливает игроку эффект горения. |
| Установить цвет значка на локаторе | player_set_waypoint_color | player | settings | red: number<br/>green: number<br/>blue: number | Устанавливает игроку цвет значка, отображаемого на локаторе. |
| Установить стиль значка на локаторе | player_set_waypoint_style | player | settings | style: text | Устанавливает игроку стиль значка, отображаемого на локаторе. |
| Установить погоду | player_set_weather | player | world | weather_type: enum | Установить погоду для игрока, не влияя на других игроков. |
| Установить границу мира игроку | player_set_world_border | player | world | center: location<br/>size: number<br/>warning: number | Установить границу мира для игрока, не меняя её для других игроков. |
| Передвинуть границу мира | player_shift_world_border | player | world | old_size: number<br/>size: number<br/>time: number | Передвинуть границу мира для игрока, не меняя её для других игроков. |
| Показать кастомный рецепт | player_show_custom_recipe | player | miscellaneous | names: text<br/>is_vanilla_recipe: enum | Отображает игроку новый рецепт в книге рецептов. |
| Показать отладочный маркер | player_show_debug_marker | player | world | location: location<br/>name: text<br/>duration: number<br/>red: number<br/>green: number<br/>blue: number<br/>alpha: number | Показывает игроку отладочный маркер на местоположении на указанное время. Красный и синий цвет работают для игроков на версии 1.19.4 и выше. |
| Показать экран демо-режима | player_show_demo_screen | player | communication |  | Показывает игроку экран демо-режима. |
| Показать диалоговое окно | player_show_dialog_menu_from_nbt | player | communication | dialog_nbt: text | Показывает игроку диалоговое окно из NBT-тегов. |
| Показать меню | player_show_inventory_menu | player | inventory_menus | items: item<br/>name: text<br/>custom_id: text<br/>inventory_type: enum | Показывает игроку инвентарное меню с выбранными предметами и названием. |
| Показать скорборд | player_show_scoreboard | player | miscellaneous | id: text | Отображает определённый скорборд игроку. Для отображения указанный скорборд должен иметь минимум одно значение. |
| Показать экран титров | player_show_win_screen | player | communication |  | Показывает игроку экран титров. |
| Следить за целью | player_spectate_target | player | movement | name_or_uuid: text | Устанавливает цель слежения игрока в режиме наблюдателя. |
| Начать использование предмета | player_start_using_item | player | item_management | equipment: enum | Начинает использование предмета в указанной руке. |
| Остановить звук | player_stop_sound | player | communication | sounds: sound | Останавливает все или определённые звуки для игрока. |
| Остановить звуки по источнику | player_stop_sounds_by_source | player | communication | source: enum | Останавливает все звуки по определённому источнику. |
| Проиграть анимацию взмаха руки | player_swing_hand | player | appearance | hand_type: enum | Проигрывает для игрока анимацию взмаха руки. |
| Телепортация | player_teleport | player | movement | location: location<br/>keep_rotation: enum<br/>keep_velocity: enum<br/>dismount: enum | Телепортирует игрока в выбранное местоположение. |
| Последовательность телепортаций | player_teleport_sequence | player | movement | delay: number<br/>locations: location | Телепортирует игрока между местоположениями с заданной задержкой. |
| Переместить на другой сервер | player_transfer_to_other_server | player | miscellaneous | domain: text<br/>port: number | Перемещает игрока на указанный сервер. |
| Запросить транзакцию | send_currency_transaction | player | miscellaneous | amount: number<br/>description: text<br/>reason: text | Отправляет игроку запрос на совершение транзакции в изумрудах. |
