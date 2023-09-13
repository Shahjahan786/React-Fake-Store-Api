import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useParams } from 'react-router-dom';
import productsList from '../products.json';
import { AddShoppingCart } from '@material-ui/icons';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '0 auto',
    marginTop: 25
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductItem() {
  const classes = useStyles();
  

  const {id} = useParams();
  let product = productsList[id];
  console.log(id)

  const [showDescription, setShowDescription] = useState(false)

  if (!product) {
    return <h2>404: Product Not Found</h2>
}




  return (
    <Card className={classes.root}>
      <CardHeader
        title={product.title}
        subheader={`Price Rs ${product.price}`}
        onClick = { ()=>{
          setShowDescription(!showDescription)
        }
         
        }
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
      />
      {
       showDescription ? 

            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
          :
          <></>
        
      }
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
      
    </Card>
  );
}
