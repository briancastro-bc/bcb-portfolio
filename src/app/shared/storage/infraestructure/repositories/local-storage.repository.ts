import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { of, Subject, Observable } from 'rxjs';

import { StorageItem } from '../../domain/models/storage-item.model';
import { StorageRepository } from '../../domain/repositories/storage.repository';
import { StorageEvent } from '../../domain/models/storage-event.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageRepository implements StorageRepository {

  private readonly storage: Storage;

  private readonly document: Document = inject(DOCUMENT);

  private readonly storageEventSubject: Subject<StorageEvent> = new Subject();

  constructor() {
    this.storage = this.document.defaultView!.localStorage;
  }

  getItem<T>(
    key: NonNullable<string>
  ): StorageItem<T> | undefined {
    try {
      const item = this.storage.getItem(key) ?? '';
      return JSON.parse(item) as StorageItem<T>;
    } catch (e: any) {
      return undefined;
    }
  }

  getItems(): unknown[] {
    return Object.entries(this.storage).map(([key, _]) =>
      ({ item: this.getItem(key) })
    );
  }

  setItem<T>(
    key: NonNullable<string>,
    item: NonNullable<T>
  ): void {
    const payload = { item, timestamp: Date.now() } as StorageItem<T>;
    const payloadAsJson = JSON.stringify(payload);
    localStorage.setItem(key, payloadAsJson);
  }

  removeItem(key: string): void {
    return localStorage.removeItem(key);
  }

  clear(): void {
    return localStorage.clear();
  }

  watchItem<T>(
    key: NonNullable<string>
  ): Observable<StorageItem<T>> {
    return of(this.getItem<T>(key) as StorageItem<T>);
  }

  private emit(event: StorageEvent): void {
    this.storageEventSubject.next(event);
  }
}
