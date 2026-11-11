import { ValueType, valueTypeFromInternal, ValueTypes } from './ValueType';
import WithId from './WithId';

// Enums are awful in typescript, sadly
export const ActionArgumentTypes = {
  ...ValueTypes,

  /**
   * Argument that only accepts variables
   */
  VARIABLE: 'variable',

  /**
   * Argument that accepts any value
   */
  ANY: 'any',

  /**
   * Argument that accepts any value defined in a static set of types
   */
  UNION: 'union',

  /**
   * Argument that accepts any value defined in a static set of values
   */
  ENUM: 'enum',
} as const;

export type ActionArgumentTypes = typeof ActionArgumentTypes;
export type ActionArgumentType = ActionArgumentTypes[keyof ActionArgumentTypes];

type ArgumentTypeFromInternal = Exclude<
  ActionArgumentType,
  ActionArgumentTypes['UNION']
>;
export const argumentTypeFromInternal = (
  value: string
): ArgumentTypeFromInternal | null => {
  const _value = value.toLowerCase();

  if (Object.values<string>(ActionArgumentTypes).includes(_value))
    return _value as ArgumentTypeFromInternal;

  if (_value === 'boolean') return ActionArgumentTypes.ENUM;
  if (_value === 'byte') return ActionArgumentTypes.LIST;
  if (_value === 'parameters') return ActionArgumentTypes.DICTIONARY;
  if (_value === 'tristate') return ActionArgumentTypes.ENUM;

  return valueTypeFromInternal(value);
};

///////////////////////////////////////////////////////////////////////////////

export type LocationArgumentDefaultValue = {
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
};

export type VectorArgumentDefaultValue = {
  x: number;
  y: number;
  z: number;
};

export type ListArgumentDefaultValue = {
  x: number;
  y: number;
  z: number;
};

export type MinecraftID = `minecraft:${string}`;
export type ItemArgumentDefaultValue = MinecraftID;
export type BlockArgumentDefaultValue = MinecraftID;

export type SoundArgumentDefaultValue = {
  id: MinecraftID;
  volume: number;
  pitch: number;
};

export type ParticleArgumentDefaultValue = {
  id: MinecraftID;
  count: number;
  spread: [number, number];
  motion: {
    x: number;
    y: number;
    z: number;
  };

  material?: string;
  color?: string;
  size?: number;
  to_color?: string;
};

export type PotionArgumentDefaultValue = {
  type: MinecraftID;
  duration: number;
  amplifier: number;
};

export type CellArgumentDefaultValue = {
  name: string;
  global: boolean;
  storage: string | null;
  storagePath: string | null;
};

///////////////////////////////////////////////////////////////////////////////

export type BaseActionArgument = WithId & {
  /**
   * Plural argument is an argument that has multiple slots in the action menu
   * along with description slots that hint to the type of the argument
   */
  plural: boolean;

  /**
   * Slot in the menu that value can be put into
   */
  valueSlots: number[];

  /**
   * Slot in the menu that is occupied by the description glass
   */
  descriptionSlots: number[];
};

type WithDefaultValue<T> = {
  defaultValue?: T;
};

///////////////////////////////////////////////////////////////////////////////

export enum NumberActionArgumentType {
  INT = 'int',
  LONG = 'long',
  FLOAT = 'float',
  DOUBLE = 'double',
}

export type NumberActionArgument = BaseActionArgument &
  WithDefaultValue<number | number[]> & {
    type: ActionArgumentTypes['NUMBER'];

    /**
     * Numeric type accepted by the argument
     */
    numberType: NumberActionArgumentType;

    /**
     * Minimum value accepted by the argument
     */
    min?: number;

    /**
     * Maximum value accepted by the argument
     */
    max?: number;
  };

export type TextActionArgument = BaseActionArgument &
  WithDefaultValue<string | string[]> & {
    type: ActionArgumentTypes['TEXT'];
  };

