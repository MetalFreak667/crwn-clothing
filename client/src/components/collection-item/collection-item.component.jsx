import React from 'react';
import { connect } from 'react-redux';

import { ImageContainer, TitleContainer, PriceContainer, CollectionFooterContainer, CollectionItemContainer, AddButtonContainer } from './collection-item.styles'
import { addItem } from '../../redux/cart/cart.actions.js';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <ImageContainer className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
            />
            <CollectionFooterContainer>
                <TitleContainer>{ name }</TitleContainer>
                <PriceContainer>{ price }</PriceContainer>
            </CollectionFooterContainer>        
            <AddButtonContainer 
            inverted
            isItem
            onClick={() => addItem(item)}
            > Add to cart </AddButtonContainer>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch =>({
    addItem: item=> dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);