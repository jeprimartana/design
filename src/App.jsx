import React from "react";
import { Component } from "react";
import Konfirmasi from './Components/Konfirmasi_Foto/Konfirmasi';
import Nav from "./Components/Nav/Nav";
import Hadir from "./Components/Hadir/Hadir";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Konfirmasi} />
                        <Route path="/hadir" component={Hadir} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;