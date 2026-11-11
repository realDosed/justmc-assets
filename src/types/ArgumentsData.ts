export type ArgumentType =
  | 'any'
  | 'array'
  | 'block'
  | 'cell'
  | 'enum'
  | 'item'
  | 'location'
  | 'map'
  | 'number'
  | 'parameter'
  | 'particle'
  | 'potion'
  | 'sound'
  | 'text'
  | 'variable'
  | 'vector';

type ArgumentsData = ArgumentType[];

export default ArgumentsData;
