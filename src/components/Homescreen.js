import React from "react";
import requests from "../features/Requests";
import Banner from "./Banner";
import "./Homescreen.css";
import Nav from "./Nav";
import Row from "./Row";

function Homescreen() {
  return (
    <div className="homescreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action And Adventure Series"
        fetchUrl={requests.fetchActionAndAdventureSeries}
      />
      <Row title="Comedy Series" fetchUrl={requests.fetchComedySeries} />
      <Row title="Reality Series" fetchUrl={requests.fetchRealitySeries} />
      <Row
        title="Documentary Series"
        fetchUrl={requests.fetchDocumentarySeries}
      />
    </div>
  );
}

export default Homescreen;
