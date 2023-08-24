export interface BaseRepository {
  findOne<T>(): T;
  findMany<T>(): T[];
  create(): void;
  update(): void;
  upgrade(): void;
  remove(): void;
}
