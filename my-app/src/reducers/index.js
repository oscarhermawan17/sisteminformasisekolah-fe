import { combineReducers } from 'redux';

import User from './User'
import ChangeUrl from './ChangeUrl'
import Profile from './Profile'
import Auth from './Auth'
import Kelas from './Kelas'
import MataPelajaran from './MataPelajaran'
import GuruMataPelajaran from './GuruMataPelajaran'

export default combineReducers({
   User, Kelas, MataPelajaran, Auth, GuruMataPelajaran, Profile, ChangeUrl
});