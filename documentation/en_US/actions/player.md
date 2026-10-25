# Player actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chat Colors Enabled | if_player_chat_colors_enabled | if_player | toggleable | container |  |  |  | false | false | Checks if the player enabled "Chat Colors" in settings. |
| Chat Message Equals | if_player_chat_message_equals | if_player | misc | container | chat_messages: text<br/>ignore_case: enum |  |  | false | false | Checks if the player's message is equal to the selected one. |
| Collidies At Location | if_player_collides_at_location | if_player | location | container | location: location |  |  | false | false | Checks if a player collides with blocks, shulkers, boats and worldborder on given location. |
| Collides Using Custom Hitbox | if_player_collides_using_hitbox | if_player | location | container | min: location<br/>max: location |  |  | false | false | Checks if a player collides with blocks, shulkers, boats and worldborder using a custom hitbox. |
| Collidies With Entity | if_player_collides_with_entity | if_player | location | container | name_or_uuid: text<br/>check_type: enum |  |  | false | false | Checks if player's hitbox collides with a hitbox of given entity. |
| Cursor Item Is Equal To | if_player_cursor_item_equals | if_player | item | container | items: item<br/>comparison_mode: enum |  |  | false | false | Checks if the item at the player's cursor is equal to the selected item. |
| Game Mode Equals | if_player_gamemode_equals | if_player | misc | container | gamemode: enum |  |  | false | false | Checks if the player's gamemode is equal to the selected one. |
| Movement Key Is Pressed | if_player_has_input | if_player | misc | container | input_type: enum |  |  | false | false | Checks whether the selected movement key is pressed for the player. |
| Has an Item | if_player_has_item | if_player | item | container | items: item<br/>check_mode: enum<br/>comparison_mode: enum |  |  | false | false | Checks if the player has an item in their inventory. |
| Has an Item in Quantity | if_player_has_item_at_least | if_player | item | container | item: item<br/>count: number<br/>comparison_mode: enum |  |  | false | false | Checks if a player has an item in a certain quantity. |
| Has an Item In Slot | if_player_has_item_in_slot | if_player | item | container | items: item<br/>slots: number<br/>comparison_mode: enum |  |  | false | false | Checks if a player has an item in a specific inventory slot. |
| Has Potion Effect | if_player_has_potion_effect | if_player | misc | container | potions: potion<br/>check_mode: enum |  |  | false | false | Checks if a player has the effect of a potion. |
| Has Permission | if_player_has_privilege | if_player | misc | container | privilege: enum<br/>exact: enum |  | If the "Check Accuracy" marker is enabled, building and development permissions will be checked even if the player is a world operator. | false | false | Checks if a player has certain rights in the world. |
| Has a Room For Item | if_player_has_room_for_item | if_player | item | container | items: item<br/>check_mode: enum<br/>checked_slots: enum |  |  | false | false | Checks if the player has room for one or more items in their inventory. |
| Hotbar Slot Equals | if_player_hotbar_slot_equals | if_player | misc | container | slot: number |  |  | false | false | Checks if the player's current hotbar slot matches slot 1 to 9 in the chest. |
| Inside Region | if_player_in_area | if_player | location | container | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum |  |  | false | false | Checks if the player is in a certain region. |
| Inventory Slot Contains | if_player_inventory_menu_slot_equals | if_player | item | container | items: item<br/>slots: number<br/>comparison_mode: enum |  |  | false | false | Checks if a player with an open inventory currently has a specific item in a slot. |
| Open Inventory Type Equals | if_player_inventory_type_open | if_player | misc | container | inventory_type: enum |  |  | false | false | Checks if a player's inventory type is open. |
| Is Allow Server Listing | if_player_is_allow_server_listing | if_player | toggleable | container |  |  |  | false | false | Checks if the player enabled "Allow Server Listing" in settings. |
| Uses a Shield | if_player_is_blocking | if_player | toggleable | container |  |  |  | false | false | Checks if the player is using a shield. |
| Disguised for Everyone | if_player_is_disguised | if_player | toggleable | container |  |  |  | false | false | Checks if the player is disguised to other players. |
| Flying | if_player_is_flying | if_player | toggleable | container |  |  |  | false | false | Checks if the player is flying. |
| Gliding | if_player_is_gliding | if_player | toggleable | container |  |  |  | false | false | Checks if the player is gliding on elytras. |
| Holding an Item | if_player_is_holding | if_player | item | container | items: item<br/>hand_slot: enum<br/>comparison_mode: enum |  |  | false | false | Checks if the player is holding an item in their hands. |
| Looks at a Block | if_player_is_looking_at_block | if_player | location | container | blocks: block<br/>locations: location<br/>distance: number<br/>fluid_mode: enum |  |  | false | false | Checks if the player is looking at a specific block or location. |
| Near Location | if_player_is_near | if_player | location | container | ignore_y_axis: enum<br/>location: location<br/>range: number |  |  | false | false | Checks if the player is near the specified location (Default: 5 blocks). |
| Is On Ground | if_player_is_on_ground | if_player | toggleable | container |  |  |  | false | false | Checks if the player is not in the air. |
| Has a Premium Account | if_player_is_online_mode | if_player | toggleable | container |  |  |  | false | false | Checks if the player has a premium account. |
| Riding an Entity | if_player_is_riding_entity | if_player | misc | container | entity_ids: text<br/>compare_mode: enum |  |  | false | false | Checks if the player has ridden an entity (including vehicles). |
| Self Disguised | if_player_is_self_disguised | if_player | toggleable | container |  |  |  | false | false | Checks if the player is disguised to himself. |
| Sleeping | if_player_is_sleeping | if_player | toggleable | container |  |  |  | false | false | Checks if the player is sleeping. |
| Sneaking | if_player_is_sneaking | if_player | toggleable | container |  |  |  | false | false | Checks if the player is sneaking. |
| Running | if_player_is_sprinting | if_player | toggleable | container |  |  |  | false | false | Checks if the player is running or using the sprint key when swimming. |
| Standing on a Block | if_player_is_standing_on_block | if_player | location | container | blocks: block<br/>locations: location<br/>only_solid: enum |  |  | false | false | Checks if the player is standing on a block of a certain category or a certain location. |
| Swimming | if_player_is_swimming | if_player | toggleable | container |  |  |  | false | false | Checks if the player is swimming in water or lava. |
| Player Transferred to Server | if_player_is_transferred | if_player | toggleable | container |  |  |  | false | false | Checks if the player was transferred from another server. |
| Using Item | if_player_is_using_item | if_player | item | container | items: item<br/>comparison_mode: enum |  |  | false | false | Checks if the player is using a bow, shield, or any other usable item. |
| Wearing an Item | if_player_is_wearing_item | if_player | item | container | items: item<br/>check_mode: enum<br/>comparison_mode: enum |  |  | false | false | Checks if the player is wearing an item. |
| creative_plus.action.if_player_item_group_is_not_on_cooldown.name | if_player_item_group_is_not_on_cooldown | if_player | item | container | item_keys: text<br/>check_mode: enum |  |  | false | false | creative_plus.action.if_player_item_group_is_not_on_cooldown.description |
| Item Has No Cooldown | if_player_item_is_not_on_cooldown | if_player | item | container | items: item<br/>check_mode: enum |  |  | false | false | Checks if the player's item has a cooldown applicable to a specific item type. |
| Name Equals | if_player_name_equals | if_player | misc | container | names_or_uuids: text |  |  | false | false | Checks if the player's name is equal to the name in the chest. |
| Text Filtering Enabled | if_player_text_filtering_enabled | if_player | toggleable | container |  |  |  | false | false | Checks if the player have Mojang word filters enabled. |
| Add Inventory Menu Row | player_add_inventory_menu_row | player | inventory_menus | basic | items: item<br/>position: enum |  |  | false | false | Adds a row with the specified items to the "Chest" type inventory. |
| creative_plus.action.player_allow_placing_breaking_blocks.name | player_allow_placing_breaking_blocks | player | settings | basic | allow: enum<br/>blocks: block |  |  | false | true | creative_plus.action.player_allow_placing_breaking_blocks.description |
| Boost Elytra | player_boost_elytra | player | movement | basic | firework: item |  |  | false | false | Accelerates the flight of an Elytra player with the power of the specified firework. |
| Interrupt Item Use | player_clear_active_item | player | item_management | basic |  |  |  | false | false | Interrupts the use of the current item. |
| Clear Chat | player_clear_chat | player | communication | basic |  |  |  | false | false | Clears all messages from the selected player's chat window. |
| Clear Debug Markers | player_clear_debug_markers | player | world | basic |  |  |  | false | false | Removes all debug markers for the player. |
| Clear Ender Chest Contents | player_clear_ender_chest_contents | player | item_management | basic |  |  |  | false | false | Clears items in a player's Ender Chest inventory. |
| Clear Inventory | player_clear_inventory | player | item_management | basic | clear_mode: enum |  |  | false | false | Clears the player's inventory. |
| Clear Items | player_clear_items | player | item_management | basic | items: item |  |  | false | false | Removes all selected items from the player's inventory. |
| Clear Effects | player_clear_potion_effects | player | parameters | basic |  |  |  | false | false | Clears all player effects. |
| Close Dialog Menu | player_close_dialog_menu | player | communication | basic |  |  |  | false | false | Closes the current dialog menu for the player. |
| Close Inventory Menu | player_close_inventory | player | inventory_menus | basic |  |  |  | false | false | Closes a player's opened inventory menu. |
| Complete Item Use | player_complete_using_active_item | player | item_management | basic |  |  |  | false | false | Completes the use of the current item in hand with a result. |
| Send Player to Another Server | player_connect_to_server | player | miscellaneous | basic | server_name: text |  |  | false | false | Sends the player to the server with the specified name (e.g. "cr-0"). |
| Deal Damage | player_damage | player | parameters | basic | damage: number<br/>source: text |  |  | false | false | Deals damage to a player. |
| Disguise as Block | player_disguise_as_block | player | appearance | basic | block: block<br/>visible_to_self: enum |  |  | false | false | Maxes the player under the selected block. |
| Disguise as Entity | player_disguise_as_entity | player | appearance | basic | entity_type: item<br/>visible_to_self: enum |  |  | false | false | Maximizes the player to the selected entity. |
| Disguise player as item | player_disguise_as_item | player | appearance | basic | item: item<br/>visible_to_self: enum |  |  | false | false | Maxes the player as an item. |
| Display Bell Ring | player_display_bell_ring | player | world | basic | location: location<br/>direction: enum | Bell | The "Down" direction stops the punch animation. | false | false | Displays the Bell ringing animation. |
| Display Block | player_display_block | player | world | basic | location: location<br/>block: block |  |  | false | false | Display a block to a player without affecting other players. |
| Display End Gateway Beam Animation | player_display_end_gateway_beam | player | world | basic | location: location<br/>color: enum |  |  | false | false | Displays an End Gateway beam animation at a specific location. |
| Display Hologram | player_display_hologram | player | world | basic | location: location<br/>text: text |  | To wrap text on a new line, use "\n", eg : "Line1\nLine2". | false | false | Shows the player a hologram. To remove a hologram at a location, leave the text blank. |
| Display Lightning Effect | player_display_lightning | player | particle | basic | location: location |  |  | false | false | Display lightning to the player without showing it to other players or setting the area on fire. |
| Display Particle Effect | player_display_particle | player | particle | basic | particle: particle<br/>location: location |  |  | false | false | Displays the particle effect at the selected location to the player. |
| Display Particle Circle | player_display_particle_circle | player | particle | basic | particle: particle<br/>center: location<br/>radius: number<br/>points: number<br/>start_angle: number<br/>perpendicular: vector<br/>angle_unit: enum |  |  | false | false | Shows a player a circle out of particles with given parameters. |
| Display Particle Cube | player_display_particle_cube | player | particle | basic | particle: particle<br/>first_corner: location<br/>second_corner: location<br/>spacing: number<br/>type: enum |  |  | false | false | Displays a particle cuboid to the player. |
| Display Particle Line | player_display_particle_line | player | particle | basic | particle: particle<br/>start: location<br/>end: location<br/>divider: number<br/>unit_of_measurement: enum |  |  | false | false | Displays a particle effect line to the player from the start location to the end location at a specified distance. |
| Display Particle Ray | player_display_particle_ray | player | particle | basic | particle: particle<br/>start: location<br/>ray: vector<br/>divider: number<br/>unit_of_measurement: enum |  |  | false | false | Displays a particle effect ray to the player from the starting location along the specified vector with the specified distance. |
| Display Particle Sphere | player_display_particle_sphere | player | particle | basic | particle: particle<br/>center: location<br/>radius: number<br/>points: number |  |  | false | false | Displays a particle sphere to the player. |
| Display Particle Spiral | player_display_particle_spiral | player | particle | basic | particle: particle<br/>center: location<br/>distance: number<br/>radius: number<br/>points: number<br/>rotations: number<br/>start_angle: number<br/>angle_unit: enum |  |  | false | false | Displays a particle spiral to the player. |
| Show Pick Up Animation | player_display_pick_up_animation | player | world | basic | collected_name_or_uuid: text<br/>collector_name_or_uuid: text<br/>amount: number |  | This action works with any entity, not just the player. | false | false | Shows the player a pickup animation. |
| Display Sign Text | player_display_sign_text | player | world | basic | location: location<br/>line_1: text<br/>line_2: text<br/>line_3: text<br/>line_4: text<br/>side: enum |  |  | false | false | Show the sign's text change to the player without changing its text for other players. |
| Display Vibration Particle | player_display_vibration | player | particle | basic | from: location<br/>to: location<br/>destination_time: number |  |  | false | false | Displays to the player a particle of vibration moving from one point to another. |
| Expand Inventory Menu | player_expand_inventory_menu | player | inventory_menus | basic | items: item<br/>size: number |  |  | false | false | Expands the player's opened inventory menu by the selected number of lines and populates it with the specified items. |
| Turn to Location | player_face_location | player | movement | basic | location: location |  |  | false | false | Turns the player towards the location. |
| Get Player Attribute Value | player_get_attribute | player | parameters | basic | variable: variable<br/>attribute_type: enum<br/>return_value: enum |  |  | false | false | Gets the value of the specified player attribute and assigns the result to a variable. |
| Get Player NBT Tags | player_get_nbt | player | miscellaneous | basic | variable: variable<br/>path: text<br/>value_type: enum |  |  | false | false | Gets the NBT tags of a player at the specified path and assigns the result to a variable. |
| Give Experience | player_give_experience | player | parameters | basic | experience: number<br/>mode: enum |  |  | false | false | Gives a player an experience. |
| Give Item | player_give_items | player | item_management | basic | items: item<br/>amount: number |  |  | false | false | Gives players items from a chest. |
| Give Potion Effect | player_give_potion_effect | player | parameters | basic | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum |  |  | false | false | Gives the selected effects to a player. |
| Give a Random Item | player_give_random_item | player | item_management | basic | items: item |  |  | false | false | Gives a player a random item or a stack of items in a chest. |
| Heal Player | player_heal | player | parameters | basic | heal: number |  |  | false | false | Heals a player. |
| Hide custom recipe | player_hide_custom_recipe | player | miscellaneous | basic | names: text<br/>is_vanilla_recipe: enum |  |  | false | false | Hide recipe from player. |
| Hide Entity From Player | player_hide_entity | player | world | basic | name_or_uuid: text<br/>hide: enum |  |  | false | false | Hides the specified entity from the player. |
| Hide Scoreboard | player_hide_scoreboard | player | miscellaneous | basic |  |  |  | false | false | Hides the player's current scoreboard. |
| Kick Player | player_kick | player | miscellaneous | basic |  |  |  | false | false | Kicks the player out of the world. |
| Launch Forward | player_launch_forward | player | movement | basic | power: number<br/>increment: enum<br/>launch_axis: enum |  |  | false | false | Launches the player forward or backward in the direction they are looking, depending on their strength. |
| Launch Projectile | player_launch_projectile | player | world | basic | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle |  |  | false | false | Launch a projectile from the player's location. |
| Launch to Location | player_launch_to_location | player | movement | basic | location: location<br/>power: number<br/>increment: enum |  |  | false | false | Launches the player to the selected location. |
| Launch Up | player_launch_up | player | movement | basic | power: number<br/>increment: enum |  |  | false | false | Tosses the player up or down based on strength. |
| Dismount | player_leave_vehicle | player | movement | basic |  |  |  | false | false | Dismounts a player from a vehicle or entity. |
| Load Saved Inventory | player_load_inventory | player | item_management | basic |  |  |  | false | false | Loads the selected saved inventory. |
| Disguise Player as World Entity | player_mimic_disguise_from_entity | player | appearance | basic | name_or_uuid: text<br/>include_disguise: enum<br/>disguise: enum<br/>remove_original_entity: enum |  |  | false | false | Disguises the player as the specified entity from the world. |
| Open Book | player_open_book | player | communication | basic | book: item |  |  | false | false | Opens a book to a specific player. |
| Open Container Menu | player_open_container_inventory | player | inventory_menus | basic | location: location |  |  | false | false | Opens the block menu for the player at the specified location. |
| Open Ender Chest | player_open_ender_chest | player | inventory_menus | basic |  |  |  | false | false | Opens the Ender Chest for the player. |
| Open Working Menu | player_open_working_menu | player | inventory_menus | basic | title: text<br/>menu_type: enum |  |  | false | false | Opens a functional menu for the player. |
| Play Animation to Player | player_play_animation_action | player | appearance | basic | animation: enum |  |  | false | false | Plays a specific animation for the player. |
| Play Hurt Animation | player_play_hurt_animation | player | appearance | basic | yaw: number |  |  | false | false | Plays a hurt animation for the player with a given angle. |
| Play Sound | player_play_sound | player | communication | basic | sound: sound<br/>location: location |  |  | false | false | Plays a sound to the player. |
| Play sound from entity | player_play_sound_from_entity | player | communication | basic | sounds: sound<br/>name_or_uuid: text |  | Stereo sounds will not play. | false | false | Plays a sound from the specified entity to the player. |
| Play Sound Sequence | player_play_sound_sequence | player | communication | basic | sounds: sound<br/>delay: number<br/>location: location |  |  | false | false | Plays a sequence of sounds to the player with a delay between each sound. |
| Randomized Teleport | player_randomized_teleport | player | movement | basic | locations: location<br/>keep_rotation: enum<br/>keep_velocity: enum<br/>dismount: enum |  |  | false | false | Teleports the player to a random location. |
| Send to Another World | player_redirect_world | player | miscellaneous | basic | world_id: text |  |  | false | false | Redirects the player to the world with the given ID. |
| Remove Boss Bar | player_remove_boss_bar | player | communication | basic | id: text |  |  | false | false | Removes an existing boss bar from a specific player. |
| Remove Disguise | player_remove_disguise | player | appearance | basic |  |  |  | false | false | Removes a player's disguise. |
| Remove Display Blocks | player_remove_display_blocks | player | world | basic | pos_1: location<br/>pos_2: location |  |  | false | false | Removes all client-sided display blocks (maximum size: 500). |
| Remove Inventory Menu Rows | player_remove_inventory_menu_row | player | inventory_menus | basic | size: number<br/>position: enum |  |  | false | false | Removes one or more rows from the "Chest" inventory. |
| Remove Items | player_remove_items | player | item_management | basic | items: item |  |  | false | false | Removes the specified items from the player's inventory. |
| Reset Player Pose | player_remove_pose | player | appearance | basic |  |  |  | false | false | Resets a player's pose. |
| Remove Potion Effect | player_remove_potion_effect | player | parameters | basic | potions: potion |  |  | false | false | Removes the selected effects from a player. |
| Remove Self Disguise | player_remove_self_disguise | player | appearance | basic |  |  |  | false | false | Removes a player's disguise that only they can see. |
| Clear Skin | player_remove_skin | player | appearance | basic |  |  |  | false | false | Returns the normal skin of the event target. |
| Remove World Border | player_remove_world_border | player | world | basic |  |  |  | false | false | Set the player's world border to the default value. |
| Replace Items | player_replace_items | player | item_management | basic | items: item<br/>replace: item<br/>count: number |  |  | false | false | Replaces the specified items in the inventory with a specific item. |
| Reset Waypoint Icon Color | player_reset_waypoint_color | player | settings | basic |  |  | For this action to work, the "Location Bar Visibility" game rule must be enabled. | false | false | Resets the color of the icon displayed on the player's location bar to the default. |
| Reset Weather | player_reset_weather | player | world | basic |  |  |  | false | false | Resets player weather |
| Ride an Entity | player_ride_entity | player | movement | basic | name_or_uuid: text |  |  | false | false | Rides the player on an entity or another player. |
| Save Current Inventory | player_save_inventory | player | item_management | basic |  |  |  | false | false | Saves the player's current inventory. It can be loaded later using 'Load Saved Inventory'. |
| Disguise Self as a Block | player_self_disguise_as_block | player | appearance | basic | block: block |  |  | false | false | Disguises the player as a block, but this disguise is only visible to that player. |
| Disguise Self as an Entity | player_self_disguise_as_entity | player | appearance | basic | entity_type: item |  |  | false | false | Maximizes the player as an entity, but this disguise is only visible to that player. |
| Disguise Self As Item | player_self_disguise_as_item | player | appearance | basic | item: item |  |  | false | false | Disguises the player as an item onto to themself. |
| Send Action Bar Message | player_send_action_bar | player | communication | basic | messages: text<br/>merging: enum |  |  | false | false | Shows an action bar to the selected player. |
| Send an Advancement to a Player | player_send_advancement | player | communication | basic | frame: enum<br/>name: text<br/>icon: item |  |  | false | false | Shows a player a custom advancement popup. |
| Show Block Break Animation | player_send_break_animation | player | world | basic | locations: location<br/>stage: number |  |  | false | false | Shows a block breaking animation for the player without affecting other players. |
| Dialogue | player_send_dialogue | player | communication | basic | messages: text<br/>delay: number |  |  | false | false | Sends multiple chat messages to selected players with a delay after each message. |
| Send Hover Message | player_send_hover | player | communication | basic | message: text<br/>hover: text |  |  | false | true | Sends a message to the selected player. When a player 'hovers' over it, a second message appears. |
| Send Message | player_send_message | player | communication | basic | messages: text<br/>merging: enum |  |  | false | false | Sends a message to the chat to the specified players. |
| Send a MiniMessage | player_send_minimessage | player | communication | basic | minimessage: text |  |  | false | true | Sends a MiniMessage message to a player. |
| Send Title | player_send_title | player | communication | basic | title: text<br/>subtitle: text<br/>fade_in: number<br/>stay: number<br/>fade_out: number |  |  | false | false | Shows two captions to the screen for the selected player - a title and a subtitle. |
| Set Bonus Health | player_set_absorption_health | player | parameters | basic | health: number |  |  | false | false | Sets a player's bonus health. |
| Set Remaining Air | player_set_air_ticks | player | parameters | basic | ticks: number |  |  | false | false | Sets the player's remaining air. |
| Set Player Flying Permission | player_set_allow_flying | player | settings | basic | allow_flying: enum |  |  | false | false | Sets the flying permission for the player. |
| Set Armor | player_set_armor | player | item_management | basic | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item |  |  | false | false | Sets the player's armor. |
| Set Arrows On Player | player_set_arrows_in_body | player | appearance | basic | amount: number |  |  | false | false | Displays a set number of arrows on the player. |
| Set Attack Speed | player_set_attack_speed | player | parameters | basic | speed: number |  |  | false | false | Sets the player's attack speed. |
| Set Attribute | player_set_attribute | player | parameters | basic | value: number<br/>attribute_type: enum |  |  | false | false | Sets the specified attribute of a player. |
| Set Bee Stingers On Player | player_set_bee_stingers_in_body | player | appearance | basic | amount: number |  |  | false | false | Displays a set number of bee stingers on the player. |
| Open/Close Block | player_set_block_opened_state | player | world | basic | location: location<br/>is_opened: enum | Chest<br/>Trap Chest<br/>Ender Chest<br/>Shulker Boxes<br/>Barrel |  | false | false | Display block opening/closing to the player without changing the block state for other players. |
| Set Boss Bar | player_set_boss_bar | player | communication | basic | id: text<br/>title: text<br/>progress: number<br/>color: enum<br/>style: enum<br/>sky_effect: enum |  |  | false | false | Sets a custom boss bar for a specific player. |
| Modify Chat Suggestions | player_set_chat_completions | player | communication | basic | completions: text<br/>setting_mode: enum |  |  | false | false | Modifies the player's auto-completion suggestions shown when typing in chat. |
| Set Collidable Mode | player_set_collidable | player | settings | basic | collidable: enum |  |  | false | false | Sets the player's creature collision mode. |
| Set Compass Target | player_set_compass_target | player | world | basic | location: location |  |  | false | false | Sets the player's compass target in which direction the compass needle will point. |
| Set Item on Cursor | player_set_cursor_item | player | item_management | basic | item: item |  |  | false | false | Sets an item on the player's cursor. |
| Set Death Drops | player_set_death_drops | player | settings | basic | death_drops: enum |  |  | false | false | Sets items dropped from a player upon death. |
| Set Score Count | player_set_death_screen_score | player | parameters | basic | score: number |  | After the value is set, the score count still changes when the player gains experience. | false | false | Sets the score count displayed to the player on the death screen. |
| Set Visibility | player_set_default_visible | player | settings | basic | default_visible: enum |  |  | false | false | Sets the player's visibility. |
| Set Enchantment Seed | player_set_enchantment_seed | player | parameters | basic | seed: number |  |  | false | false | Sets the player's enchantment seed, which determines the set of enchantments in the enchanting table. |
| Set Ender Chest Contents | player_set_ender_chest_contents | player | item_management | basic | items: item |  |  | false | false | Sets items in the player's Ender Chest inventory. |
| Set Entity Glowing | player_set_entity_glowing | player | world | basic | name_or_uuid: text<br/>color: enum<br/>glow: enum |  |  | false | false | Toggles entity glowing effect for a player. |
| Set Equipment | player_set_equipment | player | item_management | basic | item: item<br/>slot: enum |  |  | false | false | Sets an item to one of player's equipment slots (armor and items in hand). |
| Set Exhaustion Level | player_set_exhaustion | player | parameters | basic | exhaustion: number<br/>mode: enum |  |  | false | false | Sets the exhaustion level of the player. |
| Set Experience | player_set_experience | player | parameters | basic | experience: number<br/>mode: enum |  |  | false | false | Sets a player's level. |
| Set Fall Distance | player_set_fall_distance | player | parameters | basic | distance: number |  |  | false | false | Sets the distance at which the player falls. |
| Set Player on Fire | player_set_fire_ticks | player | parameters | basic | ticks: number |  |  | false | false | Sets a player on fire for the selected amount of time. |
| Set Flying | player_set_flying | player | movement | basic | is_flying: enum |  |  | false | false | Sets the player's flying state. |
| Set Fog Distance | player_set_fog_distance | player | world | basic | distance: number |  |  | false | false | Sets the chunk draw distance for the player. The value "-1" resets to standard. |
| Set Hunger | player_set_food | player | parameters | basic | food: number<br/>mode: enum |  |  | false | false | Sets a player's hunger level. |
| Set Freeze Time | player_set_freeze_ticks | player | parameters | basic | ticks: number<br/>ticking_locked: enum |  |  | false | false | Sets the player's freeze time (the number of ticks the player has spent in powder snow). |
| Set Game Mode | player_set_gamemode | player | settings | basic | gamemode: enum<br/>flight_mode: enum |  |  | false | false | Sets the game mode for the player. |
| Set Elytra Flying | player_set_gliding | player | movement | basic | is_gliding: enum |  |  | false | false | Sets the player's elytra flying state. |
| Set Player Health | player_set_health | player | parameters | basic | health: number |  |  | false | false | Sets a player's health to the selected amount. |
| Set Hotbar Slot | player_set_hotbar_slot | player | parameters | basic | slot: number |  |  | false | false | Sets the selected slot to a player. |
| Set Instant Respawn | player_set_instant_respawn | player | settings | basic | instant_respawn: enum |  |  | false | false | Sets an instant respawn for a player. |
| Set Keep Inventory | player_set_inventory_kept | player | settings | basic | kept: enum |  |  | false | false | Sets the player to keep their inventory on death. |
| Set Open Inventory Custom ID | player_set_inventory_menu_custom_id | player | inventory_menus | basic | custom_id: text |  |  | false | false | Sets a custom ID for the player's open inventory menu. |
| Set Item Into Inventory Slot | player_set_inventory_menu_item | player | inventory_menus | basic | item: item<br/>slot: number |  |  | false | false | Sets an item to the specified slot in the player's open inventory menu. |
| Set Inventory Menu Name | player_set_inventory_menu_name | player | inventory_menus | basic | text: text |  |  | false | false | Sets a new name for the player's opened inventory menu. |
| Set Invulnerability Duration | player_set_invulnerability_ticks | player | parameters | basic | ticks: number |  |  | false | false | Sets the invulnerability duration for the player. |
| Set Item Cooldown | player_set_item_cooldown | player | item_management | basic | item: item<br/>cooldown: number<br/>sound: sound |  |  | false | false | Applies a cooldown visual effect to all items of the selected type. |
| Set Item Group Cooldown | player_set_item_group_cooldown | player | item_management | basic | key: text<br/>cooldown: number |  |  | false | false | Applies the cooldown visual effect to all items in the specified group. |
| Set Items | player_set_items | player | item_management | basic | items: item |  |  | false | false | Sets a player's inventory accordingly to items from the chest. |
| Set Player Max Health | player_set_max_health | player | parameters | basic | health: number<br/>heal: enum |  |  | false | false | Sets a player's maximum health. |
| Set Max Invulnerability | player_set_max_invulnerability_ticks | player | parameters | basic | ticks: number |  |  | false | false | Sets the max invulnerability ticks. |
| Set Movement Speed | player_set_movement_speed | player | parameters | basic | distance: number<br/>movement_type: enum |  |  | false | false | Sets the player's movement speed. |
| Set Nickname Visible | player_set_nametag_visible | player | settings | basic | visible: enum |  |  | false | false | Display or hide the nickname above the head. |
| Set Player Tab List Text | player_set_player_list_info | player | communication | basic | text: text<br/>position: enum<br/>merging: enum |  |  | false | false | Sets the text above or below the player list for a player. |
| Set Player Pose | player_set_pose | player | appearance | basic | pose: enum<br/>locked: enum |  |  | false | false | Sets a specific player pose. |
| Set PVP Enabled | player_set_pvp | player | settings | basic | pvp: enum |  |  | false | false | Sets the player's permission to attack and damage other players. |
| Set Rain Level | player_set_rain_level | player | world | basic | rain_level: number |  |  | false | false | Sets player's level of rain |
| Set Rotation | player_set_rotation | player | movement | basic | yaw: number<br/>pitch: number |  |  | false | false | Sets the player's rotation. |
| Set Rotation By Vector | player_set_rotation_by_vector | player | movement | basic | vector: vector |  |  | false | false | Sets player rotation by vector. |
| Set Saturated Regeneration Rate | player_set_saturated_regen_rate | player | parameters | basic | rate: number |  | The default value is 10. | false | false | Sets the player's health regeneration rate while saturated. |
| Set Saturation | player_set_saturation | player | parameters | basic | saturation: number<br/>mode: enum |  |  | false | false | Sets a player's secondary hunger level (saturation). |
| Set Simulation Distance | player_set_simulation_distance | player | world | basic | distance: number |  |  | false | false | Sets the chunk simulation distance for the player. |
| Set Skin | player_set_skin | player | appearance | basic | name_or_uuid: text<br/>server_type: enum |  |  | false | false | Sets the specified player's skin for the target of the event. |
| Set Item In Slot | player_set_slot_item | player | item_management | basic | item: item<br/>slot: number |  |  | false | false | Sets an item to a slot in a player's inventory. |
| Set Spawn Location | player_set_spawn_point | player | settings | basic | spawn_point: location |  |  | false | false | Sets the player to a new spawn location. |
| Set Starvation Rate | player_set_starvation_rate | player | parameters | basic | rate: number |  | The default value is 80. | false | false | Sets the player's starvation rate. |
| Set Thunder Level | player_set_thunder_level | player | world | basic | thunder_level: number |  | Rainy weather is required to set thunder level | false | false | Sets player's level of thunder |
| Set Tick Rate | player_set_tick_rate | player | world | basic | tick_rate: number |  |  | false | false | Sets the player's tick rate. |
| Set Player Time | player_set_time | player | world | basic | time: number |  |  | false | false | Set a player's time without changing it for other players. |
| Set Unsaturated Regeneration Rate | player_set_unsaturated_regen_rate | player | parameters | basic | rate: number |  | The default value is 80. | false | false | Sets the player's health regeneration rate while unsaturated. |
| Set Velocity | player_set_velocity | player | movement | basic | velocity: vector<br/>increment: enum |  |  | false | false | Launches the player along the specified vector. |
| Set Visual Fire | player_set_visual_fire | player | appearance | basic | visual_fire: enum |  |  | false | false | Sets the player to a burning effect. |
| Set Waypoint Icon Color | player_set_waypoint_color | player | settings | basic | red: number<br/>green: number<br/>blue: number |  | For this action to work, the "Location Bar Visibility" game rule must be enabled. | false | false | Sets the color of the icon displayed on the player's location bar. |
| Set Waypoint Icon Style | player_set_waypoint_style | player | settings | basic | style: text |  |  | false | false | Sets the icon style displayed on the player's location bar. |
| Set Weather | player_set_weather | player | world | basic | weather_type: enum |  |  | false | false | Set player weather without affecting other players. |
| Set World Border | player_set_world_border | player | world | basic | center: location<br/>size: number<br/>warning: number |  |  | false | false | Set the world border for a player without changing it for other players. |
| Shift World Border | player_shift_world_border | player | world | basic | old_size: number<br/>size: number<br/>time: number |  |  | false | false | Move the world border for the player without changing it for other players. |
| Show custom recipe | player_show_custom_recipe | player | miscellaneous | basic | names: text<br/>is_vanilla_recipe: enum |  |  | false | false | Displays a new recipe to the player in the recipe book. |
| Show Debug Marker | player_show_debug_marker | player | world | basic | location: location<br/>name: text<br/>duration: number<br/>red: number<br/>green: number<br/>blue: number<br/>alpha: number |  | Leave the "Display Name" argument blank to hide the name completely. | false | false | Shows the player a debug marker at the location at the specified time. Red and blue colors work for players on version 1.19.4 and above. |
| Show Demo Screen | player_show_demo_screen | player | communication | basic |  |  |  | false | false | Shows the demo screen to the player. |
| Show Dialog Menu | player_show_dialog_menu_from_nbt | player | communication | basic | dialog_nbt: text |  |  | false | false | Shows a dialog menu to the player from NBT tags. |
| Show Inventory Menu | player_show_inventory_menu | player | inventory_menus | basic | items: item<br/>name: text<br/>custom_id: text<br/>inventory_type: enum |  |  | false | false | Shows the player an inventory menu with selected items and title. |
| Show Scoreboard | player_show_scoreboard | player | miscellaneous | basic | id: text |  |  | false | false | Displays a specific scoreboard to a player. The specified scoreboard must have at least one value to be displayed. |
| Show Credits Screen | player_show_win_screen | player | communication | basic |  |  |  | false | false | Shows the player the credits screen. |
| Spectate Target | player_spectate_target | player | movement | basic | name_or_uuid: text |  |  | false | false | Sets the player's spectate target in spectator mode. |
| Start Using Item | player_start_using_item | player | item_management | basic | equipment: enum |  |  | false | false | Starts using the item in the specified hand. |
| Stop Sound | player_stop_sound | player | communication | basic | sounds: sound |  |  | false | false | Stops all or certain sounds for the player. |
| Stop Sounds By Source | player_stop_sounds_by_source | player | communication | basic | source: enum |  |  | false | false | Stops all sounds from the specified source. |
| Play Swing Hand Animation | player_swing_hand | player | appearance | basic | hand_type: enum |  |  | false | false | Plays a swinging hand animation for the player. |
| Teleport | player_teleport | player | movement | basic | location: location<br/>keep_rotation: enum<br/>keep_velocity: enum<br/>dismount: enum |  | Closes an open inventory menu. | false | false | Teleports the player to the selected location. |
| Teleport Sequence | player_teleport_sequence | player | movement | basic | delay: number<br/>locations: location |  |  | false | false | Teleports the player between locations with the specified delay. |
| Transfer to Another Server | player_transfer_to_other_server | player | miscellaneous | basic | domain: text<br/>port: number |  | If the "Server Port" argument is left empty, the default port (25565) will be used. | false | false | Transfers the player to the specified server. |
| Request Transaction | send_currency_transaction | player | miscellaneous | basic | amount: number<br/>description: text<br/>reason: text |  |  | false | false | Sends the player a request to make a transaction in emeralds. |
