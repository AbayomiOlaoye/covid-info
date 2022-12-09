import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../src/redux/fetchData';

const Home = () => {
  const dispatch = useDispatch();
  const { countries, status } = useSelector((state) => status.data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (status === null) {
      dispatch(fetchCovidData());
    }
  });

  return (
    <div className="heroPage">
      {status === 'pending' ? (
        <div className="loading">
          <h3>Loading</h3>
        </div>
      ) : (
        <div className="success">
          <h1>Success</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
