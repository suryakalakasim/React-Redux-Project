
import {
  GET_ALL_CONTACTS, CONTACTS_SUCCESS, CONTACTS_ERROR,
  CREATE_CONTACT, CREATE_CONTACT_SUCCESS, CREATE_CONTACT_ERROR,
  DELETE_CONTACT, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_ERROR
}
  from './actionType';
export const getAllContacts = ({
  type: GET_ALL_CONTACTS
})
export const contactsSuccess = (contacts) => ({
  type: CONTACTS_SUCCESS,
  payload: contacts
})
export const contactsError = (error) => ({
  type: CONTACTS_ERROR,
  payload: error
})
export const createContact = (contacts) => ({
  type: CREATE_CONTACT,
  payload: contacts
})
export const createContactsSuccess = ({
  type: CREATE_CONTACT_SUCCESS,
})
export const createContactsError = (error) => ({
  type: CREATE_CONTACT_ERROR,
  payload: error
});
export const deleteContact = (contactsId) => ({
  type: DELETE_CONTACT,
  payload: contactsId
})
export const deleteContactsSuccess = (contactsId)=>({
  type: DELETE_CONTACT_SUCCESS,
  payload:contactsId
})
export const deleteteContactsError = (error) => ({
  type: DELETE_CONTACT_ERROR,
  payload: error
})