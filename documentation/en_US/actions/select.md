# Select actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Add All Entities | select_add_all_entities | select | add |  | Adds all entities to the selection. |
| Add All Mobs | select_add_all_mobs | select | add |  | Adds all mobs to the selection. |
| Add All Players | select_add_all_players | select | add |  | Adds all players to the selection. |
| Add Entity By Conditional | select_add_entity_by_conditional | select | add |  | Adds entities to the selection by a condition. |
| Add Entity By Name/UUID | select_add_entity_by_name | select | add | name_or_uuid: text | Adds an entity by name/UUID to the selection. |
| Add Event Target | select_add_event_target | select | add | selection_type: enum | Adds an event target to the selection |
| Add Last Entity | select_add_last_entity | select | add |  | Adds the last entity to the selection. |
| Add Last Mob | select_add_last_mob | select | add |  | Adds the last mob to the selection. |
| Add Mob By Name/UUID | select_add_mob_by_name | select | add | name_or_uuid: text | Adds a mob by name/UUID to the selection. |
| Add Player By Conditional | select_add_player_by_conditional | select | add |  | Adds players to the selection by a condition. |
| Add Player By Name/UUID | select_add_player_by_name | select | add | name_or_uuid: text | Adds a player by name/UUID to the selection. |
| Add Random Entity | select_add_random_entity | select | add |  | Adds a random entity to the selection. |
| Add Random Mob | select_add_random_mob | select | add |  | Adds a random mob to the selection. |
| Add Random Player | select_add_random_player | select | add |  | Adds a random player to the selection. |
| Select All Entities | select_all_entities | select | creation |  | Selects all entities in the world. |
| Select All Mobs | select_all_mobs | select | creation |  | Selects all mobs in the world. |
| Select All Players | select_all_players | select | creation |  | Selects all players in the world. |
| Select Entity By Condition | select_entity_by_conditional | select | creation |  | Selects entities if the specified condition is met. |
| Select Entity By Name | select_entity_by_name | select | creation | name_or_uuid: text | Selects an entity or entities by name or UUID. |
| Select Event Target | select_event_target | select | creation | selection_type: enum | Selects the target that triggered the event. |
| Filter Selection By Condition | select_filter_by_conditional | select | filter |  | Keep the selection of targets that match the selected condition. |
| Filter Selection By Distance | select_filter_by_distance | select | filter | location: location<br/>selection_size: number<br/>ignore_y_axis: enum<br/>compare_mode: enum | Keep in the selection those targets that are at a distance from the location. |
| Filter By Raycast | select_filter_by_raycast | select | filter | variable: variable<br/>origin: location<br/>max_distance: number<br/>ray_size: number<br/>selection_size: number<br/>consider_blocks: enum<br/>ignore_passable_blocks: enum<br/>fluid_collision_mode: enum | Keep only the targets hit by the launched beam in the selection. Beamwidth only works on entities (increases or decreases creature hitboxes). |
| Filter Selection Randomly | select_filter_randomly | select | filter | size: number | Selects a random number of targets in the selection. |
| Invert Selection | select_invert | select | creation |  | Creates a new selection that includes all creatures except the selected ones. |
| Select Last Spawned Entity | select_last_entity | select | creation |  | Selects the last spawned entity in the world. |
| Select Last Spawned Mob | select_last_mob | select | creation |  | Selects the last mob that spawned in the world. |
| Select Mob By Name | select_mob_by_name | select | creation | name_or_uuid: text | Selects a mob or mobs by name or UUID. |
| Select Player By Condition | select_player_by_conditional | select | creation |  | Selects players if the specified condition is met. |
| Select Player By Name | select_player_by_name | select | creation | name_or_uuid: text | Selects a player or players by name or UUID. |
| Select Random Entity | select_random_entity | select | creation |  | Selects a random entity in the world. |
| Select Random Mob | select_random_mob | select | creation |  | Selects a random mob in the world. |
| Select Random Player | select_random_player | select | creation |  | Selects a random player in the world. |
| Reset Selection | select_reset | select | creation |  | Resets the entire selection. |
