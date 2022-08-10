import axios from "axios";
export const getContactsApi= async ()=>
   await axios.get('http://localhost:9000/contacts');
   export const createContactsApi= async (contacts)=>
   await axios.post('http://localhost:9000/contacts',contacts);
   export const deleteContactApi=async(contactsId)=>{
      await axios.delete(`http://localhost:9000/contacts/${contactsId}`);
   }