// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyBK89yOlrwfjKyJkvO8MgYPEBTEAQJ82Ls',
    authDomain: 'storeinangular.firebaseapp.com',
    databaseURL: 'https://storeinangular.firebaseio.com',
    projectId: 'storeinangular',
    storageBucket: 'storeinangular.appspot.com',
    messagingSenderId: '629323702524',
    appId: '1:629323702524:web:f7bd2de61b019a3257b779'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
