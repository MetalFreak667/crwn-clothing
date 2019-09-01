import ShopActionsTypes from './shop.types';
import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => 
            {
                const collectionsMap = convertCollectionsSnapshotsToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionsMap));
            }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};

export const fetchCollectionsSuccess = collectionsMap =>({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage =>({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});