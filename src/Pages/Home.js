import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllContacts } from '../Redux/redux/action';

function Home() {
    const dispatch = useDispatch();
    const { contacts } = useSelector(state => state.data)
    console.log("contacts", contacts)
    useEffect(() => {
        dispatch(getAllContacts)
    }, [])
    return (
        <div className='container'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Company</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {contacts?.length > 0 ? contacts.map((contacts)=><tr key={contacts.id}>
                    <td>{contacts.id}</td>
                    <td>{contacts.name}</td>
                    <td>{contacts.mobile}</td>
                    <td>{contacts.email}</td>
                    <td>{contacts.company}</td>
                    <td>{contacts.title}</td>
                </tr>):<h3>data not found</h3>}
                </tbody>
            </table>

           
        </div>
    );
}

export default Home;