# Player actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Має кольори в чаті | if_player_chat_colors_enabled | if_player | toggleable |  | Перевіряє, чи увімкнено налаштування "Кольори в чаті" у гравця. |
| Сообщение равно | if_player_chat_message_equals | if_player | misc | chat_messages: text<br/>ignore_case: enum | Проверяет, равно ли сообщение игрока выбранному. |
| Стикається на місцезнаходженні | if_player_collides_at_location | if_player | location | location: location | Перевіряє, чи стикається гравець із блоками, шалкерами, човнами та межею світу на вказаному місцезнаходженні. |
| Стикається використовуючи кастомний хітбокс | if_player_collides_using_hitbox | if_player | location | min: location<br/>max: location | Перевіряє, чи стикається гравець із блоками, шалкерами, човнами та межею світу використовуючи кастомний хітбокс. |
| Стикається з істотою | if_player_collides_with_entity | if_player | location | name_or_uuid: text<br/>check_type: enum | Перевіряє, чи стикається хітбокс гравця з хітбоксом вказаної істоти. |
| Предмет на курсоре равен | if_player_cursor_item_equals | if_player | item | items: item<br/>comparison_mode: enum | Проверяет, равен ли предмет, находящийся на курсоре игрока, выбранному предмету. |
| Режим игры равен | if_player_gamemode_equals | if_player | misc | gamemode: enum | Проверяет, равен ли режим игры игрока выбранному. |
| Клавішу пересування натиснуто | if_player_has_input | if_player | misc | input_type: enum | Перевіряє, чи натиснута вибрана кнопка пересування у гравця. |
| Имеет предмет | if_player_has_item | if_player | item | items: item<br/>check_mode: enum<br/>comparison_mode: enum | Проверяет, имеет ли игрок предмет в своем инвентаре. |
| Имеет предмет в количестве | if_player_has_item_at_least | if_player | item | item: item<br/>count: number<br/>comparison_mode: enum | Проверяет, имеет ли игрок предмет в определенном количестве. |
| Имеет предмет в слоте | if_player_has_item_in_slot | if_player | item | items: item<br/>slots: number<br/>comparison_mode: enum | Проверяет, имеет ли игрок предмет в определенном слоте инвентаря. |
| Имеет эффект от зелья | if_player_has_potion_effect | if_player | misc | potions: potion<br/>check_mode: enum | Проверяет, имеет ли игрок эффект от зелья. |
| Має права | if_player_has_privilege | if_player | misc | privilege: enum<br/>exact: enum | Перевіряє, чи має гравець певні права у світі. |
| Имеет место для предметов | if_player_has_room_for_item | if_player | item | items: item<br/>check_mode: enum<br/>checked_slots: enum | Проверяет, имеет ли игрок в своем инвентаре место для одного или нескольких предметов. |
| Слот в хот-баре равен | if_player_hotbar_slot_equals | if_player | misc | slot: number | Проверяет, совпадает ли текущий слот хот-бара игрока со слотом от 1 до 9 в сундуке. |
| Внутри региона | if_player_in_area | if_player | location | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum | Проверяет, находится ли игрок в определённом регионе. |
| Слот в инвентаре содержит | if_player_inventory_menu_slot_equals | if_player | item | items: item<br/>slots: number<br/>comparison_mode: enum | Проверяет, содержит ли сейчас игрок с открытым инвентарем определенный предмет в слоте. |
| Открыт инвентарь типа | if_player_inventory_type_open | if_player | misc | inventory_type: enum | Проверяет, открыт ли инвентарь определенного типа у игрока. |
| Відображається у списку гравців сервера | if_player_is_allow_server_listing | if_player | toggleable |  | Перевіряє, чи увімкнено налаштування "Показувати в списках" у гравця. |
| Использует щит | if_player_is_blocking | if_player | toggleable |  | Проверяет, использует ли игрок щит. |
| Замаскований для всіх | if_player_is_disguised | if_player | toggleable |  | Перевіряє, чи замаскований гравець для інших гравців. |
| Летит | if_player_is_flying | if_player | toggleable |  | Проверяет, летит ли игрок. |
| Парит | if_player_is_gliding | if_player | toggleable |  | Проверяет, парит ли игрок на элитрах. |
| Держит предмет | if_player_is_holding | if_player | item | items: item<br/>hand_slot: enum<br/>comparison_mode: enum | Проверяет, держит ли игрок предмет в своих руках. |
| Смотрит на блок | if_player_is_looking_at_block | if_player | location | blocks: block<br/>locations: location<br/>distance: number<br/>fluid_mode: enum | Проверяет, смотрит ли игрок на определенный блок или местоположение. |
| Рядом с местоположением | if_player_is_near | if_player | location | ignore_y_axis: enum<br/>location: location<br/>range: number | Проверяет, находится ли игрок рядом с указанным местоположением (По умолчанию: 5 блоков). |
| Стоїть на землі | if_player_is_on_ground | if_player | toggleable |  | Перевіряє, чи не знаходиться гравець у повітрі. |
| Має ліцензійний акаунт | if_player_is_online_mode | if_player | toggleable |  | Перевіряє, чи має гравець ліцензійний акаунт. |
| Оседлал существо | if_player_is_riding_entity | if_player | misc | entity_ids: text<br/>compare_mode: enum | Проверяет, оседлал ли игрок существо (включая транспорт). |
| Замаскований для себе | if_player_is_self_disguised | if_player | toggleable |  | Перевіряє, чи замаскований гравець для себе. |
| Спит | if_player_is_sleeping | if_player | toggleable |  | Проверяет, спит ли игрок. |
| Крадется | if_player_is_sneaking | if_player | toggleable |  | Проверяет, крадется ли игрок. |
| Бежит | if_player_is_sprinting | if_player | toggleable |  | Проверяет, бежит ли игрок или использует клавишу бега при плавании. |
| Стоит на блоке | if_player_is_standing_on_block | if_player | location | blocks: block<br/>locations: location<br/>only_solid: enum | Проверяет, стоит ли игрок на блоке определенном блоке или местоположении. |
| Плавает | if_player_is_swimming | if_player | toggleable |  | Проверяет, плавает ли игрок в воде или лаве. |
| Гравець переміщений на сервер | if_player_is_transferred | if_player | toggleable |  | Перевіряє, чи переміщений гравець з іншого сервера. |
| Использует предмет | if_player_is_using_item | if_player | item | items: item<br/>comparison_mode: enum | Проверяет, использует ли игрок лук, щит или любой другой предмет, который возможно использовать. |
| Одет в предмет | if_player_is_wearing_item | if_player | item | items: item<br/>check_mode: enum<br/>comparison_mode: enum | Проверяет, одет ли игрок в предмет. |
| creative_plus.action.if_player_item_group_is_not_on_cooldown.name | if_player_item_group_is_not_on_cooldown | if_player | item | item_keys: text<br/>check_mode: enum | creative_plus.action.if_player_item_group_is_not_on_cooldown.description |
| Предмет не имеет задержку | if_player_item_is_not_on_cooldown | if_player | item | items: item<br/>check_mode: enum | Проверяет, не имеет ли предмет у игрока задержку, применимую к определенному типу предметов. |
| Имя равно | if_player_name_equals | if_player | misc | names_or_uuids: text | Проверяет, равно ли имя игрока имени в сундуке. |
| Має фільтр слів | if_player_text_filtering_enabled | if_player | toggleable |  | Перевіряє, чи увімкнено фільтр слів від Mojang у гравця. |
| Добавить строку для меню | player_add_inventory_menu_row | player | inventory_menus | items: item<br/>position: enum | Добавляет одну или несколько строк в меню. |
| player_allow_placing_breaking_blocks | player_allow_placing_breaking_blocks | player | settings | allow: enum<br/>blocks: block | ... |
| Прискорити політ на Елітрах | player_boost_elytra | player | movement | firework: item | Прискорює політ гравця на Елітрах із силою вказаного феєрверку. |
| Перервати використання предмета | player_clear_active_item | player | item_management |  | Перериває використання поточного предмета. |
| Очистити чат | player_clear_chat | player | communication |  | Видаляє усі повідомлення з вікна чату обраних гравців. |
| Видалити налагоджувальні маркери | player_clear_debug_markers | player | world |  | Видаляє всі налагоджувальні маркери для гравця. |
| Очистити вміст Ендер-скрині | player_clear_ender_chest_contents | player | item_management |  | Очищає предмети в інвентарі Ендер-скрині гравця. |
| Очистити інвентар | player_clear_inventory | player | item_management | clear_mode: enum | Очищує інвентар гравця. |
| Очистити предмети | player_clear_items | player | item_management | items: item | Видаляє всі вибрані предмети з інвентарю гравця. |
| Очистити ефекти | player_clear_potion_effects | player | parameters |  | Очищає всі ефекти у гравця. |
| Закрити діалогове вікно | player_close_dialog_menu | player | communication |  | Закриває поточне діалогове вікно гравцю. |
| Закрыть меню | player_close_inventory | player | inventory_menus |  | Закрывает открытое инвентарное меню игрока. |
| Завершити використання предмета | player_complete_using_active_item | player | item_management |  | Завершує використання поточного предмета в руці з результатом. |
| Відправити гравця на інший сервер | player_connect_to_server | player | miscellaneous | server_name: text | Відправляє гравця на сервер з вказаним іменем (наприклад, "cr-0"). |
| Нанести урон | player_damage | player | parameters | damage: number<br/>source: text | Наносит урон игроку. |
| PLAYER_DISGUISE_AS_BLOCK | player_disguise_as_block | player | appearance | block: block<br/>visible_to_self: enum | ... |
| Замаскувати гравця під істоту | player_disguise_as_entity | player | appearance | entity_type: item<br/>visible_to_self: enum | Маскує гравця під вибрану істоту. |
| Замаскувати гравця під предмет | player_disguise_as_item | player | appearance | item: item<br/>visible_to_self: enum | Маскує гравця під предмет. |
| Показати удар у дзвін | player_display_bell_ring | player | world | location: location<br/>direction: enum | Показує гравцю анімацію удару в дзвін, не впливаючи на інших гравців. |
| Показать блок | player_display_block | player | world | location: location<br/>block: block | Показать игроку блок, не влияя на других игроков. |
| Показати анімацію променя Воріт Кінця | player_display_end_gateway_beam | player | world | location: location<br/>color: enum | Показує анімацію променя Воріт Кінця на певному місцезнаходженні. |
| Отобразить голограмму | player_display_hologram | player | world | location: location<br/>text: text | Показать игроку голограмму. |
| Отобразить эффект молнии | player_display_lightning | player | particle | location: location | Отобразить молнию игроку, не показывая её для других игроков и не поджигая местность. |
| Отобразить эффект частицы | player_display_particle | player | particle | particle: particle<br/>location: location | Отображает игроку эффект частицы на выбранном местоположении. |
| Відобразити окружність частинок | player_display_particle_circle | player | particle | particle: particle<br/>center: location<br/>radius: number<br/>points: number<br/>start_angle: number<br/>perpendicular: vector<br/>angle_unit: enum | Відображає гравцю окружність з ефекту частинок з вказаними параметрами. |
| Відобразити куб частинок | player_display_particle_cube | player | particle | particle: particle<br/>first_corner: location<br/>second_corner: location<br/>spacing: number<br/>type: enum | Відображає гравцю куб з ефекту частинок із вказаними параметрами. |
| Отобразить линию частиц | player_display_particle_line | player | particle | particle: particle<br/>start: location<br/>end: location<br/>divider: number<br/>unit_of_measurement: enum | Отображает игроку линию эффекта частиц от начального местоположения до конечного с определённым расстоянием. |
| Отобразить луч частиц | player_display_particle_ray | player | particle | particle: particle<br/>start: location<br/>ray: vector<br/>divider: number<br/>unit_of_measurement: enum | Отображает игроку луч эффекта частиц от начального местоположения по указанному вектору с определённым расстоянием. |
| Відобразити сферу частинок | player_display_particle_sphere | player | particle | particle: particle<br/>center: location<br/>radius: number<br/>points: number | Відображає гравцю сферу з ефекту частинок із вказаними параметрами. |
| Відобразити спіраль частинок | player_display_particle_spiral | player | particle | particle: particle<br/>center: location<br/>distance: number<br/>radius: number<br/>points: number<br/>rotations: number<br/>start_angle: number<br/>angle_unit: enum | Відображає гравцю спіраль з ефекту частинок із вказаними параметрами. |
| Показати анімацію підбирання предмету | player_display_pick_up_animation | player | world | collected_name_or_uuid: text<br/>collector_name_or_uuid: text<br/>amount: number | Показує гравцю анімацію підбирання предмету. |
| Показать текст таблички | player_display_sign_text | player | world | location: location<br/>line_1: text<br/>line_2: text<br/>line_3: text<br/>line_4: text<br/>side: enum | Показать игроку изменение текста таблички, не изменяя её текст для других игроков. |
| Відобразити частинку вібрації | player_display_vibration | player | particle | from: location<br/>to: location<br/>destination_time: number | Відображає гравцю частинку вібрації, що рухається з однієї точки в іншу. |
| Расширить меню | player_expand_inventory_menu | player | inventory_menus | items: item<br/>size: number | Расширяет открытое инвентарное меню игрока на выбранное количество строк и заполняет его указанными предметами. |
| Повернуть к местоположению | player_face_location | player | movement | location: location | Поворачивает игрока в сторону к местоположению. |
| Отримати значення атрибута гравця | player_get_attribute | player | parameters | variable: variable<br/>attribute_type: enum<br/>return_value: enum | Отримує значення вказаного атрибута гравця та присвоює результат до змінної. |
| Отримати NBT-теги гравця | player_get_nbt | player | miscellaneous | variable: variable<br/>path: text<br/>value_type: enum | Отримує NBT-теги гравця за введеним шляхом та присвоює результат до змінної. |
| Прибавить уровень | player_give_experience | player | parameters | experience: number<br/>mode: enum | Прибавляет уровень игроку. |
| Видати предмет | player_give_items | player | item_management | items: item<br/>amount: number | Видає гравцю предмети з сундука. |
| Выдать эффект | player_give_potion_effect | player | parameters | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum | Выдаёт выбранные эффекты игроку. |
| Видати випадковий предмет | player_give_random_item | player | item_management | items: item | Видає гравцю випадковий предмет або стак із предметів у скрині. |
| Исцелить игрока | player_heal | player | parameters | heal: number | Исцеляет игрока. |
| Приховати кастомний рецепт | player_hide_custom_recipe | player | miscellaneous | names: text<br/>is_vanilla_recipe: enum | Приховує від гравця рецепт. |
| Приховати істоту гравцю | player_hide_entity | player | world | name_or_uuid: text<br/>hide: enum | Приховує вказану істоту для гравця. |
| Приховати скорборд | player_hide_scoreboard | player | miscellaneous |  | Приховує поточний скорборд гравця. |
| Выгнать игрока | player_kick | player | miscellaneous |  | Выгоняет игрока из мира. |
| Запустить вперёд | player_launch_forward | player | movement | power: number<br/>increment: enum<br/>launch_axis: enum | Запускает игрока вперёд или назад по направлению взгляда в зависимости от силы. |
| Запустить снаряд | player_launch_projectile | player | world | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle | Запустить снаряд из местоположения игрока. |
| Запустить к местоположению | player_launch_to_location | player | movement | location: location<br/>power: number<br/>increment: enum | Запускает игрока к выбранному местоположению. |
| Подбросить вверх | player_launch_up | player | movement | power: number<br/>increment: enum | Подбрасывает игрока вверх или вниз в зависимости от силы. |
| Висадити з транспорту | player_leave_vehicle | player | movement |  | Висаджує гравця з транспорту або істоти. |
| Завантажити збережений інвентар | player_load_inventory | player | item_management |  | Завантажує вибраний збережений інвентар. |
| Замаскувати гравця під істоту зі світу | player_mimic_disguise_from_entity | player | appearance | name_or_uuid: text<br/>include_disguise: enum<br/>disguise: enum<br/>remove_original_entity: enum | Маскує гравця під вказану істоту зі світу. |
| Розгорнути книгу | player_open_book | player | communication | book: item | Розгортає книгу обраному гравцю. |
| Открыть меню блока | player_open_container_inventory | player | inventory_menus | location: location | Открывает для игрока меню блока в указанном местоположении. |
| Відкрити Ендер-сундук | player_open_ender_chest | player | inventory_menus |  | Відкриває для гравця Ендер-сундук. |
| Відкрити функціональне меню | player_open_working_menu | player | inventory_menus | title: text<br/>menu_type: enum | Відкриває для гравця меню, що має функціонал. |
| Програти анімацію гравцю | player_play_animation_action | player | appearance | animation: enum | Програє для гравця певну анімацію. |
| Програти анімацію отримання урону | player_play_hurt_animation | player | appearance | yaw: number | Програє для гравця анімацію отримання урону з певним нахилом. |
| Програти звук | player_play_sound | player | communication | sound: sound<br/>location: location | Програє звук гравцю. |
| Програти звук від істоти | player_play_sound_from_entity | player | communication | sounds: sound<br/>name_or_uuid: text | Програє звук гравцю від вказаної істоти. |
| Програти послідновніть звуків | player_play_sound_sequence | player | communication | sounds: sound<br/>delay: number<br/>location: location | Програє гравцю послідовність звуків із затримкою між кожним звуком. |
| Случайная телепортация | player_randomized_teleport | player | movement | locations: location<br/>keep_rotation: enum<br/>keep_velocity: enum<br/>dismount: enum | Телепортирует игрока в случайное местоположение. |
| Перемістити гравця в інший світ | player_redirect_world | player | miscellaneous | world_id: text | Переміщує гравця у світ із вказаним ID. |
| Видалити бос-бар | player_remove_boss_bar | player | communication | id: text | Видаляє наявний бос-бар у певного гравця. |
| Прибрати маскування | player_remove_disguise | player | appearance |  | Прибирає маскування гравцю. |
| Приховати відображувані блоки | player_remove_display_blocks | player | world | pos_1: location<br/>pos_2: location | Приховує від гравця всі відображувані блоки у вибраному просторі, не впливаючи на інших гравців (максимальний розмір простору — 500 блоків). |
| Прибрати рядки меню | player_remove_inventory_menu_row | player | inventory_menus | size: number<br/>position: enum | Прибирає один або декілька рядків в інвентарі типу "Скриня". |
| Видалити предмети | player_remove_items | player | item_management | items: item | Виадаляє вказані предмети з інвентаря гравця. |
| Скинути позу гравцю | player_remove_pose | player | appearance |  | Скидає позу гравцю. |
| Удалить эффект | player_remove_potion_effect | player | parameters | potions: potion | Удаляет выбранные эффекты у игрока. |
| Прибрати своє маскування | player_remove_self_disguise | player | appearance |  | Прибирає маскування гравця, яке видно лише йому. |
| Прибрати скін | player_remove_skin | player | appearance |  | Повертає звичайний скін цілі події. |
| Удалить границу мира | player_remove_world_border | player | world |  | Установить границу мира для игрока на значение по умолчанию. |
| Замінити предмети | player_replace_items | player | item_management | items: item<br/>replace: item<br/>count: number | Replaces the specified items in the inventory with a specific item. |
| Скинути колір значка на локаторі | player_reset_waypoint_color | player | settings |  | Встановлює гравцю колір значка, що відображається на локаторі, за замовчуванням. |
| Скинути погоду | player_reset_weather | player | world |  | Скидає погоду гравцю. |
| Посадить на существо | player_ride_entity | player | movement | name_or_uuid: text | Сажает игрока на существо или другого игрока. |
| Зберегти поточний інвентар | player_save_inventory | player | item_management |  | Зберегає поточний інвентар гравця. Його можна буде завантажити пізніше за допомогою 'Завантажити збережений інвентар'. |
| Замаскувати себе під блок | player_self_disguise_as_block | player | appearance | block: block | Маскує гравця під блок, але це маскування видно лише цьому гравцю. |
| Замаскувати себе під істоту | player_self_disguise_as_entity | player | appearance | entity_type: item | Маскує гравця під істоту, але це маскування видно лише цьому гравцю. |
| Замаскувати себе під предмет | player_self_disguise_as_item | player | appearance | item: item | Маскує гравця під предмет, але це маскування видно лише цьому гравцю. |
| Надіслати екшн-бар | player_send_action_bar | player | communication | messages: text<br/>merging: enum | Висвітлює обраному гравцю екшн-бар. |
| Відправити досягнення гравцю | player_send_advancement | player | communication | frame: enum<br/>name: text<br/>icon: item | Відображає гравцю вспливаюче досягнення користувача. |
| Показать анимацию ломания блока | player_send_break_animation | player | world | locations: location<br/>stage: number | Показывает анимацию ломания блока (трещины) для игрока, не влияя на других игроков. |
| Діалог | player_send_dialogue | player | communication | messages: text<br/>delay: number | Надсилає кілька повідомлень у чат вибраним гравцям із затримкою після кожного повідомлення. |
| Надіслати повідомлення з наведенням | player_send_hover | player | communication | message: text<br/>hover: text | Надсилає повідомлення обраному гравцю. Коли гравець 'наводить' на нього курсор, з`являється друге повідомлення. |
| Надіслати повідомлення | player_send_message | player | communication | messages: text<br/>merging: enum | Надсилає повідомлення в чат вказаним гравцям. |
| Надіслати повідомлення формату MiniMessage | player_send_minimessage | player | communication | minimessage: text | Надсилає гравцеві повідомлення у чат у форматі MiniMessage. |
| Надіслати титул | player_send_title | player | communication | title: text<br/>subtitle: text<br/>fade_in: number<br/>stay: number<br/>fade_out: number | Висвітлює обраному гравцю два написи на екран - титул та підтитул. |
| Установить дополнительное здоровье | player_set_absorption_health | player | parameters | health: number | Устанавливает дополнительное здоровье игрока. |
| Установить оставшийся воздух | player_set_air_ticks | player | parameters | ticks: number | Устанавливает оставшийся воздух игроку. |
| Установить разрешение полёта игрока | player_set_allow_flying | player | settings | allow_flying: enum | Устанавливает разрешение полёта для игрока. |
| Встановити броню | player_set_armor | player | item_management | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item | Встановлює броню гравця. |
| Встановити стріли на гравцеві | player_set_arrows_in_body | player | appearance | amount: number | Відображає певну кількість стріл на гравцеві. |
| Установить скорость атаки | player_set_attack_speed | player | parameters | speed: number | Устанавливает скорость атаки игроку. |
| Встановити атрибут | player_set_attribute | player | parameters | value: number<br/>attribute_type: enum | Встановлює гравцю вказане значення атрибута. |
| Встановити жало бджоли на гравцеві | player_set_bee_stingers_in_body | player | appearance | amount: number | Відображає певну кількість жал бджіл на гравцеві. |
| Открыть/Закрыть блок | player_set_block_opened_state | player | world | location: location<br/>is_opened: enum | Отобразить игроку закрытие/открытие блока не меняя состояния блока для других игроков. |
| Встановити бос-бар | player_set_boss_bar | player | communication | id: text<br/>title: text<br/>progress: number<br/>color: enum<br/>style: enum<br/>sky_effect: enum | Встановлює у певного гравця певний бос-бар. |
| Оновлення підказок у чаті | player_set_chat_completions | player | communication | completions: text<br/>setting_mode: enum | Оновлює гравцю підказки, що показуються при введенні тексту в чаті. |
| Установить режим столкновения | player_set_collidable | player | settings | collidable: enum | Устанавливает игроку режим столкновения с существами. |
| Установить цель компаса | player_set_compass_target | player | world | location: location | Установить цель компаса для игрока, в сторону которой будет крутиться стрелка компаса. |
| Встановити предмет на курсор | player_set_cursor_item | player | item_management | item: item | Встановлює предмет на курсор гравця. |
| Установить выпадение предметов | player_set_death_drops | player | settings | death_drops: enum | Устанавливает выпадение предметов из игрока при смерти. |
| Встановити кількість очок | player_set_death_screen_score | player | parameters | score: number | Встановлює кількість очок, що відображаються гравцю на екрані смерті. |
| Встановити видимість | player_set_default_visible | player | settings | default_visible: enum | Встановлює гравцю видимість. |
| Встановити сід зачарувань | player_set_enchantment_seed | player | parameters | seed: number | Встановлює гравцю сід зачарувань, що визначає набір зачарувань у чарівному столі. |
| Встановити вміст Ендер-скрині | player_set_ender_chest_contents | player | item_management | items: item | Встановлює предмети в інвентар Ендер-скрині гравця. |
| Встановити світіння істоти | player_set_entity_glowing | player | world | name_or_uuid: text<br/>color: enum<br/>glow: enum | Вмикає або вимикає світіння істоти для цього гравця. |
| Встановити екпірування | player_set_equipment | player | item_management | item: item<br/>slot: enum | Встановлює предмети в один із слотів екіпірування (броня та предмети в руках) гравця. |
| Встановити рівень виснаження | player_set_exhaustion | player | parameters | exhaustion: number<br/>mode: enum | Встановлює рівень виснаження гравцю. |
| Установить уровень | player_set_experience | player | parameters | experience: number<br/>mode: enum | Устанавливает уровень игроку. |
| Установить дистанцию падения | player_set_fall_distance | player | parameters | distance: number | Устанавливает дистанцию, с которой падает игрок. |
| Поджечь игрока | player_set_fire_ticks | player | parameters | ticks: number | Поджигает игрока на выбранное время. |
| Установить полёт | player_set_flying | player | movement | is_flying: enum | Устанавливает для игрока состояние полёта. |
| Встановити дистанцію промальовування | player_set_fog_distance | player | world | distance: number | Встановлює дистанцію промальовування чанків для гравця. Значення "-1" скидає до стандартної. |
| Установить голод | player_set_food | player | parameters | food: number<br/>mode: enum | Устанавливает уровень голода игроку. |
| Встановити час заморожування | player_set_freeze_ticks | player | parameters | ticks: number<br/>ticking_locked: enum | Встановлює гравцю час заморожування (кількість тіків, які гравець провів у пухкому снігу). |
| Установить режим игры | player_set_gamemode | player | settings | gamemode: enum<br/>flight_mode: enum | Устанавливает режим игры для игрока. |
| Установить полёт на элитрах | player_set_gliding | player | movement | is_gliding: enum | Устанавливает для игрока состояние полёта на элитрах. |
| Установить здоровье игрока | player_set_health | player | parameters | health: number | Устанавливает здоровье игрока на выбранное количество. |
| Установить слот | player_set_hotbar_slot | player | parameters | slot: number | Устанавливает выбранный слот игроку. |
| Установить мгновенное возрождение | player_set_instant_respawn | player | settings | instant_respawn: enum | Устанавливает мгновенное возрождение игроку. |
| Установить сохранение инвентаря | player_set_inventory_kept | player | settings | kept: enum | Устанавливает игроку сохранение инвентаря при смерти. |
| Встановити кастомний ID відкритого інвентаря | player_set_inventory_menu_custom_id | player | inventory_menus | custom_id: text | Встановлює кастомний ID для відкритого меню гравця. |
| Установить предмет в слот | player_set_inventory_menu_item | player | inventory_menus | item: item<br/>slot: number | Устанавливает предмет в указанный слот открытого инвентарного меню игрока. |
| Установить название меню | player_set_inventory_menu_name | player | inventory_menus | text: text | Устанавливает новое название для открытого инвентарного меню игрока. |
| Установить длительность неуязвимости | player_set_invulnerability_ticks | player | parameters | ticks: number | Устанавливает длительность неуязвимости для игрока. |
| Встановити затримку предмета | player_set_item_cooldown | player | item_management | item: item<br/>cooldown: number<br/>sound: sound | Застосовує візуальний ефект шкали затримки для всіх предметів вибраного типу. |
| Встановити затримку для групи предметів | player_set_item_group_cooldown | player | item_management | key: text<br/>cooldown: number | Застосовує візуальний ефект шкали затримки для всіх предметів вказаної групи. |
| Встановити предмети | player_set_items | player | item_management | items: item | Встановлює в інвентар гравця відповідно предмети із скрині. |
| Установить максимальное здоровье игрока | player_set_max_health | player | parameters | health: number<br/>heal: enum | Устанавливает максимальное количество здоровья для игрока. |
| Встановити максимальну тривалість невразливості | player_set_max_invulnerability_ticks | player | parameters | ticks: number | Встановлює максимальну тривалість невразливості для гравця. |
| Установить скорость движения | player_set_movement_speed | player | parameters | distance: number<br/>movement_type: enum | Устанавливает скорость движения игроку. |
| Відображення ніку гравця | player_set_nametag_visible | player | settings | visible: enum | Відображатиме або приховає нік над головою. |
| Встановіть текст у списку гравців | player_set_player_list_info | player | communication | text: text<br/>position: enum<br/>merging: enum | Встановлює текст над чи під списком гравців для гравця. |
| Встановити позу гравцю | player_set_pose | player | appearance | pose: enum<br/>locked: enum | Встановлює певну позу гравцю. |
| Установить разрешение атаковать игроков | player_set_pvp | player | settings | pvp: enum | Устанавливает разрешение игроку атаковать других игроков и наносить им урон. |
| Встановити рівень дощу | player_set_rain_level | player | world | rain_level: number | Встановлює рівень дощу гравцю. |
| Повернуть игрока | player_set_rotation | player | movement | yaw: number<br/>pitch: number | Поворачивает игрока. |
| Встановити поворот за вектором | player_set_rotation_by_vector | player | movement | vector: vector | Встановлює поворот гравця за вектором. |
| Встановити швидкість регенерації з насиченням | player_set_saturated_regen_rate | player | parameters | rate: number | Встановлює гравцю швидкість регенерації з насиченням. |
| Установить насыщенность | player_set_saturation | player | parameters | saturation: number<br/>mode: enum | Устанавливает второстепенный уровень голода (насыщенность) игроку. |
| Встановити дистанцію симуляції | player_set_simulation_distance | player | world | distance: number | Встановлює дистанцію симуляції чанків для гравця. |
| Встановити скін | player_set_skin | player | appearance | name_or_uuid: text<br/>server_type: enum | Встановлює скін вказаного гравця для цілі події. |
| Встановити предмет у слот | player_set_slot_item | player | item_management | item: item<br/>slot: number | Встановлює предмет у слот в інвентарі гравця. |
| Встановити місцезнаходження відродження | player_set_spawn_point | player | settings | spawn_point: location | Встановлює гравцю нове місцезнаходження відродження. |
| Встановити швидкість голодування | player_set_starvation_rate | player | parameters | rate: number | Встановлює гравцю швидкість голодування. |
| Встановити рівень грози | player_set_thunder_level | player | world | thunder_level: number | Встановлює рівень грози гравцю. |
| Встановити тік-рейт | player_set_tick_rate | player | world | tick_rate: number | Встановлює гравцю тік-рейт, не впливаючи на інших гравців. |
| Установить время игрока | player_set_time | player | world | time: number | Установить время игроку, не меняя его для остальных игроков. |
| Встановити швидкість регенерації без насичення | player_set_unsaturated_regen_rate | player | parameters | rate: number | Встановлює гравцю швидкість регенерації без насичення. |
| Направить движение | player_set_velocity | player | movement | velocity: vector<br/>increment: enum | Направляет движение игрока в направлении вектора с определённой силой. |
| Встановити візуальний вогонь | player_set_visual_fire | player | appearance | visual_fire: enum | Встановлює гравцю ефект горіння. |
| Встановити колір значка на локаторі | player_set_waypoint_color | player | settings | red: number<br/>green: number<br/>blue: number | Встановлює гравцю колір значка, що відображається на локаторі. |
| Встановити стиль значка на локаторі | player_set_waypoint_style | player | settings | style: text | Встановлює гравцю стиль значка, що відображається на локаторі. |
| Установить погоду | player_set_weather | player | world | weather_type: enum | Установить погоду для игрока, не влияя на других игроков. |
| Установить границу мира игроку | player_set_world_border | player | world | center: location<br/>size: number<br/>warning: number | Установить границу мира для игрока, не меняя её для других игроков. |
| Передвинуть границу мира | player_shift_world_border | player | world | old_size: number<br/>size: number<br/>time: number | Передвинуть границу мира для игрока, не меняя её для других игроков. |
| Показати кастомний рецепт | player_show_custom_recipe | player | miscellaneous | names: text<br/>is_vanilla_recipe: enum | Відображає гравцеві новий рецепт у книзі рецептів. |
| Показати налагоджувальний маркер | player_show_debug_marker | player | world | location: location<br/>name: text<br/>duration: number<br/>red: number<br/>green: number<br/>blue: number<br/>alpha: number | Показує гравцю налагоджувальний маркер на місцезнаходженні на вказаний час. Червоний і синій колір працюють для гравців на версії 1.19.4 і вище. |
| Показать экран демо-режима | player_show_demo_screen | player | communication |  | Показывает игроку экран демо-режима. |
| Показати діалогове вікно | player_show_dialog_menu_from_nbt | player | communication | dialog_nbt: text | Показує гравцю діалогове вікно з NBT-тегів. |
| Показать меню | player_show_inventory_menu | player | inventory_menus | items: item<br/>name: text<br/>custom_id: text<br/>inventory_type: enum | Показывает игроку инвентарное меню с выбранными предметами и названием. |
| Показати скорборд | player_show_scoreboard | player | miscellaneous | id: text | Відображає певний скорборд гравцю. Для відображення вказаний скорборд повинен мати мінімум одне значення. |
| Показати екран титрів | player_show_win_screen | player | communication |  | Показує гравцю екран титрів. |
| Следить за целью | player_spectate_target | player | movement | name_or_uuid: text | Устанавливает цель слежения игрока. |
| Почати використання предмета | player_start_using_item | player | item_management | equipment: enum | Починає використання предмета у вказаній руці. |
| Зупинити звук | player_stop_sound | player | communication | sounds: sound | Зупиняє всі чи певні звуки для гравця. |
| Зупинити звуки за джерелом | player_stop_sounds_by_source | player | communication | source: enum | Зупиняє всі звуки за певним джерелом. |
| Програти анімацію змаху рукою | player_swing_hand | player | appearance | hand_type: enum | Програє для гравця анімацію змаху рукою. |
| Телепортация | player_teleport | player | movement | location: location<br/>keep_rotation: enum<br/>keep_velocity: enum<br/>dismount: enum | Телепортирует игрока в выбранное местоположение. |
| Последовательность телепортаций | player_teleport_sequence | player | movement | delay: number<br/>locations: location | Телепортирует игрока между местоположениями с заданной задержкой. |
| Перемістити на інший сервер | player_transfer_to_other_server | player | miscellaneous | domain: text<br/>port: number | Переміщує гравця на вказаний сервер. |
| Запросити транзакцію | send_currency_transaction | player | miscellaneous | amount: number<br/>description: text<br/>reason: text | Відправляє гравцю запит на здійснення транзакції в смарагдах. |
