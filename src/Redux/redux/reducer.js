import {
  GET_ALL_CONTACTS, CONTACTS_SUCCESS, CONTACTS_ERROR,
  CREATE_CONTACT, CREATE_CONTACT_SUCCESS, CREATE_CONTACT_ERROR,
  DELETE_CONTACT, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_ERROR
}
  from './actionType';
const initialContacts = {
  contacts: [],
  loadding: false,
  error: ""
}
export const contactReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
    case CREATE_CONTACT:
    case DELETE_CONTACT:
      return {
        ...state,
        loadding: true
      }
    case CONTACTS_SUCCESS:
      return {
        ...state,
        loadding: false,
        contacts: action.payload
      }
    case CONTACTS_ERROR:
    case CREATE_CONTACT_ERROR:
    case DELETE_CONTACT_ERROR:
      return {
        ...state,
        loadding: false,
        error: action.payload
      }
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        loadding: false,
      }
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loadding:false,
        contacts:state.contacts.filter((contacts)=>contacts.id !==action.payload)
      }


    default:
      return state

  }
}
export default contactReducer;