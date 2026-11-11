import { ValueType, ValueTypes } from './ValueType';
import WithMetadata from './WithMetadata';
import WithId from './WithId';

export const GameValueCategories = {
  STATISTIC: 'statistic',
  LOCATION: 'location',
  ITEM: 'item',
  INFO: 'info',
  EVENT: 'event',
  WORLD: 'world',
} as const;

export type GameValueCategory =
  (typeof GameValueCategories)[keyof typeof GameValueCategories];

type BaseGameValue = WithMetadata &
  WithId & {
    category: GameValueCategory;
    selector: 'player' | 'entity' | 'both' | null;
    slot?: number;
    page?: number;
  };

///////////////////////////////////////////////////////////////////////////////

export type BasicGameValue = BaseGameValue & {
  type: ValueTypes[keyof Omit<ValueTypes, 'LIST' | 'DICTIONARY' | 'PARAMETER'>];
};

export type ListGameValue = BaseGameValue & {
  type: ValueTypes['LIST'];

  elementType: ValueType;
};

export type DictionaryGameValue = BaseGameValue & {
  type: ValueTypes['DICTIONARY'];

  /**
   * Type of the keys stored in the dictionary
   */
  keyType: ValueType;

  /**
   * Type of the values stored in the dictionary
   */
  valueType: ValueType;
};

///////////////////////////////////////////////////////////////////////////////

type GameValue = BasicGameValue | ListGameValue | DictionaryGameValue;

export default GameValue;
