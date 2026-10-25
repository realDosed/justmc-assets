# Game values

| Name | ID | Type | Selector | Description |
| --- | --- | --- | --- | --- |
| Additional Health | absorption_health | number | entity | Gets the target's absorption (gold) health. |
| Item usage time | active_item_used_time | number | entity | Gets the current usage time of the item held in the hand. |
| Target Age | age | number | entity | Gets the target's age in ticks. |
| All Entity Names | all_entities_names | array |  | Gets the names of all entities in the world. |
| All Entity UUIDs | all_entities_uuids | array |  | Gets the UUIDs of all entities in the world. |
| All Player Names | all_players_names | array |  | Gets the names of all players in the world. |
| All Player UUIDs | all_players_uuids | array |  | Gets the UUIDs of all players in the world. |
| Anticheat Check | anticheat_check | text |  | Gets the name of the anticheat check that flagged the player. |
| Anticheat Violations | anticheat_violations | number |  | Gets the number of anticheat check violations the player has. |
| Armor Items | armor_items | array | entity | Gets items in the target's armor slots. |
| Defense Points | armor_points | number | entity | Gets the target's armor, which can be modified by items. |
| Armor Hardness | armor_toughness | number | entity | Gets the target's armor hardness, which can be modified with items. |
| Number of Arrows In Body | arrows_in_body | number | entity | Gets the number of arrows in the target's body. |
| Attached Leads | attached_leads | array | entity | Gets the UUID of the entities that are attached to the target with a lead. |
| Attack Cooldown Strength | attack_cooldown_strength | number | entity | Gets the attack cooldown strength multiplier (How much of your base attack damage is nullified by your attack cooldown) |
| Attack Cooldown in Ticks | attack_cooldown_ticks | number | entity | Gets the current attack cooldown of the target, measured in ticks. |
| Attack Damage | attack_damage | number | entity | Gives the target's attack damage, modifiable by items. |
| Attack Speed | attack_speed | number | entity | Gets the target's attack speed, which can be modified by items. |
| Block Location Under Target | block_beneath | location | entity | Gets the location of the block supporting the target. |
| Block Locations Under Target | blocks_beneath | array | entity | Gets the location of all blocks supporting the target. |
| Body rotation | body_yaw | number | entity | Gets rotation of target's body. |
| Cape Location | cape_location | location | entity | Gets the location of a player's cape. |
| Cardinal Direction | cardinal_direction | text | entity | Gets the cardinal direction (north, west, south, east) of the target. |
| Chat Visibility | chat_visibility | text | entity | Gets the player's chat visibility status, defined in their game settings. |
| Player Client Name | client_brand_name | text | entity | Gets the name of the player's client. |
| Player Render Distance | client_view_distance | number | entity | Gets the render distance of the player, as set in the game's settings. |
| Player Client Locale | clientside_locale | text | entity | Gets the player's client locale. |
| CPU Usage Percentage | cpu_usage | number |  | Gets the percentage of the world's CPU utilization on the server. |
| Emerald Transaction Amount | currency_transaction_amount | text |  | Gets the number of emeralds spent in the transaction. |
| Transaction Request Reason | currency_transaction_reason | text |  | Gets the reason for the emerald transaction request. |
| Transaction Result | currency_transaction_result | text |  | Gets the result of the completed transaction. |
| Current Health | current_health | number | entity | Gets the target's remaining health. |
| Current Pressed Movement Keys | current_input_list | array | entity | Gets the currently pressed movement keys. |
| Cursor Item | cursor_item | item | entity | Gets the item at the target cursor (used when moving inventory items). |
| List of items in open inventory | custom_inventory_items | array | player | Returns a list containing the items that are in the currently open inventory menu. |
| Score Count | death_screen_score | number | entity | Gets the score displayed on the death screen. |
| Current world freeze time | delay_reload_count | number |  | Gets the current time for which the world is frozen. |
| View Vector | direction_of_view | vector | entity | Get the direction vector of the target's view. |
| Display Entity Left Rotation | display_entity_left_rotation | vector | entity | Gets a display entity's rotation to the left as a vector. |
| Display Entity Right Rotation | display_entity_right_rotation | vector | entity | Gets a display entity's rotation to the right as a vector. |
| Display Entity Scale | display_entity_scale | vector | entity | Gets the scale of a display entity as a vector. |
| Display Entity Offset | display_entity_translation | vector | entity | Gets the offset of a display entity as a vector. |
| Display Name | display_name | text | entity | Gets the target's display name. |
| Current Enchantment Seed | enchantment_seed | number | entity | Gets the player's current enchantment seed. |
| Entity Fuse Time | entity_fuse_ticks | number | entity | Gets the entity's time before it explodes. |
| Hitbox Height | entity_height | number | entity | Gets the height of the target's hitbox. |
| Entity Item | entity_item | item | entity | Gets the object form of the target. |
| Path point index | entity_pathfinder_point_index | number | entity | Gets the current path point index the mob is moving along. |
| Current path | entity_pathfinder_points | array | entity | Gets a list of all points that make up the current path of the mob. |
| Entity Pick Item | entity_pick_item_stack | item | entity | Gets the item obtained by middle-clicking (MMB) on the entity. |
| Target Lifetime | entity_ticks_lived | number | entity | Gets the number of ticks the entity has been alive. |
| Entity Type | entity_type | text | entity | Gets the entity type of the target. |
| Hitbox X Size | entity_width_x | number | entity | Gets the size of the target's hitbox in the x-axis. |
| Hitbox Z Size | entity_width_z | number | entity | Gets the size of the target's hitbox in the z-axis. |
| Distributed Items | event_added_items | map |  | Produces a dictionary of slotted items with LMB/RMB or duplication with mouse wheel. |
| Event Advancement Tab Name | event_advancement_tab_name | text |  | The name of the current opened advancements tab. |
| New Anvil Damage State | event_anvil_damage_state | text |  | Gets the new damage state of the anvil. |
| Anvil Rename Input | event_anvil_rename_input | text |  | Gets the new name of the item in an anvil. |
| Event Block | event_block | text |  | Gets the ID of the block associated with the event. |
| Block Break Progress | event_block_break_progress | number |  | Gets the block break progress associated with the event. |
| Event Block Face | event_block_face | text |  | Gets as directions the side of the block that was hit by the event. |
| Event Block Location | event_block_location | location |  | Gets the location of the block in the event. |
| Involved Event Blocks | event_blocks_involved | array |  | Gets a list of the locations of all enabled blocks in the event. |
| Chat Message | event_chat_message | text |  | Receives the message sent by the target in the event. |
| Inventory close reason | event_close_inventory_cause | text |  | Gets the reason for closing the target's open inventory in an event. |
| Entity Combust Duration | event_combust_duration | number |  | Gets the duration an entity burns from the event. |
| Entity Combust Reason | event_combust_reason | text |  | Gets the reason an entity caught fire from the event. |
| Dialog Menu Data | event_custom_click_dialog_view_data | any |  | Gets the data entered by the player in the dialog menu. |
| Custom Click ID | event_custom_click_key | text |  | Gets the identifier of the custom click in the dialog menu or chat. |
| Damage Dealt | event_damage | number |  | Gets the amount of damage dealt in an event. |
| Cause of Damage Received | event_damage_cause | text |  | Gets the cause or type of damage taken in an event. |
| Death Screen Message | event_death_screen_message | text |  | Gets the message displayed on the death screen. |
| Inventory Drag Type | event_drag_type | text |  | Gets the drag type of items over the target's open inventory in the event. |
| Bookshelf Count | event_enchantment_bonus | number |  | Gets the number of bookshelves associated with the event. |
| Suggested Enchantment | event_enchantment_hint | text |  | Gets the name of the suggested enchantment in the enchanting table. |
| Required Enchantment Experience Level | event_enchantment_level_hint | number |  | Gets the required experience level for the selected enchantment. |
| Event Enchantment Offers | event_enchantment_offers | array |  | Gets the list of enchantments offered to the player associated with the event. |
| Applied Enchantments | event_enchantments_to_add | map |  | Gets a map of enchantments applied to the item. |
| Entity Unleash Reason | event_entity_unleash_reason | text |  | Gets the reason why the entity was unleashed. |
| Event Slot Type | event_equipment_slot | text |  | Gets the type of the equipped slot of the target in the event. |
| Exhaustion Amount | event_exhaustion_amount | number |  | Gets the amount of exhaustion received. |
| Exhaustion Reason | event_exhaustion_reason | text |  | Gets the reason for the exhaustion |
| Amount of Event Experience | event_experience | number |  | Gets the number of experience points in an event. |
| Reason for failed move | event_fail_move_reason | text |  | Gets the reason for a failed move |
| Final Damage | event_final_damage | number |  | Gets the final damage dealt in the event. |
| Fishing Event Reason | event_fish_state | text |  | Gets the reason for the fishing event. |
| Event Hunger Replenished | event_food_level | number |  | Get the number of hunger points replenished. |
| Previous Location | event_from_location | location |  | Previous location of the player |
| Event Game Mode | event_gamemode | text |  | Gets the game mode associated with the event. |
| Reason for Hanging Entity Removal | event_hanging_break_cause | text |  | Gets the reason for removing a hanging entity (painting, frame). |
| Health Restored Amount | event_heal_amount | number |  | Gets the amount of health restored in an event. |
| Healing Cause | event_heal_cause | text |  | Gets the reason for the event's health recovery. |
| Event Hotbar Slot | event_hotbar_slot | number |  | Gets the current hotbar slot number in the event. |
| List of Pressed Movement Keys | event_input_list | array |  | Gets the list of pressed movement keys from the event. |
| Event Interaction Type | event_interaction | text |  | Gets the interaction type of the target in the event. |
| Inventory Action on Click | event_inventory_action | text |  | Gets the current action in the inventory menu when it is clicked. |
| Inventory Click Type | event_inventory_click_type | text |  | Gets the click type of the target's open inventory in the event. |
| Event Item | event_item | item |  | Receives an item in an event. |
| Event Item Cooldown | event_item_cooldown | number |  | Gets the item cooldown from the event. |
| Cooldown Item Group | event_item_cooldown_group | text |  | Gets the item group affected by the cooldown from the event. |
| Item Damage Dealt | event_item_damage | number |  | Gets the amount of damage dealt to the item. |
| Event Items | event_items | array |  | Gets all the items in the event. |
| Knockback Cause | event_knockback_cause | text |  | Gets the cause of the knockback of the event. |
| Knockback Type | event_knockback_event_type | text |  | Gets the type of knockback of the event. |
| Knockback Vector | event_knockback_vector | vector |  | Gets the vector of the motion of the knockback of the event. |
| Event Message | event_message | text |  | Receives the system message sent in an event. |
| Equipment | event_new_equipments | map |  | Gets the equipment from the event. |
| New Fishing Hook State | event_new_fishing_hook_state | text |  | Gets the new fishing hook state. |
| New Player Location | event_new_location | location |  | Gets the player's new location. |
| New potion effect | event_new_potion_effect | potion |  | Gets new potion effect of the event. |
| New Vault State | event_new_vault_state | text |  | Gets the new vault state. |
| Previous Event Equipment | event_old_equipments | map |  | Gets the previous equipment from the event. |
| creative_plus.game_value.event_old_item.name | event_old_item | item |  | creative_plus.game_value.event_old_item.description |
| Previous Vault State | event_old_vault_state | text |  | Gets the previous vault state. |
| Complete Power Percentage | event_power | number |  | Gets the percentage of execution power (bow draw, horse jump) of the event. |
| Event Projectile Item | event_projectile_item | item |  | Gets an event projectile item. |
| Debug Info | event_query_info | text |  | Gets the debug information of the target block or entity. |
| Event replaced block | event_replaced_block | text |  | Gets the ID of the replaced block. |
| Sign Lines | event_sign_lines | array |  | Gets the lines on a Sign as a list. |
| Sign Side | event_sign_side | text |  | Gets the side the text is on. |
| Event Slot | event_slot | number |  | Produces the slot number in the event. |
| Clicked Slot Type | event_slot_type | text |  | Gets the current slot type of the inventory menu when clicked. |
| Involved Slots | event_slots_involved | array |  | Gets a list of all enabled slots in the target's open inventory in the event. |
| Teleport Cause | event_teleport_cause | text |  | Gets the reason for teleporting in an event. |
| Item Use Ticks | event_ticks_held_for | number |  | Gets the number of ticks to use an item. |
| Number of Skip Time ticks | event_time_skip_amount | number |  | Gets the number of time skip ticks in the world. |
| Skip Time Reason | event_time_skip_reason | text |  | Gets the reason for skipping time in the world. |
| Entity transform reason | event_transform_reason | text |  | Gets the reason for the entity transformation. |
| Event transformed entities | event_transformed_entities | array |  | Get transformed entities of the event. |
| Tree Type | event_tree_type | text |  | Gets the type of tree in the event. |
| Velocity Vector | event_velocity | vector |  | Gets the velocity vector of the event. |
| Experience Level | experience_level | number | entity | Get the target's experience levels. |
| Experience Progress | experience_progress | number | entity | Gets the percentage progress of the target's current experience level. |
| Eye Location | eye_location | location | entity | Gets the location of the target at eye height. |
| Fall Distance | fall_distance | number | entity | Gets the target's fall distance in blocks. |
| Burning Time | fire_ticks | number | entity | Get the target's remaining fire ticks. |
| Flying Speed | flying_speed | number | entity | Gets the target's current flying speed (attribute). |
| Food Exhaustion | food_exhaustion | number | entity | Gets the target's food exhaustion level, which increases based on the player's actions. |
| Hunger Level | food_level | number | entity | Gets the target's remaining food. |
| Saturation Level | food_saturation | number | entity | Gets the target's food saturation based on the types of food eaten. |
| Freeze Time | freeze_ticks | number | entity | Get the target's current freeze time. |
| Game Mode | gamemode | text | entity | Gets the player's current game mode. |
| Choose Slot in Hot Bar | held_slot | number | entity | Gets the target's selected hotbar slot. |
| Hitbox Center | hitbox_midpoint_location | location | entity | Gets the location of the center of the target's hitbox. |
| Hotbar Items | hotbar_items | array | entity | Gets the items in the target's hotbar. |
| Idle Duration | idle_duration | number | entity | Gets the current idle duration of the player. |
| Inventory Items | inventory_items | array | entity | Gets the items in the target's inventory (including the hot bar). |
| Invulnerability Time | invulnerability_ticks | number | entity | Gets the target's remaining invulnerability ticks. |
| Item Usage Progress | item_usage_progress | number | entity | Gets the target's percentage progress on using an item in hand, such as food. |
| Last Damage Cause | last_damage_cause | text | entity | Gets the target's last damage cause. |
| Last Death Location | last_death_location | location | entity | Gets the location of the player's last death. |
| Lead Holder | lead_holder | text | entity | Gets the UUID of the entity that leads the target on the lead. |
| Location | location | location | entity | Gets the target's location. |
| Main Hand | main_hand | text | player | Get the player's main hand. |
| Main Hand Item | main_hand_item | item | entity | Gets the item in the target's main hand. |
| Max Health | max_health | number | entity | Gets the target's maximum health. |
| Total Invulnerability Ticks | max_invulnerability_ticks | number | entity | Gets the max amount of time the target can have invulnerability ticks for. |
| Merchant Recipe Count | merchant_recipe_count | number | entity | Gets the number of Merchant Recipe counts. |
| Name | name | text | entity | Gets the target's name. |
| Offhand Item | off_hand_item | item | entity | Gets the item in the target's secondary hand. |
| Open Inventory Custom ID | open_inventory_custom_id | text | entity | Gets the custom ID of the target's open inventory. |
| Opened Inventory Size | open_inventory_size | number | entity | Gets the size of the currently opened inventory. |
| Open Inventory Title | open_inventory_title | text | entity | Gets the title of the target's open inventory. |
| Open Inventory Type | open_inventory_type | text | entity | Get the target's open inventory type. |
| First Spawn Location | origin | location | both | Gets the location of the target's first appearance. |
| UUID of world owner | owner_uuid | text |  | Gets the UUID of the owner of the world. |
| Particle CPU Usage | particle_cpu_usage | number |  | Gets the percent of CPU usage caused by particles. |
| Particle Visibility | particle_visibility | text | entity | Gets the player's particle visibility setting value. |
| Passengers | passengers | array | entity | Gets the UUID of the entities that are traveling to the target. |
| Player Ping | ping | number | entity | Gets the latency between player and server in milliseconds. |
| Vertical Pitch | pitch | number | entity | Gets the vertical (up/down) pitch of the target. |
| Number of players in the world | player_count | number |  | Gets the number of players in the world. |
| Ender Pearl List | player_ender_pearls | array | entity | Gets the list of the player's in-flight ender pearls. |
| Ender Chest Items | player_enderchest_items | array | player | Gets the items in the target's Ender Chest. |
| Entity Pose | pose | text | entity | Gets the entity's pose. |
| Potion Effects | potion_effects | array | entity | Get the target's potion effects in effect. |
| Projectile Owner UUID | projectile_owner_uuid | text | entity | Gets the owner of the target projectile. |
| Projectile Motion Vector | projectile_power | vector | entity | Gets the motion vector of a projectile |
| Client Protocol Version | protocol_version | number | entity | Get the protocol version of the player's client. |
| Remaining Air | remaining_air | number | entity | Gets the target's remaining air ticks. |
| Web Request Response Headers | response_headers | map |  | Gets the headers of the response to the sent web request. |
| Saddle Item | saddle_item | item | entity | Gets the saddle or carpet equipped on the target. |
| Saturated Regeneration Rate | saturated_regen_rate | number | entity | Gets the player's health regeneration rate while saturated. |
| Number of Selected Targets | selection_size | number |  | Gets the number of targets in the selection. |
| Names of selected targets | selection_target_names | array |  | Gets the name of each target in the selection. |
| UUID of selected targets | selection_target_uuids | array |  | Gets the UUID of each target in the selection. |
| Server Current Time | server_current_tick | number |  | Gets the server's current time in ticks. |
| Server TPS | server_tps | number |  | Gets the number of Ticks Per Second (TPS) that the server can handle. |
| World Spawn Location | spawn_location | location |  | Gets the location of the world's spawn point. |
| Spawn Reason | spawn_reason | text | entity | Gets the reason for the target to spawn. |
| World freeze start time | start_reload_tick | number |  | Gets the world freeze start time in ticks. |
| Starvation Rate | starvation_rate | number | entity | Gets the starvation rate of the target. |
| Forward Vehicle Movement | steer_forward | number | entity | Gets the value of a vehicle moving forward or backward. |
| Sideways Vehicle Movement | steer_sideways | number | entity | Gets the value of the vehicle moving left or right. |
| Target Block Face | target_block_face | text | entity | Gets as the direction of the side of the block that the target is facing. |
| Target Block Location | target_block_location | location | entity | Gets the location of the block the target is looking at. |
| Target Fluid Location | target_fluid_location | location | entity | Gets the location of the fluid the target is looking at. |
| Attack Target | targeted_entity | text | entity | Gets the current target for the mob to attack. |
| UNIX time | timestamp | number |  | Gets the current time as a single number in milliseconds. |
| Unsaturated Regeneration Rate | unsaturated_regen_rate | number | entity | Gets the player's health regeneration rate while unsaturated. |
| Web Request Link | url | text |  | Gets the web request link. |
| Web Request Response | url_response | text |  | Receives the response to a sent web request. |
| Web Request Response Code | url_response_code | number |  | Gets the response code for a sent web request. |
| Player Client Language | user_locale | text | entity | Gets the current language of the player's client. |
| UUID | uuid | text | entity | Gets the universally unique identifier (UUID) of the target. |
| Vehicle | vehicle | text | entity | Gets the UUID of the entity the target is riding. |
| Velocity Vector | velocity | vector | entity | Gets the target's velocity vector (not walking, but external forces). |
| Walking Speed | walking_speed | number | entity | Gets the target's current walking speed (attribute). |
| World Clear Weather Duration | world_clear_weather_duration | number |  | Gets the current clear weather duration in the world. |
| World Existence Time | world_game_time | number |  | Gets the existence time of the world in ticks. |
| World ID | world_id | text |  | Gets the world ID. |
| Current Moon Phase | world_moon_phase | text |  | Gets the current moon phase in the world. |
| World Size | world_size | number |  | Gets the current world size. |
| World Rain Duration | world_thunder_duration | number |  | Gets the current rain duration in the world. |
| Current World Time | world_time | number |  | Gets the current world time in ticks. |
| Current world weather | world_weather | text |  | Gets the current world weather type. |
| World Current Weather Duration | world_weather_duration | number |  | Gets the current weather duration in the world. |
| X Coordinate | x_coordinate | number | entity | Gets the X coordinate of the target's location. |
| Y Coordinate | y_coordinate | number | entity | Gets the Y coordinate of the target's location. |
| Horizontal Rotate | yaw | number | entity | Gets the horizontal (left/right) rotation (yaw) of the target. |
| Z Coordinate | z_coordinate | number | entity | Gets the Z coordinate of the target's location. |
