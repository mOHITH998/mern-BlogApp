import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';

function Dropdown() {
  const [display, setDisplay] = useState(false);

  const showDropdown = (e) => {
    setDisplay(true);
  };
  return (
    <div>
      <Avatar
        src="../Img/profile2.jpg"
        style={{ marginTop: '0.5rem' }}
        onClick={showDropdown}
      />
      {display ? (
        <ul>
          <li>Write Post</li>
          <li>Settings</li>
          <li>About</li>
          <li>Sign out</li>
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;
