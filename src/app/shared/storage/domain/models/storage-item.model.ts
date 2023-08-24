export interface StorageItem<T> {
  item: Required<NonNullable<T>>;
  timestamp: NonNullable<number>;
}
