import { createStore, combineReducers } from 'redux'
// 引入 userReducer
import user from 'src/store/reducer/user'
// 把reducer合并
const reducers = combineReducers({ user })
// 创建store
const store = createStore(reducers);
export default store