import { put, take, takeEvery, takeLatest, all, delay, call, fork } from 'redux-saga/effects';
import { contactsSuccess, contactsError, createContactsSuccess, createContactsError, deleteContactsSuccess, deleteteContactsError } from './action';
import { GET_ALL_CONTACTS, CREATE_CONTACT ,DELETE_CONTACT} from './actionType';
import { getContactsApi, createContactsApi, deleteContactApi } from './api';
function* onGetContactAsync() {
    try {
        const response = yield call(getContactsApi)
        if (response.status === 200) {
            yield delay(500);
            yield put(contactsSuccess(response.data))
        }
    }
    catch (error) {
        yield put(contactsError(error.response.data))
    }
}
function* onCreateContactAsync({payload}) {
    console.log('onCreateContactAsync==>',payload);
    try {
        const response = yield call(createContactsApi,payload)
        if (response.status === 200) {
            yield put(createContactsSuccess(response.data))
        }
    }
    catch (error) {
        yield put(createContactsError(error.response.data))
    }
}
function* onDeleteContactAsync(contactsId) {
    console.log('onDeleteContactAsync>>>>',contactsId)
    try {
        const response = yield call(deleteContactApi, contactsId)
        if (response.status === 200) {
            yield delay(500);
            yield put(deleteContactsSuccess(response.data))
        }
    }
    catch (error) {
        yield put(deleteteContactsError(error.response.data))
    }
}
 function* onDeleteContacts() {
    while(true){
       const {payload:contactsId}=yield take(DELETE_CONTACT) 
       yield call (onDeleteContactAsync,contactsId)
    }
}
 function* onGetContacts() {
    yield takeEvery(GET_ALL_CONTACTS, onGetContactAsync)
}
 function* onCreateContacts() {
    yield takeLatest(CREATE_CONTACT, onCreateContactAsync)
}
const contactSagas = [
    fork(onGetContacts),
    fork(onCreateContacts),
    fork(onDeleteContacts)
]
export default function* rootSaga() {
    yield all([...contactSagas])
}