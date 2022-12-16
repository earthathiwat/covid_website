import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import Plot from "react-plotly.js";

export function Header() {
  return (
    <header>
      <h1>COVID-19 Global Travel Information Center</h1>
    </header>
  );
}

export function Filter({
  setCountrySelected,
  data,
  click,
  setClick,
}) {
  let countriesArray = ["United States"];
  for (let i = 0; i < data.length; i++) {
    countriesArray[i + 1] = data[i].adm0_name;
  }
  let countryOptions = function (array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = (
        <option value={array[i]} key={i}>
          {array[i]}
        </option>
      );
    }
    return array;
  };
  return (
    <div className="filter-nav">
      <div className="filter-item">
        <div className="filter-header">
          <h4>Filter</h4>
        </div>
        <div className="filter-content">
          <form >
            <label htmlFor="risk-filter">Exclude High Risk Countries: </label>
            <input type="checkbox" onChange={() => onCheck(setClick, click)} checked={click}/>
          </form>
        </div>
      </div>

      <div className="filter-item">
        <div className="filter-header">
          <h4>Search</h4>
        </div>
        <div className="filter-content">
          <form onSubmit={(e) => onSubmit(e, setCountrySelected)}>
            <label htmlFor="select_country">Select By Country: </label>
            <br />
            <select id="select_country" name="select_country">
              {countryOptions(countriesArray)}
            </select>
            <button id="select_country" type="submit">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function onCheck(setClick, click) {
  setClick(!click);
}

function onSubmit(e, setCountrySelected) {
  e.preventDefault();
  setCountrySelected(e.target[0].value);
}

function isLevelFour(countryName, riskData) {
  for (let i = 0; i < riskData.length; i++) {
    if (countryName.adm0_name === riskData[i].country_name) {
      return false;
    }
  }
  return true;
}

export function Map({
  countrySelected,
  setCountrySelected,
  data,
  click,
  riskData,
}) {
  const [map, setMap] = useState(null);
  const country = data.filter(
    (country) => country.adm0_name === countrySelected
  )[0];
  const defaultPosition = [country.Y, country.X];
  if (map) {
    map.setView(defaultPosition, 5);
  }

  let ourData = data;
  if (click) {
    ourData = data.filter((countryName) => isLevelFour(countryName, riskData));
  }
  let addMarkers = ourData.map((country) => {
    return (
      <Marker
        key={country.adm0_name}
        position={[country.Y, country.X]}
        eventHandlers={{
          click: () => {
            setCountrySelected(country.adm0_name);
          },
        }}
      >
        <Tooltip>{country.adm0_name}</Tooltip>
      </Marker>
    );
  });
  return (
    <div className="leafletMap">
      <MapContainer
        center={defaultPosition}
        zoom={3}
        scrollWheelZoom={true}
        tap={false}
        whenCreated={setMap}
        style={{ height: "650px", marginTop: "0", marginBottom: "0" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {addMarkers}
      </MapContainer>
    </div>
  );
}

export function GraphControls({ group, graph, setGraph }) {
  let graphComponent = group.map((tabStr) => {
    return (
      <button
        className="tab-stat"
        key={tabStr}
        onClick={(v) => setGraph(tabStr)}
      >
        {tabStr}
      </button>
    );
  });
  return (
    <div>
      <h2>World Covid Trends</h2>
      <h3>Graphs</h3>
      <div className="tab">{graphComponent}</div>
    </div>
  );
}

export function RenderGraph({ graph, worldData }) {
  let data = worldData;

  let xl = [];
  let yl = [];
  data.forEach((element) => {
    xl.push(element.Date);
    yl.push(element[graph]);
  });

  let titleName = "World Covid " + graph;

  return (
    <div>
      <Plot
        data={[
          {
            type: "scatter",
            mode: "lines",
            x: xl,
            y: yl,
            marker: { color: "#ed022d" },
          },
        ]}
        layout={{ title: titleName }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export function PolicyInformation({ countrySelected, data }) {
  let countryInfo = data.filter(function (data) {
    return data.adm0_name === countrySelected;
  });
  const [isReadmore, setIsReadmore] = useState(false);
  const [isReadMoreTwo, setIsReadmoreTwo] = useState(false);
  return (
    <div className="information">
      <h2>{countrySelected}</h2>
      <h3>Policy Information</h3>
      <div className="flex-card-container">
        <div className="card">
          <div className="travel-policy-header">
            <h4>Travel Policy</h4>
          </div>
          <p className="md-spacing">
            {isReadmore ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: countryInfo[0].info.split(
                    "Internal Restrictions:"
                  )[0],
                }}
              ></div>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: countryInfo[0].info
                    .split("Internal Restrictions:")[0]
                    .slice(0, 400),
                }}
              ></div>
            )}
            <button id="read-more" onClick={() => setIsReadmore(!isReadmore)}>
              Read more
            </button>
          </p>
        </div>

        <div className="card">
          <div className="local-policy-header">
            <h4>Local Policy</h4>
          </div>
          <p className="md-spacing">
            {isReadMoreTwo ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: countryInfo[0].info.split(
                    "Internal Restrictions:"
                  )[1],
                }}
              ></div>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: countryInfo[0].info
                    .split("Internal Restrictions:")[1]
                    .slice(0, 400),
                }}
              ></div>
            )}
            <button
              id="read-more"
              onClick={() => setIsReadmoreTwo(!isReadMoreTwo)}
            >
              Read more
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [countrySelected, setCountrySelected] = useState("United States");
  const [data, setData] = useState();
  const [riskData, setRiskData] = useState();
  const [worldData, setWorldData] = useState();
  const [click, setClick] = useState(false);
  const [graph, setGraph] = useState("Confirmed");
  useEffect(() => {
    fetch("./data/travelinfo.json")
      .then((res) => res.json())
      .then((res) => {
        res = res.filter((country) => country.info.length !== 0);
        res = res.filter(
          (country) => country.info.indexOf("Internal Restrictions:") !== -1
        );
        setData(res);
      })
      .catch(function (err) {
        alert(err);
      });
    fetch("./data/cdcrisk.json")
      .then((res) => res.json())
      .then((res) => {
        setRiskData(res);
      })
      .catch(function (err) {
        alert(err);
      });
    fetch("./data/worldwide.json")
      .then((res) => res.json())
      .then((res) => {
        setWorldData(res);
      })
      .catch(function (err) {
        alert(err);
      });
  }, []);
  return (
    <div>
      {data && (
        <div className="content-wrap">
          <Header />
          <div className="map">
            <Filter
              countrySelected={countrySelected}
              setCountrySelected={setCountrySelected}
              data={data}
              click={click}
              setClick={setClick}
            />
            <Map
              countrySelected={countrySelected}
              setCountrySelected={setCountrySelected}
              data={data}
              click={click}
              riskData={riskData}
            />
          </div>
          <PolicyInformation
            countrySelected={countrySelected}
            setCountrySelected={setCountrySelected}
            data={data}
          />
          <div className="graph">
            <GraphControls
              group={["Confirmed", "Deaths", "Recovered"]}
              graph={graph}
              setGraph={setGraph}
            />
            <RenderGraph graph={graph} 
                worldData={worldData}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
