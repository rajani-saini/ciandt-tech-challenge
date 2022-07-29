/* eslint-disable default-case */
import produce from 'immer';

export const initialState = {
  mounted: false,
};


const defaultReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'APP_MOUNTED':
        draft.mounted = true;
        break;
    }
  });

export default defaultReducer;
