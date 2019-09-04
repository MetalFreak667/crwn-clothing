import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Header = lazy(() => import('./components/header/header.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({ checkUserSession, currentUser }) => {  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (    
    <div>
    <ErrorBoundary>
      <GlobalStyle></GlobalStyle>
        <Suspense fallback={<Spinner></Spinner>}>
          <Header></Header>
        </Suspense>
        <Switch>
          <Suspense fallback={<Spinner></Spinner>}>
            <Route exact path='/' component={HomePage}></Route>        
            <Route path='/shop/' component={ShopPage}></Route>
            <Route exact path='/checkout' component={CheckoutPage}></Route>
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
          </Suspense>
        </Switch>    
      </ErrorBoundary>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
