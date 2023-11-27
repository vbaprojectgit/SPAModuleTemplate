import React from 'react';
import ReactDOMClient from 'react-dom/client';
import rootComponent from './module/{{cookiecutter.module_name}}';
import singleSpaReact from 'single-spa-react';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return (<div>{{cookiecutter.module_name}} failed to load.</div>);
  },
});