# Entity actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Привязать на поводок | entity_attach_lead | entity | movement | name_or_uuid: text<br/>location: location | Привязывает существо на поводок к забору или существу. |
| Очистить эффекты | entity_celar_potion_effects | entity | parameters |  | Очищает все эффекты у существа. |
| Очистить торги Жителю | entity_clear_merchant_recipes | entity | settings |  | Очищает все торги Жителю. |
| Завершить использование предмета | entity_complete_using_active_item | entity | goals |  | Завершает использование текущего предмета в руке с результатом. |
| Нанести урон | entity_damage | entity | parameters | damage: number<br/>source: text | Наносит урон существу. |
| Замаскировать сущность под блок | entity_disguise_as_block | entity | appearance | block: block | Маскирует сущность под блок. |
| Замаскировать под сущность | entity_disguise_as_entity | entity | appearance | entity_type: item | Замаскировать сущность под сущность. |
| Замаскировать сущность под предмет | entity_disguise_as_item | entity | appearance | item: item | Маскирует сущность под предмет. |
| Замаскировать сущность под игрока | entity_disguise_as_player | entity | appearance | name_or_uuid: text<br/>display_name: text<br/>server_type: enum | Маскирует сущность под игрока. |
| Есть траву | entity_eat_grass | entity | goals |  | Заставляет овцу есть траву. |
| Установить цель поедания | entity_eat_target | entity | goals | name_or_uuid: text | Устанавливает существу цель для поедания. |
| Взорваться | entity_explode | entity | goals |  | Заставляет существо взорваться. |
| Повернуть к местоположению | entity_face_location | entity | movement | location: location | Поворачивает существо в сторону к местоположению. |
| Получить значение атрибута сущности | entity_get_attribute | entity | parameters | variable: variable<br/>attribute_type: enum<br/>return_value: enum | Получает значение указанного атрибута сущности и присваивает результат к переменной. |
| Получить кастомный тег | entity_get_custom_tag | entity | miscellaneous | variable: variable<br/>name: text<br/>default: any | Получает кастомный нбт-тег существа. |
| Получить кастомные теги | entity_get_custom_tags | entity | miscellaneous | variable: variable | Получает кастомные теги существа и присваивает результат к переменной. |
| Получить снаряжение сущности | entity_get_equipment_item | entity | miscellaneous | variable: variable<br/>slot: enum | Получает снаряжение сущности из указанного слота, и присваивает результат к переменной. |
| Получить NBT-теги сущности | entity_get_nbt | entity | miscellaneous | variable: variable<br/>path: text<br/>value_type: enum | Получает NBT-теги сущности по введённому пути и присваивает результат к переменной. |
| Выдать эффекты | entity_give_potion_effects | entity | parameters | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum | Выдаёт выбранные эффекты существу. |
| Исцелить существо | entity_heal | entity | parameters | heal: number | Исцеляет существо. |
| Зажечь крипера | entity_ignite_creeper | entity | goals |  | Поджигает крипера, заставляя его взорваться после определённого периода. |
| Прыгнуть | entity_jump | entity | goals |  | Заставляет существо прыгнуть. |
| Запустить вперёд | entity_launch_forward | entity | movement | power: number<br/>increment: enum<br/>launch_axis: enum | Запускает существо вперёд или назад по направлению взгляда в зависимости от силы. |
| Запустить снаряд | entity_launch_projectile | entity | miscellaneous | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle | Запустить снаряд из местоположения существа. |
| Запустить к местоположению | entity_launch_to_location | entity | movement | location: location<br/>power: number<br/>increment: enum | Запускает существа к выбранному местоположению. |
| Подбросить вверх | entity_launch_up | entity | movement | power: number<br/>increment: enum | Подбрасывает существо вверх или вниз в зависимости от силы. |
| Высадить из транспорта | entity_leave_vehicle | entity | movement |  | Высаживает существо из транспорта или существа. |
| Замаскировать сущность под сущность из мира | entity_mimic_disguise_from_entity | entity | appearance | name_or_uuid: text<br/>include_disguise: enum<br/>remove_original_entity: enum | Маскирует сущность под указанную сущность из мира. |
| Изменить торги пиглина | entity_modify_piglin_barter_materials | entity | settings | materials: item<br/>modification_mode: enum | Изменяет предметы, которые может дать пиглин при обмене. |
| Изменить предметы для торга с пиглином | entity_modify_piglin_interested_materials | entity | settings | materials: item<br/>modification_mode: enum | Изменяет предметы, требуемые для обмена с пиглином. |
| Установить движение к местоположению | entity_move_to_location | entity | goals | location: location<br/>speed: number | Инструктирует ИИ существа всегда находить путь к определённому местоположению с определённой скоростью. |
| Остановить движение к местоположению | entity_move_to_location_stop | entity | goals |  | Останавливает сущность, идущую к местоположению. |
| Отобразить анимацию урона | entity_play_damage_animation | entity | appearance | damage_type: enum | Отображает анимацию урона существу. |
| Отобразить анимацию получения урона | entity_play_hurt_animation | entity | appearance | yaw: number | Отображает существу анимацию получения урона с определённым наклоном. |
| Таранить сущность | entity_ram_target | entity | goals | name_or_uuid: text | Заставляет козлов таранить указанную сущность. |
| Удалить сущность | entity_remove | entity | miscellaneous |  | Удаляет сущность из мира. |
| Удалить кастомный тег | entity_remove_custom_tag | entity | miscellaneous | name: text | Удаляет кастомный нбт-тег у существа. |
| Удалить кастомные теги | entity_remove_custom_tags | entity | miscellaneous |  | Удаляет все кастомные теги сущности. |
| Убрать маскировку | entity_remove_disguise | entity | appearance |  | Убирает маскировку у сущности. |
| Удалить товар Жителю | entity_remove_merchant_recipe | entity | settings | recipe_index: number | Удаляет товар Жителю по указанному индексу. |
| Удалить эффект | entity_remove_potion_effect | entity | parameters | effects: potion | Удаляет выбранные эффекты у существа. |
| Сбросить яркость | entity_reset_display_brightness | entity | display_entity |  | Сбросить яркость сущности-визуализатору. |
| Сбросить цвет свечения | entity_reset_display_glow_color | entity | display_entity |  | Сбросить цвет свечения сущности-визуализатору. |
| Очистить описание манекена | entity_reset_mannequin_description | entity | appearance |  | Очищает описание манекена. |
| Сбросить цвет фона | entity_reset_text_display_background | entity | display_entity |  | Сбросить цвет и прозрачность фона визуализатору текста. |
| Сбросить цвет значка на локаторе | entity_reset_waypoint_color | entity | settings |  | Устанавливает сущности цвет значка, отображаемого на локаторе, по умолчанию. |
| Вернуть поплавок | entity_retrieve_fishing_hook | entity | goals | slot: enum | Возвращает закинутый поплавок удочки, находящейся в указанной руке сущности. |
| Посадить на существо | entity_ride_entity | entity | movement | name_or_uuid: text | Сажает существо на другое существо или игрока. |
| Установить Броненосцу состояние защиты | entity_roll_armadillo | entity | goals | roll: enum | Устанавливает броненосцу состояние защиты (свернут ли броненосец). |
| Установить дополнительное здоровье | entity_set_absorption_health | entity | parameters | health: number | Устанавливает дополнительное здоровье существа. |
| Установить блокировку роста | entity_set_age_lock | entity | settings | age_lock: enum | Устанавливает блокировку роста существу. |
| Установить интеллект сущности | entity_set_ai | entity | settings | ai: enum | Устанавливает интеллект сущности. |
| Сделать Тихоню танцующим | entity_set_allay_dancing | entity | goals | dance: enum | Заставляет Тихоню отображать анимацию танца. |
| Установить режим гнева | entity_set_angry | entity | settings | angry: enum<br/>target: text | Устанавливает существу режим гнева на определённую цель. |
| Установить возраст животному | entity_set_animal_age | entity | parameters | age: number<br/>lock: enum | Устанавливает возраст животному. |
| Установить броню | entity_set_armor_items | entity | miscellaneous | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>silent: enum | Устанавливает броню сущности. |
| Установить детали стойки для брони | entity_set_armor_stand_parts | entity | appearance | arms: enum<br/>base_plate: enum | Установить детали стойки для брони. |
| Установить позу стойки для брони | entity_set_armor_stand_pose | entity | appearance | x_rotation: number<br/>y_rotation: number<br/>z_rotation: number<br/>body_part: enum | Устанавливает позу стойки для брони. |
| Установить звук попадания снаряда | entity_set_arrow_hit_sound | entity | miscellaneous | sound: sound | Устанавливает снаряду звук, издаваемый при попадании в сущность. |
| Установить стреле количество пронзаний | entity_set_arrow_pierce | entity | parameters | pierce: number | Устанавливает стреле количество раз, которые она может пронзить сущность (от 0 до 127). |
| Установить атрибут | entity_set_attribute | entity | parameters | value: number<br/>attribute_type: enum | Устанавливает указанный атрибут на указанное значение существу. |
| Установить осведомлённость моба | entity_set_aware | entity | goals | aware: enum | В выключенном состоянии отключает ИИ моба, но оставляет взаимодействие с гравитацией, толканием и т.д. |
| Установить тип аксолотля | entity_set_axolotl_type | entity | appearance | axolotl_type: enum | Устанавливает тип аксолотля. |
| Установить режим ребёнка | entity_set_baby | entity | settings | baby: enum | Устанавливает существу режим ребёнка. |
| Установить первичный урон снаряду | entity_set_base_arrow_damage | entity | parameters | damage: number | Устанавливает снаряду первичный урон, который будет использован в формуле урона снаряда при попадании. |
| Установить Пчеле жало | entity_set_bee_has_stinger | entity | settings | stinger: enum | Устанавливает состояние жала пчеле. |
| Установить пыльцу пчеле | entity_set_bee_nectar | entity | appearance | nectar: enum | Устанавливает видимость пыльцы пчеле. |
| Установить отображаемый блок | entity_set_block_display_block | entity | display_entity | displayed_block: block | Устанавливает отображаемый блок визуализатору блока. |
| Установить анимацию рывка верблюду | entity_set_camel_dashing | entity | settings | dashing: enum | Устанавливает анимацию рывка верблюду. |
| Установить видимость сундука | entity_set_carrying_chest | entity | settings | carrying: enum | Устанавливает видимость сундука на сущности. |
| Установить режим лежания кошке | entity_set_cat_lying_down | entity | appearance | lying_down: enum | Устанавливает режим лежания кошке. |
| Установить тип кошки | entity_set_cat_type | entity | appearance | cat_type: enum | Устанавливает тип кошки. |
| Установить режим празднования | entity_set_celebrating | entity | goals | celebrating: enum | Устанавливает режим празднования существу. |
| Установить тип Курицы | entity_set_chicken_type | entity | appearance | variant: enum | Устанавливает курице тип окраски. |
| Установить режим столкновения | entity_set_collidable | entity | settings | collidable: enum | Устанавливает существу режим столкновения с другими существами. |
| Установить вощённость медного голема | entity_set_copper_golem_oxidizing | entity | settings | oxidizing_state: enum | Устанавливает вощённость медного голема. |
| Установить время окисления медного голема | entity_set_copper_golem_oxidizing_at_time | entity | settings | time: number | Устанавливает время, за которое медный голем повышает уровень окисления под дождём. |
| Установить окисление медного голема | entity_set_copper_golem_weathering | entity | settings | weathering_state: enum | Устанавливает степень окисления медного голема. |
| Установить тип Коровы | entity_set_cow_type | entity | appearance | variant: enum | Устанавливает корове тип окраски. |
| Установить заряженность криперу | entity_set_creeper_charge | entity | settings | charged: enum | Устанавливает, будет ли крипер заряженным. |
| Установить максимальное время взрыва криперу | entity_set_creeper_fuse | entity | parameters | fuse_ticks: number | Устанавливает максимальное время взрыва криперу. |
| Установить здоровье существа | entity_set_current_health | entity | parameters | health: number | Устанавливает здоровье существа на выбранное количество. |
| Установить имя | entity_set_custom_name | entity | settings | custom_name: text | Устанавливает имя для существа. |
| Установить видимость имени | entity_set_custom_name_visibility | entity | settings | visibility: enum | Устанавливает видимость имени существа. |
| Установить кастомный тег | entity_set_custom_tag | entity | miscellaneous | name: text<br/>value: text | Устанавливает кастомный нбт-тег существу. |
| Установить выпадение предметов | entity_set_death_drops | entity | settings | drops: enum | Устанавливает, будет ли выпадать лут с существа. |
| Установить длительность смерти | entity_set_death_time | entity | parameters | death_time: number | Устанавливает длительность смерти для существа. |
| Установить видимость | entity_set_default_visible | entity | settings | default_visible: enum | Устанавливает сущности видимость. |
| Установить пропадание существа | entity_set_despawning | entity | settings | despawning: enum | Устанавливает, будет ли пропадать существо. |
| Установить режим отображения | entity_set_display_billboard | entity | display_entity | billboard_type: enum | Устанавливает режим отображения сущности-визуализатору. |
| Установить яркость | entity_set_display_brightness | entity | display_entity | block_light_level: number<br/>sky_light_level: number | Устанавливает яркость сущности-визуализатору. |
| Установить матрицу преобразования | entity_set_display_correct_transformation_matrix | entity | display_entity | matrix: number | Устанавливает матрицу преобразования сущности-визуализатору. |
| Установить размер области видимости | entity_set_display_culling_suze | entity | display_entity | width: number<br/>height: number | Устанавливает размер области видимости модели сущности-визуализатору. |
| Установить цвет свечения | entity_set_display_glow_color | entity | display_entity | color_hexadecimal: text | Устанавливает цвет свечения сущности-визуализатору. |
| Установить интерполяцию | entity_set_display_interpolation | entity | display_entity | interpolation_duration: number<br/>interpolation_delay: number | Устанавливает длительность интерполяции сущности-визуализатору. |
| Установить поворот по осевому вектору | entity_set_display_rotation_from_axis_angle | entity | display_entity | axis_vector: vector<br/>angle: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Устанавливает левый или правый поворот по осевому вектору и углу сущности-визуализатору. |
| Установить поворот по углам Эйлера | entity_set_display_rotation_from_euler_angles | entity | display_entity | yaw: number<br/>pitch: number<br/>roll: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Устанавливает левый или правый поворот по углам Эйлера сущности-визуализатору. |
| Установить поворот по вектору | entity_set_display_rotation_from_vector | entity | display_entity | direction: vector<br/>up: vector<br/>rotation: enum | Устанавливает визуализатору поворот по заданному вектору направления и вектору "Вверх". |
| Установить размер | entity_set_display_scale | entity | display_entity | scale_vector: vector<br/>mode: enum | Устанавливает размер сущности-визуализатору. |
| Установить настройки тени | entity_set_display_shadow | entity | display_entity | shadow_radius: number<br/>shadow_opacity_percentage: number | Устанавливает размер и прозрачность тени сущности-визуализатору. |
| Установить длительность телепорта визуализатора | entity_set_display_teleport_duration | entity | display_entity | duration: number | Устанавливает длительность телепорта визуализатора. |
| Установить матрицу преобразования | entity_set_display_transformation_matrix | entity |  | row_major_matrix: number | Устанавливает матрицу преобразования (ряд-столбец) сущности-визуализатору. |
| Установить смещение | entity_set_display_translation | entity | display_entity | translation_vector: vector<br/>mode: enum | Устанавливает смещение сущности-визуализатору. |
| Установить дальность видимости | entity_set_display_view_range | entity | display_entity | view_range: number | Устанавливает дальность видимости сущности-визуализатору. |
| Установить фазу Эндер-дракона | entity_set_dragon_phase | entity | goals | phase: enum | Устанавливает определённую фазу Эндер-дракону. |
| Установить цвет сущности | entity_set_dye_color | entity | appearance | color: enum | Устанавливает определённый цвет существу. |
| Указать луч кристалла Энда | entity_set_end_crystal_beam | entity | settings | beam: location | Указывает луч кристалла Энда на определённое местоположение. |
| Установить блок Эндермену | entity_set_enderman_block | entity | appearance | block: block | Устанавливает отображаемый блок Эндермену. |
| Установить экипировку | entity_set_equipment_item | entity | miscellaneous | item: item<br/>slot: enum | Устанавливает предметы в один из слотов экипировки (броня и предметы в руках) сущности. |
| Установить силу взрыва | entity_set_explosive_power | entity | parameters | power: number | Устанавливает силу взрыва сущности. |
| Установить дистанцию падения | entity_set_fall_distance | entity | parameters | fall_distance: number | Устанавливает дистанцию, с которой падает существо. |
| Установить тип существу Падающий блок | entity_set_falling_block_type | entity | miscellaneous | block: block | Устанавливает новый тип блока существу Падающий блок. |
| Поджечь существо | entity_set_fire_ticks | entity | parameters | ticks: number | Поджигает существо на выбранное время. |
| Установить задержку рыбалки | entity_set_fishing_wait | entity | parameters | time: number<br/>wait_type: enum | Устанавливает задержку рыбалки существу в тиках. |
| Установить анимацию прыжка лисе | entity_set_fox_leaping | entity | appearance | leaping: enum | Устанавливает анимацию прыжка лисе. |
| Установить тип лисы | entity_set_fox_type | entity | appearance | fox_type: enum | Устанавливает тип лисы. |
| Установить время заморозки | entity_set_freeze_ticks | entity | parameters | ticks: number<br/>ticking_locked: enum | Устанавливает существу время заморозки (количество тиков, которое сущность провела в рыхлом снегу). |
| Установить трение | entity_set_friction | entity | movement | friction: enum | Устанавливает, будет ли сущность испытывать трение. |
| Установить тип жабы | entity_set_frog_type | entity | appearance | frog_variant: enum | Устанавливает окрас жабы. |
| Установить время до взрыва | entity_set_fuse_ticks | entity | parameters | fuse_ticks: number | Устанавливает время до взрыва сущности. |
| Установить полёт на элитрах | entity_set_gliding | entity | movement | is_gliding: enum | Устанавливает для существа состояние полёта на элитрах. |
| Установить время тьмы спруту | entity_set_glow_squid_dark | entity | appearance | dark_ticks: number | Устанавливает время тьмы в тиках светящемуся спруту. |
| Установить свечение сущности | entity_set_glowing | entity | appearance | glowing: enum | Устанавливает существу эффект свечения. |
| Установить козла кричащим | entity_set_goat_screaming | entity | settings | screams: enum | Устанавливает тег "кричащий" козлу. |
| Установить гравитацию | entity_set_gravity | entity | movement | gravity: enum | Устанавливает, будет ли сущность подчиняться гравитации. |
| Установить сторону блока для висящей сущности | entity_set_hanging_facing_location | entity | settings | facing: enum<br/>force: enum | Устанавливает висящей сущности сторону блока, на которой она находится. |
| Установить лошади силу прыжка | entity_set_horse_jump | entity | parameters | power: number | Устанавливает лошади силу прыжка. |
| Установить узор лошади | entity_set_horse_pattern | entity | appearance | horse_color: enum<br/>horse_style: enum | Устанавливает окрас и узор лошади. |
| Установить иммунитет к зомбифицированию | entity_set_immune_to_zombification | entity | settings | is_immune: enum | Устанавливает существу иммунитет к зомбифицированию. |
| Установить отзывчивость сущности взаимодействия | entity_set_interaction_responsive | entity | settings | responsive: enum | Устанавливает, будет ли сущность взаимодействия отзываться на взаимодействия. |
| Установить размер сущности взаимодействия | entity_set_interaction_size | entity | settings | width: number<br/>height: number | Устанавливает горизонтальный и вертикальный размеры сущности взаимодействия. |
| Установить режим невидимости | entity_set_invisible | entity | settings | invisible: enum | Устанавливает существу режим невидимости. |
| Установить длительность неуязвимости | entity_set_invulnerability_ticks | entity | parameters | ticks: number | Устанавливает длительность неуязвимости для существа. |
| Установить неуязвимость сущности | entity_set_invulnerable | entity | settings | invulnerable: enum | Устанавливает неуязвимости сущности, но в режиме креатива можно нанести урон. |
| Установить тип существу Предмет | entity_set_item | entity | miscellaneous | item: item | Устанавливает определённый тип (ID) существу Предмет. |
| Установить отображаемый предмет | entity_set_item_display_item | entity | display_entity | displayed_item: item | Устанавливает отображаемый предмет визуализатору предмета. |
| Установить тип модели предмета | entity_set_item_display_model_type | entity | display_entity | display_model_type: enum | Устанавливает тип отображаемой модели предмета визуализатору предмета. |
| Установить шанс выпадения предмета из рамки | entity_set_item_frame_item_drop_chance | entity | miscellaneous | drop_chance: number | Устанавливает шанс выпадения предмета из рамки при разрушении. |
| Установить предмет в рамку | entity_set_item_in_frame | entity | appearance | item: item<br/>play_sound: enum | Устанавливает указанный предмет в рамку. |
| Установить владельца предмета | entity_set_item_owner | entity | settings | name_or_uuid: text | Устанавливает сущности предмета владельца. |
| Установить цвет ламы | entity_set_llama_type | entity | appearance | type: enum | Устанавливает цвет ламы. |
| Запустить по вектору | entity_set_location | entity | movement | velocity: vector<br/>increment: enum | Запускает существо по указанному вектору. |
| Установить описание манекена | entity_set_mannequin_description | entity | appearance | description: text | Устанавливает описание манекена. |
| Установить передвижение манекена | entity_set_mannequin_immovable | entity | settings | immovable: enum | Устанавливает возможность передвижения для манекена. |
| Установить ведущую руку манекена | entity_set_mannequin_main_hand | entity | appearance | hand: enum | Устанавливает ведущую руку манекена. |
| Установить скин манекена | entity_set_mannequin_skin | entity | appearance | name_or_uuid: text<br/>server_type: enum | Устанавливает скин манекена. |
| Установить тип модели манекена | entity_set_mannequin_skin_model | entity | appearance | model: enum | Устанавливает тип модели скина манекена |
| Установить слои скина манекена | entity_set_mannequin_skin_parts | entity | appearance | hat: enum<br/>jacket: enum<br/>left_sleeve: enum<br/>right_sleeve: enum<br/>left_pants: enum<br/>right_pants: enum<br/>cape: enum | Устанавливает отображение слоев скина манекена. |
| Установить текстуру части манекена | entity_set_mannequin_skin_patch | entity | appearance | texture_key: text<br/>patch_target: enum | Устанавливает текстуру для указанной части манекена. |
| Установить режим маркера | entity_set_marker | entity | settings | marker: enum | Устанавливает режим маркера стойке для брони. |
| Установить максимальное здоровье существа | entity_set_max_health | entity | parameters | max_health: number<br/>heal_to_max: enum | Устанавливает максимальное количество здоровья для существа. |
| Установить максимальную длительность неуязвимости | entity_set_max_invulnerability_ticks | entity | parameters | ticks: number | Устанавливает максимальную длительность неуязвимости для существа. |
| Установить товар Жителю | entity_set_merchant_recipe | entity | settings | result: item<br/>ingredient_one: item<br/>ingredient_two: item<br/>index: number<br/>mode: enum<br/>uses: number<br/>max_uses: number<br/>villager_experience: number<br/>price_multiplifier: number<br/>demand: number<br/>special_price: number<br/>ignore_discounts: enum<br/>experience_reward: enum | Устанавливает товар Жителю за определённые предметы по указанному индексу. |
| Установить блок в вагонетку | entity_set_minecart_block | entity | appearance | block: block<br/>block_offset: number | Устанавливает указанный блок в вагонетку. |
| Установить агрессивность | entity_set_mob_aggressive | entity | appearance | aggressive: enum | Устанавливает агрессивность сущности. |
| Установить тип грибной коровы | entity_set_mushroom_cow_type | entity | appearance | cow_type: enum | Устанавливает тип грибной коровы. |
| Установить физику для сущности | entity_set_no_physics | entity | settings | no_physics: enum | Устанавливает существу физику. |
| Установить рисунок картины | entity_set_painting_art | entity | miscellaneous | art: text<br/>force: enum | Устанавливает рисунок для картины. |
| Установить ген панды | entity_set_panda_gene | entity | settings | gene: enum<br/>gene_type: enum | Устанавливает ген панды. Это влияет на их поведение и внешний вид. |
| Посадить панду | entity_set_panda_on_back | entity | settings | on_back: enum | Устанавливает Панде состояние сидения. |
| Установить Панде состояние переката | entity_set_panda_rolling | entity | goals | rolling: enum | Устанавливает Панде состояние переката. |
| Установить время грусти Панды | entity_set_panda_sad_ticks | entity | parameters | sad_ticks: number | Устанавливает время грусти Панды в тиках. |
| Установить тип попугая | entity_set_parrot_type | entity | appearance | parrot_type: enum | Устанавливает тип попугая. |
| Настроить поиск пути | entity_set_pathfinder_settings | entity | goals | can_float: enum<br/>can_open_door: enum<br/>can_pass_door: enum | Устанавливает параметры и ограничения для поиска пути сущности |
| Установить исчезание существа | entity_set_persistence | entity | settings | persistence: enum | Устанавливает, будет ли предмет или падающий блок исчезать. |
| Установить сущности сохранение | entity_set_persistent | entity | settings | persistent: enum | Устанавливает сущности состояние, будет ли она сохранена после отгрузки мира. |
| Установить возможность подбора | entity_set_pickup | entity | settings | can_mob_pickup: enum<br/>can_player_pickup: enum | Устанавливает сущности возможность подбора. |
| Установить задержку для поднятия | entity_set_pickup_delay | entity | parameters | delay: number | Устанавливает количество тиков, за которое предмет не может быть поднят. |
| Установить тип Свиньи | entity_set_pig_type | entity | appearance | variant: enum | Устанавливает свинье тип окраски. |
| Установить состояние охоты | entity_set_piglin_able_to_hunt | entity | goals | able: enum | Устанавливает пиглину состояние охоты на хоглинов. |
| Установить состояние зарядки арбалета | entity_set_piglin_charging_crossbow | entity | goals | charging: enum | Устанавливает пиглину состояние зарядки арбалета. |
| Установить стадию танца | entity_set_piglin_dancing | entity | goals | dancing_time: number | Устанавливает пиглину стадию танца на указанное время. |
| Установить позу сущности | entity_set_pose | entity | appearance | pose: enum | Устанавливает определённую позу существу. |
| Установить радиус облака эффекта | entity_set_potion_cloud_radius | entity | parameters | radius: number<br/>shrinking_speed: number | Устанавливает радиус облака эффекта и скорость его расширения. |
| Замаскировать зажжённый динамит под блок | entity_set_primed_tnt_block | entity | appearance | block: block | Маскирует зажжённый динамит под указанный блок. |
| Установить предмет снаряда | entity_set_projectile_display_item | entity | appearance | item: item | Устанавливает видимый предмет снаряду. |
| Установить снаряду вектор движения | entity_set_projectile_power | entity | parameters | power: vector | Устанавливает снаряду вектор движения. |
| Установить стрелка снаряду | entity_set_projectile_shooter | entity | settings | uuid: text | Устанавливает указанное существо как стрелка для снаряда. |
| Установить тип кролика | entity_set_rabbit_type | entity | appearance | rabbit_type: enum | Устанавливает тип кролика. |
| Установить позу лошади | entity_set_rearing | entity | settings | rearing: enum | Устанавливает, будет ли лошадь стоять на задних ногах. |
| Установить анимацию Тягун | entity_set_riptiding | entity | settings | riptiding: enum | Устанавливает существу анимацию использования зачарования трезубца Тягун. |
| Установить поворот | entity_set_rotation | entity | movement | yaw: number<br/>pitch: number | Устанавливает поворот сущности. |
| Установить поворот по вектору | entity_set_rotation_by_vector | entity | movement | vector: vector | Устанавливает поворот сущности по вектору. |
| Установить шерсть овце | entity_set_sheep_sheared | entity |  | sheared: enum | Устанавливает, будет ли шерсть на овце. |
| Установить цель снаряду Шалкера | entity_set_shulker_bullet_target | entity | goals | target: text | Устанавливает цель атаки снаряду Шалкера. |
| Установить процент открытия шалкера | entity_set_shulker_peek | entity | appearance | rolling: number<br/>silent: enum | Устанавливает шалкеру процент, на который он открыт. |
| Заглушить сущность | entity_set_silenced | entity | settings | silenced: enum | Убирает звуки сущности. |
| Установить режим сидения | entity_set_sitting | entity | settings | sitting: enum | Устанавливает существу режим сидения. |
| Установить размер существа | entity_set_size | entity | settings | size: number | Устанавливает размер существу. |
| Установить состояние нюхача | entity_set_sniffer_state | entity | settings | state: enum | Устанавливает определённое состояние нюхачу. |
| Установить тыкву снеговику | entity_set_snowman_pumpkin | entity | appearance | pumpkin: enum | Устанавливает видимость тыквы снеговику. |
| Приручить существо | entity_set_tame | entity | settings | name_or_uuid: text | Устанавливает привязанность существа к указанному хозяину. |
| Установить цель существу | entity_set_target | entity | goals | name_or_uuid: text | Инструктирует ИИ существа нацеливаться на определённое существо. |
| Установить выравнивание текста | entity_set_text_display_alignment | entity | display_entity | text_alignment: enum | Устанавливает выравнивание текста визуализатору текста. |
| Установить цвет фона | entity_set_text_display_background | entity | display_entity | color_hexadecimal: text<br/>opacity: number | Устанавливает цвет и прозрачность фона визуализатору текста. |
| Установить ширину строки | entity_set_text_display_line_width | entity | display_entity | line_width: number | Устанавливает максимальную ширину строки визуализатору текста. |
| Установить прозрачность текста | entity_set_text_display_opacity | entity | display_entity | text_opacity: number | Устанавливает прозрачность текста визуализатору текста. |
| Установить видимость через блоки | entity_set_text_display_see_through | entity | display_entity | enable_see_through: enum | Устанавливает видимость текста через блоки визуализатору текста. |
| Установить отображаемый текст | entity_set_text_display_text | entity | display_entity | displayed_text: text<br/>merging_mode: enum | Устанавливает отображаемый текст визуализатору текста. |
| Установить тень текста | entity_set_text_display_text_shadow | entity | display_entity | enable_text_shadow: enum | Устанавливает видимость тени текста визуализатору текста. |
| Установить узор рыбы | entity_set_tropical_fish_pattern | entity | appearance | pattern_color: enum<br/>body_color: enum<br/>pattern: enum | Устанавливает окрас и узор тропической рыбе. |
| Установить Вредине злость | entity_set_vex_charging | entity | goals | charging: enum | Устанавливает Вредине стадию злости. |
| Установить время жизни Вредины | entity_set_vex_limited_lifetime_ticks | entity | parameters | lifetime: number | Устанавливает время жизни Вредины в тиках. |
| Установить биом жителю | entity_set_villager_biome | entity | appearance | biome: enum | Устанавливает жителю окрас в зависимости от выбранного биома. |
| Установить опыт жителю | entity_set_villager_experience | entity | parameters | experience: number | Устанавливает жителю количество опыта. |
| Установить профессию жителю | entity_set_villager_profession | entity | settings | profession: enum | Устанавливает определённую профессию жителю. |
| Отображать огонь | entity_set_visual_fire | entity | appearance | visual_fire: enum | Отображает огонь на существе. |
| Установить уровень гнева Хранителя | entity_set_warden_anger_level | entity | parameters | name_or_uuid: text<br/>anger: number | Устанавливает определённый уровень гнева Хранителя на указанное существо. |
| Установить Вардену тип копания | entity_set_warden_digging | entity | miscellaneous | digging: enum | Устанавливает Вардену тип копания. |
| Установить цвет значка на локаторе | entity_set_waypoint_color | entity | settings | red: number<br/>green: number<br/>blue: number | Устанавливает сущности цвет значка, отображаемого на локаторе. |
| Установить стиль значка на локаторе | entity_set_waypoint_style | entity | settings | style: text | Устанавливает сущности стиль значка, отображаемого на локаторе. |
| Установить видимость седла | entity_set_wearing_saddle | entity | settings | wearing: enum | Устанавливает существу седло. |
| Установить неуязвимость иссушителю | entity_set_wither_invulnerability_ticks | entity | parameters | ticks: number | Устанавливает длительность неуязвимости иссушителю. |
| Установить звук Волка | entity_set_wolf_sound_variant | entity | settings | sound_variant: enum | Устанавливает тип издаваемых звуков волку. |
| Установить тип волка | entity_set_wolf_type | entity | appearance | wolf_type: enum | Устанавливает тип волка. |
| Установить поднятие рук зомби | entity_set_zombie_arms_raised | entity |  | arms_raised: enum | Устанавливает анимацию поднятия рук для зомби. |
| Установить тип зомби-наутилуса | entity_set_zombie_nautilus_variant | entity | appearance | variant: enum | Устанавливает тип зомби-наутилуса. |
| Подстричь сущность | entity_shear | entity | miscellaneous |  | Стрижёт сущность. |
| Подстричь овцу | entity_shear_sheep | entity |  |  | Подстригает овцу. |
| Установить анимацию сна | entity_sleep | entity | goals | sleep: enum | Устанавливает существу анимацию сна. Лучше всего использовать это действие в цикле. |
| Проиграть анимацию взмаха руки | entity_swing_hand | entity | appearance | hand_type: enum | Проигрывает для сущности анимацию взмаха руки. |
| Телепортация | entity_teleport | entity | movement | location: location<br/>keep_rotation: enum | Телепортирует существо в выбранное местоположение. |
| Использовать предмет | entity_use_item | entity | goals | hand: enum<br/>enable: enum | Инструктирует ИИ существа на использование предмета в его руке. |
| Сталкивается на местоположении | if_entity_collides_at_location | if_entity |  | location: location | Проверяет, сталкивается ли сущность с блоками, шалкерами, лодками и границей мира на указанном местоположении. |
| Сталкивается используя кастомный хитбокс | if_entity_collides_using_hitbox | if_entity |  | min: location<br/>max: location | Проверяет, сталкивается ли сущность с блоками, шалкерами, лодками и границей мира используя кастомный хитбокс. |
| Сталкивается с сущностью | if_entity_collides_with_entity | if_entity |  | name_or_uuid: text<br/>check_type: enum | Проверяет, сталкивается ли хитбокс сущности с хитбоксом другой указанной сущности. |
| Существует | if_entity_exists | if_entity |  |  | Проверяет, находится ли существо в мире. |
| Имеет доступный путь | if_entity_has_available_path | if_entity |  |  | Проверяет, может ли сущность построить путь до указанной точки или цели |
| Имеет кастомный тег | if_entity_has_custom_tag | if_entity |  | tag: text<br/>tag_value: text<br/>compare_type: enum | Проверяет, имеет ли существо кастомный тег с указанным значением. |
| Имеет эффект от зелья | if_entity_has_potion_effect | if_entity |  | potions: potion<br/>check_mode: enum | Проверяет, имеет ли существо эффект от зелья. |
| Внутри региона | if_entity_in_area | if_entity |  | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum | Проверяет, находится ли сущность в определённом регионе. |
| Замаскирована | if_entity_is_disguised | if_entity |  |  | Проверяет, замаскирована ли сущность. |
| Касается поверхности блока | if_entity_is_grounded | if_entity |  |  | Проверяет, касается ли существо поверхности блока. |
| Является предметом | if_entity_is_item | if_entity |  |  | Проверяет, является ли существо предметом. |
| Имеет Minecraft-тег | if_entity_is_minecraft_tagged | if_entity |  | namespace: text | Проверяет, имеет ли сущность указанный Minecraft-тег (например, "aquatic"). |
| Является мобом | if_entity_is_mob | if_entity |  |  | Проверяет, является ли существо мобом. |
| Рядом с местоположением | if_entity_is_near_location | if_entity |  | ignore_y_axis: enum<br/>location: location<br/>range: number | Проверяет, находится ли существо рядом с указанным местоположением. |
| Является снарядом | if_entity_is_projectile | if_entity |  |  | Проверяет, является ли существо снарядом. |
| Сущность оседлала сущность | if_entity_is_riding_entity | if_entity |  | entity_ids: text<br/>compare_mode: enum | Проверяет, оседлала ли сущность любую из других указанных сущностей. |
| Стоит на блоке | if_entity_is_standing_on_block | if_entity |  | blocks: block<br/>locations: location<br/>only_solid: enum | Проверяет, стоит ли сущность на определённом блоке или местоположении. |
| Тип существа равен | if_entity_is_type | if_entity |  | entity_types: item | Проверяет, равен ли тип существа типу в сундуке. |
| Является нежитью | if_entity_is_undead | if_entity |  |  | Проверяет, является ли существо нежитью. |
| Является транспортом | if_entity_is_vehicle | if_entity |  |  | Проверяет, является ли существо транспортом. |
| Имя равно | if_entity_name_equals | if_entity |  | names_or_uuids: text | Проверяет, равно ли имя существа имени в сундуке. |
| Причина появления равна | if_entity_spawn_reason_equals | if_entity |  | reason: enum | Проверяет, равна ли причина появления существа определённому значению. |
