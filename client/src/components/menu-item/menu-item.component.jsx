import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemTitleContainer, MenuItemSubtitleContainer, MenuItemContentContainer, MenuItemBackgroundImageContainer, MenuItemContainer } from './menu-item.styles';

const MenuItem = ({id, title, imageUrl, size, linkUrl, history, match}) =>
(
    <MenuItemContainer        
        key={id} 
        size={size}
        onClick={ () => history.push(`${match.url}${linkUrl}`) }>
        <MenuItemBackgroundImageContainer className='background-image'
        imageUrl={imageUrl} ></MenuItemBackgroundImageContainer>
        <MenuItemContentContainer  className='content'>
            <MenuItemTitleContainer>{title.toUpperCase()}</MenuItemTitleContainer>
            <MenuItemSubtitleContainer>SHOP NOW</MenuItemSubtitleContainer>
        </MenuItemContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);