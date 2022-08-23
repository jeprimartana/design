import React, { Fragment } from "react";
import { Component } from "react";
import './Konfirmasi.css';
import Foto from '../../assets/picture.jpg'
import { Link } from "react-router-dom";

function refreshPage() {
    window.location.reload();
}

class Konfirmasi extends Component {
    render() {
        return (
            <div className="border">
                <h3>Konfirmasi Foto</h3>
                <div className="foto">
                    <img src={Foto} alt="Foto" />
                </div>
                <div className="tombol">
                    <a href="#" className="btn-1">Ulangi Foto</a>
                    <Link to="/hadir" onClick={refreshPage} className="link"><a className="btn-2">Absen Sekarang</a></Link>
                </div>
            </div>
        );
    }
}

export default Konfirmasi;