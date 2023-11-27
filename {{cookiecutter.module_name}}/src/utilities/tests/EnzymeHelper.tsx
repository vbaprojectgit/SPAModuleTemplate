import React, { ReactNode } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import IntlContext from '../intlContext';

const MountWithIntel = (
  locale: string,
  node: ReactNode,
): ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> => {
  //@ts-ignore
  const Intl = jest.genMockFromModule('react-intl').IntlProvider;
  Intl.formatMessage = jest.fn();

  return mount(
    <IntlContext.Provider value={% raw %} {{ intlProvider: Intl }} {% endraw %}>
      {node}
    </IntlContext.Provider>
  );
};

const EnzymeHelper = {
  MountWithIntel,
};

export { EnzymeHelper };