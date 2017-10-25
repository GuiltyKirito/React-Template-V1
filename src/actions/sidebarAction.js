import { createAction } from 'redux-actions';

/**
 * action types
 */
export const types = {
  CHANGE_ACTIVE: 'sidebar/CHANGE_ACTIVE',
};

/**
 * action creators
 */
export const changeActive = createAction(
  types.CHANGE_ACTIVE,
  defaultActive => ({
    defaultActive: defaultActive,
  }),
);
