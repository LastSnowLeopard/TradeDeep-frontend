import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import fuse from "@assets/images/logos/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .logo-icon': {
      transition: theme.transitions.create(['width', 'height'], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    '& .react-badge, & .logo-text': {
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
  },
  reactBadge: {
    backgroundColor: '#121212',
    color: '#61DAFB',
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'flex items-center')}>
      <img className="logo-icon" src={fuse} alt="logo" />
    </div>
  );
}

export default Logo;
