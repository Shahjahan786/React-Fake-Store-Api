import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        textDecoration: 'none',
        color: '#FFFFFF' 
    },

   
    title: {
        flexGrow: 1,
    },
}));



export default function NavBar() {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                   
                    <Typography variant="h6" className={classes.title}>
                        My Store
                    </Typography>

                    <Link to="/" className={classes.menuButton} color="inherit" aria-label="menu">Home </Link>
                    <Link to="/about" className={classes.menuButton} color="inherit" aria-label="menu" >About </Link>
                    <Link to="/product" className={classes.menuButton} color="inherit" aria-label="menu" >Product </Link>

                </Toolbar>
            </AppBar>
        </div>




    );
}