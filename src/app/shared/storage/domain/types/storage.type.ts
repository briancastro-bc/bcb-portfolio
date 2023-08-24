const STORAGE_TYPE = {
  LOCAL: 'local',
  SESSION: 'session'
} as const;

export type StorageType = (typeof STORAGE_TYPE)[keyof typeof STORAGE_TYPE];
