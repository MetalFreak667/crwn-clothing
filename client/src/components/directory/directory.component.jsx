import React from 'react';

import { DirectoryMenuContainer } from './directory.styles'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySelector } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps}></MenuItem>
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelector
});

export default connect(mapStateToProps)(Directory);