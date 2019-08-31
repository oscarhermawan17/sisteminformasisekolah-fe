import { combineReducers } from 'redux';

import User from './User'
import Token from './Token'
import Kelas from './Kelas'
import MataPelajaran from './MataPelajaran'
import GuruMataPelajaran from './GuruMataPelajaran'

export default combineReducers({
   User, Kelas, MataPelajaran, Token, GuruMataPelajaran
});