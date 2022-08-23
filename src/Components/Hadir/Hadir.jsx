import React, { Fragment } from "react";
import { Component } from "react";
import Foto from '../../assets/picture.jpg'
import './Hadir.css'


class Hadir extends Component {
    render() {
        return (
            <>
                <div className="border">
                    <div className="foto">
                        <img src={Foto} alt="Foto" />
                        <div className="note">
                            <h7>Jam Kehadiran</h7>
                            <p>07:18:45 WIB</p>
                            <h7>Jam Pulang</h7>
                            <p>00:00:00</p>
                            <h7>Lokasi</h7>
                            <p>Kantor Bawaslu Kota Denpasar Jl. Moh Yamin IX No.15</p>
                        </div>
                    </div>
                </div>

                <div className="btn">
                    <a href="#" className="btn-red">Konfirmasi</a>
                </div>
            </>
        );
    }
}

export default Hadir;