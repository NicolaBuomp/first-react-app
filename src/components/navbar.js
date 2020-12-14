import React from 'react';
import SearchBar from './searchbar';
import MenuBar from './menubar';

export default function navbar ({onSearchTerm}) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <span className="navbar-brand" >Search Film</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <MenuBar />
            <SearchBar onSearchMovie = {onSearchTerm}/>
        </div>
    </nav>
    )
}