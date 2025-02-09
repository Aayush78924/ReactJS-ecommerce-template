import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../preview-collection/collection-preview.component';

import './collections.overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div style={{width:'100vw',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverview)