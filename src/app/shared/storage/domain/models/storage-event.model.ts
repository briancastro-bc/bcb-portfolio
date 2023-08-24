import { ActionType } from "../types/action.type";

export interface StorageEvent {
  actionType: ActionType;
  key: NonNullable<string> | 'all';
  lastValue?: unknown;
  newValue?: unknown;
}
