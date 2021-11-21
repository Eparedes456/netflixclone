import React from 'react';
import './App.css';
import Row from '../src/componentes/Row';
import request from './service/request';
import Banner from './componentes/Banner';
import Nav from './componentes/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner   />
      <Row title="NETFLIX ORIGINALS"  fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated " fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
    </div>
  );
}

export default App;
