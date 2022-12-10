import { MdOutlineSettings, MdMic, MdOutlineChevronLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

import React from 'react';

const Navigation = () => (
  <nav className="navBar flex align">
    <Link to="/">
      <MdOutlineChevronLeft className="left-nav" />
    </Link>
    <h2 className="upDate">Covid-19 Global Updates</h2>
    <div className="grp-icons flex align">
      <MdMic className="micBtn icon" />
      <MdOutlineSettings className="settings icon" />
    </div>
  </nav>
);

export default Navigation;
