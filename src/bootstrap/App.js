import React, { Component } from 'react';
import Voucher from '../containers/Voucher'
import VerifiyTokenPage from '../containers/VerifiyTokenView'
import RedirectPage from '../containers/RedirectView'
import AuthView from '../containers/AuthView'

import OnBoarding1 from '../containers/Loyalty/OnBoarding1'
import OnBoarding2 from '../containers/Loyalty/OnBoarding2'
import OnBoarding3 from '../containers/Loyalty/OnBoarding3'

import L2 from '../containers/Loyalty/L2'
import L3 from '../containers/Loyalty/L3'

import L44 from '../containers/Loyalty/L44'

import L4 from '../containers/Loyalty/L4'
import L5 from '../containers/Loyalty/L5'
import L6 from '../containers/Loyalty/L6'
import L7 from '../containers/Loyalty/L7'
import L8 from '../containers/Loyalty/L8'
import L9 from '../containers/Loyalty/L9'
import L10 from '../containers/Loyalty/L10'
import { Provider } from 'react-intl-redux'
import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import es from 'react-intl/locale-data/es'
import generateStore from './generateStore'
import registerServiceWorker from './registerServiceWorker'
import NotFound from '../components/NotFound'
import Layout from '../components/Layout'
import localeData from '../locales/data.json'
import {initializeParse} from './initParse'

addLocaleData([...en, ...fr, ...es])

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]

// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en

const initialData = {
  intl: {
    defaultLocale: 'en',
    locale: languageWithoutRegionCode,
    messages
  }
}
const store = generateStore(initialData)


class App extends Component {
  componentWillMount(){
    initializeParse()
  }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/404' component={NotFound} />
              <Route exact path='/voucherRequestPage' component={AuthView} />
              <Route exact path='/cp/:cp' component={RedirectPage} />
              <Route exact path='/verify_email/:token/:email' component={VerifiyTokenPage} />
              <Route exact path='/fake/:templateId?/:mode/:displayModal' component={Voucher} />
              
              <Route exact path='/onboarding1' component={OnBoarding1} />
              <Route exact path='/onboarding2' component={OnBoarding2} />
              <Route exact path='/onboarding3' component={OnBoarding3} />

              <Route exact path='/l2' component={L2} />
              <Route exact path='/l3' component={L3} />
              
              <Route exact path='/l44' component={L44} />

              <Route exact path='/l4' component={L4} />
              <Route exact path='/l5' component={L5} />
              <Route exact path='/l6' component={L6} />
              <Route exact path='/l7' component={L7} />
              <Route exact path='/l8' component={L8} />
              <Route exact path='/l9' component={L9} />
              <Route exact path='/l10' component={L10} />
              <Route exact path='/:voucherCode/:templateId?' component={Voucher} />
            </Switch>
          </Router>
        </Layout>
      </Provider>
    )
  }
}

registerServiceWorker()

export default App
