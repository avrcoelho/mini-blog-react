import { combineReducers } from 'redux';

import publications from './publications';
import authors from './authors';

export default combineReducers({
  publications,
  authors,
});
