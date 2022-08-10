import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact, getAllContacts } from '../Redux/redux/action';
import { Link } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const { contacts } = useSelector(state => state.data)
    console.log("contacts", contacts)
    useEffect(() => {
        dispatch(getAllContacts)
    }, []);
    const clickDelete = (id) => {
      if(window.confirm('Are you sure that you wanted to delete that contact?')){
     dispatch(deleteContact(id))
      }
    }
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
                    {contacts?.length > 0 ? contacts.map((contacts) => <tr key={contacts.id}>
                        <td>{contacts.id}</td>
                        <td>{contacts.name}</td>
                        <td>{contacts.mobile}</td>
                        <td>{contacts.email}</td>
                        <td>{contacts.company}</td>
                        <td>
                            <button title='delete' className="btn btn-danger my-1" onClick={() => clickDelete(contacts.id)}>
                                <i className="fa fa-trash" />
                            </button>{"  "}
                           <Link to={`/editUser/${contacts.id}`}>
                           <button title='edit' className="btn btn-primary my-1">
                                <i className="fa fa-pen" />
                            </button>
                           </Link>{"  "}
                           <Link to={`/userInfo/${contacts.id}`}>
                           <button title='view' className="btn btn-warning my-1">
                                <i className="fa fa-eye" />
                            </button>
                           </Link>
                        </td>
                    </tr>) : <h3>data not found</h3>}
                </tbody>
            </table>


        </div>
    );
}

export default Home;