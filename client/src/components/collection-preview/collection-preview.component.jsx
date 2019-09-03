import React from 'react';
import { CollectionPreviewContainer, PreviewContainer, PreviewTitleContainer } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ( {title, items}) => (

    <CollectionPreviewContainer>
        <PreviewTitleContainer>{title.toUpperCase()}</PreviewTitleContainer>
        <PreviewContainer>
            {
                items.filter((item, idx) => (idx < 4)).map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;