import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import {
    ProductsContainer,
    ProductWrapper,
    ProductHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
  } from './ProductElements';

const styles = theme => ({
    ...theme.productComp
})

const Products = ({ heading, data, classes }) => {
    return (
        <section id="menu">
            <ProductsContainer>
                <ProductHeading><Typography className={classes.titleFont}>{heading}</Typography></ProductHeading>
                <ProductWrapper>
                    {data.map((product, index) => {
                        return (
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt}/>
                                <ProductInfo>
                                    <ProductTitle><Typography className={classes.titleFont}>{product.name}</Typography></ProductTitle>
                                    <p><Typography className={classes.basicFont}>Flavors: {product.flavors}</Typography></p>
                                    <ProductDesc><Typography className={classes.basicFont}>Ingredients: {product.desc}</Typography></ProductDesc>
                                    <ProductPrice><Typography className={classes.titleFont}>{product.price}</Typography></ProductPrice>
                                    <ProductButton><Typography className={classes.basicFont}>{product.button}</Typography></ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })}
                </ProductWrapper>
            </ProductsContainer>
        </section>
    )
};

export default withStyles(styles)(Products);