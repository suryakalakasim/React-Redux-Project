import { GET_ALL_CONTACTS,CONTACTS_SUCCESS,CONTACTS_ERROR} from './actionType';
const initialContacts ={
  contacts:[],
  loadding:false,
  error:""
}
 export const contactReducer=(state=initialContacts,action)=>{
  switch(action.type){
  case  GET_ALL_CONTACTS:
    return{...state,
      loadding:true}
    case CONTACTS_SUCCESS:
      return{
        ...state,
        loadding:false,
        contacts:action.payload
      }
      case CONTACTS_ERROR:
        return{
          ...state,
          loadding:false,
          error:action.payload
        }
    default:
      return state

  }
}
export default contactReducer;