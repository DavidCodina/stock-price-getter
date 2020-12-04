import { Config } from '@stencil/core';

////////////////////////////////////////////////////////////////////////////////
//
//  Here we can write different configurations for our Stencil project.
//
//  Before creating our first component, we want to create a global style.
//  While Stencil encourages developers to write the styles scoped to each component,
//  sometimes it's required to have global styles that apply to the whole document
//  regardless of which components are used. You should try to avoid styling components
//  with it.
//
//  Some use cases could be for defining CSS variables, loading fonts with @font-face, and
//  CSS resets. To create a global style we add a globalStyle property below that points
//  us to the stylesheet path.
//
////////////////////////////////////////////////////////////////////////////////

export const config: Config = {
  namespace: 'all-components', //changed
  //////////////////////////////////////////////////////////////////////////////
  //
  //  This was added to the default Config.
  //  Here we set the path for our custom global stylesheet.
  //  We also have to manually create all of this.
  //  Then we have to manually link to it in our HTML file as follows:
  //  <link rel="stylesheet" href="/build/demo-1.css" />
  //  Since we edited this file, we will need to restart the dev server.
  //
  ////////////////////////////////////////////////////////////////////////////////
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
