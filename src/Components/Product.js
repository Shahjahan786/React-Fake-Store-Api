import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import productsList from '../products.json';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: 750

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



export default function Product() {
  const classes = useStyles();
  const [products, setProducts] = useState(productsList);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(data => {
     console.log(data)
     setProducts(data);
  }).catch(e => {
    
  });
  }, []);



  return (
    <div className={classes.root}>
      <GridList cellHeight={300}  className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="h1">Our Products</ListSubheader>
        </GridListTile>
        {Object.keys(products).map((key) => (
          <GridListTile key={key}>
            <img src={products[key].image} alt={products[key].title} height={300} width={300} />
            <Link to={"/product/" + key}>
              <GridListTileBar
                title={products[key].title}
                subtitle={<span>Price Rs. {products[key].price}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${products[key].title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>

        ))}


      </GridList>
    </div>
  );
}