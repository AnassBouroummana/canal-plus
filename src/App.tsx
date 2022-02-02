/* Language polyfills needed for IE11, Edge, Safari 12 & 13 support
https://github.com/formatjs/react-intl/blob/master/docs/Upgrade-Guide.md#migrate-to-using-native-intl-apis
*/
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en';
import '@formatjs/intl-pluralrules/dist/locale-data/fr';

import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr';
/* End of language polyfills */

import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist/es/types';
import { Store } from 'redux';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import Routes from './routes';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
import AppCrashFallback from './components/AppCrashFallback';
import flattenMessages from 'services/i18n/intl';
import enMessages from 'translations/en.json';
import frMessages from 'translations/fr.json';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@mui/material';
import theme from 'stylesheet';
import { QueryParamProvider } from 'use-query-params';

interface Props {
  history: History;
  store: Store;
  persistor: Persistor;
}
const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};
const App: React.FunctionComponent<Props> = ({ history, store, persistor }) => {
  return (
    <ErrorBoundary FallbackComponent={AppCrashFallback}>
      <QueryParamProvider>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
                  <IntlProvider locale="fr" messages={locales.en}>
                    <Routes />
                  </IntlProvider>
                </ConnectedRouter>
              </PersistGate>
            </Provider>
          </LocalizationProvider>
        </ThemeProvider>
      </QueryParamProvider>
    </ErrorBoundary>
  );
};

export default App;
