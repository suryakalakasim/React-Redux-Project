
import {GET_ALL_CONTACTS,CONTACTS_SUCCESS,CONTACTS_ERROR} from './actionType';
export const getAllContacts=({
  type:  GET_ALL_CONTACTS
    })
    export const contactsSuccess=(contacts)=>({
      type: CONTACTS_SUCCESS,
      payload:contacts
        })
   export const contactsError=(error)=>({
          type: CONTACTS_ERROR,
          payload:error
            })
        
