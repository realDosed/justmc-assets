# World actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Add cooking recipe | game_add_custom_cooking_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>result: item<br/>experience: number<br/>cooking_time: number<br/>recipe_type: enum<br/>category: enum | Adds a custom smelting recipe for furnace or blast furnace to the game. |
| Add crafting recipe | game_add_custom_crafting_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>items: item<br/>input_only_types: enum<br/>result: item<br/>recipe_type: enum<br/>category: enum | Adds a custom crafting recipe to the world. |
| Add smithing upgrade recipe | game_add_custom_smithing_transform_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>template: item<br/>template_only_type: enum<br/>base: item<br/>base_only_type: enum<br/>addition: item<br/>addition_only_type: enum<br/>result: item<br/>copy_data_components: enum | Adds a custom gear upgrade recipe to the smithing table. |
| Add smithing trim recipe | game_add_custom_smithing_trim_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>template: item<br/>template_only_type: enum<br/>base: item<br/>base_only_type: enum<br/>addition: item<br/>addition_only_type: enum<br/>trim: item<br/>copy_data_components: enum | Adds a custom armor trim recipe to the smithing table. |
| Add stonecutter recipe | game_add_custom_stonecutting_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>result: item | Adds a custom block sawing recipe to the stonecutter. |
| Add transmutation recipe | game_add_custom_transmute_recipe | game | recipe | name: text<br/>replace_vanilla: enum<br/>input: item<br/>input_only_type: enum<br/>material: item<br/>material_only_type: enum<br/>result: item<br/>category: enum | Adds a custom item transmutation recipe to the world. |
| Set Block Growth Stage | game_block_growth | game | block | location: location<br/>growth_stage: number<br/>growth_type: enum | Sets the growth stage for the block at the selected location. |
| Bloom Skulk Catalyst | game_bloom_skulk_catalyst | game | block | location: location<br/>bloom_location: location<br/>charge: number | Spreads sculk from a sculk catalyst to a location. |
| Bonemeal Block | game_bone_meal_block | game | block | location: location<br/>count: number | Bonemeals a block at the selected location. |
| Break Block | game_break_block | game | block | locations: location<br/>tool: item<br/>drop_exp: enum | Breaks blocks at the specified locations as if it were done by a Survival player with the right tool. |
| Cancel Event | game_cancel_event | game | event |  | Cancels the start event that triggered this code. |
| Get a custom chunk tag | game_chunk_get_custom_tag | game | block | variable: variable<br/>location: location<br/>tag_name: text<br/>default_value: any | Retrieves a custom chunk tag and assigns the result to a variable. |
| Get custom chunk tags | game_chunk_get_custom_tags | game | block | variable: variable<br/>location: location | Retrieves custom chunk tags and assigns the result to a variable. |
| Remove Custom Chunk Tag | game_chunk_remove_custom_tag | game | block | location: location<br/>tag_names: text | Removes the specified custom chunk tags. |
| Remove Custom Chunk Tags | game_chunk_remove_custom_tags | game | block | location: location | Removes all custom chunk tags. |
| Set Custom Chunk Tag | game_chunk_set_custom_tag | game | block | location: location<br/>tag_names: text<br/>tag_values: text | Sets the specified custom chunk tags. |
| Clear Container | game_clear_container | game | block | location: location | Removes all items from a container at the selected location. |
| Clear Container Items | game_clear_container_items | game | block | location: location<br/>items: item | Clears the specified items from a container. |
| Clear custom recipes | game_clear_custom_recipes | game | recipe |  | Clears all custom recipes. |
| Clear Exploded Blocks | game_clear_exploded_blocks | game | event | location: location | Returns exploded blocks to their original position. |
| Clear Region | game_clear_region | game | block | pos_1: location<br/>pos_2: location | Removes all blocks in a region. |
| Clear Scoreboard Values | game_clear_scoreboard_scores | game | scoreboard | id: text | Clears all values of the specified scoreboard. |
| Clone Region Blocks | game_clone_region | game | block | pos_1: location<br/>pos_2: location<br/>target_pos: location<br/>paste_pos: location<br/>ignore_air: enum<br/>copy_entity: enum | Clones a region to the selected location. |
| Create Explosion | game_create_explosion | game | entity | location: location<br/>power: number<br/>name_or_uuid: text<br/>fire: enum<br/>break_blocks: enum | Creates an explosion at the specified location. |
| Create Scoreboard | game_create_scoreboard | game | scoreboard | id: text<br/>display_name: text | Creates a scoreboard with a specific ID. To display a scoreboard to a player, use the "Show scoreboard" action. |
| Fill Container | game_fill_container | game | block | location: location<br/>items: item | Fills a container at the selected location with the specified items. |
| Generate Tree | game_generate_tree | game | block | location: location<br/>tree_type: enum | Generates a tree at the selected location. |
| creative_plus.action.game_get_tile_block_custom_tags.name | game_get_tile_block_custom_tags | game | block | variable: variable<br/>location: location | creative_plus.action.game_get_tile_block_custom_tags.description |
| Hide Event Message | game_hide_event_message | game | event | hide: enum | Removes the message from the event that triggered this code. |
| Spawn Firework | game_launch_firework | game | entity | firework: item<br/>location: location<br/>movement: enum<br/>instant: enum | Launches firework at the specified location. |
| Launch Projectile | game_launch_projectile | game | entity | projectile: item<br/>location: location<br/>speed: number<br/>inaccuracy: number<br/>custom_name: text<br/>trail: particle | Launches a projectile at the specified location. |
| Random Tick Block | game_random_tick_block | game | block | location: location<br/>times: number | Updates a block (random tick) at the selected location. |
| Remove Items From Container | game_remove_container_items | game | block | location: location<br/>items: item | Removes the specified items from a container at the selected location. |
| Remove custom recipe | game_remove_custom_recipe | game | recipe | names: text<br/>remove_vanilla: enum | Removes custom recipe from world. |
| Remove Scoreboard | game_remove_scoreboard | game | scoreboard | id: text | Removes the specified scoreboard. |
| Remove Scoreboard Value By Text | game_remove_scoreboard_score_by_name | game | scoreboard | id: text<br/>text: text | Removes the value of the specified scoreboard by display text. |
| Remove Scoreboard Value By Score | game_remove_scoreboard_score_by_score | game | scoreboard | id: text<br/>score: number | Removes the value of the specified scoreboard by score. |
| Remove Block Entity Custom Tag | game_remove_tile_block_custom_tag | game | block | location: location<br/>tag_name: text | Removes the specified custom tag from the block entity at the location. |
| Remove custom entity block tags | game_remove_tile_block_custom_tags | game | block | location: location | Removes all custom tags of the entity block. |
| Replace Blocks in Region | game_replace_blocks_in_region | game | block | old_block: block<br/>pos_1: location<br/>pos_2: location<br/>new_block: block | Replaces blocks with others in the selected region. |
| Replace Items in Container | game_replace_container_items | game | block | items: item<br/>location: location<br/>replace: item<br/>count: number | Replaces the specified items in a container at the selected location with a specific item. |
| Send Web Request | game_send_web_request | game | web | url: text<br/>content_body: text<br/>headers: map<br/>request_type: enum<br/>content_type: enum | Sends a web request with the selected method and body to the selected URL. |
| Set Block Age | game_set_age | game | block | location: location<br/>tick: number | Sets the age of the block at the selected location. |
| Set Block | game_set_block | game | block | block: block<br/>locations: location<br/>update_blocks: enum | Sets the selected block type on selected locations. |
| Set Redstone Signal Strength | game_set_block_analogue_power | game | block | location: location<br/>power_level: number | Sets the selected location to a specific signal strength. |
| Set Block Data | game_set_block_data | game |  | location: location<br/>block_data: text | Sets the parameters of a block at a specific location. |
| Set Block Drops | game_set_block_drops_enabled | game | settings | enable: enum | Sets a rule in the world to drop blocks when they are broken. |
| Set Block Entity NBT Tags | game_set_block_nbt | game | block | location: location<br/>tag_names: text<br/>tag_values: text | Sets the specified NBT tag on the block entity at the location. |
| Activate Block | game_set_block_powered | game | block | location: location<br/>powered: enum | Activates a block at the selected location. |
| Set Block Single Data | game_set_block_single_data | game | block | location: location<br/>data: text<br/>value: text | Sets the given parameter to a block at the location to a given value. |
| Set Item in Suspicious Block | game_set_brushable_block_item | game | block | location: location<br/>item: item | Sets an item into a suspicious block (sand, gravel) at the selected location. |
| Set Campfire Item | game_set_campfire_item | game | block | location: location<br/>item: item<br/>cooking_time: number<br/>slot: enum | Sets an item to a campfire at the selected location. |
| Set Items In Container | game_set_container | game | block | location: location<br/>items: item | Sets the specified items into a container at the selected location. |
| Set Container Key | game_set_container_lock | game | block | location: location<br/>container_key: text | Sets a specific key to a container at the selected location. |
| Set Container Name | game_set_container_name | game | block | location: location<br/>name: text | Sets the name of the container at the selected location. |
| Set Copper Golem Statue Pose | game_set_copper_golem_statue_pose | game | block | location: location<br/>pose: enum | Sets the specified pose for the copper golem statue at the specified location. |
| Set Creaking Heart Natural | game_set_creaking_heart_natural | game | block | location: location<br/>natural: enum | Sets whether the Creaking Heart at the specified location is natural. |
| Set Creaking Heart State | game_set_creaking_heart_state | game | block | location: location<br/>heart_state: enum | Sets the state of the Creaking Heart at the specified location. |
| Set Decorate Pot Sherd | game_set_decorate_pot_sherd | game | block | location: location<br/>item: item<br/>side: enum | Sets the specified shard to the selected side of the vase at the specified location. |
| Set Dried Ghast Hydration | game_set_dried_ghast_hydration | game | block | location: location<br/>hydration: number | Sets the hydration of the Dried Ghast at the specified location. |
| Set Anvil Damage State | game_set_event_anvil_damage_state | game | event | damage_state: enum | Sets the damage state of the anvil. |
| Set Anvil Action Cost | game_set_event_anvil_repair_cost | game | event | repair_cost: number<br/>repair_cost_type: enum<br/>bypass_cost: enum | Sets the cost of the action being performed at the anvil. |
| Set Event Burn Duration | game_set_event_combust_duration | game | event | duration: number | Sets the burn duration associated with this event. |
| Set Event Damage | game_set_event_damage | game | event | damage: number | Sets the damage associated with this event. |
| Set Death Screen Message | game_set_event_death_screen_message | game | event | message: text | Sets the death screen message displayed on the death screen, associated with this event. |
| Set Event Enchantment Offers | game_set_event_enchantment_offers | game | event | enchantments: text<br/>levels: number<br/>costs: number | Sets the enchantment offers for the event. |
| Set Event Exhaustion | game_set_event_exhaustion | game | event | exhaustion: number | Sets the exhaustion level. |
| Set Event Experience | game_set_event_experience | game | event | experience: number | Sets the experience value associated with this event. |
| Set Event Game Mode | game_set_event_gamemode | game | event | gamemode: enum | Sets the game mode associated with the event. |
| Set Event Heal | game_set_event_heal | game | event | heal: number | Sets the heal value associated with this event. |
| Set Event Item | game_set_event_item | game | event | item: item | Sets the item associated with this event. |
| Set Event Item Cooldown | game_set_event_item_cooldown | game | event | cooldown: number | Sets the item cooldown associated with this event. |
| Set Event Items | game_set_event_items | game | event | items: item | Sets the items related to the event. |
| Set Event Knockback Vector | game_set_event_knockback_vector | game | event | knockback: vector | Sets the knockback vector associated with this event. |
| Allow Movement | game_set_event_move_allowed | game | event | allowed: enum | Allows movement if it fails. |
| Set Event Projectile | game_set_event_projectile | game | event | projectile: item<br/>name: text | Replaces the projectile associated with this event. |
| Set Event Leash Drop | game_set_event_should_drop_leash | game | event | should_drop_leash: enum | Sets whether the leash associated with the event will be dropped. |
| Set Event Particle Effect | game_set_event_should_play_effect | game | event | should_play_effect: enum | Sets whether the particles associated with the event will be spawned. |
| Set Event Sound | game_set_event_sound | game | event | sound: sound | Sets the sound to play associated with this event, replacing the original one. |
| Set Event Source Slot | game_set_event_source_slot | game | event | source_slot: number | Sets the source slot of the event. |
| Set Event Target Slot | game_set_event_target_slot | game | event | target: number | Sets the destination slot of the event. |
| Add Tags To Received Info | game_set_event_uery_info | game | event | information: text | Adds additional tags to the received debug info that will be copied to the clipboard if the event is not cancelled. |
| Set Event Velocity Vector | game_set_event_velocity | game | event | velocity: vector | Sets the velocity vector associated with this event. |
| Set Furnace Cooking Time | game_set_furnace_cook_time | game | block | location: location<br/>time: number | Sets the cooking time for the oven at the selected location. |
| creative_plus.action.game_set_hardcore.name | game_set_hardcore | game |  | hardcore: enum | creative_plus.action.game_set_hardcore.description |
| Set Item In Container Slot | game_set_item_in_container_slot | game | block | location: location<br/>item: item<br/>slot: number | Sets an item in the specified container slot at the selected location. |
| Set Book In Lectern | game_set_lectern_book | game | block | location: location<br/>item: item<br/>page: number | Sets a book in the lectern at the selected location. |
| Set Player Head | game_set_player_head | game | block | location: location<br/>name_or_uuid: text<br/>receive_type: enum | Sets the player's head at the selected location. |
| Set Potent Sulfur State | game_set_potent_sulfur_state | game | block | location: location<br/>state: enum | Sets the state of the potent sulfur. |
| Set Blocks In Region | game_set_region | game | block | block: block<br/>pos_1: location<br/>pos_2: location | Sets the selected block type to the entire selected region. |
| Set Scoreboard Line | game_set_scoreboard_line | game | scoreboard | id: text<br/>line: text<br/>display: text<br/>score: number<br/>format_content: text<br/>format: enum | Sets a line in the scoreboard |
| Set Scoreboard Line Display | game_set_scoreboard_line_display | game | scoreboard | id: text<br/>line: text<br/>display: text | Sets a scoreboard line to a text. |
| Set Scoreboard Line Format | game_set_scoreboard_line_format | game | scoreboard | id: text<br/>line: text<br/>format_content: text<br/>format: enum | Sets the text formatting of a specific scoreboard line. |
| Set Scoreboard Number Format | game_set_scoreboard_number_format | game | scoreboard | id: text<br/>format_content: text<br/>format: enum | Sets the format for the values of the scoreboard. |
| Set Scoreboard Value | game_set_scoreboard_score | game | scoreboard | id: text<br/>text: text<br/>score: number | Sets the value of the specified scoreboard with the displayed text and score. |
| Change Scoreboard Title | game_set_scoreboard_title | game | scoreboard | id: text<br/>title: text | Changes the title of the specified scoreboard. |
| Set Sculk Shrieker Can Summon | game_set_sculk_shrieker_can_summon | game | block | location: location<br/>can_summon: enum | Sets the Sculk Shriker's ability to summon Wardens. |
| Set Sculk Shrieker Shrieking | game_set_sculk_shrieker_shrieking | game | block | location: location<br/>shrieking: enum | Sets the shrieking status of a Sculk Shrieker. |
| Set Sculk Shrieker Warning Level | game_set_sculk_shrieker_warning_level | game | block | location: location<br/>warning_level: number | Sets the warning levels of a Sculk Shrieker. |
| Set Sign Text | game_set_sign_text | game | block | location: location<br/>text: text<br/>line: number<br/>side: enum | Sets the sign text at the selected location. |
| Set Sign Text Color | game_set_sign_text_color | game | block | location: location<br/>side: enum<br/>sign_text_color: enum<br/>glowing: enum | Sets the color of sign text at the selected location. |
| Set Sign Waxed | game_set_sign_waxed | game | block | location: location<br/>waxed: enum | Sets the waxedness of the sign at the selected location. |
| Set Spawner Entity | game_set_spawner_entity | game | block | location: location<br/>entity: item | Sets the entity that spawns near a Spawner. |
| Set Block Entity Custom Tag | game_set_tile_block_custom_tag | game | block | location: location<br/>tag_name: text<br/>tag_value: text | Sets the specified custom tag on the block entity at the location. |
| Set Vault Displayed Item | game_set_vault_displayed_item | game | block | location: location<br/>item: item | Sets the displayed item of the vault at the specified location. |
| Set Vault Next State Update Time | game_set_vault_next_state_update_time | game | block | location: location<br/>time: number | Sets the time until the next state transition for the vault at the specified location. |
| Set World Difficulty | game_set_world_difficulty | game | settings | difficulty: enum | Sets a specific world difficulty. |
| Set World Gamerule | game_set_world_gamerule | game | settings | gamerule: enum<br/>value: text | Sets a specific game rule in the world. |
| Set World Simulation Distance | game_set_world_simulation_distance | game | settings | distance: number | Sets the chunk simulation distance for the world. |
| Set World Time | game_set_world_time | game | settings | time: number | Sets the world time in ticks. |
| Set World Weather | game_set_world_weather | game | settings | weather_type: enum<br/>weather_duration: number | Sets the world's weather for a certain amount of time. |
| Spawn Armor Stand | game_spawn_armor_stand | game | entity | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>right_hand: item<br/>left_hand: item<br/>gravity: enum<br/>marker: enum<br/>small: enum<br/>show_arms: enum<br/>base_plate: enum<br/>invisible: enum<br/>location: location<br/>custom_name: text | Spawns an armor stand at the specified location. |
| Spawn Block Display | game_spawn_block_display | game | entity | spawn_location: location<br/>custom_name: text<br/>block: block | Spawns a block renderer at the specified location |
| Spawn Effect Cloud | game_spawn_effect_cloud | game | entity | location: location<br/>effects: potion<br/>radius: number<br/>duration: number<br/>particle: particle<br/>custom_name: text | Spawns a cloud of misty potion that infuses the effects of the entities in it. |
| Spawn End Crystal | game_spawn_end_crystal | game | entity | location: location<br/>custom_name: text<br/>show_bottom: enum | Spawns an End Crystal at the specified location. |
| Spawn Evoker Fangs | game_spawn_evoker_fangs | game | entity | location: location<br/>custom_name: text | Spawns the Evoker fangs at the specified location. |
| Spawn Experience Orb | game_spawn_experience_orb | game | entity | location: location<br/>experience_amount: number<br/>custom_name: text | Spawns an Experience Orb at the specified location with the selected options. |
| Spawn Eye of Ender | game_spawn_eye_of_ender | game | entity | location: location<br/>destination: location<br/>lifespan: number<br/>custom_name: text<br/>end_of_lifespan: enum | Spawns an Eye of End at the target location that will move towards the target. |
| Spawn Falling Block | game_spawn_falling_block | game | entity | block: block<br/>location: location<br/>name: text<br/>should_expire: enum | Spawns a falling block at the specified location. |
| Spawn Interaction Entity | game_spawn_interaction_entity | game | entity | location: location<br/>custom_name: text<br/>width: number<br/>height: number<br/>responsive: enum | Spawns an interaction entity at the specified location |
| Spawn Item | game_spawn_item | game | entity | item: item<br/>location: location<br/>custom_name: text<br/>apply_motion: enum<br/>can_mob_pickup: enum<br/>can_player_pickup: enum | Spawns an item at the specified location with the selected options. |
| Spawn Item Display | game_spawn_item_display | game | entity | spawn_location: location<br/>custom_name: text<br/>displayed_item: item | Spawns an item visualizer at the specified location |
| Spawn Item Frame | game_spawn_item_frame | game | entity | spawn_location: location<br/>item: item<br/>rotation: enum<br/>block_face: enum<br/>glowing: enum<br/>visible: enum<br/>fixed: enum | Spawns an item frame at the specified location. |
| Spawn Lightning | game_spawn_lightning_bolt | game | entity | location: location | Spawns lightning at the specified location. |
| Spawn Entity | game_spawn_mob | game | entity | mob: item<br/>location: location<br/>health: number<br/>custom_name: text<br/>potion_effects: potion<br/>main_hand: item<br/>helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>off_hand: item<br/>natural_equipment: enum | Spawns a mob at the specified location with the selected options. |
| Spawn Painting | game_spawn_painting | game | entity | spawn_location: location<br/>art: text<br/>block_face: enum | Spawns a painting at the specified location. |
| Spawn Ignited TNT | game_spawn_primed_tnt | game | entity | location: location<br/>tnt_power: number<br/>fuse_duration: number<br/>custom_name: text<br/>block: block | Spawns ignited dynamite at the specified location. |
| Spawn Shulker Bullet | game_spawn_shulker_bullet | game | entity | location: location<br/>custom_name: text | Spawns a Shulker Bullet at the specified location. |
| Spawn Text Display | game_spawn_text_display | game | entity | spawn_location: location<br/>custom_name: text<br/>merging_mode: enum<br/>displayed_text: text | Spawns a text renderer at the specified location |
| Spawn Vehicle | game_spawn_vehicle | game | entity | vehicle: item<br/>location: location<br/>custom_name: text | Spawns a vehicle at the specified location with the selected options. |
| Uncancel Event | game_uncancel_event | game | event |  | Returns the cancellation of the event that triggered this code. |
| Update Adjacent Block | game_update_block | game | block | location: location | Updates adjacent blocks at the specified location if the block is not air. The block on the location itself is not updated, but it can be updated from adjacent blocks. |
| Set Decorated Pot Wobble | game_wobble_decorated_pot | game | block | location: location<br/>style: enum | Sets the specified wobble type for the decorated pot at the specified location. |
| Block Equals | if_game_block_equals | if_game |  | location: location<br/>blocks: block | Checks if a block at a specific location is a specific block type. |
| Block Powered by Redstone | if_game_block_powered | if_game |  | locations: location<br/>power_mode: enum | Checks if a block at a specific location is powered by redstone. |
| The chunk has a custom tag | if_game_chunk_has_custom_tag | if_game |  | location: location<br/>tag: text<br/>tag_value: text<br/>compare_type: enum | Checks whether the chunk has the specified custom tag. |
| Chunk Is Loaded | if_game_chunk_is_loaded | if_game |  | location: location | Checks if the location has a chunk loaded |
| Container Has an Item | if_game_container_has | if_game |  | location: location<br/>items: item<br/>check_mode: enum<br/>comparison_mode: enum | Checks if a container at a specific location has certain items in its inventory. |
| Container Has Room For Items | if_game_container_has_room_for_item | if_game |  | location: location<br/>items: item<br/>check_mode: enum | Checks if a container at a specific location has room for items in its inventory. |
| Event Damage Source Equals | if_game_damage_cause_equals | if_game |  | cause: enum | Checks if the event's damage source is equal to the selected one. |
| Attack Was Critical | if_game_event_attack_is_critical | if_game |  |  | Checks if an attack in an event was a critical attack. |
| Event Block Equals | if_game_event_block_equals | if_game |  | blocks: block<br/>locations: location | Checks if the current event's block is equal to certain blocks. |
| Movement Key Equals | if_game_event_has_input | if_game |  | input_type: enum | Checks whether the movement key from the event equals the selected key. |
| Growth has stopped | if_game_event_is_age_locked | if_game |  |  | Checks whether propagation has been stopped for the event |
| Event Cancelled | if_game_event_is_canceled | if_game |  |  | Checks if the event has been cancelled. |
| Event Item Equals | if_game_event_item_equals | if_game |  | items: item<br/>comparison_mode: enum | Checks if the current event item is equal to certain items. |
| Entity in World | if_game_has_entity | if_game |  | names_or_uuids: text<br/>check_mode: enum | Checks whether a specific entity exists in the world. |
| Player Online | if_game_has_player | if_game |  | names_or_uuids: text<br/>check_mode: enum | Checks if a certain player is in the game. |
| Healing Source Equals | if_game_heal_cause_equals | if_game |  | heal_cause: enum | Checks if the heal source is equal to the selected one. |
| Ignite Cause Equals | if_game_ignite_cause_equals | if_game |  | cause: enum | Checks if the fire source is equal to the selected one. |
| Sound Instrument Equals | if_game_instrument_equals | if_game |  | instrument: enum | Checks if the instrument in the event is equal to the selected one. |
| If Location in Block | if_game_location_in_block | if_game |  | location: location | Checks if the specified location is in a block. |
| Sign Contains Text | if_game_sign_contains | if_game |  | location: location<br/>texts: text<br/>check_side: enum<br/>check_mode: enum<br/>lines: enum | Checks if a sign at a given location contains the specified text. |
| Block Entity Has Custom Tag | if_game_tile_block_has_custom_tag | if_game |  | location: location<br/>tag: text<br/>tag_value: text<br/>compare_type: enum | Checks if the block entity has the specified custom tag. |
