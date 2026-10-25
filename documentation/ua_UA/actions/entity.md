# Entity actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Привязать на поводок | entity_attach_lead | entity | movement | basic | name_or_uuid: text<br/>location: location |  |  | false | false | Привязывает существо на поводок к забору или существу. |
| Очистить эффекты | entity_celar_potion_effects | entity | parameters | basic |  |  |  | false | false | Очищает все эффекты у существа. |
| Очистити торги Жителю | entity_clear_merchant_recipes | entity | settings | basic |  | Жителями<br/>Мандрівними торговцями |  | false | false | Очищає всі торги Жителю. |
| Завершити використання предмета | entity_complete_using_active_item | entity | goals | basic |  | Мобами |  | false | false | Завершує використання поточного предмета в руці з результатом. |
| Нанести урон | entity_damage | entity | parameters | basic | damage: number<br/>source: text |  |  | false | false | Наносит урон существу. |
| ENTITY_DISGUISE_AS_BLOCK | entity_disguise_as_block | entity | appearance | basic | block: block |  |  | false | false | ... |
| Замаскувати під істоту | entity_disguise_as_entity | entity | appearance | basic | entity_type: item |  |  | false | false | Замаскувати істоту під істоту. |
| Замаскувати істоту під предмет | entity_disguise_as_item | entity | appearance | basic | item: item |  |  | false | false | Маскує істоту під предмет. |
| ENTITY_DISGUISE_AS_PLAYER | entity_disguise_as_player | entity | appearance | basic | name_or_uuid: text<br/>display_name: text<br/>server_type: enum |  |  | false | false | ... |
| Есть траву | entity_eat_grass | entity | goals | basic |  | Вівцями |  | false | false | Заставляет овцу есть траву. |
| Встановити ціль поїдання | entity_eat_target | entity | goals | basic | name_or_uuid: text | Жабами |  | false | false | Встановлює істоті ціль для поїдання. |
| Взорваться | entity_explode | entity | goals | basic |  | Криперами<br/>Динамітом<br/>Вагонеткою з динамітом<br/>Феєрверками<br/>Сірчаним слимаком |  | false | false | Заставляет существо взорваться. |
| Повернуть к местоположению | entity_face_location | entity | movement | basic | location: location |  |  | false | false | Поворачивает существо в сторону к местоположению. |
| Отримати значення атрибута істоти | entity_get_attribute | entity | parameters | basic | variable: variable<br/>attribute_type: enum<br/>return_value: enum |  |  | false | false | Отримує значення вказаного атрибута істоти та присвоює результат до змінної. |
| Получить кастомный тег | entity_get_custom_tag | entity | miscellaneous | basic | variable: variable<br/>name: text<br/>default: any |  |  | false | false | Получает кастомный нбт-тег существа. |
| Отримати кастомні теги | entity_get_custom_tags | entity | miscellaneous | basic | variable: variable |  |  | false | false | Отримує кастомні теги сутності та присвоює результат змінній. |
| Отримати спорядження істоти | entity_get_equipment_item | entity | miscellaneous | basic | variable: variable<br/>slot: enum |  |  | false | false | Отримує спорядження істоти з вказаного слота і присвоює результат до змінної. |
| Отримати NBT-теги істоти | entity_get_nbt | entity | miscellaneous | basic | variable: variable<br/>path: text<br/>value_type: enum |  |  | false | false | Отримує NBT-теги істоти за введеним шляхом та присвоює результат до змінної. |
| Выдать эффекты | entity_give_potion_effects | entity | parameters | basic | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum |  |  | false | false | Выдаёт выбранные эффекты существу. |
| Исцелить существо | entity_heal | entity | parameters | basic | heal: number |  |  | false | false | Исцеляет существо. |
| Зажечь крипера | entity_ignite_creeper | entity | goals | basic |  | Кріперами<br/>Вагонетками з динамітом<br/>Сірчаного слимака |  | false | false | Поджигает крипера, заставляя его взорваться после определённого периода. |
| Прыгнуть | entity_jump | entity | goals | basic |  | Мобами |  | false | false | Заставляет существо прыгнуть. |
| Запустить вперёд | entity_launch_forward | entity | movement | basic | power: number<br/>increment: enum<br/>launch_axis: enum |  |  | false | false | Запускает существо вперёд или назад по направлению взгляда в зависимости от силы. |
| Запустить снаряд | entity_launch_projectile | entity | miscellaneous | basic | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle |  |  | false | false | Запустить снаряд из местоположения существа. |
| Запустить к местоположению | entity_launch_to_location | entity | movement | basic | location: location<br/>power: number<br/>increment: enum |  |  | false | false | Запускает существа к выбранному местоположению. |
| Подбросить вверх | entity_launch_up | entity | movement | basic | power: number<br/>increment: enum |  |  | false | false | Подбрасывает существо вверх или вниз в зависимости от силы. |
| Висадити з транспорту | entity_leave_vehicle | entity | movement | basic |  |  |  | false | false | Висаджує істоту з транспорту або істоти. |
| Замаскувати істоту під істоту зі світу | entity_mimic_disguise_from_entity | entity | appearance | basic | name_or_uuid: text<br/>include_disguise: enum<br/>remove_original_entity: enum |  |  | false | false | Маскує істоту під вказану істоту зі світу. |
| Змінити торги піґліна | entity_modify_piglin_barter_materials | entity | settings | basic | materials: item<br/>modification_mode: enum | Піґлінами | Не можна змінити предмети, які піґлін продає за замовчуванням. | false | false | Змінює предмети, які може дати піґлін при обміні. |
| Змінити предмети для торгу з піґліном | entity_modify_piglin_interested_materials | entity | settings | basic | materials: item<br/>modification_mode: enum | Піґлінами | Не можна змінити предмети, які піґлін вимагає за замовчуванням. | false | false | Змінює предмети, необхідні для обміну з піґліном. |
| Установить движение к местоположению | entity_move_to_location | entity | goals | basic | location: location<br/>speed: number | Мобами |  | false | false | Инструктирует ИИ существа всегда находить путь к определенному местоположению с определенной скоростью. |
| Зупинити рух до місцезнаходження | entity_move_to_location_stop | entity | goals | basic |  | Мобами |  | false | false | Зупиняє сутність, що йде до місцезнаходження. |
| Відобразити анімацію урону | entity_play_damage_animation | entity | appearance | basic | damage_type: enum |  |  | false | false | Відображає анімацію урону істоті. |
| Відобразити анімацію отримання урону | entity_play_hurt_animation | entity | appearance | basic | yaw: number |  |  | false | false | Відображає істоті анімацію отримання урону з певним нахилом. |
| Таранити сутність | entity_ram_target | entity | goals | basic | name_or_uuid: text | Козлами |  | false | false | Змушує козлів таранити вказану сутність. |
| Удалить сущность | entity_remove | entity | miscellaneous | basic |  |  |  | false | false | Удаляет сущность из мира. |
| Удалить кастомный тег | entity_remove_custom_tag | entity | miscellaneous | basic | name: text |  |  | false | false | Удаляет кастомный нбт-тег у существа. |
| Видалити кастомні теги | entity_remove_custom_tags | entity | miscellaneous | basic |  |  |  | false | false | Видаляє всі кастомні теги сутності. |
| Прибрати маскування | entity_remove_disguise | entity | appearance | basic |  |  |  | false | false | Прибирає маскування у істоти. |
| Видалити товар Жителю | entity_remove_merchant_recipe | entity | settings | basic | recipe_index: number | Жителями<br/>Мандрівними торговцями |  | false | false | Видаляє товар Жителю за вказаним індексом. |
| Удалить эффект | entity_remove_potion_effect | entity | parameters | basic | effects: potion |  |  | false | false | Удаляет выбранные эффекты у существа. |
| Скинути яскравість | entity_reset_display_brightness | entity | display_entity | basic |  | Будь-якою сутністю-візуалізатором |  | false | false | Скинути яскравість сутності-візуалізатора. |
| Скинути колір свічення | entity_reset_display_glow_color | entity | display_entity | basic |  | Візуалізаторами предмета<br/>Візуалізаторами блока |  | false | false | Скинути колір свічення сутності-візуалізатора. |
| Очистити опис манекена | entity_reset_mannequin_description | entity | appearance | basic |  | Манекенами |  | false | false | Очищає опис манекена. |
| Скинути колір фону | entity_reset_text_display_background | entity | display_entity | basic |  | Візуалізаторами тексту |  | false | false | Скинути колір і прозорість фону візуалізатору тексту. |
| Скинути колір значка на локаторі | entity_reset_waypoint_color | entity | settings | basic |  | Мобами | Для роботи дії, ігрове правило "Видимість локатора" має бути увімкнено. | false | false | Встановлює істоті колір значка, що відображається на локаторі, за замовчуванням. |
| Повернути поплавець | entity_retrieve_fishing_hook | entity | goals | basic | slot: enum | Вудками |  | false | false | Повертає закинутий поплавець вудки, що знаходиться у вказаній руці істоти. |
| Посадить на существо | entity_ride_entity | entity | movement | basic | name_or_uuid: text |  |  | false | false | Сажает существо на другое существо или игрока. |
| Встановити Броненосцю стан захисту | entity_roll_armadillo | entity | goals | basic | roll: enum | Броненосцями |  | false | false | Встановлює броненосцю стан захисту (чи згорнутий броненосець). |
| Установить дополнительное здоровье | entity_set_absorption_health | entity | parameters | basic | health: number |  |  | false | false | Устанавливает дополнительное здоровье существа. |
| Встановити блокування зростання | entity_set_age_lock | entity | settings | basic | age_lock: enum | Старіючими |  | false | false | Встановлює блокування зростання істоти. |
| Установить интеллект сущности | entity_set_ai | entity | settings | basic | ai: enum |  |  | false | false | Устанавливает интеллект сущности. |
| Зробити Тихоню танцюючим | entity_set_allay_dancing | entity | goals | basic | dance: enum | Тихонями |  | false | false | Змушує Тихоню відображати анімацію танцю. |
| Установить режим гнева | entity_set_angry | entity | settings | basic | angry: enum<br/>target: text | Бджолами<br/>Вовками<br/>Зомбіфікованими пігліни<br/>Ендерменами<br/>Мобами | Для коректної роботи сутності необхідна ціль. | false | false | Устанавливает существу режим гнева на определённую цель. |
| Установить возраст животному | entity_set_animal_age | entity | parameters | basic | age: number<br/>lock: enum |  |  | false | false | Устанавливает возраст животному. |
| Установить броню | entity_set_armor_items | entity | miscellaneous | basic | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>silent: enum |  | Любой предмет или блок будет отображаться на голове, если положить его в слот шлема | false | false | Устанавливает броню сущности. |
| Установить детали стойки для брони | entity_set_armor_stand_parts | entity | appearance | basic | arms: enum<br/>base_plate: enum | Стойкой для брони |  | false | false | Установить детали стойки для брони. |
| Установить позу стойки для брони | entity_set_armor_stand_pose | entity | appearance | basic | x_rotation: number<br/>y_rotation: number<br/>z_rotation: number<br/>body_part: enum | Стойкой для брони |  | false | false | Устанавливает позу стойки для брони. |
| Встановити звук влучення снаряду | entity_set_arrow_hit_sound | entity | miscellaneous | basic | sound: sound | Стрілами<br/>Тризубцями |  | false | false | Встановлює снаряду звук, що видається при влученні в істоту. |
| Встановити стрілі кількість пронизань | entity_set_arrow_pierce | entity | parameters | basic | pierce: number |  |  | false | false | Встановлює стрілі кількість разів, які вона може пронизати істоту (від 0 до 127). |
| Установить атрибут | entity_set_attribute | entity | parameters | basic | value: number<br/>attribute_type: enum |  |  | false | false | Устанавливает указанный атрибут на указанное значение существу. |
| Встановити обізнаність моба | entity_set_aware | entity | goals | basic | aware: enum | Мобами |  | false | false | У вимкненому стані вимикає ШІ моба, але залишає взаємодію з гравітацією, відштовхуванням тощо. |
| Встановити тип аксолотля | entity_set_axolotl_type | entity | appearance | basic | axolotl_type: enum | Аксолотлями |  | false | false | Встановлює тип аксолотля. |
| Установить режим ребёнка | entity_set_baby | entity | settings | basic | baby: enum |  |  | false | false | Устанавливает существу режим ребёнка. |
| Встановити первинний урон снаряду | entity_set_base_arrow_damage | entity | parameters | basic | damage: number | Стрілами<br/>Тризубцями | Формула для стріл: первинний_урон * швидкість_снаряду = завданий урон<br/>Формула для тризубців: первинний_урон = завданий урон | false | false | Встановлює снаряду первинний урон, який буде використано у формулі урону снаряду при влученні. |
| Встановити Бджолі жало | entity_set_bee_has_stinger | entity | settings | basic | stinger: enum | Бджолами |  | false | false | Встановлює стан жала бджолі. |
| Встановити пилок бджолі | entity_set_bee_nectar | entity | appearance | basic | nectar: enum | Бджолами |  | false | false | Встановлює видимість пилку бджолі. |
| Встановити відображуваний блок | entity_set_block_display_block | entity | display_entity | basic | displayed_block: block | Візуалізаторами блока |  | false | false | Встановлює відображуваний блок візуалізатору блока. |
| Встановити анімацію ривка верблюду | entity_set_camel_dashing | entity | settings | basic | dashing: enum | Верблюдами |  | false | false | Встановлює анімацію ривка верблюду. |
| Установить видимость сундука | entity_set_carrying_chest | entity | settings | basic | carrying: enum | Ослами<br/>Мулами<br/>Ламами |  | false | false | Устанавливает видимость сундука на сущности. |
| Встановити режим лежання коту | entity_set_cat_lying_down | entity | appearance | basic | lying_down: enum | Котами |  | false | false | Встановлює режим лежання коту. |
| ENTITY_SET_CAT_TYPE | entity_set_cat_type | entity | appearance | basic | cat_type: enum | Котами |  | false | false | ... |
| Установить режим празднования | entity_set_celebrating | entity | goals | basic | celebrating: enum | Піґлінами<br/>Рейдерами |  | false | false | Устанавливает режим празднования существу. |
| Встановити тип Курки | entity_set_chicken_type | entity | appearance | basic | variant: enum | Курками |  | false | false | Встановлює курці тип забарвлення. |
| Установить режим столкновения | entity_set_collidable | entity | settings | basic | collidable: enum |  |  | false | false | Устанавливает существу режим столкновения с другими существами. |
| Встановити вощіння мідного голема | entity_set_copper_golem_oxidizing | entity | settings | basic | oxidizing_state: enum | Мідними големами |  | false | false | Встановлює вощіння мідного голема. |
| Встановити час окислення мідного голема | entity_set_copper_golem_oxidizing_at_time | entity | settings | basic | time: number | Мідними големами |  | false | false | Встановлює час, за який мідний голем підвищує рівень окислення під дощем. |
| Встановити окислення мідного голема | entity_set_copper_golem_weathering | entity | settings | basic | weathering_state: enum | Мідними големами |  | false | false | Встановлює ступінь окислення мідного голема. |
| Встановити тип Корови | entity_set_cow_type | entity | appearance | basic | variant: enum | Коровами |  | false | false | Встановлює корові тип забарвлення. |
| Установить заряженность криперу | entity_set_creeper_charge | entity | settings | basic | charged: enum | Кріперами |  | false | false | Устанавливает, будет ли крипер заряженным. |
| Установить криперу время до взрыва | entity_set_creeper_fuse | entity | parameters | basic | fuse_ticks: number | Кріперами |  | false | false | Устанавливает криперу время до взрыва. |
| Установить здоровье существа | entity_set_current_health | entity | parameters | basic | health: number |  |  | false | false | Устанавливает здоровье существа на выбранное количество. |
| Установить имя | entity_set_custom_name | entity | settings | basic | custom_name: text |  |  | false | false | Устанавливает имя для существа. |
| Установить видимость имени | entity_set_custom_name_visibility | entity | settings | basic | visibility: enum |  |  | false | false | Устанавливает видимость имени существа. |
| Установить кастомный тег | entity_set_custom_tag | entity | miscellaneous | basic | name: text<br/>value: text |  |  | false | false | Устанавливает кастомный нбт-тег существу. |
| Установить выпадение предметов | entity_set_death_drops | entity | settings | basic | drops: enum |  |  | false | false | Устанавливает, будет ли выпадать лут с существа. |
| Встановити тривалість смерті | entity_set_death_time | entity | parameters | basic | death_time: number |  |  | false | false | Встановлює тривалість смерті для істоти. |
| Встановити видимість | entity_set_default_visible | entity | settings | basic | default_visible: enum |  |  | false | false | Встановлює істоті видимість. |
| Установить пропадание существа | entity_set_despawning | entity | settings | basic | despawning: enum |  |  | false | false | Устанавливает, будет ли пропадать существо. |
| Встановити режим відображення | entity_set_display_billboard | entity | display_entity | basic | billboard_type: enum | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює режим відображення сутності-візуалізатора. |
| Встановити яскравість | entity_set_display_brightness | entity | display_entity | basic | block_light_level: number<br/>sky_light_level: number | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює яскравість сутності-візуалізатора. |
| Встановити матрицю перетворення | entity_set_display_correct_transformation_matrix | entity | display_entity | basic | matrix: number | Будь-якою істотою-візуалізатором |  | false | false | Встановлює матрицю перетворення істоті-візуалізатору. |
| Встановити розмір області видимості | entity_set_display_culling_suze | entity | display_entity | basic | width: number<br/>height: number | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює розмір області видимості моделі сутності-візуалізатора. |
| Встановити колір свічення | entity_set_display_glow_color | entity | display_entity | basic | color_hexadecimal: text | Візуалізаторами предмета<br/>Візуалізаторами блока |  | false | false | Встановлює колір свічення сутності-візуалізатора. |
| Встановити інтерполяцію | entity_set_display_interpolation | entity | display_entity | basic | interpolation_duration: number<br/>interpolation_delay: number | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює тривалість інтерполяції сутності-візуалізатора. |
| Встановити поворот за осьовим вектором | entity_set_display_rotation_from_axis_angle | entity | display_entity | basic | axis_vector: vector<br/>angle: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює лівий або правий поворот за осьовим вектором і кутом сутності-візуалізатора. |
| Встановити поворот за кутами Ейлера | entity_set_display_rotation_from_euler_angles | entity | display_entity | basic | yaw: number<br/>pitch: number<br/>roll: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює лівий або правий поворот за кутами Ейлера сутності-візуалізатора. |
| Встановити поворот за вектором | entity_set_display_rotation_from_vector | entity | display_entity | basic | direction: vector<br/>up: vector<br/>rotation: enum | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює візуалізатору поворот за заданим вектором напрямку та вектором "Вгору". |
| Встановити розмір | entity_set_display_scale | entity | display_entity | basic | scale_vector: vector<br/>mode: enum | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює розмір сутності-візуалізатора. |
| Встановити налаштування тіні | entity_set_display_shadow | entity | display_entity | basic | shadow_radius: number<br/>shadow_opacity_percentage: number | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює розмір і прозорість тіні сутності-візуалізатора. |
| Встановити тривалість телепорту візуалізатора | entity_set_display_teleport_duration | entity | display_entity | basic | duration: number | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює тривалість телепорту візуалізатора. |
| Встановити матрицю перетворення | entity_set_display_transformation_matrix | entity |  | basic | row_major_matrix: number |  |  | true | false | Встановлює матрицю перетворення (рядок-стовпець) сутності-візуалізатора. |
| Встановити зміщення | entity_set_display_translation | entity | display_entity | basic | translation_vector: vector<br/>mode: enum | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює зміщення сутності-візуалізатора. |
| Встановити дальність видимості | entity_set_display_view_range | entity | display_entity | basic | view_range: number | Будь-якою сутністю-візуалізатором |  | false | false | Встановлює дальність видимості сутності-візуалізатора. |
| Встановити фазу Ендер-дракона | entity_set_dragon_phase | entity | goals | basic | phase: enum | Ендер-драконами |  | false | false | Встановлює певну фазу Ендер-дракону. |
| ENTITY_SET_DYE_COLOR | entity_set_dye_color | entity | appearance | basic | color: enum | Вівцями<br/>Шалкерами<br/>Нашийниками собак<br/>Нашийниками котів |  | false | false | ... |
| Указать луч кристалла Энда | entity_set_end_crystal_beam | entity | settings | basic | beam: location | Кристалами Енду |  | false | false | Указывает луч кристалла Энда на определённое местоположение. |
| ENTITY_SET_ENDERMAN_BLOCK | entity_set_enderman_block | entity | appearance | basic | block: block | Ендерменами |  | false | false | ... |
| Установить экипировку | entity_set_equipment_item | entity | miscellaneous | basic | item: item<br/>slot: enum |  |  | false | false | Устанавливает предметы в один из слотов экипировки (броня и предметы в руках) сущности. |
| Встановити силу вибуху | entity_set_explosive_power | entity | parameters | basic | power: number | Кріперами<br/>Динамітом<br/>Вогняними кулями |  | false | false | Встановлює силу вибуху істоти. |
| Установить дистанцию падения | entity_set_fall_distance | entity | parameters | basic | fall_distance: number |  |  | false | false | Устанавливает дистанцию, с которой падает существо. |
| Встановити тип істоті Падаючий блок | entity_set_falling_block_type | entity | miscellaneous | basic | block: block | Падаючими блоками |  | false | false | Встановлює новий тип блоку істоті Падаючий блок. |
| Поджечь существо | entity_set_fire_ticks | entity | parameters | basic | ticks: number |  |  | false | false | Поджигает существо на выбранное время. |
| Установить задержку рыбалки | entity_set_fishing_wait | entity | parameters | basic | time: number<br/>wait_type: enum | Поплавком вудки |  | false | false | Устанавливает задержку рыбалки существу в тиках. |
| Встановити анімацію стрибка лисиці | entity_set_fox_leaping | entity | appearance | basic | leaping: enum | Лисами |  | false | false | Встановлює анімацію стрибка лисиці. |
| Установить тип лисы | entity_set_fox_type | entity | appearance | basic | fox_type: enum | Лисами |  | false | false | Устанавливает тип лисы. |
| Встановити час заморожування | entity_set_freeze_ticks | entity | parameters | basic | ticks: number<br/>ticking_locked: enum |  |  | false | false | Встановлює істоті час заморожування (кількість тіків, які істота провела у пухкому снігу). |
| Встановити тертя | entity_set_friction | entity | movement | basic | friction: enum |  |  | false | false | Встановлює, чи буде істота відчувати тертя. |
| Встановити тип жаби | entity_set_frog_type | entity | appearance | basic | frog_variant: enum | Жабами |  | false | false | Встановлює забарвлення жаби. |
| Встановити час до вибуху | entity_set_fuse_ticks | entity | parameters | basic | fuse_ticks: number | Кріперами<br/>Динамітом<br/>Вагонетками з динамітом<br/>Феєрверками<br/>Сірчаними слаймами |  | false | false | Встановлює час до вибуху істоти. |
| Установить полёт на элитрах | entity_set_gliding | entity | movement | basic | is_gliding: enum |  |  | false | false | Устанавливает для существа состояние полёта на элитрах. |
| Встановити час темряви кальмару | entity_set_glow_squid_dark | entity | appearance | basic | dark_ticks: number | Світними кальмарами |  | false | false | Встановлює час темряви в тіках світному кальмару. |
| Установить свечение сущности | entity_set_glowing | entity | appearance | basic | glowing: enum |  |  | false | false | Устанавливает существу эффект свечения. |
| Встановити козла кричущим | entity_set_goat_screaming | entity | settings | basic | screams: enum | Козлами |  | false | false | Встановлює тег "кричущий" козлу. |
| Установить гравитацию | entity_set_gravity | entity | movement | basic | gravity: enum |  |  | false | false | Устанавливает, будет ли сущность подчиняться гравитации. |
| Встановити сторону блоку для підвішеної істоти | entity_set_hanging_facing_location | entity | settings | basic | facing: enum<br/>force: enum | Рамками<br/>Світними рамками<br/>Картинами | Картини не можуть бути розміщені зверху або знизу блоку. | false | false | Встановлює підвішеній істоті сторону блоку, на якій вона знаходиться. |
| Установить лошади сила прыжка | entity_set_horse_jump | entity | parameters | basic | power: number | Кіньми<br/>Ослами<br/>Мулами<br/>Ламами |  | false | false | Устанавливает лошади силу прыжка. |
| ENTITY_SET_HORSE_PATTERN | entity_set_horse_pattern | entity | appearance | basic | horse_color: enum<br/>horse_style: enum | Кіньми |  | false | false | ... |
| Встановити імунітет до зомбіфікації | entity_set_immune_to_zombification | entity | settings | basic | is_immune: enum | Пігліни<br/>Брутальними пігліни<br/>Хогліни |  | false | false | Встановлює істоті імунітет до зомбіфікації. |
| Встановити чутливість сутності взаємодії | entity_set_interaction_responsive | entity | settings | basic | responsive: enum |  |  | false | false | Встановлює, чи буде сутність взаємодії реагувати на взаємодії. |
| Встановити розмір сутності взаємодії | entity_set_interaction_size | entity | settings | basic | width: number<br/>height: number |  |  | false | false | Встановлює горизонтальний і вертикальний розміри сутності взаємодії. |
| Установить режим невидимости | entity_set_invisible | entity | settings | basic | invisible: enum |  |  | false | false | Устанавливает существу режим невидимости. |
| Установить длительность неуязвимости | entity_set_invulnerability_ticks | entity | parameters | basic | ticks: number |  |  | false | false | Устанавливает длительность неуязвимости для существа. |
| Установить неуязвимость сущности | entity_set_invulnerable | entity | settings | basic | invulnerable: enum |  |  | false | false | Устанавливает неуязвимости сущности, но в режиме креатива можно нанести урон. |
| Установить тип существу Предмет | entity_set_item | entity | miscellaneous | basic | item: item | Предметами |  | false | false | Устанавливает определённый тип (ID) существу Предмет. |
| Встановити відображуваний предмет | entity_set_item_display_item | entity | display_entity | basic | displayed_item: item | Візуалізаторами предмета |  | false | false | Встановлює відображуваний предмет візуалізатору предмета. |
| Встановити тип моделі предмета | entity_set_item_display_model_type | entity | display_entity | basic | display_model_type: enum | Візуалізаторами предмета |  | false | false | Встановлює тип відображуваної моделі предмета візуалізатору предмета. |
| Встановити шанс випадання предмета з рамки | entity_set_item_frame_item_drop_chance | entity | miscellaneous | basic | drop_chance: number | Рамками<br/>Світними рамками |  | false | false | Встановлює шанс випадання предмета з рамки при руйнуванні. |
| Установить предмет в рамку | entity_set_item_in_frame | entity | appearance | basic | item: item<br/>play_sound: enum | Рамками |  | false | false | Устанавливает указанный предмет в рамку. |
| ENTITY_SET_ITEM_OWNER | entity_set_item_owner | entity | settings | basic | name_or_uuid: text | Предметами |  | false | false | ... |
| Встановити колір лами | entity_set_llama_type | entity | appearance | basic | type: enum | Ламами |  | false | false | Встановлює колір лами. |
| Направить движение | entity_set_location | entity | movement | basic | velocity: vector<br/>increment: enum |  |  | false | false | Направляет движение существа в направлении вектора с определённой силой. |
| Встановити опис манекена | entity_set_mannequin_description | entity | appearance | basic | description: text | Манекенами |  | false | false | Встановлює опис манекена. |
| Встановити пересування манекена | entity_set_mannequin_immovable | entity | settings | basic | immovable: enum | Манекенами |  | false | false | Встановлює можливість пересування для манекена. |
| Встановити провідну руку манекена | entity_set_mannequin_main_hand | entity | appearance | basic | hand: enum | Манекенами |  | false | false | Встановлює провідну руку манекена. |
| Встановити скін манекена | entity_set_mannequin_skin | entity | appearance | basic | name_or_uuid: text<br/>server_type: enum | Манекенами |  | false | false | Встановлює скін манекена. |
| Встановити тип моделі манекена | entity_set_mannequin_skin_model | entity | appearance | basic | model: enum | Манекенами |  | false | false | Встановлює тип моделі скіна манекена |
| Встановити шари скіна манекена | entity_set_mannequin_skin_parts | entity | appearance | basic | hat: enum<br/>jacket: enum<br/>left_sleeve: enum<br/>right_sleeve: enum<br/>left_pants: enum<br/>right_pants: enum<br/>cape: enum | Манекенами |  | false | false | Встановлює відображення шарів скіна манекена. |
| Встановити текстуру частини манекена | entity_set_mannequin_skin_patch | entity | appearance | basic | texture_key: text<br/>patch_target: enum | Манекенами | Якщо не вказати аргумент "Ключ текстури", буде застосована текстура за замовчуванням. | false | false | Встановлює текстуру для вказаної частини манекена. |
| Установить режим маркера | entity_set_marker | entity | settings | basic | marker: enum | Підставками для броні |  | false | false | Устанавливает режим маркера стойке для брони. |
| Установить максимальное здоровье существа | entity_set_max_health | entity | parameters | basic | max_health: number<br/>heal_to_max: enum |  |  | false | false | Устанавливает максимальное количество здоровья для существа. |
| Встановити максимальну тривалість невразливості | entity_set_max_invulnerability_ticks | entity | parameters | basic | ticks: number |  |  | false | false | Встановлює максимальну тривалість невразливості для істоти. |
| Встановити товар Жителю | entity_set_merchant_recipe | entity | settings | basic | result: item<br/>ingredient_one: item<br/>ingredient_two: item<br/>index: number<br/>mode: enum<br/>uses: number<br/>max_uses: number<br/>villager_experience: number<br/>price_multiplifier: number<br/>demand: number<br/>special_price: number<br/>ignore_discounts: enum<br/>experience_reward: enum | Жителями<br/>Мандрівними торговцями |  | false | false | Встановлює товар Жителю за певні предмети за вказаним індексом. |
| Установить блок в вагонетку | entity_set_minecart_block | entity | appearance | basic | block: block<br/>block_offset: number | Вагонетками |  | false | false | Устанавливает указанный блок в вагонетку. |
| Встановити агресивність | entity_set_mob_aggressive | entity | appearance | basic | aggressive: enum |  |  | false | false | Встановлює агресивність сутності. |
| Встановити тип грибної корови | entity_set_mushroom_cow_type | entity | appearance | basic | cow_type: enum | Грибними коровами |  | false | false | Встановлює тип грибної корови. |
| Встановити фізику для істоти | entity_set_no_physics | entity | settings | basic | no_physics: enum |  |  | false | false | Встановлює істоті фізику. |
| Встановити малюнок картини | entity_set_painting_art | entity | miscellaneous | basic | art: text<br/>force: enum | Картинами |  | false | false | Встановлює малюнок для картини. |
| Установить ген панды | entity_set_panda_gene | entity | settings | basic | gene: enum<br/>gene_type: enum | Пандами |  | false | false | Устанавливает ген панды. Это влияет на их поведение и внешний вид. |
| Посадити панду | entity_set_panda_on_back | entity | settings | basic | on_back: enum | Пандами |  | false | false | Встановлює Панді стан сидіння. |
| Встановити Панді стан перекату | entity_set_panda_rolling | entity | goals | basic | rolling: enum | Пандами |  | false | false | Встановлює Панді стан перекату. |
| Встановити час суму Панди | entity_set_panda_sad_ticks | entity | parameters | basic | sad_ticks: number | Пандами |  | false | false | Встановлює час суму Панди в тіках. |
| Встановити тип папуги | entity_set_parrot_type | entity | appearance | basic | parrot_type: enum | Папугами |  | false | false | Встановлює тип папуги. |
| Налаштувати пошук шляху | entity_set_pathfinder_settings | entity | goals | basic | can_float: enum<br/>can_open_door: enum<br/>can_pass_door: enum | Моби |  | false | false | Встановлює параметри та обмеження для пошуку шляху сутності |
| Установить исчезание существа | entity_set_persistence | entity | settings | basic | persistence: enum | Предметами<br/>Падающими блоками |  | false | false | Устанавливает, будет ли предмет или падающий блок исчезать. |
| Встановити збереження істоти | entity_set_persistent | entity | settings | basic | persistent: enum |  |  | false | false | Встановлює стан істоти: чи буде вона збережена після вивантаження світу. |
| Встановити можливість підбору | entity_set_pickup | entity | settings | basic | can_mob_pickup: enum<br/>can_player_pickup: enum | Сутностями предметів |  | false | false | Встановлює сутності можливість підбору. |
| Установить задержку для поднятия | entity_set_pickup_delay | entity | parameters | basic | delay: number | Предметами |  | false | false | Устанавливает количество тиков, за которое предмет не может быть поднят. |
| Встановити тип Свині | entity_set_pig_type | entity | appearance | basic | variant: enum | Свинями |  | false | false | Встановлює свині тип забарвлення. |
| Встановити стан полювання | entity_set_piglin_able_to_hunt | entity | goals | basic | able: enum | Піґлінами |  | false | false | Встановлює піґліну стан полювання на хоґлінів. |
| Встановити стан зарядки арбалета | entity_set_piglin_charging_crossbow | entity | goals | basic | charging: enum | Піґлінами |  | false | false | Встановлює піґліну стан зарядки арбалета. |
| Встановити стадію танцю | entity_set_piglin_dancing | entity | goals | basic | dancing_time: number | Піґлінами | Якщо значення тривалості менше 0, танець тривати безкінечно. | false | false | Встановлює піґліну стадію танцю на вказаний час. |
| Встановити позу істоти | entity_set_pose | entity | appearance | basic | pose: enum |  |  | false | false | Встановлює певну позу істоті. |
| Установить радиус облака эффекта | entity_set_potion_cloud_radius | entity | parameters | basic | radius: number<br/>shrinking_speed: number | Хмарою ефекту |  | false | false | Устанавливает радиус облака эффекта и скорость его расширения. |
| Замаскувати підпалений динаміт під блок | entity_set_primed_tnt_block | entity | appearance | basic | block: block | Підпаленим динамітом |  | false | false | Маскує підпалений динаміт під вказаний блок. |
| Установить предмет снаряда | entity_set_projectile_display_item | entity | appearance | basic | item: item |  |  | false | false | Устанавливает видимый предмет снаряду. |
| Встановити снаряду вектор руху | entity_set_projectile_power | entity | parameters | basic | power: vector | Вогняними кулями<br/>Зарядами дракона<br/>Головами Іссушувача |  | false | false | Встановлює снаряду вектор руху. |
| Установить стрелка снаряду | entity_set_projectile_shooter | entity | settings | basic | uuid: text |  |  | false | false | Устанавливает указанное существо как стрелка для снаряда. |
| ENTITY_SET_RABBIT_TYPE | entity_set_rabbit_type | entity | appearance | basic | rabbit_type: enum | Кроликами |  | false | false | ... |
| Установить позу лошади | entity_set_rearing | entity | settings | basic | rearing: enum | Кіньми |  | false | false | Устанавливает, будет ли лошадь стоять на задних ногах. |
| Установить анимацию Тягун | entity_set_riptiding | entity | settings | basic | riptiding: enum |  |  | false | false | Устанавливает существу анимацию использования зачарования трезубца Тягун. |
| Повернуть существо | entity_set_rotation | entity | movement | basic | yaw: number<br/>pitch: number |  |  | false | false | Поворачивает существо. |
| Встановити поворот за вектором | entity_set_rotation_by_vector | entity | movement | basic | vector: vector |  |  | false | false | Встановлює поворот істоти за вектором. |
| Установить шерсть овце | entity_set_sheep_sheared | entity |  | basic | sheared: enum |  |  | true | false | Устанавливает, будет ли шерсть на овце. |
| Встановити ціль снаряду Шалкера | entity_set_shulker_bullet_target | entity | goals | basic | target: text | Снарядами Шалкера |  | false | false | Встановлює ціль атаки снаряду Шалкера. |
| Встановити відсоток відкриття шалкера | entity_set_shulker_peek | entity | appearance | basic | rolling: number<br/>silent: enum | Шалкерами |  | false | false | Встановлює шалкеру відсоток, на який він відкритий. |
| Заглушить сущность | entity_set_silenced | entity | settings | basic | silenced: enum |  |  | false | false | Убирает звуки сущности. |
| Установить режим сидения | entity_set_sitting | entity | settings | basic | sitting: enum | Вовками<br/>Котами<br/>Папугами<br/>Лисами<br/>Пандами |  | false | false | Устанавливает существу режим сидения. |
| Установить размер существа | entity_set_size | entity | settings | basic | size: number | Слизнями<br/>Фантомами |  | false | false | Устанавливает размер существу. |
| Встановити стан нюхача | entity_set_sniffer_state | entity | settings | basic | state: enum | Нюхачами |  | false | false | Встановлює певний стан нюхачу. |
| ENTITY_SET_SNOWMAN_PUMPKIN | entity_set_snowman_pumpkin | entity | appearance | basic | pumpkin: enum | Сніговими големами |  | false | false | ... |
| Приручить существо | entity_set_tame | entity | settings | basic | name_or_uuid: text | Вовками<br/>Котами<br/>Кіньми<br/>Мулами<br/>Ламами<br/>Папугами |  | false | false | Устанавливает привязанность существа к указанному хозяину. |
| Установить цель существу | entity_set_target | entity | goals | basic | name_or_uuid: text | Мобами | Залиште порожній слот у полі Текст, щоб прибрати ціль. | false | false | Инструктирует ИИ существа нацеливаться на определенное существо. |
| Встановити вирівнювання тексту | entity_set_text_display_alignment | entity | display_entity | basic | text_alignment: enum | Візуалізаторами тексту |  | false | false | Встановлює вирівнювання тексту візуалізатору тексту. |
| Встановити колір фону | entity_set_text_display_background | entity | display_entity | basic | color_hexadecimal: text<br/>opacity: number | Візуалізаторами тексту |  | false | false | Встановлює колір і прозорість фону візуалізатору тексту. |
| Встановити ширину рядка | entity_set_text_display_line_width | entity | display_entity | basic | line_width: number | Візуалізаторами тексту |  | false | false | Встановлює максимальну ширину рядка візуалізатору тексту. |
| Встановити прозорість тексту | entity_set_text_display_opacity | entity | display_entity | basic | text_opacity: number | Візуалізаторами тексту |  | false | false | Встановлює прозорість тексту візуалізатору тексту. |
| Встановити видимість крізь блоки | entity_set_text_display_see_through | entity | display_entity | basic | enable_see_through: enum | Візуалізаторами тексту |  | false | false | Встановлює видимість тексту крізь блоки візуалізатору тексту. |
| Встановити відображуваний текст | entity_set_text_display_text | entity | display_entity | basic | displayed_text: text<br/>merging_mode: enum | Візуалізаторами тексту |  | false | false | Встановлює відображуваний текст візуалізатору тексту. |
| Встановити тінь тексту | entity_set_text_display_text_shadow | entity | display_entity | basic | enable_text_shadow: enum | Візуалізаторами тексту |  | false | false | Встановлює видимість тіні тексту візуалізатору тексту. |
| Встановити узор риби | entity_set_tropical_fish_pattern | entity | appearance | basic | pattern_color: enum<br/>body_color: enum<br/>pattern: enum | Тропічною рибою |  | false | false | Встановлює забарвлення та узор тропічній рибі. |
| Встановити Шкіднику злість | entity_set_vex_charging | entity | goals | basic | charging: enum | Шкідниками |  | false | false | Встановлює Шкіднику стадію злості. |
| Встановити час життя Шкідника | entity_set_vex_limited_lifetime_ticks | entity | parameters | basic | lifetime: number | Шкідниками |  | false | false | Встановлює час життя Шкідника у тіках. |
| ENTITY_SET_VILLAGER_BIOME | entity_set_villager_biome | entity | appearance | basic | biome: enum | Жителями |  | false | false | ... |
| Установить опыт жителю | entity_set_villager_experience | entity | parameters | basic | experience: number | Жителями |  | false | false | Устанавливает жителю количество опыта. |
| Установить профессию жителю | entity_set_villager_profession | entity | settings | basic | profession: enum | Жителями<br/>Зомбі-жителями |  | false | false | Устанавливает определённую профессию жителю. |
| Відображати вогонь | entity_set_visual_fire | entity | appearance | basic | visual_fire: enum |  |  | false | false | Відображає вогонь на істоті. |
| Встановити рівень гніву Вартового | entity_set_warden_anger_level | entity | parameters | basic | name_or_uuid: text<br/>anger: number | Вартовими | Якщо рівень гніву на сутність досягає 80, Вартовий починає активно переслідувати її. | false | false | Встановлює певний рівень гніву Вартового на вказану істоту. |
| Встановити Вардену тип копання | entity_set_warden_digging | entity | miscellaneous | basic | digging: enum | Варденом |  | false | false | Встановлює Вардену тип копання. |
| Встановити колір значка на локаторі | entity_set_waypoint_color | entity | settings | basic | red: number<br/>green: number<br/>blue: number | Мобами | Для роботи дії, ігрове правило "Видимість локатора" має бути увімкнено. | false | false | Встановлює істоті колір значка, що відображається на локаторі. |
| Встановити стиль значка на локаторі | entity_set_waypoint_style | entity | settings | basic | style: text | Мобами |  | false | false | Встановлює істоті стиль значка, що відображається на локаторі. |
| Установить видимость седла | entity_set_wearing_saddle | entity | settings | basic | wearing: enum | Свинями<br/>Кіньми<br/>Лавоходами |  | false | false | Устанавливает существу седло. |
| Установить неуязвимость иссушителю | entity_set_wither_invulnerability_ticks | entity | parameters | basic | ticks: number | Іссушувачем |  | false | false | Устанавливает длительность неуязвимости иссушителю. |
| Встановити звук Вовка | entity_set_wolf_sound_variant | entity | settings | basic | sound_variant: enum | Вовками |  | false | false | Встановлює тип звуків, що видаються, вовку. |
| Встановити тип вовка | entity_set_wolf_type | entity | appearance | basic | wolf_type: enum | Вовками |  | false | false | Встановлює тип вовка. |
| Встановити підняття рук зомбі | entity_set_zombie_arms_raised | entity |  | basic | arms_raised: enum |  |  | true | false | Встановлює анімацію підняття рук для зомбі. |
| Встановити тип зомбі-наутилуса | entity_set_zombie_nautilus_variant | entity | appearance | basic | variant: enum | Зомбі-наутилусами |  | false | false | Встановлює тип зомбі-наутилуса. |
| Підстригти істоту | entity_shear | entity | miscellaneous | basic |  | Вівцями<br/>Грибними коровами<br/>Болотником<br/>Сніговиками |  | false | false | Підстригає істоту. |
| Подстричь овцу | entity_shear_sheep | entity |  | basic |  |  |  | true | false | Подстригает овцу. |
| Установить анимацию сна | entity_sleep | entity | goals | basic | sleep: enum | Лисицями |  | false | false | Устанавливает существу анимацию сна. |
| Програти анімацію змаху руки | entity_swing_hand | entity | appearance | basic | hand_type: enum |  |  | false | false | Програє для істоти анімацію змаху руки. |
| Телепортация | entity_teleport | entity | movement | basic | location: location<br/>keep_rotation: enum |  |  | false | false | Телепортирует существо в выбранное местоположение. |
| Використати предмет | entity_use_item | entity | goals | basic | hand: enum<br/>enable: enum | Мобами |  | false | false | Інструктує ШІ істоти на використання предмета в її руці. |
| Стикається на місцезнаходженні | if_entity_collides_at_location | if_entity |  | container | location: location |  |  | false | false | Перевіряє, чи стикається істота з блоками, шалкерами, човнами та межею світу на вказаному місцезнаходженні. |
| Стикається використовуючи кастомний хітбокс | if_entity_collides_using_hitbox | if_entity |  | container | min: location<br/>max: location |  |  | false | false | Перевіряє, чи стикається істота з блоками, шалкерами, човнами та межею світу використовуючи кастомний хітбокс. |
| Стикається з істотою | if_entity_collides_with_entity | if_entity |  | container | name_or_uuid: text<br/>check_type: enum |  |  | false | false | Перевіряє, чи стикається хітбокс істоти з хітбоксом іншої вказаної істоти. |
| Существует | if_entity_exists | if_entity |  | container |  |  |  | false | false | Проверяет, находится ли существо в мире. |
| Має доступний шлях | if_entity_has_available_path | if_entity |  | container |  |  |  | false | false | Перевіряє, чи може сутність побудувати шлях до вказаної точки або цілі |
| Имеет кастомный тег | if_entity_has_custom_tag | if_entity |  | container | tag: text<br/>tag_value: text<br/>compare_type: enum |  |  | false | false | Проверяет, имеет ли существо кастомный тег с указанным значением. |
| Имеет эффект от зелья | if_entity_has_potion_effect | if_entity |  | container | potions: potion<br/>check_mode: enum |  |  | false | false | Проверяет, имеет ли существо эффект от зелья. |
| Всередині регіону | if_entity_in_area | if_entity |  | container | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum |  |  | false | false | Перевіряє, чи знаходиться істота в певному регіоні. |
| Замаскована | if_entity_is_disguised | if_entity |  | container |  |  |  | false | false | Перевіряє, чи замаскована істота. |
| Касается поверхности блока | if_entity_is_grounded | if_entity |  | container |  |  |  | false | false | Проверяет, касается ли существо поверхности блока. |
| Является предметом | if_entity_is_item | if_entity |  | container |  |  |  | false | false | Проверяет, является ли существо предметом. |
| Має Minecraft-тег | if_entity_is_minecraft_tagged | if_entity |  | container | namespace: text |  | Minecraft-тег має починатися з "#minecraft:" | false | false | Перевіряє, чи має істота вказаний Minecraft-тег (наприклад, "aquatic"). |
| Является мобом | if_entity_is_mob | if_entity |  | container |  |  |  | false | false | Проверяет, является ли существо мобом. |
| Рядом с местоположением | if_entity_is_near_location | if_entity |  | container | ignore_y_axis: enum<br/>location: location<br/>range: number |  |  | false | false | Проверяет, находится ли существо рядом с указанным местоположением. |
| Является снарядом | if_entity_is_projectile | if_entity |  | container |  |  |  | false | false | Проверяет, является ли существо снарядом. |
| Сущность оседлала сущность | if_entity_is_riding_entity | if_entity |  | container | entity_ids: text<br/>compare_mode: enum |  |  | false | false | Проверяет, оседлала ли сущность любую из других указанных сущностей. |
| Стоит на блоке | if_entity_is_standing_on_block | if_entity |  | container | blocks: block<br/>locations: location<br/>only_solid: enum |  |  | false | false | Проверяет, стоит ли сущность на блоке определенном блоке или местоположении. |
| Тип существа равен | if_entity_is_type | if_entity |  | container | entity_types: item |  |  | false | false | Проверяет, равен ли тип существа типу в сундуке. |
| Є нежиттю | if_entity_is_undead | if_entity |  | container |  |  |  | false | false | Перевіряє, чи є істота нежиттю. |
| Является транспортом | if_entity_is_vehicle | if_entity |  | container |  |  |  | false | false | Проверяет, является ли существо транспортом. |
| Имя равно | if_entity_name_equals | if_entity |  | container | names_or_uuids: text |  |  | false | false | Проверяет, равно ли имя существа имени в сундуке. |
| Причина появления равна | if_entity_spawn_reason_equals | if_entity |  | container | reason: enum |  |  | false | false | Проверяет, равна ли причина появления существа определённому значению. |
