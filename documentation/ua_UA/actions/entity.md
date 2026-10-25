# Entity actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Привязать на поводок | entity_attach_lead | entity | movement | name_or_uuid: text<br/>location: location | Привязывает существо на поводок к забору или существу. |
| Очистить эффекты | entity_celar_potion_effects | entity | parameters |  | Очищает все эффекты у существа. |
| Очистити торги Жителю | entity_clear_merchant_recipes | entity | settings |  | Очищає всі торги Жителю. |
| Завершити використання предмета | entity_complete_using_active_item | entity | goals |  | Завершує використання поточного предмета в руці з результатом. |
| Нанести урон | entity_damage | entity | parameters | damage: number<br/>source: text | Наносит урон существу. |
| ENTITY_DISGUISE_AS_BLOCK | entity_disguise_as_block | entity | appearance | block: block | ... |
| Замаскувати під істоту | entity_disguise_as_entity | entity | appearance | entity_type: item | Замаскувати істоту під істоту. |
| Замаскувати істоту під предмет | entity_disguise_as_item | entity | appearance | item: item | Маскує істоту під предмет. |
| ENTITY_DISGUISE_AS_PLAYER | entity_disguise_as_player | entity | appearance | name_or_uuid: text<br/>display_name: text<br/>server_type: enum | ... |
| Есть траву | entity_eat_grass | entity | goals |  | Заставляет овцу есть траву. |
| Встановити ціль поїдання | entity_eat_target | entity | goals | name_or_uuid: text | Встановлює істоті ціль для поїдання. |
| Взорваться | entity_explode | entity | goals |  | Заставляет существо взорваться. |
| Повернуть к местоположению | entity_face_location | entity | movement | location: location | Поворачивает существо в сторону к местоположению. |
| Отримати значення атрибута істоти | entity_get_attribute | entity | parameters | variable: variable<br/>attribute_type: enum<br/>return_value: enum | Отримує значення вказаного атрибута істоти та присвоює результат до змінної. |
| Получить кастомный тег | entity_get_custom_tag | entity | miscellaneous | variable: variable<br/>name: text<br/>default: any | Получает кастомный нбт-тег существа. |
| Отримати кастомні теги | entity_get_custom_tags | entity | miscellaneous | variable: variable | Отримує кастомні теги сутності та присвоює результат змінній. |
| Отримати спорядження істоти | entity_get_equipment_item | entity | miscellaneous | variable: variable<br/>slot: enum | Отримує спорядження істоти з вказаного слота і присвоює результат до змінної. |
| Отримати NBT-теги істоти | entity_get_nbt | entity | miscellaneous | variable: variable<br/>path: text<br/>value_type: enum | Отримує NBT-теги істоти за введеним шляхом та присвоює результат до змінної. |
| Выдать эффекты | entity_give_potion_effects | entity | parameters | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum | Выдаёт выбранные эффекты существу. |
| Исцелить существо | entity_heal | entity | parameters | heal: number | Исцеляет существо. |
| Зажечь крипера | entity_ignite_creeper | entity | goals |  | Поджигает крипера, заставляя его взорваться после определённого периода. |
| Прыгнуть | entity_jump | entity | goals |  | Заставляет существо прыгнуть. |
| Запустить вперёд | entity_launch_forward | entity | movement | power: number<br/>increment: enum<br/>launch_axis: enum | Запускает существо вперёд или назад по направлению взгляда в зависимости от силы. |
| Запустить снаряд | entity_launch_projectile | entity | miscellaneous | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle | Запустить снаряд из местоположения существа. |
| Запустить к местоположению | entity_launch_to_location | entity | movement | location: location<br/>power: number<br/>increment: enum | Запускает существа к выбранному местоположению. |
| Подбросить вверх | entity_launch_up | entity | movement | power: number<br/>increment: enum | Подбрасывает существо вверх или вниз в зависимости от силы. |
| Висадити з транспорту | entity_leave_vehicle | entity | movement |  | Висаджує істоту з транспорту або істоти. |
| Замаскувати істоту під істоту зі світу | entity_mimic_disguise_from_entity | entity | appearance | name_or_uuid: text<br/>include_disguise: enum<br/>remove_original_entity: enum | Маскує істоту під вказану істоту зі світу. |
| Змінити торги піґліна | entity_modify_piglin_barter_materials | entity | settings | materials: item<br/>modification_mode: enum | Змінює предмети, які може дати піґлін при обміні. |
| Змінити предмети для торгу з піґліном | entity_modify_piglin_interested_materials | entity | settings | materials: item<br/>modification_mode: enum | Змінює предмети, необхідні для обміну з піґліном. |
| Установить движение к местоположению | entity_move_to_location | entity | goals | location: location<br/>speed: number | Инструктирует ИИ существа всегда находить путь к определенному местоположению с определенной скоростью. |
| Зупинити рух до місцезнаходження | entity_move_to_location_stop | entity | goals |  | Зупиняє сутність, що йде до місцезнаходження. |
| Відобразити анімацію урону | entity_play_damage_animation | entity | appearance | damage_type: enum | Відображає анімацію урону істоті. |
| Відобразити анімацію отримання урону | entity_play_hurt_animation | entity | appearance | yaw: number | Відображає істоті анімацію отримання урону з певним нахилом. |
| Таранити сутність | entity_ram_target | entity | goals | name_or_uuid: text | Змушує козлів таранити вказану сутність. |
| Удалить сущность | entity_remove | entity | miscellaneous |  | Удаляет сущность из мира. |
| Удалить кастомный тег | entity_remove_custom_tag | entity | miscellaneous | name: text | Удаляет кастомный нбт-тег у существа. |
| Видалити кастомні теги | entity_remove_custom_tags | entity | miscellaneous |  | Видаляє всі кастомні теги сутності. |
| Прибрати маскування | entity_remove_disguise | entity | appearance |  | Прибирає маскування у істоти. |
| Видалити товар Жителю | entity_remove_merchant_recipe | entity | settings | recipe_index: number | Видаляє товар Жителю за вказаним індексом. |
| Удалить эффект | entity_remove_potion_effect | entity | parameters | effects: potion | Удаляет выбранные эффекты у существа. |
| Скинути яскравість | entity_reset_display_brightness | entity | display_entity |  | Скинути яскравість сутності-візуалізатора. |
| Скинути колір свічення | entity_reset_display_glow_color | entity | display_entity |  | Скинути колір свічення сутності-візуалізатора. |
| Очистити опис манекена | entity_reset_mannequin_description | entity | appearance |  | Очищає опис манекена. |
| Скинути колір фону | entity_reset_text_display_background | entity | display_entity |  | Скинути колір і прозорість фону візуалізатору тексту. |
| Скинути колір значка на локаторі | entity_reset_waypoint_color | entity | settings |  | Встановлює істоті колір значка, що відображається на локаторі, за замовчуванням. |
| Повернути поплавець | entity_retrieve_fishing_hook | entity | goals | slot: enum | Повертає закинутий поплавець вудки, що знаходиться у вказаній руці істоти. |
| Посадить на существо | entity_ride_entity | entity | movement | name_or_uuid: text | Сажает существо на другое существо или игрока. |
| Встановити Броненосцю стан захисту | entity_roll_armadillo | entity | goals | roll: enum | Встановлює броненосцю стан захисту (чи згорнутий броненосець). |
| Установить дополнительное здоровье | entity_set_absorption_health | entity | parameters | health: number | Устанавливает дополнительное здоровье существа. |
| Встановити блокування зростання | entity_set_age_lock | entity | settings | age_lock: enum | Встановлює блокування зростання істоти. |
| Установить интеллект сущности | entity_set_ai | entity | settings | ai: enum | Устанавливает интеллект сущности. |
| Зробити Тихоню танцюючим | entity_set_allay_dancing | entity | goals | dance: enum | Змушує Тихоню відображати анімацію танцю. |
| Установить режим гнева | entity_set_angry | entity | settings | angry: enum<br/>target: text | Устанавливает существу режим гнева на определённую цель. |
| Установить возраст животному | entity_set_animal_age | entity | parameters | age: number<br/>lock: enum | Устанавливает возраст животному. |
| Установить броню | entity_set_armor_items | entity | miscellaneous | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>silent: enum | Устанавливает броню сущности. |
| Установить детали стойки для брони | entity_set_armor_stand_parts | entity | appearance | arms: enum<br/>base_plate: enum | Установить детали стойки для брони. |
| Установить позу стойки для брони | entity_set_armor_stand_pose | entity | appearance | x_rotation: number<br/>y_rotation: number<br/>z_rotation: number<br/>body_part: enum | Устанавливает позу стойки для брони. |
| Встановити звук влучення снаряду | entity_set_arrow_hit_sound | entity | miscellaneous | sound: sound | Встановлює снаряду звук, що видається при влученні в істоту. |
| Встановити стрілі кількість пронизань | entity_set_arrow_pierce | entity | parameters | pierce: number | Встановлює стрілі кількість разів, які вона може пронизати істоту (від 0 до 127). |
| Установить атрибут | entity_set_attribute | entity | parameters | value: number<br/>attribute_type: enum | Устанавливает указанный атрибут на указанное значение существу. |
| Встановити обізнаність моба | entity_set_aware | entity | goals | aware: enum | У вимкненому стані вимикає ШІ моба, але залишає взаємодію з гравітацією, відштовхуванням тощо. |
| Встановити тип аксолотля | entity_set_axolotl_type | entity | appearance | axolotl_type: enum | Встановлює тип аксолотля. |
| Установить режим ребёнка | entity_set_baby | entity | settings | baby: enum | Устанавливает существу режим ребёнка. |
| Встановити первинний урон снаряду | entity_set_base_arrow_damage | entity | parameters | damage: number | Встановлює снаряду первинний урон, який буде використано у формулі урону снаряду при влученні. |
| Встановити Бджолі жало | entity_set_bee_has_stinger | entity | settings | stinger: enum | Встановлює стан жала бджолі. |
| Встановити пилок бджолі | entity_set_bee_nectar | entity | appearance | nectar: enum | Встановлює видимість пилку бджолі. |
| Встановити відображуваний блок | entity_set_block_display_block | entity | display_entity | displayed_block: block | Встановлює відображуваний блок візуалізатору блока. |
| Встановити анімацію ривка верблюду | entity_set_camel_dashing | entity | settings | dashing: enum | Встановлює анімацію ривка верблюду. |
| Установить видимость сундука | entity_set_carrying_chest | entity | settings | carrying: enum | Устанавливает видимость сундука на сущности. |
| Встановити режим лежання коту | entity_set_cat_lying_down | entity | appearance | lying_down: enum | Встановлює режим лежання коту. |
| ENTITY_SET_CAT_TYPE | entity_set_cat_type | entity | appearance | cat_type: enum | ... |
| Установить режим празднования | entity_set_celebrating | entity | goals | celebrating: enum | Устанавливает режим празднования существу. |
| Встановити тип Курки | entity_set_chicken_type | entity | appearance | variant: enum | Встановлює курці тип забарвлення. |
| Установить режим столкновения | entity_set_collidable | entity | settings | collidable: enum | Устанавливает существу режим столкновения с другими существами. |
| Встановити вощіння мідного голема | entity_set_copper_golem_oxidizing | entity | settings | oxidizing_state: enum | Встановлює вощіння мідного голема. |
| Встановити час окислення мідного голема | entity_set_copper_golem_oxidizing_at_time | entity | settings | time: number | Встановлює час, за який мідний голем підвищує рівень окислення під дощем. |
| Встановити окислення мідного голема | entity_set_copper_golem_weathering | entity | settings | weathering_state: enum | Встановлює ступінь окислення мідного голема. |
| Встановити тип Корови | entity_set_cow_type | entity | appearance | variant: enum | Встановлює корові тип забарвлення. |
| Установить заряженность криперу | entity_set_creeper_charge | entity | settings | charged: enum | Устанавливает, будет ли крипер заряженным. |
| Установить криперу время до взрыва | entity_set_creeper_fuse | entity | parameters | fuse_ticks: number | Устанавливает криперу время до взрыва. |
| Установить здоровье существа | entity_set_current_health | entity | parameters | health: number | Устанавливает здоровье существа на выбранное количество. |
| Установить имя | entity_set_custom_name | entity | settings | custom_name: text | Устанавливает имя для существа. |
| Установить видимость имени | entity_set_custom_name_visibility | entity | settings | visibility: enum | Устанавливает видимость имени существа. |
| Установить кастомный тег | entity_set_custom_tag | entity | miscellaneous | name: text<br/>value: text | Устанавливает кастомный нбт-тег существу. |
| Установить выпадение предметов | entity_set_death_drops | entity | settings | drops: enum | Устанавливает, будет ли выпадать лут с существа. |
| Встановити тривалість смерті | entity_set_death_time | entity | parameters | death_time: number | Встановлює тривалість смерті для істоти. |
| Встановити видимість | entity_set_default_visible | entity | settings | default_visible: enum | Встановлює істоті видимість. |
| Установить пропадание существа | entity_set_despawning | entity | settings | despawning: enum | Устанавливает, будет ли пропадать существо. |
| Встановити режим відображення | entity_set_display_billboard | entity | display_entity | billboard_type: enum | Встановлює режим відображення сутності-візуалізатора. |
| Встановити яскравість | entity_set_display_brightness | entity | display_entity | block_light_level: number<br/>sky_light_level: number | Встановлює яскравість сутності-візуалізатора. |
| Встановити матрицю перетворення | entity_set_display_correct_transformation_matrix | entity | display_entity | matrix: number | Встановлює матрицю перетворення істоті-візуалізатору. |
| Встановити розмір області видимості | entity_set_display_culling_suze | entity | display_entity | width: number<br/>height: number | Встановлює розмір області видимості моделі сутності-візуалізатора. |
| Встановити колір свічення | entity_set_display_glow_color | entity | display_entity | color_hexadecimal: text | Встановлює колір свічення сутності-візуалізатора. |
| Встановити інтерполяцію | entity_set_display_interpolation | entity | display_entity | interpolation_duration: number<br/>interpolation_delay: number | Встановлює тривалість інтерполяції сутності-візуалізатора. |
| Встановити поворот за осьовим вектором | entity_set_display_rotation_from_axis_angle | entity | display_entity | axis_vector: vector<br/>angle: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Встановлює лівий або правий поворот за осьовим вектором і кутом сутності-візуалізатора. |
| Встановити поворот за кутами Ейлера | entity_set_display_rotation_from_euler_angles | entity | display_entity | yaw: number<br/>pitch: number<br/>roll: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Встановлює лівий або правий поворот за кутами Ейлера сутності-візуалізатора. |
| Встановити поворот за вектором | entity_set_display_rotation_from_vector | entity | display_entity | direction: vector<br/>up: vector<br/>rotation: enum | Встановлює візуалізатору поворот за заданим вектором напрямку та вектором "Вгору". |
| Встановити розмір | entity_set_display_scale | entity | display_entity | scale_vector: vector<br/>mode: enum | Встановлює розмір сутності-візуалізатора. |
| Встановити налаштування тіні | entity_set_display_shadow | entity | display_entity | shadow_radius: number<br/>shadow_opacity_percentage: number | Встановлює розмір і прозорість тіні сутності-візуалізатора. |
| Встановити тривалість телепорту візуалізатора | entity_set_display_teleport_duration | entity | display_entity | duration: number | Встановлює тривалість телепорту візуалізатора. |
| Встановити матрицю перетворення | entity_set_display_transformation_matrix | entity |  | row_major_matrix: number | Встановлює матрицю перетворення (рядок-стовпець) сутності-візуалізатора. |
| Встановити зміщення | entity_set_display_translation | entity | display_entity | translation_vector: vector<br/>mode: enum | Встановлює зміщення сутності-візуалізатора. |
| Встановити дальність видимості | entity_set_display_view_range | entity | display_entity | view_range: number | Встановлює дальність видимості сутності-візуалізатора. |
| Встановити фазу Ендер-дракона | entity_set_dragon_phase | entity | goals | phase: enum | Встановлює певну фазу Ендер-дракону. |
| ENTITY_SET_DYE_COLOR | entity_set_dye_color | entity | appearance | color: enum | ... |
| Указать луч кристалла Энда | entity_set_end_crystal_beam | entity | settings | beam: location | Указывает луч кристалла Энда на определённое местоположение. |
| ENTITY_SET_ENDERMAN_BLOCK | entity_set_enderman_block | entity | appearance | block: block | ... |
| Установить экипировку | entity_set_equipment_item | entity | miscellaneous | item: item<br/>slot: enum | Устанавливает предметы в один из слотов экипировки (броня и предметы в руках) сущности. |
| Встановити силу вибуху | entity_set_explosive_power | entity | parameters | power: number | Встановлює силу вибуху істоти. |
| Установить дистанцию падения | entity_set_fall_distance | entity | parameters | fall_distance: number | Устанавливает дистанцию, с которой падает существо. |
| Встановити тип істоті Падаючий блок | entity_set_falling_block_type | entity | miscellaneous | block: block | Встановлює новий тип блоку істоті Падаючий блок. |
| Поджечь существо | entity_set_fire_ticks | entity | parameters | ticks: number | Поджигает существо на выбранное время. |
| Установить задержку рыбалки | entity_set_fishing_wait | entity | parameters | time: number<br/>wait_type: enum | Устанавливает задержку рыбалки существу в тиках. |
| Встановити анімацію стрибка лисиці | entity_set_fox_leaping | entity | appearance | leaping: enum | Встановлює анімацію стрибка лисиці. |
| Установить тип лисы | entity_set_fox_type | entity | appearance | fox_type: enum | Устанавливает тип лисы. |
| Встановити час заморожування | entity_set_freeze_ticks | entity | parameters | ticks: number<br/>ticking_locked: enum | Встановлює істоті час заморожування (кількість тіків, які істота провела у пухкому снігу). |
| Встановити тертя | entity_set_friction | entity | movement | friction: enum | Встановлює, чи буде істота відчувати тертя. |
| Встановити тип жаби | entity_set_frog_type | entity | appearance | frog_variant: enum | Встановлює забарвлення жаби. |
| Встановити час до вибуху | entity_set_fuse_ticks | entity | parameters | fuse_ticks: number | Встановлює час до вибуху істоти. |
| Установить полёт на элитрах | entity_set_gliding | entity | movement | is_gliding: enum | Устанавливает для существа состояние полёта на элитрах. |
| Встановити час темряви кальмару | entity_set_glow_squid_dark | entity | appearance | dark_ticks: number | Встановлює час темряви в тіках світному кальмару. |
| Установить свечение сущности | entity_set_glowing | entity | appearance | glowing: enum | Устанавливает существу эффект свечения. |
| Встановити козла кричущим | entity_set_goat_screaming | entity | settings | screams: enum | Встановлює тег "кричущий" козлу. |
| Установить гравитацию | entity_set_gravity | entity | movement | gravity: enum | Устанавливает, будет ли сущность подчиняться гравитации. |
| Встановити сторону блоку для підвішеної істоти | entity_set_hanging_facing_location | entity | settings | facing: enum<br/>force: enum | Встановлює підвішеній істоті сторону блоку, на якій вона знаходиться. |
| Установить лошади сила прыжка | entity_set_horse_jump | entity | parameters | power: number | Устанавливает лошади силу прыжка. |
| ENTITY_SET_HORSE_PATTERN | entity_set_horse_pattern | entity | appearance | horse_color: enum<br/>horse_style: enum | ... |
| Встановити імунітет до зомбіфікації | entity_set_immune_to_zombification | entity | settings | is_immune: enum | Встановлює істоті імунітет до зомбіфікації. |
| Встановити чутливість сутності взаємодії | entity_set_interaction_responsive | entity | settings | responsive: enum | Встановлює, чи буде сутність взаємодії реагувати на взаємодії. |
| Встановити розмір сутності взаємодії | entity_set_interaction_size | entity | settings | width: number<br/>height: number | Встановлює горизонтальний і вертикальний розміри сутності взаємодії. |
| Установить режим невидимости | entity_set_invisible | entity | settings | invisible: enum | Устанавливает существу режим невидимости. |
| Установить длительность неуязвимости | entity_set_invulnerability_ticks | entity | parameters | ticks: number | Устанавливает длительность неуязвимости для существа. |
| Установить неуязвимость сущности | entity_set_invulnerable | entity | settings | invulnerable: enum | Устанавливает неуязвимости сущности, но в режиме креатива можно нанести урон. |
| Установить тип существу Предмет | entity_set_item | entity | miscellaneous | item: item | Устанавливает определённый тип (ID) существу Предмет. |
| Встановити відображуваний предмет | entity_set_item_display_item | entity | display_entity | displayed_item: item | Встановлює відображуваний предмет візуалізатору предмета. |
| Встановити тип моделі предмета | entity_set_item_display_model_type | entity | display_entity | display_model_type: enum | Встановлює тип відображуваної моделі предмета візуалізатору предмета. |
| Встановити шанс випадання предмета з рамки | entity_set_item_frame_item_drop_chance | entity | miscellaneous | drop_chance: number | Встановлює шанс випадання предмета з рамки при руйнуванні. |
| Установить предмет в рамку | entity_set_item_in_frame | entity | appearance | item: item<br/>play_sound: enum | Устанавливает указанный предмет в рамку. |
| ENTITY_SET_ITEM_OWNER | entity_set_item_owner | entity | settings | name_or_uuid: text | ... |
| Встановити колір лами | entity_set_llama_type | entity | appearance | type: enum | Встановлює колір лами. |
| Направить движение | entity_set_location | entity | movement | velocity: vector<br/>increment: enum | Направляет движение существа в направлении вектора с определённой силой. |
| Встановити опис манекена | entity_set_mannequin_description | entity | appearance | description: text | Встановлює опис манекена. |
| Встановити пересування манекена | entity_set_mannequin_immovable | entity | settings | immovable: enum | Встановлює можливість пересування для манекена. |
| Встановити провідну руку манекена | entity_set_mannequin_main_hand | entity | appearance | hand: enum | Встановлює провідну руку манекена. |
| Встановити скін манекена | entity_set_mannequin_skin | entity | appearance | name_or_uuid: text<br/>server_type: enum | Встановлює скін манекена. |
| Встановити тип моделі манекена | entity_set_mannequin_skin_model | entity | appearance | model: enum | Встановлює тип моделі скіна манекена |
| Встановити шари скіна манекена | entity_set_mannequin_skin_parts | entity | appearance | hat: enum<br/>jacket: enum<br/>left_sleeve: enum<br/>right_sleeve: enum<br/>left_pants: enum<br/>right_pants: enum<br/>cape: enum | Встановлює відображення шарів скіна манекена. |
| Встановити текстуру частини манекена | entity_set_mannequin_skin_patch | entity | appearance | texture_key: text<br/>patch_target: enum | Встановлює текстуру для вказаної частини манекена. |
| Установить режим маркера | entity_set_marker | entity | settings | marker: enum | Устанавливает режим маркера стойке для брони. |
| Установить максимальное здоровье существа | entity_set_max_health | entity | parameters | max_health: number<br/>heal_to_max: enum | Устанавливает максимальное количество здоровья для существа. |
| Встановити максимальну тривалість невразливості | entity_set_max_invulnerability_ticks | entity | parameters | ticks: number | Встановлює максимальну тривалість невразливості для істоти. |
| Встановити товар Жителю | entity_set_merchant_recipe | entity | settings | result: item<br/>ingredient_one: item<br/>ingredient_two: item<br/>index: number<br/>mode: enum<br/>uses: number<br/>max_uses: number<br/>villager_experience: number<br/>price_multiplifier: number<br/>demand: number<br/>special_price: number<br/>ignore_discounts: enum<br/>experience_reward: enum | Встановлює товар Жителю за певні предмети за вказаним індексом. |
| Установить блок в вагонетку | entity_set_minecart_block | entity | appearance | block: block<br/>block_offset: number | Устанавливает указанный блок в вагонетку. |
| Встановити агресивність | entity_set_mob_aggressive | entity | appearance | aggressive: enum | Встановлює агресивність сутності. |
| Встановити тип грибної корови | entity_set_mushroom_cow_type | entity | appearance | cow_type: enum | Встановлює тип грибної корови. |
| Встановити фізику для істоти | entity_set_no_physics | entity | settings | no_physics: enum | Встановлює істоті фізику. |
| Встановити малюнок картини | entity_set_painting_art | entity | miscellaneous | art: text<br/>force: enum | Встановлює малюнок для картини. |
| Установить ген панды | entity_set_panda_gene | entity | settings | gene: enum<br/>gene_type: enum | Устанавливает ген панды. Это влияет на их поведение и внешний вид. |
| Посадити панду | entity_set_panda_on_back | entity | settings | on_back: enum | Встановлює Панді стан сидіння. |
| Встановити Панді стан перекату | entity_set_panda_rolling | entity | goals | rolling: enum | Встановлює Панді стан перекату. |
| Встановити час суму Панди | entity_set_panda_sad_ticks | entity | parameters | sad_ticks: number | Встановлює час суму Панди в тіках. |
| Встановити тип папуги | entity_set_parrot_type | entity | appearance | parrot_type: enum | Встановлює тип папуги. |
| Налаштувати пошук шляху | entity_set_pathfinder_settings | entity | goals | can_float: enum<br/>can_open_door: enum<br/>can_pass_door: enum | Встановлює параметри та обмеження для пошуку шляху сутності |
| Установить исчезание существа | entity_set_persistence | entity | settings | persistence: enum | Устанавливает, будет ли предмет или падающий блок исчезать. |
| Встановити збереження істоти | entity_set_persistent | entity | settings | persistent: enum | Встановлює стан істоти: чи буде вона збережена після вивантаження світу. |
| Встановити можливість підбору | entity_set_pickup | entity | settings | can_mob_pickup: enum<br/>can_player_pickup: enum | Встановлює сутності можливість підбору. |
| Установить задержку для поднятия | entity_set_pickup_delay | entity | parameters | delay: number | Устанавливает количество тиков, за которое предмет не может быть поднят. |
| Встановити тип Свині | entity_set_pig_type | entity | appearance | variant: enum | Встановлює свині тип забарвлення. |
| Встановити стан полювання | entity_set_piglin_able_to_hunt | entity | goals | able: enum | Встановлює піґліну стан полювання на хоґлінів. |
| Встановити стан зарядки арбалета | entity_set_piglin_charging_crossbow | entity | goals | charging: enum | Встановлює піґліну стан зарядки арбалета. |
| Встановити стадію танцю | entity_set_piglin_dancing | entity | goals | dancing_time: number | Встановлює піґліну стадію танцю на вказаний час. |
| Встановити позу істоти | entity_set_pose | entity | appearance | pose: enum | Встановлює певну позу істоті. |
| Установить радиус облака эффекта | entity_set_potion_cloud_radius | entity | parameters | radius: number<br/>shrinking_speed: number | Устанавливает радиус облака эффекта и скорость его расширения. |
| Замаскувати підпалений динаміт під блок | entity_set_primed_tnt_block | entity | appearance | block: block | Маскує підпалений динаміт під вказаний блок. |
| Установить предмет снаряда | entity_set_projectile_display_item | entity | appearance | item: item | Устанавливает видимый предмет снаряду. |
| Встановити снаряду вектор руху | entity_set_projectile_power | entity | parameters | power: vector | Встановлює снаряду вектор руху. |
| Установить стрелка снаряду | entity_set_projectile_shooter | entity | settings | uuid: text | Устанавливает указанное существо как стрелка для снаряда. |
| ENTITY_SET_RABBIT_TYPE | entity_set_rabbit_type | entity | appearance | rabbit_type: enum | ... |
| Установить позу лошади | entity_set_rearing | entity | settings | rearing: enum | Устанавливает, будет ли лошадь стоять на задних ногах. |
| Установить анимацию Тягун | entity_set_riptiding | entity | settings | riptiding: enum | Устанавливает существу анимацию использования зачарования трезубца Тягун. |
| Повернуть существо | entity_set_rotation | entity | movement | yaw: number<br/>pitch: number | Поворачивает существо. |
| Встановити поворот за вектором | entity_set_rotation_by_vector | entity | movement | vector: vector | Встановлює поворот істоти за вектором. |
| Установить шерсть овце | entity_set_sheep_sheared | entity |  | sheared: enum | Устанавливает, будет ли шерсть на овце. |
| Встановити ціль снаряду Шалкера | entity_set_shulker_bullet_target | entity | goals | target: text | Встановлює ціль атаки снаряду Шалкера. |
| Встановити відсоток відкриття шалкера | entity_set_shulker_peek | entity | appearance | rolling: number<br/>silent: enum | Встановлює шалкеру відсоток, на який він відкритий. |
| Заглушить сущность | entity_set_silenced | entity | settings | silenced: enum | Убирает звуки сущности. |
| Установить режим сидения | entity_set_sitting | entity | settings | sitting: enum | Устанавливает существу режим сидения. |
| Установить размер существа | entity_set_size | entity | settings | size: number | Устанавливает размер существу. |
| Встановити стан нюхача | entity_set_sniffer_state | entity | settings | state: enum | Встановлює певний стан нюхачу. |
| ENTITY_SET_SNOWMAN_PUMPKIN | entity_set_snowman_pumpkin | entity | appearance | pumpkin: enum | ... |
| Приручить существо | entity_set_tame | entity | settings | name_or_uuid: text | Устанавливает привязанность существа к указанному хозяину. |
| Установить цель существу | entity_set_target | entity | goals | name_or_uuid: text | Инструктирует ИИ существа нацеливаться на определенное существо. |
| Встановити вирівнювання тексту | entity_set_text_display_alignment | entity | display_entity | text_alignment: enum | Встановлює вирівнювання тексту візуалізатору тексту. |
| Встановити колір фону | entity_set_text_display_background | entity | display_entity | color_hexadecimal: text<br/>opacity: number | Встановлює колір і прозорість фону візуалізатору тексту. |
| Встановити ширину рядка | entity_set_text_display_line_width | entity | display_entity | line_width: number | Встановлює максимальну ширину рядка візуалізатору тексту. |
| Встановити прозорість тексту | entity_set_text_display_opacity | entity | display_entity | text_opacity: number | Встановлює прозорість тексту візуалізатору тексту. |
| Встановити видимість крізь блоки | entity_set_text_display_see_through | entity | display_entity | enable_see_through: enum | Встановлює видимість тексту крізь блоки візуалізатору тексту. |
| Встановити відображуваний текст | entity_set_text_display_text | entity | display_entity | displayed_text: text<br/>merging_mode: enum | Встановлює відображуваний текст візуалізатору тексту. |
| Встановити тінь тексту | entity_set_text_display_text_shadow | entity | display_entity | enable_text_shadow: enum | Встановлює видимість тіні тексту візуалізатору тексту. |
| Встановити узор риби | entity_set_tropical_fish_pattern | entity | appearance | pattern_color: enum<br/>body_color: enum<br/>pattern: enum | Встановлює забарвлення та узор тропічній рибі. |
| Встановити Шкіднику злість | entity_set_vex_charging | entity | goals | charging: enum | Встановлює Шкіднику стадію злості. |
| Встановити час життя Шкідника | entity_set_vex_limited_lifetime_ticks | entity | parameters | lifetime: number | Встановлює час життя Шкідника у тіках. |
| ENTITY_SET_VILLAGER_BIOME | entity_set_villager_biome | entity | appearance | biome: enum | ... |
| Установить опыт жителю | entity_set_villager_experience | entity | parameters | experience: number | Устанавливает жителю количество опыта. |
| Установить профессию жителю | entity_set_villager_profession | entity | settings | profession: enum | Устанавливает определённую профессию жителю. |
| Відображати вогонь | entity_set_visual_fire | entity | appearance | visual_fire: enum | Відображає вогонь на істоті. |
| Встановити рівень гніву Вартового | entity_set_warden_anger_level | entity | parameters | name_or_uuid: text<br/>anger: number | Встановлює певний рівень гніву Вартового на вказану істоту. |
| Встановити Вардену тип копання | entity_set_warden_digging | entity | miscellaneous | digging: enum | Встановлює Вардену тип копання. |
| Встановити колір значка на локаторі | entity_set_waypoint_color | entity | settings | red: number<br/>green: number<br/>blue: number | Встановлює істоті колір значка, що відображається на локаторі. |
| Встановити стиль значка на локаторі | entity_set_waypoint_style | entity | settings | style: text | Встановлює істоті стиль значка, що відображається на локаторі. |
| Установить видимость седла | entity_set_wearing_saddle | entity | settings | wearing: enum | Устанавливает существу седло. |
| Установить неуязвимость иссушителю | entity_set_wither_invulnerability_ticks | entity | parameters | ticks: number | Устанавливает длительность неуязвимости иссушителю. |
| Встановити звук Вовка | entity_set_wolf_sound_variant | entity | settings | sound_variant: enum | Встановлює тип звуків, що видаються, вовку. |
| Встановити тип вовка | entity_set_wolf_type | entity | appearance | wolf_type: enum | Встановлює тип вовка. |
| Встановити підняття рук зомбі | entity_set_zombie_arms_raised | entity |  | arms_raised: enum | Встановлює анімацію підняття рук для зомбі. |
| Встановити тип зомбі-наутилуса | entity_set_zombie_nautilus_variant | entity | appearance | variant: enum | Встановлює тип зомбі-наутилуса. |
| Підстригти істоту | entity_shear | entity | miscellaneous |  | Підстригає істоту. |
| Подстричь овцу | entity_shear_sheep | entity |  |  | Подстригает овцу. |
| Установить анимацию сна | entity_sleep | entity | goals | sleep: enum | Устанавливает существу анимацию сна. |
| Програти анімацію змаху руки | entity_swing_hand | entity | appearance | hand_type: enum | Програє для істоти анімацію змаху руки. |
| Телепортация | entity_teleport | entity | movement | location: location<br/>keep_rotation: enum | Телепортирует существо в выбранное местоположение. |
| Використати предмет | entity_use_item | entity | goals | hand: enum<br/>enable: enum | Інструктує ШІ істоти на використання предмета в її руці. |
| Стикається на місцезнаходженні | if_entity_collides_at_location | if_entity |  | location: location | Перевіряє, чи стикається істота з блоками, шалкерами, човнами та межею світу на вказаному місцезнаходженні. |
| Стикається використовуючи кастомний хітбокс | if_entity_collides_using_hitbox | if_entity |  | min: location<br/>max: location | Перевіряє, чи стикається істота з блоками, шалкерами, човнами та межею світу використовуючи кастомний хітбокс. |
| Стикається з істотою | if_entity_collides_with_entity | if_entity |  | name_or_uuid: text<br/>check_type: enum | Перевіряє, чи стикається хітбокс істоти з хітбоксом іншої вказаної істоти. |
| Существует | if_entity_exists | if_entity |  |  | Проверяет, находится ли существо в мире. |
| Має доступний шлях | if_entity_has_available_path | if_entity |  |  | Перевіряє, чи може сутність побудувати шлях до вказаної точки або цілі |
| Имеет кастомный тег | if_entity_has_custom_tag | if_entity |  | tag: text<br/>tag_value: text<br/>compare_type: enum | Проверяет, имеет ли существо кастомный тег с указанным значением. |
| Имеет эффект от зелья | if_entity_has_potion_effect | if_entity |  | potions: potion<br/>check_mode: enum | Проверяет, имеет ли существо эффект от зелья. |
| Всередині регіону | if_entity_in_area | if_entity |  | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum | Перевіряє, чи знаходиться істота в певному регіоні. |
| Замаскована | if_entity_is_disguised | if_entity |  |  | Перевіряє, чи замаскована істота. |
| Касается поверхности блока | if_entity_is_grounded | if_entity |  |  | Проверяет, касается ли существо поверхности блока. |
| Является предметом | if_entity_is_item | if_entity |  |  | Проверяет, является ли существо предметом. |
| Має Minecraft-тег | if_entity_is_minecraft_tagged | if_entity |  | namespace: text | Перевіряє, чи має істота вказаний Minecraft-тег (наприклад, "aquatic"). |
| Является мобом | if_entity_is_mob | if_entity |  |  | Проверяет, является ли существо мобом. |
| Рядом с местоположением | if_entity_is_near_location | if_entity |  | ignore_y_axis: enum<br/>location: location<br/>range: number | Проверяет, находится ли существо рядом с указанным местоположением. |
| Является снарядом | if_entity_is_projectile | if_entity |  |  | Проверяет, является ли существо снарядом. |
| Сущность оседлала сущность | if_entity_is_riding_entity | if_entity |  | entity_ids: text<br/>compare_mode: enum | Проверяет, оседлала ли сущность любую из других указанных сущностей. |
| Стоит на блоке | if_entity_is_standing_on_block | if_entity |  | blocks: block<br/>locations: location<br/>only_solid: enum | Проверяет, стоит ли сущность на блоке определенном блоке или местоположении. |
| Тип существа равен | if_entity_is_type | if_entity |  | entity_types: item | Проверяет, равен ли тип существа типу в сундуке. |
| Є нежиттю | if_entity_is_undead | if_entity |  |  | Перевіряє, чи є істота нежиттю. |
| Является транспортом | if_entity_is_vehicle | if_entity |  |  | Проверяет, является ли существо транспортом. |
| Имя равно | if_entity_name_equals | if_entity |  | names_or_uuids: text | Проверяет, равно ли имя существа имени в сундуке. |
| Причина появления равна | if_entity_spawn_reason_equals | if_entity |  | reason: enum | Проверяет, равна ли причина появления существа определённому значению. |
