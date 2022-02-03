import React from 'react';
import { IntlProvider } from 'react-intl';
import flattenMessages from 'services/i18n/intl';
import enMessages from 'translations/en.json';
import frMessages from 'translations/fr.json';

const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

const ConnectedIntlProvider: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <IntlProvider locale="fr" messages={locales.en}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
