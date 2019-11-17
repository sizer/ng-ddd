import { PersonalName } from '../models/ats';

export type modelFactory<T> = (args?: object) => T;

// Utilities
export const arrayFactory = <T>(
  factory: modelFactory<T>,
  size: number = 0
): Array<T> => [...Array(size)].map((_, i) => i + 1).map(_ => factory());

export const randomPick = <T>(array: Array<T>): T =>
  array[Math.floor(array.length * Math.random())];

// ValueFactories
export const idFactory = (): number => Math.floor(Math.random() * 6) + 1;
export const nameFactory = (): PersonalName =>
  randomPick([
    { firstName: 'foo', lastName: 'hoge' },
    { firstName: 'bar', lastName: 'fuga' }
  ]);
