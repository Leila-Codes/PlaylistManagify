// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: '$CLIENT_ID',
  client_secret: '$CLIENT_SECRET',
  redirect_uri: 'http://dev.lunasphere.co.uk:4200/login',
  required_scopes: 'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public',
  spotifyBaseUrl: 'https://api.spotify.com/v1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
