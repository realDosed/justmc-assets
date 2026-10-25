# Select actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Add All Entities | select_add_all_entities | select | add | basic |  |  |  | false | false | Adds all entities to the selection. |
| Add All Mobs | select_add_all_mobs | select | add | basic |  |  |  | false | false | Adds all mobs to the selection. |
| Add All Players | select_add_all_players | select | add | basic |  |  |  | false | false | Adds all players to the selection. |
| Add Entity By Conditional | select_add_entity_by_conditional | select | add | basic_with_conditional |  |  |  | false | false | Adds entities to the selection by a condition. |
| Add Entity By Name/UUID | select_add_entity_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Adds an entity by name/UUID to the selection. |
| Add Event Target | select_add_event_target | select | add | basic | selection_type: enum |  |  | false | false | Adds an event target to the selection |
| Add Last Entity | select_add_last_entity | select | add | basic |  |  |  | false | false | Adds the last entity to the selection. |
| Add Last Mob | select_add_last_mob | select | add | basic |  |  |  | false | false | Adds the last mob to the selection. |
| Add Mob By Name/UUID | select_add_mob_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Adds a mob by name/UUID to the selection. |
| Add Player By Conditional | select_add_player_by_conditional | select | add | basic_with_conditional |  |  |  | false | false | Adds players to the selection by a condition. |
| Add Player By Name/UUID | select_add_player_by_name | select | add | basic | name_or_uuid: text |  |  | false | false | Adds a player by name/UUID to the selection. |
| Add Random Entity | select_add_random_entity | select | add | basic |  |  |  | false | false | Adds a random entity to the selection. |
| Add Random Mob | select_add_random_mob | select | add | basic |  |  |  | false | false | Adds a random mob to the selection. |
| Add Random Player | select_add_random_player | select | add | basic |  |  |  | false | false | Adds a random player to the selection. |
| Select All Entities | select_all_entities | select | creation | basic |  |  |  | false | false | Selects all entities in the world. |
| Select All Mobs | select_all_mobs | select | creation | basic |  |  |  | false | false | Selects all mobs in the world. |
| Select All Players | select_all_players | select | creation | basic |  |  |  | false | false | Selects all players in the world. |
| Select Entity By Condition | select_entity_by_conditional | select | creation | basic_with_conditional |  |  |  | false | false | Selects entities if the specified condition is met. |
| Select Entity By Name | select_entity_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Selects an entity or entities by name or UUID. |
| Select Event Target | select_event_target | select | creation | basic | selection_type: enum |  |  | false | false | Selects the target that triggered the event. |
| Filter Selection By Condition | select_filter_by_conditional | select | filter | basic_with_conditional |  |  |  | false | false | Keep the selection of targets that match the selected condition. |
| Filter Selection By Distance | select_filter_by_distance | select | filter | basic | location: location<br/>selection_size: number<br/>ignore_y_axis: enum<br/>compare_mode: enum |  |  | false | false | Keep in the selection those targets that are at a distance from the location. |
| Filter By Raycast | select_filter_by_raycast | select | filter | basic | variable: variable<br/>origin: location<br/>max_distance: number<br/>ray_size: number<br/>selection_size: number<br/>consider_blocks: enum<br/>ignore_passable_blocks: enum<br/>fluid_collision_mode: enum |  |  | false | false | Keep only the targets hit by the launched beam in the selection. Beamwidth only works on entities (increases or decreases creature hitboxes). |
| Filter Selection Randomly | select_filter_randomly | select | filter | basic | size: number |  |  | false | false | Selects a random number of targets in the selection. |
| Invert Selection | select_invert | select | creation | basic |  |  |  | false | false | Creates a new selection that includes all creatures except the selected ones. |
| Select Last Spawned Entity | select_last_entity | select | creation | basic |  |  |  | false | false | Selects the last spawned entity in the world. |
| Select Last Spawned Mob | select_last_mob | select | creation | basic |  |  |  | false | false | Selects the last mob that spawned in the world. |
| Select Mob By Name | select_mob_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Selects a mob or mobs by name or UUID. |
| Select Player By Condition | select_player_by_conditional | select | creation | basic_with_conditional |  |  |  | false | false | Selects players if the specified condition is met. |
| Select Player By Name | select_player_by_name | select | creation | basic | name_or_uuid: text |  |  | false | false | Selects a player or players by name or UUID. |
| Select Random Entity | select_random_entity | select | creation | basic |  |  |  | false | false | Selects a random entity in the world. |
| Select Random Mob | select_random_mob | select | creation | basic |  |  |  | false | false | Selects a random mob in the world. |
| Select Random Player | select_random_player | select | creation | basic |  |  |  | false | false | Selects a random player in the world. |
| Reset Selection | select_reset | select | creation | basic |  |  |  | false | false | Resets the entire selection. |
