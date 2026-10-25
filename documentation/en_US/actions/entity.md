# Entity actions

| Name | ID | Category | Subcategory | Type | Arguments | Works with | Additional info | Deprecated | Unused | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Attach Lead | entity_attach_lead | entity | movement | basic | name_or_uuid: text<br/>location: location |  |  | false | false | Tethers an entity to a fence or entity. |
| Clear All Potion Effects | entity_celar_potion_effects | entity | parameters | basic |  |  |  | false | false | Clears all effects on an entity. |
| Clear Merchant Recipes | entity_clear_merchant_recipes | entity | settings | basic |  | Villagers<br/>Wandering Traders |  | false | false | Clears all trades to a Villager. |
| Complete Item Use | entity_complete_using_active_item | entity | goals | basic |  | Mobs |  | false | false | Completes the use of the current item in hand with a result. |
| Deal Damage | entity_damage | entity | parameters | basic | damage: number<br/>source: text |  |  | false | false | Deals damage to an entity. |
| Disguise as Block | entity_disguise_as_block | entity | appearance | basic | block: block |  |  | false | false | Disguise an entity as a block. |
| Disguise as Entity | entity_disguise_as_entity | entity | appearance | basic | entity_type: item |  |  | false | false | Disguise an entity as an entity. |
| Disguise as Item | entity_disguise_as_item | entity | appearance | basic | item: item |  |  | false | false | Disguises an entity as an item. |
| Disguise as Player | entity_disguise_as_player | entity | appearance | basic | name_or_uuid: text<br/>display_name: text<br/>server_type: enum |  |  | false | false | Disguises an entity as a player. |
| Eat Grass | entity_eat_grass | entity | goals | basic |  | Sheep |  | false | false | Makes a sheep eat grass. |
| Set Eat Target | entity_eat_target | entity | goals | basic | name_or_uuid: text | Toads |  | false | false | Sets a target for an entity to eat. |
| Explode | entity_explode | entity | goals | basic |  | Creepers<br/>Dynamite<br/>TNT minecart<br/>Fireworks<br/>Sulfur cube |  | false | false | Causes an entity to explode. |
| Face to Location | entity_face_location | entity | movement | basic | location: location |  |  | false | false | Turns an entity towards a location. |
| Get Entity Attribute Value | entity_get_attribute | entity | parameters | basic | variable: variable<br/>attribute_type: enum<br/>return_value: enum |  |  | false | false | Gets the value of the specified attribute of an entity and assigns the result to a variable. |
| Get Custom Tag | entity_get_custom_tag | entity | miscellaneous | basic | variable: variable<br/>name: text<br/>default: any |  |  | false | false | Gets a creature's custom nbt tag. |
| Get Custom Tags | entity_get_custom_tags | entity | miscellaneous | basic | variable: variable |  |  | false | false | Retrieves the custom tags of an entity and assigns the result to a variable. |
| Get Entity Equipment | entity_get_equipment_item | entity | miscellaneous | basic | variable: variable<br/>slot: enum |  |  | false | false | Gets the equipment of an entity from the specified slot and assigns the result to a variable. |
| Get Entity NBT Tags | entity_get_nbt | entity | miscellaneous | basic | variable: variable<br/>path: text<br/>value_type: enum |  |  | false | false | Gets the NBT tags of an entity at the specified path and assigns the result to a variable. |
| Give Potion Effect | entity_give_potion_effects | entity | parameters | basic | potions: potion<br/>overwrite: enum<br/>show_icon: enum<br/>particle_mode: enum |  |  | false | false | Gives the selected effects to the creature. |
| Heal Entity | entity_heal | entity | parameters | basic | heal: number |  |  | false | false | Heals an entity. |
| Ignite Creeper | entity_ignite_creeper | entity | goals | basic |  | Creepers<br/>TNT minecart<br/>Sulfur cube |  | false | false | Sets a creeper on fire, causing it to explode after a certain period. |
| Jump | entity_jump | entity | goals | basic |  | Mobs |  | false | false | Makes an entity jump. |
| Launch Forward | entity_launch_forward | entity | movement | basic | power: number<br/>increment: enum<br/>launch_axis: enum |  |  | false | false | Launches an entity forward or backward in the direction it is facing based on its power. |
| Launch Projectile | entity_launch_projectile | entity | miscellaneous | basic | projectile: item<br/>location: location<br/>name: text<br/>speed: number<br/>inaccuracy: number<br/>trail: particle |  |  | false | false | Launch a projectile from an entity's location. |
| Launch To Location | entity_launch_to_location | entity | movement | basic | location: location<br/>power: number<br/>increment: enum |  |  | false | false | Launches creatures to the selected location. |
| Launch Up | entity_launch_up | entity | movement | basic | power: number<br/>increment: enum |  |  | false | false | Tosses an entity up or down based on strength. |
| Dismount | entity_leave_vehicle | entity | movement | basic |  |  |  | false | false | Dismounts an entity from another entity or vehicle. |
| Disguise Entity as World Entity | entity_mimic_disguise_from_entity | entity | appearance | basic | name_or_uuid: text<br/>include_disguise: enum<br/>remove_original_entity: enum |  |  | false | false | Disguises the entity as the specified entity from the world. |
| Modify Piglin Barter Materials | entity_modify_piglin_barter_materials | entity | settings | basic | materials: item<br/>modification_mode: enum | Piglin | You cannot modify the items a Piglin gives by default. | false | false | Modify the items a Piglin gives after bartering. |
| Modify Piglin Interested Materials | entity_modify_piglin_interested_materials | entity | settings | basic | materials: item<br/>modification_mode: enum | Piglin | You cannot modify the items a Piglin is interested in by default. | false | false | Modify the items a Piglin is interested in. |
| Move To Location | entity_move_to_location | entity | goals | basic | location: location<br/>speed: number | Mobs |  | false | false | Instructs the entity AI to always find its way to a certain location at a certain speed. |
| Stop Moving To Location | entity_move_to_location_stop | entity | goals | basic |  | Mobs |  | false | false | Stops an entity moving to a location. |
| Play Damage Animation | entity_play_damage_animation | entity | appearance | basic | damage_type: enum |  |  | false | false | Displays an entity damage animation. |
| Play Hurt Animation | entity_play_hurt_animation | entity | appearance | basic | yaw: number |  |  | false | false | Plays the damage animation. |
| Ram Entity | entity_ram_target | entity | goals | basic | name_or_uuid: text | Goat |  | false | false | Causes goats to ram the target entity. |
| Remove Entity | entity_remove | entity | miscellaneous | basic |  |  |  | false | false | Removes an entity from the world. |
| Remove Custom Tag | entity_remove_custom_tag | entity | miscellaneous | basic | name: text |  |  | false | false | Removes a custom NBT tag from an entity. |
| Remove Custom Tags | entity_remove_custom_tags | entity | miscellaneous | basic |  |  |  | false | false | Removes all custom tags of the entity. |
| Remove Disguise | entity_remove_disguise | entity | appearance | basic |  |  |  | false | false | Removes an entity's disguise. |
| Remove Merchant Recipe | entity_remove_merchant_recipe | entity | settings | basic | recipe_index: number | Villager<br/>Wandering Traders |  | false | false | Removes an item to the Villager at the specified index. |
| Remove Potion Effect | entity_remove_potion_effect | entity | parameters | basic | effects: potion |  |  | false | false | Removes the selected effects from an entity. |
| Reset Brightness | entity_reset_display_brightness | entity | display_entity | basic |  | Any Display Entity |  | false | false | Reset the brightness of an entity renderer. |
| Reset Glow Color | entity_reset_display_glow_color | entity | display_entity | basic |  | Item Renderers<br/>Block Renderers |  | false | false | Reset the glow color of the render entity. |
| Clear Mannequin Description | entity_reset_mannequin_description | entity | appearance | basic |  | Mannequins |  | false | false | Clears the mannequin's description. |
| Reset Background Color | entity_reset_text_display_background | entity | display_entity | basic |  | Text Renderers |  | false | false | Reset the background color and transparency of the text renderer. |
| Reset Waypoint Icon Color | entity_reset_waypoint_color | entity | settings | basic |  | Mobs | For this action to work, the "Locator Bar Visibility" game rule must be enabled. | false | false | Resets the color of the icon displayed on the locator bar for the entity to default. |
| Retrieve Fishing Hook | entity_retrieve_fishing_hook | entity | goals | basic | slot: enum | Fishing Rods |  | false | false | Retracts the cast fishing hook of the fishing rod held in the specified hand of the entity. |
| Ride an Entity | entity_ride_entity | entity | movement | basic | name_or_uuid: text |  |  | false | false | Rides an entity onto another entity or player. |
| Set Armadillo Roll State | entity_roll_armadillo | entity | goals | basic | roll: enum | Armadillos |  | false | false | Sets the roll state of an armadillo (whether the armadillo is rolled up). |
| Set Extra Health | entity_set_absorption_health | entity | parameters | basic | health: number |  |  | false | false | Sets an entity's bonus health. |
| Set age lock | entity_set_age_lock | entity | settings | basic | age_lock: enum | Ageable |  | false | false | Set age lock to entity. |
| Set Entity Intelligence | entity_set_ai | entity | settings | basic | ai: enum |  |  | false | false | Sets the intelligence of an entity. |
| Set Allay Dancing | entity_set_allay_dancing | entity | goals | basic | dance: enum | Allays |  | false | false | Sets the Quiet Entity to display a dancing animation. |
| Set Anger Mode | entity_set_angry | entity | settings | basic | angry: enum<br/>target: text | Bees<br/>Wolf<br/>Zombie Piglins<br/>Endermen<br/>Mobs | An entity needs a target to work properly. | false | false | Sets an entity to anger mode on a specific target. |
| Set Animal Age | entity_set_animal_age | entity | parameters | basic | age: number<br/>lock: enum |  |  | false | false | Sets the age of an animal. |
| Set Armor | entity_set_armor_items | entity | miscellaneous | basic | helmet: item<br/>chestplate: item<br/>leggings: item<br/>boots: item<br/>silent: enum |  | Any item or block will appear on the head when placed in a helmet slot. | false | false | Sets an entity's armor. |
| Set Armor Stand Parts | entity_set_armor_stand_parts | entity | appearance | basic | arms: enum<br/>base_plate: enum | Armor Stands |  | false | false | Set armor stand parts. |
| Set Armor Stand Pose | entity_set_armor_stand_pose | entity | appearance | basic | x_rotation: number<br/>y_rotation: number<br/>z_rotation: number<br/>body_part: enum | Armor Stands |  | false | false | Sets the pose of an armor stand. |
| Set Projectile Hit Sound | entity_set_arrow_hit_sound | entity | miscellaneous | basic | sound: sound | Arrows<br/>Tridents |  | false | false | Sets the sound a projectile makes when it hits an entity or player. |
| Set Arrow Pierce Count | entity_set_arrow_pierce | entity | parameters | basic | pierce: number |  |  | false | false | Sets the amount of times an arrow can pierce an entity (from 0 to 127). |
| Set Attribute | entity_set_attribute | entity | parameters | basic | value: number<br/>attribute_type: enum |  |  | false | false | Sets the specified attribute to the specified entity value. |
| Set Mob Awareness | entity_set_aware | entity | goals | basic | aware: enum | Mobs |  | false | false | When disabled, disables the AI of the mob, but leaves interaction with gravity, pushing, etc. |
| Set Axolotl Type | entity_set_axolotl_type | entity | appearance | basic | axolotl_type: enum | Axolotl |  | false | false | Sets the axolotl type. |
| Set Child Mode | entity_set_baby | entity | settings | basic | baby: enum |  |  | false | false | Sets an entity to child mode. |
| Set Projectile Base Damage | entity_set_base_arrow_damage | entity | parameters | basic | damage: number | Arrows<br/>Tridents | Formula for arrows: Base Damage * Projectile Speed = Damage Dealt<br/>Formula for tridents: Base Damage = Damage Dealt | false | false | Sets the projectile's base damage, which will be used in the projectile's damage formula when it hits. |
| Set Bee Stinger | entity_set_bee_has_stinger | entity | settings | basic | stinger: enum | Bee |  | false | false | Toggles whether a bee has a stinger. |
| Set Bee Pollen | entity_set_bee_nectar | entity | appearance | basic | nectar: enum | Bees |  | false | false | Sets the visibility of pollen to the bee. |
| Set Display Block | entity_set_block_display_block | entity | display_entity | basic | displayed_block: block | Block Renderers |  | false | false | Sets the display block to the block renderer. |
| Set Camel Dashing Animation | entity_set_camel_dashing | entity | settings | basic | dashing: enum | Camels |  | false | false | Sets the dashing animation for the camel. |
| Set Chest Visibility | entity_set_carrying_chest | entity | settings | basic | carrying: enum | Donkeys<br/>Mules<br/>Lamas |  | false | false | Sets the visibility of the chest on the entity. |
| Set Cat Lying Down | entity_set_cat_lying_down | entity | appearance | basic | lying_down: enum | Cats |  | false | false | Sets the lying down mode for the cat. |
| Set Cat Type | entity_set_cat_type | entity | appearance | basic | cat_type: enum | Cats |  | false | false | Sets the type of cat. |
| Set Celebrating Mode | entity_set_celebrating | entity | goals | basic | celebrating: enum | Piglin<br/>Raiders |  | false | false | Sets the entity's celebrating mode. |
| Set Chicken Type | entity_set_chicken_type | entity | appearance | basic | variant: enum | Chickens |  | false | false | Sets the color variant of a chicken. |
| Set Collidable Mode | entity_set_collidable | entity | settings | basic | collidable: enum |  |  | false | false | Sets an entity to collide with other entities. |
| Set Copper Golem Waxed State | entity_set_copper_golem_oxidizing | entity | settings | basic | oxidizing_state: enum | Copper Golems |  | false | false | Sets the waxed state of the copper golem. |
| Set Copper Golem Oxidation Time | entity_set_copper_golem_oxidizing_at_time | entity | settings | basic | time: number | Copper Golems |  | false | false | Sets the time it takes for the copper golem to increase its oxidation level in the rain. |
| Set Copper Golem Oxidation Level | entity_set_copper_golem_weathering | entity | settings | basic | weathering_state: enum | Copper Golems |  | false | false | Sets the oxidation level of the copper golem. |
| Set Cow Type | entity_set_cow_type | entity | appearance | basic | variant: enum | Cows |  | false | false | Sets the color variant of a cow. |
| Set Creeper Charge | entity_set_creeper_charge | entity | settings | basic | charged: enum | Creepers |  | false | false | Sets whether the creeper will be charged. |
| Set Creeper Max Fuse Time | entity_set_creeper_fuse | entity | parameters | basic | fuse_ticks: number | Creepers |  | false | false | Sets the creeper's time before it explodes. |
| Set Entity Health | entity_set_current_health | entity | parameters | basic | health: number |  |  | false | false | Sets an entity's health to the selected amount. |
| Set Name | entity_set_custom_name | entity | settings | basic | custom_name: text |  |  | false | false | Sets a name for an entity. |
| Set Name Visibility | entity_set_custom_name_visibility | entity | settings | basic | visibility: enum |  |  | false | false | Sets the visibility of the entity name. |
| Set Custom Tag | entity_set_custom_tag | entity | miscellaneous | basic | name: text<br/>value: text |  |  | false | false | Sets a custom nbt tag to an entity. |
| Set Drops Items | entity_set_death_drops | entity | settings | basic | drops: enum |  |  | false | false | Sets whether an entity will drop loot. |
| Set Death Time | entity_set_death_time | entity | parameters | basic | death_time: number |  |  | false | false | Sets the death duration for an entity. |
| Set Visibility | entity_set_default_visible | entity | settings | basic | default_visible: enum |  |  | false | false | Sets whether an entity is visible. |
| Set Entity Despawning | entity_set_despawning | entity | settings | basic | despawning: enum |  |  | false | false | Sets whether an entity will despawn. |
| Set Display Mode | entity_set_display_billboard | entity | display_entity | basic | billboard_type: enum | Any renderer entity |  | false | false | Sets the display mode of the billboard entity. |
| Set Brightness | entity_set_display_brightness | entity | display_entity | basic | block_light_level: number<br/>sky_light_level: number | Any Display Entity |  | false | false | Sets the brightness of the renderer entity. |
| Set Transformation Matrix | entity_set_display_correct_transformation_matrix | entity | display_entity | basic | matrix: number | Any Display Entity |  | false | false | Sets the transformation matrix of a display entity. |
| Set Visibility Size | entity_set_display_culling_suze | entity | display_entity | basic | width: number<br/>height: number | Any Visualizer Entity |  | false | false | Sets the size of the visualizer entity's model scope. |
| Set Glow Color | entity_set_display_glow_color | entity | display_entity | basic | color_hexadecimal: text | Item Renderers<br/>Block Renderers |  | false | false | Sets the glow color for the render entity. |
| Set Interpolation | entity_set_display_interpolation | entity | display_entity | basic | interpolation_duration: number<br/>interpolation_delay: number | Any Display Entity |  | false | false | Sets the interpolation duration for the renderer entity. |
| Set Rotation From Axis Vector | entity_set_display_rotation_from_axis_angle | entity | display_entity | basic | axis_vector: vector<br/>angle: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Any Render Entity |  | false | false | Sets left or right rotation by axis vector and angle of the renderer entity. |
| Set Rotation From Euler Angles | entity_set_display_rotation_from_euler_angles | entity | display_entity | basic | yaw: number<br/>pitch: number<br/>roll: number<br/>mode: enum<br/>input: enum<br/>rotation: enum | Any renderer entity |  | false | false | Sets left or right Euler angle rotation for the renderer entity. |
| Set Rotation From Vector | entity_set_display_rotation_from_vector | entity | display_entity | basic | direction: vector<br/>up: vector<br/>rotation: enum | Any renderer entity |  | false | false | Sets the rotation of the renderer entity by the given direction vector and "Up" vector. |
| Set Scale | entity_set_display_scale | entity | display_entity | basic | scale_vector: vector<br/>mode: enum | Any Render Entity |  | false | false | Sets the size of the renderer entity. |
| Set Shadow Settings | entity_set_display_shadow | entity | display_entity | basic | shadow_radius: number<br/>shadow_opacity_percentage: number | Any Display Entity |  | false | false | Sets the size and transparency of the shadow of the entity renderer. |
| Set Display Teleport Duration | entity_set_display_teleport_duration | entity | display_entity | basic | duration: number | Any display entity |  | false | false | Sets the interpolation duration for display entity teleports. |
| Set Transformation Matrix | entity_set_display_transformation_matrix | entity |  | basic | row_major_matrix: number |  |  | true | false | Sets the transformation matrix (row-column) of the renderer entity. |
| Set Translation | entity_set_display_translation | entity | display_entity | basic | translation_vector: vector<br/>mode: enum | Any Display Entity |  | false | false | Sets an offset to the renderer entity. |
| Set Visibility Range | entity_set_display_view_range | entity | display_entity | basic | view_range: number | Any Viewer Entity |  | false | false | Sets the visibility range of the renderer entity. |
| Set Ender Dragon Phase | entity_set_dragon_phase | entity | goals | basic | phase: enum | Ender Dragons |  | false | false | Sets a specific phase for an Ender Dragon. |
| Set Entity Color | entity_set_dye_color | entity | appearance | basic | color: enum | Sheep<br/>Shulkers<br/>Dog Collars<br/>Cat Collars |  | false | false | Sets a specific color for an entity. |
| Set End Crystal Beam | entity_set_end_crystal_beam | entity | settings | basic | beam: location | End Crystals |  | false | false | Points an End Crystal Beam to a specific location. |
| Set Block to Enderman | entity_set_enderman_block | entity | appearance | basic | block: block | Endermen |  | false | false | Sets the rendered block to the enderman. |
| Set Equipment | entity_set_equipment_item | entity | miscellaneous | basic | item: item<br/>slot: enum |  |  | false | false | Sets an item to one of the equipment slots (armor and items in hands) of an entity. |
| Set Explosive Power | entity_set_explosive_power | entity | parameters | basic | power: number | Creepers<br/>TNT<br/>Fireballs |  | false | false | Sets the power of an entity's explosion. |
| Set Fall Distance | entity_set_fall_distance | entity | parameters | basic | fall_distance: number |  |  | false | false | Sets the distance at which an entity falls. |
| Set Falling Block Type | entity_set_falling_block_type | entity | miscellaneous | basic | block: block | Falling blocks |  | false | false | Sets a block type to a Falling block |
| Set on Fire | entity_set_fire_ticks | entity | parameters | basic | ticks: number |  |  | false | false | Sets an entity on fire for the selected amount of time. |
| Set Fishing Delay | entity_set_fishing_wait | entity | parameters | basic | time: number<br/>wait_type: enum | Fish Hook |  | false | false | Sets the entity's fishing delay in ticks. |
| Set Fox Leaping Animation | entity_set_fox_leaping | entity | appearance | basic | leaping: enum | Foxes |  | false | false | Sets the fox's jumping animation. |
| Set Fox Type | entity_set_fox_type | entity | appearance | basic | fox_type: enum | Foxes |  | false | false | Sets the fox type. |
| Set Freeze Time | entity_set_freeze_ticks | entity | parameters | basic | ticks: number<br/>ticking_locked: enum |  |  | false | false | Sets the freeze time for an entity (the number of ticks an entity has spent in powder snow). |
| Set Friction | entity_set_friction | entity | movement | basic | friction: enum |  |  | false | false | Sets whether the entity will experience friction. |
| Set Frog Type | entity_set_frog_type | entity | appearance | basic | frog_variant: enum | Toads |  | false | false | Sets the color of the frog. |
| Set Fuse Time | entity_set_fuse_ticks | entity | parameters | basic | fuse_ticks: number | Creepers<br/>TNT<br/>TNT minecart<br/>Fireworks<br/>Sulfur cube |  | false | false | Sets the entity's time before it explodes. |
| Set Elytra Flying | entity_set_gliding | entity | movement | basic | is_gliding: enum |  |  | false | false | Sets the creature's elytra flying state. |
| Set Squid Glow Time | entity_set_glow_squid_dark | entity | appearance | basic | dark_ticks: number | Glowing Octopuses |  | false | false | Sets the duration of darkness in ticks for the glowing octopus. |
| Set Entity Glowing | entity_set_glowing | entity | appearance | basic | glowing: enum |  |  | false | false | Sets an entity to a glowing effect. |
| Set Goat Screaming | entity_set_goat_screaming | entity | settings | basic | screams: enum | Goat |  | false | false | Sets the "screaming" goat tag. |
| Set Gravity | entity_set_gravity | entity | movement | basic | gravity: enum |  |  | false | false | Sets whether an entity will obey gravity. |
| Set Hanging Entity Block Face | entity_set_hanging_facing_location | entity | settings | basic | facing: enum<br/>force: enum | Item frames<br/>Glow item frames<br/>Paintings | Paintings cannot be placed on the top or bottom of a block. | false | false | Sets the block face a hanging entity is attached to. |
| Set Horse Jump Power | entity_set_horse_jump | entity | parameters | basic | power: number | Horses<br/>Donkeys<br/>Mules<br/>Lamas |  | false | false | Sets the horse's jump power. |
| Set Horse Pattern | entity_set_horse_pattern | entity | appearance | basic | horse_color: enum<br/>horse_style: enum | Horses |  | false | false | Sets the color and pattern of the horse. |
| Set Immune To Zombification | entity_set_immune_to_zombification | entity | settings | basic | is_immune: enum | Piglins<br/>Brute piglins<br/>Hoglins |  | false | false | Sets entity immunity to zombification. |
| Set Interaction Entity Responsiveness | entity_set_interaction_responsive | entity | settings | basic | responsive: enum |  |  | false | false | Sets whether an interaction entity will be responsive to interactions. |
| Set Interaction Entity Size | entity_set_interaction_size | entity | settings | basic | width: number<br/>height: number |  |  | false | false | Sets the horizontal and vertical sizes of an interaction entity. |
| Set Invisible Mode | entity_set_invisible | entity | settings | basic | invisible: enum |  |  | false | false | Sets an entity to invisible mode. |
| Set Invulnerability Duration | entity_set_invulnerability_ticks | entity | parameters | basic | ticks: number |  |  | false | false | Sets the invulnerability duration for a creature. |
| Set Entity Invulnerable | entity_set_invulnerable | entity | settings | basic | invulnerable: enum |  |  | false | false | Sets an entity's invulnerability, but can deal damage in creative mode. |
| Set Entity Item Type | entity_set_item | entity | miscellaneous | basic | item: item | Items |  | false | false | Sets a specific type (ID) to an Item entity. |
| Set Display Item | entity_set_item_display_item | entity | display_entity | basic | displayed_item: item | Item Renderers |  | false | false | Sets the display item to the item renderer. |
| Set Item Model Type | entity_set_item_display_model_type | entity | display_entity | basic | display_model_type: enum | Item Renderers |  | false | false | Sets the type of the item's display model to the item renderer. |
| Set Item Frame Item Drop Chance | entity_set_item_frame_item_drop_chance | entity | miscellaneous | basic | drop_chance: number | Item frames<br/>Glow item frames |  | false | false | Sets the drop chance of the item in an item frame when destroyed. |
| Set Item in Frame | entity_set_item_in_frame | entity | appearance | basic | item: item<br/>play_sound: enum | Within Frames |  | false | false | Sets the specified item in a frame. |
| Set Item Owner | entity_set_item_owner | entity | settings | basic | name_or_uuid: text | Items |  | false | false | Sets the owner of an item entity. |
| Set Llama Color | entity_set_llama_type | entity | appearance | basic | type: enum | Lamas |  | false | false | Sets the color of the llama. |
| Launch By Vector | entity_set_location | entity | movement | basic | velocity: vector<br/>increment: enum |  |  | false | false | Launches an entity at the specified vector. |
| Set Mannequin Description | entity_set_mannequin_description | entity | appearance | basic | description: text | Mannequins |  | false | false | Sets the mannequin's description. |
| Set Mannequin Movement | entity_set_mannequin_immovable | entity | settings | basic | immovable: enum | Mannequins |  | false | false | Sets whether the mannequin can move. |
| Set Mannequin Main Hand | entity_set_mannequin_main_hand | entity | appearance | basic | hand: enum | Mannequins |  | false | false | Sets the main hand of the mannequin. |
| Set Mannequin Skin | entity_set_mannequin_skin | entity | appearance | basic | name_or_uuid: text<br/>server_type: enum | Mannequins |  | false | false | Sets the mannequin's skin. |
| Set Mannequin Skin Model Type | entity_set_mannequin_skin_model | entity | appearance | basic | model: enum | Mannequins |  | false | false | Sets the skin model type of the mannequin. |
| Set Mannequin Skin Layers | entity_set_mannequin_skin_parts | entity | appearance | basic | hat: enum<br/>jacket: enum<br/>left_sleeve: enum<br/>right_sleeve: enum<br/>left_pants: enum<br/>right_pants: enum<br/>cape: enum | Mannequins |  | false | false | Sets the visibility of the mannequin's skin layers. |
| Set Mannequin Skin Patch Texture | entity_set_mannequin_skin_patch | entity | appearance | basic | texture_key: text<br/>patch_target: enum | Mannequins | If the "Texture Key" argument is not specified, the default texture will be applied. | false | false | Sets the texture for the specified part of the mannequin. |
| Set Marker Mode | entity_set_marker | entity | settings | basic | marker: enum | Armor Stands |  | false | false | Sets the armor rack marker mode. |
| Set Max Health | entity_set_max_health | entity | parameters | basic | max_health: number<br/>heal_to_max: enum |  |  | false | false | Sets the maximum amount of health for an entity. |
| Set Max Invulnerability | entity_set_max_invulnerability_ticks | entity | parameters | basic | ticks: number |  |  | false | false | Sets the maximum invulnerability duration for the entity. |
| Set Merchant Recipe | entity_set_merchant_recipe | entity | settings | basic | result: item<br/>ingredient_one: item<br/>ingredient_two: item<br/>index: number<br/>mode: enum<br/>uses: number<br/>max_uses: number<br/>villager_experience: number<br/>price_multiplifier: number<br/>demand: number<br/>special_price: number<br/>ignore_discounts: enum<br/>experience_reward: enum | Villagers<br/>Wandering Traders |  | false | false | Sets an item to a Villager for certain items at the specified index. |
| Set Block to Minecart | entity_set_minecart_block | entity | appearance | basic | block: block<br/>block_offset: number | Minecarts |  | false | false | Sets the specified block into the Minecart. |
| Set Mob Aggressive | entity_set_mob_aggressive | entity | appearance | basic | aggressive: enum |  |  | false | false | Sets the agression of the mob. |
| Set Mushroom Cow Type | entity_set_mushroom_cow_type | entity | appearance | basic | cow_type: enum | Mushroom Cows |  | false | false | Sets the mushroom cow type. |
| Set Entity Physics | entity_set_no_physics | entity | settings | basic | no_physics: enum |  |  | false | false | Toggles whether an entity is affected by physics. |
| Set Painting Art | entity_set_painting_art | entity | miscellaneous | basic | art: text<br/>force: enum | Paintings |  | false | false | Sets the art for a painting. |
| Set Panda Gene | entity_set_panda_gene | entity | settings | basic | gene: enum<br/>gene_type: enum | Pandas |  | false | false | Sets the panda gene. This affects their behavior and appearance. |
| Set Panda Sitting | entity_set_panda_on_back | entity | settings | basic | on_back: enum | Panda |  | false | false | Toggles whether a panda is sitting. |
| Set Panda Rolling | entity_set_panda_rolling | entity | goals | basic | rolling: enum | Panda |  | false | false | Set whether a panda is rolling. |
| Set Panda Sad Time | entity_set_panda_sad_ticks | entity | parameters | basic | sad_ticks: number | Panda |  | false | false | Sets how long a panda is sad for in ticks. |
| Set Parrot Type | entity_set_parrot_type | entity | appearance | basic | parrot_type: enum | Parrots |  | false | false | Sets the parrot type. |
| Set pathfinder settings | entity_set_pathfinder_settings | entity | goals | basic | can_float: enum<br/>can_open_door: enum<br/>can_pass_door: enum | Mobs |  | false | false | Sets parameters and restrictions for the entity's pathfinding |
| Set Entity Persistence | entity_set_persistence | entity | settings | basic | persistence: enum | Entity<br/>Falling Blocks |  | false | false | Sets whether an item or falling block will persist. |
| Set Entity Persistence | entity_set_persistent | entity | settings | basic | persistent: enum |  |  | false | false | Sets whether the entity will be saved after the world is unloaded. |
| Entity Set Pickup | entity_set_pickup | entity | settings | basic | can_mob_pickup: enum<br/>can_player_pickup: enum | Item Entities |  | false | false | Sets which entities can pick up. |
| Set Pickup Delay | entity_set_pickup_delay | entity | parameters | basic | delay: number | Items |  | false | false | Sets the number of ticks an item cannot be picked up. |
| Set Pig Type | entity_set_pig_type | entity | appearance | basic | variant: enum | Pigs |  | false | false | Sets the color variant of a pig. |
| Set Piglin Able To Hunt | entity_set_piglin_able_to_hunt | entity | goals | basic | able: enum | Piglin |  | false | false | Sets the status of the Piglin's hunting state. |
| Set Pigling Charging Crossbow | entity_set_piglin_charging_crossbow | entity | goals | basic | charging: enum | Piglin |  | false | false | Sets the Piglin's crossbow loaded status. |
| Set Piglin Dancing | entity_set_piglin_dancing | entity | goals | basic | dancing_time: number | Piglin | If the value is less than zero, the Piglin dances forever. | false | false | Plays the dancing animation for a Piglin. |
| Set Entity Pose | entity_set_pose | entity | appearance | basic | pose: enum |  |  | false | false | Sets a specific pose for an entity. |
| Set Effect Cloud Radius | entity_set_potion_cloud_radius | entity | parameters | basic | radius: number<br/>shrinking_speed: number | Effect Cloud |  | false | false | Sets the radius of the effect cloud and how fast it expands. |
| Set Primed Tnt Block | entity_set_primed_tnt_block | entity | appearance | basic | block: block | Primed TNT |  | false | false | Disguises the Primed TNT as another block. |
| Set Projectile Item | entity_set_projectile_display_item | entity | appearance | basic | item: item |  |  | false | false | Sets the projectile's visible item. |
| Set Projectile Vector Power | entity_set_projectile_power | entity | parameters | basic | power: vector | Fireball<br/>Dragon Fireball<br/>Wither Skull |  | false | false | Sets the projectile's motion vector. |
| Set Projectile Shooter | entity_set_projectile_shooter | entity | settings | basic | uuid: text |  |  | false | false | Sets the specified creature as a projectile shooter. |
| Set Rabbit Type | entity_set_rabbit_type | entity | appearance | basic | rabbit_type: enum | Rabbits |  | false | false | Sets the rabbit type. |
| Set Horse Pose | entity_set_rearing | entity | settings | basic | rearing: enum | Horses |  | false | false | Sets whether the horse will stand on its hind legs. |
| Set Riptiding Animation | entity_set_riptiding | entity | settings | basic | riptiding: enum |  |  | false | false | Sets the animation for an entity to use the Riptiding Trident Enchantment. |
| Set Rotation | entity_set_rotation | entity | movement | basic | yaw: number<br/>pitch: number |  |  | false | false | Sets the rotation of an entity. |
| Set Rotation By Vector | entity_set_rotation_by_vector | entity | movement | basic | vector: vector |  |  | false | false | Sets the entity rotation by vector. |
| Set Sheep Wool | entity_set_sheep_sheared | entity |  | basic | sheared: enum |  |  | true | false | Sets whether sheep will have wool. |
| Set Shulker Bullet Target | entity_set_shulker_bullet_target | entity | goals | basic | target: text | Shulker Bullets |  | false | false | Sets an attack target for a Shulker projectile. |
| Set Shulker Open Percentage | entity_set_shulker_peek | entity | appearance | basic | rolling: number<br/>silent: enum | Shulker |  | false | false | Sets the percentage of which a shulker is peeking out of its shell. |
| Silence Entity | entity_set_silenced | entity | settings | basic | silenced: enum |  |  | false | false | Removes entity sounds. |
| Set Sitting Mode | entity_set_sitting | entity | settings | basic | sitting: enum | Wolf<br/>Cats<br/>Parrot<br/>Foxes<br/>Pandas |  | false | false | Sets the entity's sitting mode. |
| Set Entity Size | entity_set_size | entity | settings | basic | size: number | Slime<br/>Phantoms |  | false | false | Sets the size of an entity. |
| Set Sniffer State | entity_set_sniffer_state | entity | settings | basic | state: enum | Sniffer |  | false | false | Sets a specific state for the sniffer. |
| Set Pumpkin to Snow Golem | entity_set_snowman_pumpkin | entity | appearance | basic | pumpkin: enum | Snow Golems |  | false | false | Sets the visibility of the pumpkin to the Snow Golem. |
| Tame Entity | entity_set_tame | entity | settings | basic | name_or_uuid: text | Wolf<br/>Cats<br/>Horses<br/>Mules<br/>Lamas<br/>Parrot |  | false | false | Sets an entity's tame to the specified owner. |
| Set Target | entity_set_target | entity | goals | basic | name_or_uuid: text | Mobs | Leave an empty slot in the Text field to remove the target. | false | false | Instructs the entity AI to target a specific entity. |
| Set Text Alignment | entity_set_text_display_alignment | entity | display_entity | basic | text_alignment: enum | Text Renderers |  | false | false | Sets the text alignment of the text renderer. |
| Set Background Color | entity_set_text_display_background | entity | display_entity | basic | color_hexadecimal: text<br/>opacity: number | Text Renderers |  | false | false | Sets the background color and transparency of the text renderer. |
| Set Line Width | entity_set_text_display_line_width | entity | display_entity | basic | line_width: number | Text Renderers |  | false | false | Sets the maximum line width for the text renderer. |
| Set Text Opacity | entity_set_text_display_opacity | entity | display_entity | basic | text_opacity: number | Text Renderers |  | false | false | Sets the transparency of text to the text renderer. |
| Set Visibility Through Blocks | entity_set_text_display_see_through | entity | display_entity | basic | enable_see_through: enum | Text Visualizers |  | false | false | Sets the visibility of text through blocks to the text renderer. |
| Set Display Text | entity_set_text_display_text | entity | display_entity | basic | displayed_text: text<br/>merging_mode: enum | Text Renderers |  | false | false | Sets the display text for the text renderer. |
| Set Text Shadow | entity_set_text_display_text_shadow | entity | display_entity | basic | enable_text_shadow: enum | Text Renderers |  | false | false | Sets the visibility of the text shadow to the text renderer. |
| Set Fish Pattern | entity_set_tropical_fish_pattern | entity | appearance | basic | pattern_color: enum<br/>body_color: enum<br/>pattern: enum | Tropical Fish |  | false | false | Sets the color and pattern of a tropical fish. |
| Set Vex Charging | entity_set_vex_charging | entity | goals | basic | charging: enum | Vex |  | false | false | Sets if the Vex is currently charging. |
| Set Vex Limited Lifetime | entity_set_vex_limited_lifetime_ticks | entity | parameters | basic | lifetime: number | Vex |  | false | false | Sets the Vex's life time in ticks. |
| Set Villager Biome | entity_set_villager_biome | entity | appearance | basic | biome: enum | Villagers |  | false | false | Sets a villager's color based on the selected biome. |
| Set Villager Experience | entity_set_villager_experience | entity | parameters | basic | experience: number | Villagers |  | false | false | Sets the villager experience amount. |
| Set a Villager's Profession | entity_set_villager_profession | entity | settings | basic | profession: enum | Villager<br/>Zombie Villagers |  | false | false | Sets a specific profession for a villager. |
| Display Fire | entity_set_visual_fire | entity | appearance | basic | visual_fire: enum |  |  | false | false | Displays fire on a creature. |
| Set Warden Anger Level | entity_set_warden_anger_level | entity | parameters | basic | name_or_uuid: text<br/>anger: number | Guardians | If an entity's anger level reaches 80, the Guardian will actively pursue it. | false | false | Sets the Guardian's anger level to the specified creature. |
| Set Warden Digging | entity_set_warden_digging | entity | miscellaneous | basic | digging: enum | Warden |  | false | false | Set a warden's digging type |
| Set Waypoint Icon Color | entity_set_waypoint_color | entity | settings | basic | red: number<br/>green: number<br/>blue: number | Mobs | For this action to work, the "Locator Bar Visibility" game rule must be enabled. | false | false | Sets the color of the icon displayed on the locator bar for the entity. |
| Set Waypoint Icon Style | entity_set_waypoint_style | entity | settings | basic | style: text | Mobs |  | false | false | Sets the style of the icon displayed on the locator bar for the entity. |
| Set Saddle Visibility | entity_set_wearing_saddle | entity | settings | basic | wearing: enum | Pigs<br/>Horses<br/>Lavomers |  | false | false | Sets a saddle to an entity. |
| Set Wither Invulnerability | entity_set_wither_invulnerability_ticks | entity | parameters | basic | ticks: number | Wither |  | false | false | Sets the duration of the Wither's invulnerability. |
| Set Wolf Sound Variant | entity_set_wolf_sound_variant | entity | settings | basic | sound_variant: enum | Wolves |  | false | false | Sets the sound variant for a wolf. |
| Set Wolf Type | entity_set_wolf_type | entity | appearance | basic | wolf_type: enum | Wolf |  | false | false | Sets the wolf type. |
| Set Zombie Arms Raised | entity_set_zombie_arms_raised | entity |  | basic | arms_raised: enum |  |  | true | false | Sets the zombie arm raise animation. |
| Set Zombie Nautilus Variant | entity_set_zombie_nautilus_variant | entity | appearance | basic | variant: enum | Zombie Nautiluses |  | false | false | Sets the variant of the zombie nautilus. |
| Shear Entity | entity_shear | entity | miscellaneous | basic |  | Sheep<br/>Mooshroom<br/>Bogged<br/>Snow Golem |  | false | false | Shears the entity. |
| Shear Sheep | entity_shear_sheep | entity |  | basic |  |  |  | true | false | Shears a sheep. |
| Set Sleep Animation | entity_sleep | entity | goals | basic | sleep: enum | Foxes |  | false | false | Sets an entity's sleep animation. It is best to use this action in a loop. |
| Play Swing Hand Animation | entity_swing_hand | entity | appearance | basic | hand_type: enum |  |  | false | false | Plays a swinging hand animation for the entity. |
| Teleport | entity_teleport | entity | movement | basic | location: location<br/>keep_rotation: enum |  |  | false | false | Teleports an entity to the selected location. |
| Use an Item | entity_use_item | entity | goals | basic | hand: enum<br/>enable: enum | Mobs |  | false | false | Instructs the AI creature to use the item in its hand. |
| Collidies At Location | if_entity_collides_at_location | if_entity |  | container | location: location |  |  | false | false | Checks if an entity collides with blocks, shulkers, boats and worldborder on a given location. |
| Collides Using Custom Hitbox | if_entity_collides_using_hitbox | if_entity |  | container | min: location<br/>max: location |  |  | false | false | Checks if an entity collides with blocks, shulkers, boats and worldborder using a custom hitbox. |
| Collidies With Entity | if_entity_collides_with_entity | if_entity |  | container | name_or_uuid: text<br/>check_type: enum |  |  | false | false | Check if a hitbox of an entity collides with a hitbox of another entity. |
| Exists | if_entity_exists | if_entity |  | container |  |  |  | false | false | Checks if an entity is in the world. |
| Has available path | if_entity_has_available_path | if_entity |  | container |  |  |  | false | false | Checks if the entity can find or build a valid path to a destination |
| Has Custom Tag | if_entity_has_custom_tag | if_entity |  | container | tag: text<br/>tag_value: text<br/>compare_type: enum |  |  | false | false | Checks if an entity has a custom tag with the specified value. |
| Has Potion Effect | if_entity_has_potion_effect | if_entity |  | container | potions: potion<br/>check_mode: enum |  |  | false | false | Checks if an entity has the effect of a potion. |
| Inside Region | if_entity_in_area | if_entity |  | container | location_1: location<br/>location_2: location<br/>ignore_y_axis: enum<br/>intersect_type: enum<br/>check_type: enum |  |  | false | false | Checks if an entity is in a certain region. |
| Disguised | if_entity_is_disguised | if_entity |  | container |  |  |  | false | false | Checks if an entity is disguised. |
| Is On Ground | if_entity_is_grounded | if_entity |  | container |  |  |  | false | false | Checks if an entity is touching the surface of a block. |
| Is an Item | if_entity_is_item | if_entity |  | container |  |  |  | false | false | Checks if an entity is an item. |
| Has Minecraft Tag | if_entity_is_minecraft_tagged | if_entity |  | container | namespace: text |  | The Minecraft tag must start with "#minecraft:" | false | false | Checks whether the entity has the specified Minecraft tag (e.g. "aquatic"). |
| Is a Mob | if_entity_is_mob | if_entity |  | container |  |  |  | false | false | Checks if an entity is a mob. |
| Near location | if_entity_is_near_location | if_entity |  | container | ignore_y_axis: enum<br/>location: location<br/>range: number |  |  | false | false | Checks if an entity is near the specified location. |
| Is a Projectile | if_entity_is_projectile | if_entity |  | container |  |  |  | false | false | Checks if an entity is a projectile. |
| Riding Entity | if_entity_is_riding_entity | if_entity |  | container | entity_ids: text<br/>compare_mode: enum |  |  | false | false | Checks if an entity is riding any of the other specified entities. |
| Standing On a Block | if_entity_is_standing_on_block | if_entity |  | container | blocks: block<br/>locations: location<br/>only_solid: enum |  |  | false | false | Checks if an entity is standing on a block of a certain category or a certain location. |
| Entity Type Is | if_entity_is_type | if_entity |  | container | entity_types: item |  |  | false | false | Checks if the entity type is equal to the type in the chest. |
| Is Undead | if_entity_is_undead | if_entity |  | container |  |  |  | false | false | Checks if the entity is undead. |
| Is a Vehicle | if_entity_is_vehicle | if_entity |  | container |  |  |  | false | false | Checks if an entity is a vehicle. |
| Name Equals | if_entity_name_equals | if_entity |  | container | names_or_uuids: text |  |  | false | false | Checks if an entity's name is equal to the name in the chest. |
| Spawn Reason Is | if_entity_spawn_reason_equals | if_entity |  | container | reason: enum |  |  | false | false | Checks if the entity spawn reason is equal to a certain value. |
