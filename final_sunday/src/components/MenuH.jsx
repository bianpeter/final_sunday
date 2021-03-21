import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconB: {
    backgroundColor:"rgb(241, 241, 241)",
    position:"absolute",
    top:"0",
    right:"0",
    margin:"20px",
    "&:hover": {
      backgroundColor:"grey",
      color:"white"
    },
    "&:media (max-width: 1100px)": {

    }
  },
  icon: {
    fontSize:"45px",
    "@media (max-width: 1024px)": {
      fontSize:"35px",
    },
    "@media (max-width: 768px)": {
      fontSize:"30px",
    },
  }

});


const options = [
  'Home',
  'About',
  'Contact',
  'Cats',
];

const ITEM_HEIGHT = 48;

function MenuH() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton className={classes.iconB}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuRoundedIcon className={classes.icon} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


export default MenuH