export type ItemActionArgument = BaseActionArgument &
  WithDefaultValue<ItemArgumentDefaultValue | ItemArgumentDefaultValue[]> & {
    type: ActionArgumentTypes['ITEM'];
  };

export type BlockActionArgument = BaseActionArgument &
  WithDefaultValue<BlockArgumentDefaultValue | BlockArgumentDefaultValue[]> & {
    type: ActionArgumentTypes['BLOCK'];
  };

export type LocationActionArgument = BaseActionArgument &
  WithDefaultValue<
    LocationArgumentDefaultValue | LocationArgumentDefaultValue[]
  > & {
    type: ActionArgumentTypes['LOCATION'];
  };

export type VectorActionArgument = BaseActionArgument &
  WithDefaultValue<VectorArgumentDefaultValue | VectorArgumentDefaultValue[]> & {
    type: ActionArgumentTypes['VECTOR'];
  };

export type SoundActionArgument = BaseActionArgument &
  WithDefaultValue<SoundArgumentDefaultValue | SoundArgumentDefaultValue[]> & {
    type: ActionArgumentTypes['SOUND'];
  };

export type ParticleActionArgument = BaseActionArgument &
  WithDefaultValue<
    ParticleArgumentDefaultValue | ParticleArgumentDefaultValue[] | null
  > & {
    type: ActionArgumentTypes['PARTICLE'];
  };

export type PotionActionArgument = BaseActionArgument &
  WithDefaultValue<PotionArgumentDefaultValue | PotionArgumentDefaultValue[]> & {
    type: ActionArgumentTypes['POTION'];
  };

export type CellActionArgument = BaseActionArgument &
  WithDefaultValue<CellArgumentDefaultValue> & {
    type: ActionArgumentTypes['CELL'];
  };

export type ParameterActionArgument = BaseActionArgument & {
  type: ActionArgumentTypes['PARAMETER'];
};

export type ListActionArgument = BaseActionArgument & {
  type: ActionArgumentTypes['LIST'];
  defaultValue?: unknown;

  /**
   * Type of the elements stored in the list
   */
  elementType: ValueType;
};

export type DictionaryActionArgument = BaseActionArgument & {
  type: ActionArgumentTypes['DICTIONARY'];
  defaultValue?: unknown;

  /**
   * Type of the keys stored in the dictionary
   */
  keyType: ValueType;

  /**
   * Type of the values stored in the dictionary
   */
  valueType: ValueType;
};

export type VariableActionArgument = BaseActionArgument & {
  type: ActionArgumentTypes['VARIABLE'];
  defaultValue?:
    | {
        name: string;
        scope: string;
      }
    | {
        name: string;
        scope: string;
      }[];
};

export type AnyActionArgument = BaseActionArgument & {
  type: ActionArgumentTypes['ANY'];
  defaultValue?: unknown;
};

/**
 * Due to action menu not being able to accept parameters of two or more static
 * argument types, every `UNION` argument is actually an `ANY` argument
 */
export type UnionActionArgument = BaseActionArgument & {
  type: ActionArgumentTypes['UNION'];

  /**
   * Types accepted by the argument
   */
  types: ActionArgumentTypes[];
};

export type EnumActionArgument = Omit<BaseActionArgument, 'descriptionSlots'> &
  WithDefaultValue<string> & {
    type: ActionArgumentTypes['ENUM'];

    /**
     * Values accepted by the argument
     */
    values: string[];
  };

///////////////////////////////////////////////////////////////////////////////

type ActionArgument =
  | NumberActionArgument
  | TextActionArgument
  | ItemActionArgument
  | BlockActionArgument
  | LocationActionArgument
  | VectorActionArgument
  | SoundActionArgument
  | ParticleActionArgument
  | PotionActionArgument
  | ParameterActionArgument
  | CellActionArgument
  | ListActionArgument
  | DictionaryActionArgument
  | VariableActionArgument
  | AnyActionArgument
  | UnionActionArgument
  | EnumActionArgument;

export default ActionArgument;
