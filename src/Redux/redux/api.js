import axios from "axios";
export const getContactsApi= async ()=>
   await axios.get('http://localhost:9000/contacts')