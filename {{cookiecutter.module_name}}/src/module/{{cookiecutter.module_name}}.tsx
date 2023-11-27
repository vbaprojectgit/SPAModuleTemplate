
import { Loader } from 'web-modules-common'
import IntlContext from '../utilities/intlContext'
import React, { FC, useState } from 'react'

// @ts-ignore
const {{cookiecutter.module_name}}: FC = ({ moduleProps }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);


    return (
        <IntlContext.Provider value={% raw %} {{ intlProvider: moduleProps.intlProvider }}  {% endraw %}>
               <Loader isLoading={isLoading}>
        <h1>Hello Module</h1>
      </Loader>
            </IntlContext.Provider>
    );

};

export default {{cookiecutter.module_name}};


