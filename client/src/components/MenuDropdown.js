import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';

const MenuDropdown = ({ iconComponent: IconComponent, buttonText }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {!IconComponent ? (
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {buttonText}
        </Button>
      ) : (
        <IconButton
          color="inherit"
          aria-label="add to shopping cart"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <IconComponent />
        </IconButton>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuDropdown;
