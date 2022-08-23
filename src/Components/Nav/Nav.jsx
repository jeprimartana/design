import React, { Component } from 'react'
import './Nav.css'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';

function refreshPage() {
    window.location.reload();
}

class Nav extends Component {
    render() {
        return (
            <>
                <nav class="navbar">
                    <div class="container-fluid justify-content-center">
                        <h6 class="text-center">Presensi Hadir</h6>
                    </div>
                    <Link to="/" onClick={refreshPage}><a><BiArrowBack /></a></Link>
                </nav>
            </>
        )
    }
}

export default Nav;