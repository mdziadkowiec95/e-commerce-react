import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NestedMenu = ({ categories }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Menu
      //     </ListSubheader>
      //   }
      className={classes.root}
    >
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/products">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="All products" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories &&
            categories.length > 0 &&
            categories.map(category => (
              <ListItem
                key={category.id}
                button
                className={classes.nested}
                component={Link}
                to={`/products?category=${category.fieldName}`}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={category.title} />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </List>
  );
};

export default NestedMenu;
