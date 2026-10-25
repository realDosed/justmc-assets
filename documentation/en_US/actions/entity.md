# Entity actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Attach Lead | entity_attach_lead | entity | movement | name_or_uuid: text<br/>location: location | Tethers an entity to a fence or entity. |
| Clear All Potion Effects | entity_celar_potion_effects | entity | parameters |  | Clears all effects on an entity. |
| Clear Merchant Recipes | entity_clear_merchant_recipes | entity | settings |  | Clears all trades to a Villager. |
| Complete Item Use | entity_complete_using_active_item | entity | goals |  | Completes the use of the current item in hand with a result. |
| Deal Damage | entity_damage | entity | parameters | damage: number<br/>source: text | Deals damage to an entity. |
| Disguise as Block | entity_disguise_as_block | entity | appearance | block: block | Disguise an entity as a block. |
| Disguise as Entity | entity_disguise_as_entity | entity | appearance | entity_type: item | Disguise an entity as an entity. |
| Disguise as Item | entity_disguise_as_item | entity | appearance | item: item | Disguises an entity as an item. |
| Disguise as Player | entity_disguise_as_player | entity | appearance | name_or_uuid: text<br/>display_name: text<br/>server_type: enum | Disguises an entity as a player. |
| Eat Grass | entity_eat_grass | entity | goals |  | Makes a sheep eat grass. |
| Set Eat Target | entity_eat_target | entity | goals | name_or_uuid: text | Sets a target for an entity to eat. |
| Explode | entity_explode | entity | goals |  | Causes an entity to explode. |
| Face to Location | entity_face_location | entity | movement | location: location | Turns an entity towards a location. |
| Get Entity Attribute Value | entity_get_attribute | entity | parameters | variable: variable<br/>attribute_type: enum<br/>return_value: enum | Gets the value of the specified attribute of an entity and assigns the result to a variable. |
| Get Custom Tag | entity_get_custom_tag | entity | miscellaneous | variable: variable<br/>name: text<br/>default: any | Gets a creature's custom nbt tag. |
| Get Custom Tags | entity_get_custom_tags | entity | miscellaneous | variable: variable | Retrieves the custom tags of an entity and assigns the result to a variable. |
| Get Entity Equipment | entity_get_equipment_item | entity | miscellaneous | variable: variable<br/>slot: enum | Gets the equipment of an entity from the specified slot and assigns the result to a variable. |
| Get Entity NBT Tags | entity_get_nbt | entity | miscellaneous | variable: variable<br/>path: text<br/>value_type: enum | Gets the NBT tags of an entity at the specified path and assigns the result to a variable. |
| Give Potion Effect | entity_give_potion_effects | entity | parameters | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum | Gives the selected effects to the creature. |
| Heal Entity | entity_heal | entity | parameters | heal: number | Heals an entity. |
| Ignite Creeper | entity_ignite_creeper | entity | goals |  | Sets a creeper on fire, causing it to explode after a certain period. |
| Jump | entity_jump | entity | goals |  | Makes an entity jump. |
| Launch Forward | entity_launch_forward | entity | movement | power: number<br/>increment: enum<br/>launch_axis: enum | Launches an entity forward or backward in the direction it is facing based on its power. |
| Launch Projectile | entity_launch_projectile | entity | miscellaneous | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle | Launch a projectile from an entity's location. |
| Launch To Location | entity_launch_to_location | entity | movement | location: location<br/>power: number<br/>increment: enum | Launches creatures to the selected location. |
| Launch Up | entity_launch_up | entity | movement | power: number<br/>increment: enum | Tosses an entity up or down based on strength. |
| Dismount | entity_leave_vehicle | entity | movement |  | Dismounts an entity from another entity or vehicle. |
| Disguise Entity as World Entity | entity_mimic_disguise_from_entity | entity | appearance | name_or_uuid: text<br/>include_disguise: enum<br/>remove_original_entity: enum | Disguises the entity as the specified entity from the world. |
| Modify Piglin Barter Materials | entity_modify_piglin_barter_materials | entity | settings | materials: item<br/>modification_mode: enum | Modify the items a Piglin gives after bartering. |
| Modify Piglin Interested Materials | entity_modify_piglin_interested_materials | entity | settings | materials: item<br/>modification_mode: enum | Modify the items a Piglin is interested in. |
| Move To Location | entity_move_to_location | entity | goals | location: location<br/>speed: number | Instructs the entity AI to always find its way to a certain location at a certain speed. |
| Stop Moving To Location | entity_move_to_location_stop | entity | goals |  | Stops an entity moving to a location. |
| Play Damage Animation | entity_play_damage_animation | entity | appearance | damage_type: enum | Displays an entity damage animation. |
| Play Hurt Animation | entity_play_hurt_animation | entity | appearance | yaw: number | Plays the damage animation. |
| Ram Entity | entity_ram_target | entity | goals | name_or_uuid: text | Causes goats to ram the target entity. |
| Remove Entity | entity_remove | entity | miscellaneous |  | Removes an entity from the world. |
| Remove Custom Tag | entity_remove_custom_tag | entity | miscellaneous | name: text | Removes a custom NBT tag from an entity. |
| Remove Custom Tags | entity_remove_custom_tags | entity | miscellaneous |  | Removes all custom tags of the entity. |
| Remove Disguise | entity_remove_disguise | entity | appearance |  | Removes an entity's disguise. |
| Remove Merchant Recipe | entity_remove_merchant_recipe | entity | settings | recipe_index: number | Removes an item to the Villager at the specified index. |
| Remove Potion Effect | entity_remove_potion_effect | entity | parameters | effects: potion | Removes the selected effects from an entity. |
| Reset Brightness | entity_reset_display_brightness | entity | display_entity |  | Reset the brightness of an entity renderer. |
| Reset Glow Color | entity_reset_display_glow_color | entity | display_entity |  | Reset the glow color of the render entity. |
| Clear Mannequin Description | entity_reset_mannequin_description | entity | appearance |  | Clears the mannequin's description. |
| Reset Background Color | entity_reset_text_display_background | entity | display_entity |  | Reset the background color and transparency of the text renderer. |
| Reset Waypoint Icon Color | entity_reset_waypoint_color | entity | settings |  | Resets the color of the icon displayed on the locator bar for the entity to default. |
| Retrieve Fishing Hook | entity_retrieve_fishing_hook | entity | goals | slot: enum | Retracts the cast fishing hook of the fishing rod held in the specified hand of the entity. |
| Ride an Entity | entity_ride_entity | entity | movement | name_or_uuid: text | Rides an entity onto another entity or player. |
| Set Armadillo Roll State | entity_roll_armadillo | entity | goals | roll: enum | Sets the roll state of an armadillo (whether the armadillo is rolled up). |
| Set Extra Health | entity_set_absorption_health | entity | parameters | health: number | Sets an entity's bonus health. |
| Set age lock | entity_set_age_lock | entity | settings | age_lock: enum | Set age lock to entity. |
| Set Entity Intelligence | entity_set_ai | entity | settings | ai: enum | Sets the intelligence of an entity. |
| Set Allay Dancing | entity_set_allay_dancing | entity | goals | dance: enum | Sets the Quiet Entity to display a dancing animation. |
| Set Anger Mode | entity_set_angry | entity | settings | angry: enum<br/>target: text | Sets an entity to anger mode on a specific target. |
| Set Animal Age | entity_set_animal_age | entity | parameters | age: number<br/>lock: enum | Sets the age of an animal. |
| Set Armor | entity_set_armor_items | entity | miscellaneous | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>silent: enum | Sets an entity's armor. |
| Set Armor Stand Parts | entity_set_armor_stand_parts | entity | appearance | arms: enum<br/>base_plate: enum | Set armor stand parts. |
| Set Armor Stand Pose | entity_set_armor_stand_pose | entity | appearance | x_rotation: number<br/>y_rotation: number<br/>z_rotation: number<br/>body_part: enum | Sets the pose of an armor stand. |
| Set Projectile Hit Sound | entity_set_arrow_hit_sound | entity | miscellaneous | sound: sound | Sets the sound a projectile makes when it hits an entity or player. |
| Set Arrow Pierce Count | entity_set_arrow_pierce | entity | parameters | pierce: number | Sets the amount of times an arrow can pierce an entity (from 0 to 127). |
| Set Attribute | entity_set_attribute | entity | parameters | value: number<br/>attribute_type: enum | Sets the specified attribute to the specified entity value. |
| Set Mob Awareness | entity_set_aware | entity | goals | aware: enum | When disabled, disables the AI of the mob, but leaves interaction with gravity, pushing, etc. |
| Set Axolotl Type | entity_set_axolotl_type | entity | appearance | axolotl_type: enum | Sets the axolotl type. |
| Set Child Mode | entity_set_baby | entity | settings | baby: enum | Sets an entity to child mode. |
| Set Projectile Base Damage | entity_set_base_arrow_damage | entity | parameters | damage: number | Sets the projectile's base damage, which will be used in the projectile's damage formula when it hits. |
| Set Bee Stinger | entity_set_bee_has_stinger | entity | settings | stinger: enum | Toggles whether a bee has a stinger. |
| Set Bee Pollen | entity_set_bee_nectar | entity | appearance | nectar: enum | Sets the visibility of pollen to the bee. |
| Set Display Block | entity_set_block_display_block | entity | display_entity | displayed_block: block | Sets the display block to the block renderer. |
| Set Camel Dashing Animation | entity_set_camel_dashing | entity | settings | dashing: enum | Sets the dashing animation for the camel. |
| Set Chest Visibility | entity_set_carrying_chest | entity | settings | carrying: enum | Sets the visibility of the chest on the entity. |
| Set Cat Lying Down | entity_set_cat_lying_down | entity | appearance | lying_down: enum | Sets the lying down mode for the cat. |
| Set Cat Type | entity_set_cat_type | entity | appearance | cat_type: enum | Sets the type of cat. |
| Set Celebrating Mode | entity_set_celebrating | entity | goals | celebrating: enum | Sets the entity's celebrating mode. |
| Set Chicken Type | entity_set_chicken_type | entity | appearance | variant: enum | Sets the color variant of a chicken. |
| Set Collidable Mode | entity_set_collidable | entity | settings | collidable: enum | Sets an entity to collide with other entities. |
| Set Copper Golem Waxed State | entity_set_copper_golem_oxidizing | entity | settings | oxidizing_state: enum | Sets the waxed state of the copper golem. |
| Set Copper Golem Oxidation Time | entity_set_copper_golem_oxidizing_at_time | entity | settings | time: number | Sets the time it takes for the copper golem to increase its oxidation level in the rain. |
| Set Copper Golem Oxidation Level | entity_set_copper_golem_weathering | entity | settings | weathering_state: enum | Sets the oxidation level of the copper golem. |
| Set Cow Type | entity_set_cow_type | entity | appearance | variant: enum | Sets the color variant of a cow. |
| Set Creeper Charge | entity_set_creeper_charge | entity | settings | charged: enum | Sets whether the creeper will be charged. |
| Set Creeper Max Fuse Time | entity_set_creeper_fuse | entity | parameters | fuse_ticks: number | Sets the creeper's time before it explodes. |
| Set Entity Health | entity_set_current_health | entity | parameters | health: number | Sets an entity's health to the selected amount. |
| Set Name | entity_set_custom_name | entity | settings | custom_name: text | Sets a name for an entity. |
| Set Name Visibility | entity_set_custom_name_visibility | entity | settings | visibility: enum | Sets the visibility of the entity name. |
| Set Custom Tag | entity_set_custom_tag | entity | miscellaneous | name: text<br/>value: text | Sets a custom nbt tag to an entity. |
| Set Drops Items | entity_set_death_drops | entity | settings | drops: enum | Sets whether an entity will drop loot. |
| Set Death Time | entity_set_death_time | entity | parameters | death_time: number | Sets the death duration for an entity. |
| Set Visibility | entity_set_default_visible | entity | settings | default_visible: enum | Sets whether an entity is visible. |
| Set Entity Despawning | entity_set_despawning | entity | settings | despawning: enum | Sets whether an entity will despawn. |
| Set Display Mode | entity_set_display_billboard | entity | display_entity | billboard_type: enum | Sets the display mode of the billboard entity. |
| Set Brightness | entity_set_display_brightness | entity | display_entity | block_light_level: number<br/>sky_light_level: number | Sets the brightness of the renderer entity. |
| Set Transformation Matrix | entity_set_display_correct_transformation_matrix | entity | display_entity | matrix: number | Sets the transformation matrix of a display entity. |
| Set Visibility Size | entity_set_display_culling_suze | entity | display_entity | width: number<br/>height: number | Sets the size of the visualizer entity's model scope. |
| Set Glow Color | entity_set_display_glow_color | entity | display_entity | color_hexadecimal: text | Sets the glow color for the render entity. |
| Set Interpolation | entity_set_display_interpolation | entity | display_entity | interpolation_duration: number<br/>interpolation_delay: number | Sets the interpolation duration for the renderer entity. |
| Set Rotation From Axis Vector | entity_set_display_rotation_from_axis_angle | entity | display_entity | axis_vector: vector<br/>angle: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Sets left or right rotation by axis vector and angle of the renderer entity. |
| Set Rotation From Euler Angles | entity_set_display_rotation_from_euler_angles | entity | display_entity | yaw: number<br/>pitch: number<br/>roll: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Sets left or right Euler angle rotation for the renderer entity. |
| Set Rotation From Vector | entity_set_display_rotation_from_vector | entity | display_entity | direction: vector<br/>up: vector<br/>rotation: enum | Sets the rotation of the renderer entity by the given direction vector and "Up" vector. |
| Set Scale | entity_set_display_scale | entity | display_entity | scale_vector: vector<br/>mode: enum | Sets the size of the renderer entity. |
| Set Shadow Settings | entity_set_display_shadow | entity | display_entity | shadow_radius: number<br/>shadow_opacity_percentage: number | Sets the size and transparency of the shadow of the entity renderer. |
| Set Display Teleport Duration | entity_set_display_teleport_duration | entity | display_entity | duration: number | Sets the interpolation duration for display entity teleports. |
| Set Transformation Matrix | entity_set_display_transformation_matrix | entity |  | row_major_matrix: number | Sets the transformation matrix (row-column) of the renderer entity. |
| Set Translation | entity_set_display_translation | entity | display_entity | translation_vector: vector<br/>mode: enum | Sets an offset to the renderer entity. |
| Set Visibility Range | entity_set_display_view_range | entity | display_entity | view_range: number | Sets the visibility range of the renderer entity. |
| Set Ender Dragon Phase | entity_set_dragon_phase | entity | goals | phase: enum | Sets a specific phase for an Ender Dragon. |
| Set Entity Color | entity_set_dye_color | entity | appearance | color: enum | Sets a specific color for an entity. |
| Set End Crystal Beam | entity_set_end_crystal_beam | entity | settings | beam: location | Points an End Crystal Beam to a specific location. |
| Set Block to Enderman | entity_set_enderman_block | entity | appearance | block: block | Sets the rendered block to the enderman. |
| Set Equipment | entity_set_equipment_item | entity | miscellaneous | item: item<br/>slot: enum | Sets an item to one of the equipment slots (armor and items in hands) of an entity. |
| Set Explosive Power | entity_set_explosive_power | entity | parameters | power: number | Sets the power of an entity's explosion. |
| Set Fall Distance | entity_set_fall_distance | entity | parameters | fall_distance: number | Sets the distance at which an entity falls. |
| Set Falling Block Type | entity_set_falling_block_type | entity | miscellaneous | block: block | Sets a block type to a Falling block |
| Set on Fire | entity_set_fire_ticks | entity | parameters | ticks: number | Sets an entity on fire for the selected amount of time. |
| Set Fishing Delay | entity_set_fishing_wait | entity | parameters | time: number<br/>wait_type: enum | Sets the entity's fishing delay in ticks. |
| Set Fox Leaping Animation | entity_set_fox_leaping | entity | appearance | leaping: enum | Sets the fox's jumping animation. |
| Set Fox Type | entity_set_fox_type | entity | appearance | fox_type: enum | Sets the fox type. |
| Set Freeze Time | entity_set_freeze_ticks | entity | parameters | ticks: number<br/>ticking_locked: enum | Sets the freeze time for an entity (the number of ticks an entity has spent in powder snow). |
| Set Friction | entity_set_friction | entity | movement | friction: enum | Sets whether the entity will experience friction. |
| Set Frog Type | entity_set_frog_type | entity | appearance | frog_variant: enum | Sets the color of the frog. |
| Set Fuse Time | entity_set_fuse_ticks | entity | parameters | fuse_ticks: number | Sets the entity's time before it explodes. |
| Set Elytra Flying | entity_set_gliding | entity | movement | is_gliding: enum | Sets the creature's elytra flying state. |
| Set Squid Glow Time | entity_set_glow_squid_dark | entity | appearance | dark_ticks: number | Sets the duration of darkness in ticks for the glowing octopus. |
| Set Entity Glowing | entity_set_glowing | entity | appearance | glowing: enum | Sets an entity to a glowing effect. |
| Set Goat Screaming | entity_set_goat_screaming | entity | settings | screams: enum | Sets the "screaming" goat tag. |
| Set Gravity | entity_set_gravity | entity | movement | gravity: enum | Sets whether an entity will obey gravity. |
| Set Hanging Entity Block Face | entity_set_hanging_facing_location | entity | settings | facing: enum<br/>force: enum | Sets the block face a hanging entity is attached to. |
| Set Horse Jump Power | entity_set_horse_jump | entity | parameters | power: number | Sets the horse's jump power. |
| Set Horse Pattern | entity_set_horse_pattern | entity | appearance | horse_color: enum<br/>horse_style: enum | Sets the color and pattern of the horse. |
| Set Immune To Zombification | entity_set_immune_to_zombification | entity | settings | is_immune: enum | Sets entity immunity to zombification. |
| Set Interaction Entity Responsiveness | entity_set_interaction_responsive | entity | settings | responsive: enum | Sets whether an interaction entity will be responsive to interactions. |
| Set Interaction Entity Size | entity_set_interaction_size | entity | settings | width: number<br/>height: number | Sets the horizontal and vertical sizes of an interaction entity. |
| Set Invisible Mode | entity_set_invisible | entity | settings | invisible: enum | Sets an entity to invisible mode. |
| Set Invulnerability Duration | entity_set_invulnerability_ticks | entity | parameters | ticks: number | Sets the invulnerability duration for a creature. |
| Set Entity Invulnerable | entity_set_invulnerable | entity | settings | invulnerable: enum | Sets an entity's invulnerability, but can deal damage in creative mode. |
| Set Entity Item Type | entity_set_item | entity | miscellaneous | item: item | Sets a specific type (ID) to an Item entity. |
| Set Display Item | entity_set_item_display_item | entity | display_entity | displayed_item: item | Sets the display item to the item renderer. |
| Set Item Model Type | entity_set_item_display_model_type | entity | display_entity | display_model_type: enum | Sets the type of the item's display model to the item renderer. |
| Set Item Frame Item Drop Chance | entity_set_item_frame_item_drop_chance | entity | miscellaneous | drop_chance: number | Sets the drop chance of the item in an item frame when destroyed. |
| Set Item in Frame | entity_set_item_in_frame | entity | appearance | item: item<br/>play_sound: enum | Sets the specified item in a frame. |
| Set Item Owner | entity_set_item_owner | entity | settings | name_or_uuid: text | Sets the owner of an item entity. |
| Set Llama Color | entity_set_llama_type | entity | appearance | type: enum | Sets the color of the llama. |
| Launch By Vector | entity_set_location | entity | movement | velocity: vector<br/>increment: enum | Launches an entity at the specified vector. |
| Set Mannequin Description | entity_set_mannequin_description | entity | appearance | description: text | Sets the mannequin's description. |
| Set Mannequin Movement | entity_set_mannequin_immovable | entity | settings | immovable: enum | Sets whether the mannequin can move. |
| Set Mannequin Main Hand | entity_set_mannequin_main_hand | entity | appearance | hand: enum | Sets the main hand of the mannequin. |
| Set Mannequin Skin | entity_set_mannequin_skin | entity | appearance | name_or_uuid: text<br/>server_type: enum | Sets the mannequin's skin. |
| Set Mannequin Skin Model Type | entity_set_mannequin_skin_model | entity | appearance | model: enum | Sets the skin model type of the mannequin. |
| Set Mannequin Skin Layers | entity_set_mannequin_skin_parts | entity | appearance | hat: enum<br/>jacket: enum<br/>left_sleeve: enum<br/>right_sleeve: enum<br/>left_pants: enum<br/>right_pants: enum<br/>cape: enum | Sets the visibility of the mannequin's skin layers. |
| Set Mannequin Skin Patch Texture | entity_set_mannequin_skin_patch | entity | appearance | texture_key: text<br/>patch_target: enum | Sets the texture for the specified part of the mannequin. |
| Set Marker Mode | entity_set_marker | entity | settings | marker: enum | Sets the armor rack marker mode. |
| Set Max Health | entity_set_max_health | entity | parameters | max_health: number<br/>heal_to_max: enum | Sets the maximum amount of health for an entity. |
| Set Max Invulnerability | entity_set_max_invulnerability_ticks | entity | parameters | ticks: number | Sets the maximum invulnerability duration for the entity. |
| Set Merchant Recipe | entity_set_merchant_recipe | entity | settings | result: item<br/>ingredient_one: item<br/>ingredient_two: item<br/>index: number<br/>mode: enum<br/>uses: number<br/>max_uses: number<br/>villager_experience: number<br/>price_multiplifier: number<br/>demand: number<br/>special_price: number<br/>ignore_discounts: enum<br/>experience_reward: enum | Sets an item to a Villager for certain items at the specified index. |
| Set Block to Minecart | entity_set_minecart_block | entity | appearance | block: block<br/>block_offset: number | Sets the specified block into the Minecart. |
| Set Mob Aggressive | entity_set_mob_aggressive | entity | appearance | aggressive: enum | Sets the agression of the mob. |
| Set Mushroom Cow Type | entity_set_mushroom_cow_type | entity | appearance | cow_type: enum | Sets the mushroom cow type. |
| Set Entity Physics | entity_set_no_physics | entity | settings | no_physics: enum | Toggles whether an entity is affected by physics. |
| Set Painting Art | entity_set_painting_art | entity | miscellaneous | art: text<br/>force: enum | Sets the art for a painting. |
| Set Panda Gene | entity_set_panda_gene | entity | settings | gene: enum<br/>gene_type: enum | Sets the panda gene. This affects their behavior and appearance. |
| Set Panda Sitting | entity_set_panda_on_back | entity | settings | on_back: enum | Toggles whether a panda is sitting. |
| Set Panda Rolling | entity_set_panda_rolling | entity | goals | rolling: enum | Set whether a panda is rolling. |
| Set Panda Sad Time | entity_set_panda_sad_ticks | entity | parameters | sad_ticks: number | Sets how long a panda is sad for in ticks. |
| Set Parrot Type | entity_set_parrot_type | entity | appearance | parrot_type: enum | Sets the parrot type. |
| Set pathfinder settings | entity_set_pathfinder_settings | entity | goals | can_float: enum<br/>can_open_door: enum<br/>can_pass_door: enum | Sets parameters and restrictions for the entity's pathfinding |
| Set Entity Persistence | entity_set_persistence | entity | settings | persistence: enum | Sets whether an item or falling block will persist. |
| Set Entity Persistence | entity_set_persistent | entity | settings | persistent: enum | Sets whether the entity will be saved after the world is unloaded. |
| Entity Set Pickup | entity_set_pickup | entity | settings | can_mob_pickup: enum<br/>can_player_pickup: enum | Sets which entities can pick up. |
| Set Pickup Delay | entity_set_pickup_delay | entity | parameters | delay: number | Sets the number of ticks an item cannot be picked up. |
| Set Pig Type | entity_set_pig_type | entity | appearance | variant: enum | Sets the color variant of a pig. |
| Set Piglin Able To Hunt | entity_set_piglin_able_to_hunt | entity | goals | able: enum | Sets the status of the Piglin's hunting state. |
| Set Pigling Charging Crossbow | entity_set_piglin_charging_crossbow | entity | goals | charging: enum | Sets the Piglin's crossbow loaded status. |
| Set Piglin Dancing | entity_set_piglin_dancing | entity | goals | dancing_time: number | Plays the dancing animation for a Piglin. |
| Set Entity Pose | entity_set_pose | entity | appearance | pose: enum | Sets a specific pose for an entity. |
| Set Effect Cloud Radius | entity_set_potion_cloud_radius | entity | parameters | radius: number<br/>shrinking_speed: number | Sets the radius of the effect cloud and how fast it expands. |
| Set Primed Tnt Block | entity_set_primed_tnt_block | entity | appearance | block: block | Disguises the Primed TNT as another block. |
| Set Projectile Item | entity_set_projectile_display_item | entity | appearance | item: item | Sets the projectile's visible item. |
| Set Projectile Vector Power | entity_set_projectile_power | entity | parameters | power: vector | Sets the projectile's motion vector. |
| Set Projectile Shooter | entity_set_projectile_shooter | entity | settings | uuid: text | Sets the specified creature as a projectile shooter. |
| Set Rabbit Type | entity_set_rabbit_type | entity | appearance | rabbit_type: enum | Sets the rabbit type. |
| Set Horse Pose | entity_set_rearing | entity | settings | rearing: enum | Sets whether the horse will stand on its hind legs. |
| Set Riptiding Animation | entity_set_riptiding | entity | settings | riptiding: enum | Sets the animation for an entity to use the Riptiding Trident Enchantment. |
| Set Rotation | entity_set_rotation | entity | movement | yaw: number<br/>pitch: number | Sets the rotation of an entity. |
| Set Rotation By Vector | entity_set_rotation_by_vector | entity | movement | vector: vector | Sets the entity rotation by vector. |
| Set Sheep Wool | entity_set_sheep_sheared | entity |  | sheared: enum | Sets whether sheep will have wool. |
| Set Shulker Bullet Target | entity_set_shulker_bullet_target | entity | goals | target: text | Sets an attack target for a Shulker projectile. |
| Set Shulker Open Percentage | entity_set_shulker_peek | entity | appearance | rolling: number<br/>silent: enum | Sets the percentage of which a shulker is peeking out of its shell. |
| Silence Entity | entity_set_silenced | entity | settings | silenced: enum | Removes entity sounds. |
| Set Sitting Mode | entity_set_sitting | entity | settings | sitting: enum | Sets the entity's sitting mode. |
| Set Entity Size | entity_set_size | entity | settings | size: number | Sets the size of an entity. |
| Set Sniffer State | entity_set_sniffer_state | entity | settings | state: enum | Sets a specific state for the sniffer. |
| Set Pumpkin to Snow Golem | entity_set_snowman_pumpkin | entity | appearance | pumpkin: enum | Sets the visibility of the pumpkin to the Snow Golem. |
| Tame Entity | entity_set_tame | entity | settings | name_or_uuid: text | Sets an entity's tame to the specified owner. |
| Set Target | entity_set_target | entity | goals | name_or_uuid: text | Instructs the entity AI to target a specific entity. |
| Set Text Alignment | entity_set_text_display_alignment | entity | display_entity | text_alignment: enum | Sets the text alignment of the text renderer. |
| Set Background Color | entity_set_text_display_background | entity | display_entity | color_hexadecimal: text<br/>opacity: number | Sets the background color and transparency of the text renderer. |
| Set Line Width | entity_set_text_display_line_width | entity | display_entity | line_width: number | Sets the maximum line width for the text renderer. |
| Set Text Opacity | entity_set_text_display_opacity | entity | display_entity | text_opacity: number | Sets the transparency of text to the text renderer. |
| Set Visibility Through Blocks | entity_set_text_display_see_through | entity | display_entity | enable_see_through: enum | Sets the visibility of text through blocks to the text renderer. |
| Set Display Text | entity_set_text_display_text | entity | display_entity | displayed_text: text<br/>merging_mode: enum | Sets the display text for the text renderer. |
| Set Text Shadow | entity_set_text_display_text_shadow | entity | display_entity | enable_text_shadow: enum | Sets the visibility of the text shadow to the text renderer. |
| Set Fish Pattern | entity_set_tropical_fish_pattern | entity | appearance | pattern_color: enum<br/>body_color: enum<br/>pattern: enum | Sets the color and pattern of a tropical fish. |
| Set Vex Charging | entity_set_vex_charging | entity | goals | charging: enum | Sets if the Vex is currently charging. |
| Set Vex Limited Lifetime | entity_set_vex_limited_lifetime_ticks | entity | parameters | lifetime: number | Sets the Vex's life time in ticks. |
| Set Villager Biome | entity_set_villager_biome | entity | appearance | biome: enum | Sets a villager's color based on the selected biome. |
| Set Villager Experience | entity_set_villager_experience | entity | parameters | experience: number | Sets the villager experience amount. |
| Set a Villager's Profession | entity_set_villager_profession | entity | settings | profession: enum | Sets a specific profession for a villager. |
| Display Fire | entity_set_visual_fire | entity | appearance | visual_fire: enum | Displays fire on a creature. |
| Set Warden Anger Level | entity_set_warden_anger_level | entity | parameters | name_or_uuid: text<br/>anger: number | Sets the Guardian's anger level to the specified creature. |
| Set Warden Digging | entity_set_warden_digging | entity | miscellaneous | digging: enum | Set a warden's digging type |
| Set Waypoint Icon Color | entity_set_waypoint_color | entity | settings | red: number<br/>green: number<br/>blue: number | Sets the color of the icon displayed on the locator bar for the entity. |
| Set Waypoint Icon Style | entity_set_waypoint_style | entity | settings | style: text | Sets the style of the icon displayed on the locator bar for the entity. |
| Set Saddle Visibility | entity_set_wearing_saddle | entity | settings | wearing: enum | Sets a saddle to an entity. |
| Set Wither Invulnerability | entity_set_wither_invulnerability_ticks | entity | parameters | ticks: number | Sets the duration of the Wither's invulnerability. |
| Set Wolf Sound Variant | entity_set_wolf_sound_variant | entity | settings | sound_variant: enum | Sets the sound variant for a wolf. |
| Set Wolf Type | entity_set_wolf_type | entity | appearance | wolf_type: enum | Sets the wolf type. |
| Set Zombie Arms Raised | entity_set_zombie_arms_raised | entity |  | arms_raised: enum | Sets the zombie arm raise animation. |
| Set Zombie Nautilus Variant | entity_set_zombie_nautilus_variant | entity | appearance | variant: enum | Sets the variant of the zombie nautilus. |
| Shear Entity | entity_shear | entity | miscellaneous |  | Shears the entity. |
| Shear Sheep | entity_shear_sheep | entity |  |  | Shears a sheep. |
| Set Sleep Animation | entity_sleep | entity | goals | sleep: enum | Sets an entity's sleep animation. It is best to use this action in a loop. |
| Play Swing Hand Animation | entity_swing_hand | entity | appearance | hand_type: enum | Plays a swinging hand animation for the entity. |
| Teleport | entity_teleport | entity | movement | location: location<br/>keep_rotation: enum | Teleports an entity to the selected location. |
| Use an Item | entity_use_item | entity | goals | hand: enum<br/>enable: enum | Instructs the AI creature to use the item in its hand. |
| Collidies At Location | if_entity_collides_at_location | if_entity |  | location: location | Checks if an entity collides with blocks, shulkers, boats and worldborder on a given location. |
| Collides Using Custom Hitbox | if_entity_collides_using_hitbox | if_entity |  | min: location<br/>max: location | Checks if an entity collides with blocks, shulkers, boats and worldborder using a custom hitbox. |
| Collidies With Entity | if_entity_collides_with_entity | if_entity |  | name_or_uuid: text<br/>check_type: enum | Check if a hitbox of an entity collides with a hitbox of another entity. |
| Exists | if_entity_exists | if_entity |  |  | Checks if an entity is in the world. |
| Has available path | if_entity_has_available_path | if_entity |  |  | Checks if the entity can find or build a valid path to a destination |
| Has Custom Tag | if_entity_has_custom_tag | if_entity |  | tag: text<br/>tag_value: text<br/>compare_type: enum | Checks if an entity has a custom tag with the specified value. |
| Has Potion Effect | if_entity_has_potion_effect | if_entity |  | potions: potion<br/>check_mode: enum | Checks if an entity has the effect of a potion. |
| Inside Region | if_entity_in_area | if_entity |  | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum | Checks if an entity is in a certain region. |
| Disguised | if_entity_is_disguised | if_entity |  |  | Checks if an entity is disguised. |
| Is On Ground | if_entity_is_grounded | if_entity |  |  | Checks if an entity is touching the surface of a block. |
| Is an Item | if_entity_is_item | if_entity |  |  | Checks if an entity is an item. |
| Has Minecraft Tag | if_entity_is_minecraft_tagged | if_entity |  | namespace: text | Checks whether the entity has the specified Minecraft tag (e.g. "aquatic"). |
| Is a Mob | if_entity_is_mob | if_entity |  |  | Checks if an entity is a mob. |
| Near location | if_entity_is_near_location | if_entity |  | ignore_y_axis: enum<br/>location: location<br/>range: number | Checks if an entity is near the specified location. |
| Is a Projectile | if_entity_is_projectile | if_entity |  |  | Checks if an entity is a projectile. |
| Riding Entity | if_entity_is_riding_entity | if_entity |  | entity_ids: text<br/>compare_mode: enum | Checks if an entity is riding any of the other specified entities. |
| Standing On a Block | if_entity_is_standing_on_block | if_entity |  | blocks: block<br/>locations: location<br/>only_solid: enum | Checks if an entity is standing on a block of a certain category or a certain location. |
| Entity Type Is | if_entity_is_type | if_entity |  | entity_types: item | Checks if the entity type is equal to the type in the chest. |
| Is Undead | if_entity_is_undead | if_entity |  |  | Checks if the entity is undead. |
| Is a Vehicle | if_entity_is_vehicle | if_entity |  |  | Checks if an entity is a vehicle. |
| Name Equals | if_entity_name_equals | if_entity |  | names_or_uuids: text | Checks if an entity's name is equal to the name in the chest. |
| Spawn Reason Is | if_entity_spawn_reason_equals | if_entity |  | reason: enum | Checks if the entity spawn reason is equal to a certain value. |
