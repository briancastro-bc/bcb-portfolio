const ACTION_TYPE = {
  getItem: 'GET_ITEM',
  setItem: 'SET_ITEM',
  removeItem: 'REMOVE_ITEM',
  clear: 'CLEAR',
} as const;

export type ActionType = (typeof ACTION_TYPE)[keyof typeof ACTION_TYPE];
