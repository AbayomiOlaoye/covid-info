import { useLocation } from 'react-router-dom';
import React from 'react';

const ShowInfo = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <div className="infoCard">
        <h1 className="upDate info-head">Live Information</h1>
        <table className="table-data">
          <tr>
            <th>Continent:</th>
            <td>{state.continent}</td>
          </tr>
          <tr>
            <th>Cases:</th>
            <td>{state.cases}</td>
          </tr>
          <tr>
            <th>Today&apos;s Case:</th>
            <td>{state.todayCases}</td>
          </tr>
          <tr>
            <th>Deaths:</th>
            <td>{state.deaths}</td>
          </tr>
          <tr>
            <th>Total Deaths:</th>
            <td>{state.todayDeaths}</td>
          </tr>
          <tr>
            <th>Recovered Cases Info:</th>
            <td>{state.recovered}</td>
          </tr>
          <tr>
            <th>Today&apos;s Recovery Info:</th>
            <td>{state.todayRecovered}</td>
          </tr>
          <tr>
            <th>Tests:</th>
            <td>{state.tests}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default ShowInfo;
