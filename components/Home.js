import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdSearch, MdOutlineChevronRight, MdOutlineTimelapse } from 'react-icons/md';
import { fetchCovidData } from '../src/redux/fetchData';

const Home = () => {
  const dispatch = useDispatch();
  const { countries, status } = useSelector((state) => state.datas);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (status === null) {
      dispatch(fetchCovidData());
    }
  });

  return (
    <div className="heroPage">
      {status === 'pending' && (
        <div className="loading">
          <h3>
            {MdOutlineTimelapse}
            Loading...
          </h3>
        </div>
      )}
      {status === 'success' && (
        <div className="success">
          <div className="search">
            <h1 className="live_">Live preview</h1>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              className="check"
            />
            { MdSearch }
          </div>
          <div className="container">
            {countries
              .filter(
                (searchCountry) => searchCountry.continent
                  .toLowerCase()
                  .includes(search.toLowerCase())
                || searchCountry.continent
                  .toLowerCase()
                  .includes(search.toLowerCase()),
              ).map((item) => (
                <div key={item.updated} className="country_display">
                  <NavLink state={item} to={`/details/${item.updated}`}>
                    {MdOutlineChevronRight}
                  </NavLink>
                  <div className="update_countries">
                    <h3>{item.continent}</h3>
                    <p>{item.updated}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {status === 'rejected' && (
        <div className="notFound">
          <h2>Oops! Something went wrong.</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
