import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import styles from "../styles/header.module.scss";
import Link from 'next/link';
const StyledMenu = withStyles({
  paper: {
    border: '0',
    borderRadius: '0',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    padding: '10px 35px',
    marginTop: '10px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    marginBottom: '15px',
    fontFamily: 'Lato',
    fontWeight: '400',
    '&:last-child': {
      marginBottom: '0',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const CustomizedMenus = ({item}) =>{
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={styles.dropdown}
      >
        <span>{item.name}</span>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
    
     { item.subItems.map((link,index) =>{
         return (
           <Link href={link.route}>
              <StyledMenuItem key={index} className={styles.dropdown}>
                {/* <ListItemText primary={link.name} /> */}
                <span>{link.name}</span>
              </StyledMenuItem>
           </Link>
         )
     })}
       
      </StyledMenu>
    </div>
  );
}
export default CustomizedMenus