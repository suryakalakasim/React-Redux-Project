import {put,take,takeEvery,takeLatest,all,delay,call,fork} from 'redux-saga/effects';
import { contactsSuccess,contactsError } from './action';
import {GET_ALL_CONTACTS,CONTACTS_SUCCESS,CONTACTS_ERROR} from './actionType';
import { getContactsApi } from './api';
export function* onGetContactAsync(){
  try{
      const response= yield call(getContactsApi)
      if(response.status=== 200){
          yield delay(500);
          yield put(contactsSuccess(response.data))
      }
  }
  catch(error){
      yield put(contactsError(error.response.data))
  }
}
export function* onGetContacts(){
yield takeEvery( GET_ALL_CONTACTS,onGetContactAsync)
}
const contactSagas=[
    fork(onGetContacts)
]
export default function* rootSaga(){
yield all([...contactSagas])
}