import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, googleProvider, facebookProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure } from './user.actions';
import UserActionTypes from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try {
        console.log(userAuth);
        console.log(additionalData);
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error)
    {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(){
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error)
    {
        yield put(signInFailure(error));
    }
} 

export function* onGoogleSignInStart()
{
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithFacebook(){
    console.log('signInWithFacebook');
    try {
        const { user } = yield auth.signInWithPopup(facebookProvider);
        console.log(user);
        yield getSnapshotFromUserAuth(user);
    } catch (error)
    {
        console.log(error);
        yield put(signInFailure(error));
    }
} 

export function* onFacebookSignInStart()
{
    console.log('onFacebookSignInStart');
    yield takeLatest(UserActionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook)
}


export function* signInWithEmail({ payload: { email, password }})
{
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error)
    {
        yield put(signInFailure(error));
    }
}

export function* signUp({ payload: { displayName, email, password, confirmPassword }})
{
    if(password !== confirmPassword)
    {
        yield put(signUpFailure('passwords dont match'));
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const min=4; 
        const max=5;  
        const random = Math.floor(Math.random() * (+max - +min)) + +min; 
        const photoURL = `https://robohash.org/${user.uid}?set=set${random}`;
        console.log(photoURL);

        yield getSnapshotFromUserAuth(user, {displayName, photoURL});

    }
    catch(error)
    {
        yield put(signUpFailure(error));
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        console.log(userAuth);
        if(!userAuth)
        {
            return;
        }
        
        yield getSnapshotFromUserAuth(userAuth);
        
    } catch(error)
    {
        yield put(signInFailure(error));
    }
}

export function* signOut()
{
    try{
        yield auth.signOut();
        yield (put(signOutSuccess()));
    } catch(error)
    {
        yield put(signOutFailure(error));
    }

}

export function* onEmailSignInStart()
{
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart()
{
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUp()
{
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onFacebookSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUp)
    ]);
}