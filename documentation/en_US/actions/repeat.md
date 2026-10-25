# Repeat actions

| Name | ID | Category | Subcategory | Arguments | Description |
| --- | --- | --- | --- | --- | --- |
| Repeat Adjacently | repeat_adjacently | repeat |  | variable: variable<br/>origin: location<br/>change_rotation: enum<br/>include_self: enum<br/>pattern: enum | Assigns the current location to the specified variable among blocks adjacent to the specified location. |
| Repeat For List Values | repeat_for_each_in_list | repeat |  | index_variable: variable<br/>value_variable: variable<br/>list: array | Retrieves each item in the specified list and outputs its index and value to the specified variables. |
| Repeat For Dictionary Values | repeat_for_each_map_entry | repeat |  | key_variable: variable<br/>value_variable: variable<br/>map: map | Retrieves each element from the specified dictionary and outputs its index and value to the specified variables. |
| Repeat Forever | repeat_forever | repeat |  |  | Persistently repeats the code inside the pistons. |
| Repeat N Times | repeat_multi_times | repeat |  | variable: variable<br/>amount: number | Runs the code the specified number of times. |
| Repeat On Circle | repeat_on_circle | repeat |  | variable: variable<br/>center: location<br/>radius: number<br/>circle_points: number<br/>perpendicular_to_plane: vector<br/>start_angle: number<br/>angle_unit: enum | Repeat the location of each circle block with the given parameters in sequence. |
| Repeat On Grid | repeat_on_grid | repeat |  | variable: variable<br/>start: location<br/>end: location | Repeat the location of each block in the given region into the given variable. |
| Repeat On Path | repeat_on_path | repeat |  | variable: variable<br/>step: number<br/>locations: location<br/>rotation: enum | Repeat from one location to another in increments, assigning the current location to the specified variable. |
| Repeat On Range | repeat_on_range | repeat |  | variable: variable<br/>start: number<br/>end: number<br/>interval: number | Assigns the current number to the specified variable from the specified range in increments. |
| Repeat On Sphere | repeat_on_sphere | repeat |  | variable: variable<br/>center: location<br/>radius: number<br/>points: number<br/>rotate_location: enum | Sequentially returns the location of each point on a sphere with the specified parameters. |
| Repeat By Condition | repeat_while | repeat |  |  | Runs code as long as the selected condition is true. |
