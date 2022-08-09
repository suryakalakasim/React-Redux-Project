import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <nav className="navbar navbar-dark bg-primary navbar-expand-sm">

                <div className="container">
                    <div className="navbar-brand"><i className="fa fa-book-open text-warning" /> Contacts</div>
                    <div className='navbar-body'>
                    <Link className='nav-link text-white d-inline p-2' to='/'>Home</Link>
                    <Link className='nav-link text-white d-inline p-2 ' to='/addEdit'>AddEdit</Link>
                    <Link className='nav-link text-white d-inline p-2' to='/abot'>About</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;