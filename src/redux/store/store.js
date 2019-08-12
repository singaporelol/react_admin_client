import {rootReducer} from './../reducer/rootreducer'
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


// export default createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
//以下代码是使用配置redux-persist，目的是为了让redux中的数据和localstorage同步：
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const PersistReducer = persistReducer(persistConfig, rootReducer);  // 包装rootReducer
export const store=createStore(PersistReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor=persistStore(store)