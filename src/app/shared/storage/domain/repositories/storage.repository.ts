import { Observable } from "rxjs";

import { StorageItem } from "../models/storage-item.model";

export interface StorageRepository {
  getItem<T>(key: NonNullable<string>): StorageItem<T> | undefined;

  setItem<T>(key: NonNullable<string>, item: NonNullable<T>): void;

  removeItem(key: NonNullable<string>): void;

  clear(): void;

  watchItem<T>(key: NonNullable<string>): Observable<StorageItem<T>>;
}
