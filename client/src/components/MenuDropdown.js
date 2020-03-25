import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';

const MenuDropdown = ({ iconComponent: IconComponent, buttonText, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onItemClick = (e, onClickCallback) => {
    handleClose();

    if (onClickCallback) onClickCallback(e);
  };

  if (!options || options.length === 0) return null;

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
        {options &&
          options.length > 0 &&
          options.map((option, i) => {
            const key = option.id ? option.id : `${option.label}_${i}`;
            return option.link ? (
              <MenuItem
                key={key}
                onClick={e => onItemClick(e, option.onClick)}
                component={Link}
                to={option.link}
              >
                {option.label}
              </MenuItem>
            ) : (
              <MenuItem key={key} onClick={e => onItemClick(e, option.onClick)}>
                {option.label}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
};

MenuDropdown.propTypes = {
  iconComponent: PropTypes.object,
  buttonText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      link: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
};

MenuDropdown.defaultProps = {
  buttonText: '',
};

export default MenuDropdown;
