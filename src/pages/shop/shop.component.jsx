import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithOverview = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
   
    constructor(){
        super();

        this.state={
            loading: true
        };
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => 
            {
                const collectionsMap = convertCollectionsSnapshotsToMap(snapshot)
                updateCollections(collectionsMap);
                this.setState({loading: false});
            });
    };

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (            
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}></CollectionOverviewWithSpinner>} ></Route>
                <Route path={`${match.path}:collectionId`} render={(props) => <CollectionPageWithOverview isLoading={loading} {...props}></CollectionPageWithOverview>}></Route>
            </div>
        )
    } 
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);