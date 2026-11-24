# Project1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## API Information

API Name: TheSportsDB

Documentation:
https://www.thesportsdb.com/documentation

Example Request:
https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=133739

The API provides soccer player information in JSON format.
The response contains a "player" array with player information.

The API was tested successfully from the Angular application
without CORS errors.

We chose Option A: HttpClient and an Observable to load soccer players from TheSportsDB API. We chose this option because our application already uses Angular Signals to manage the players, and HttpClient allows us to update the existing signal when the API responds. This
approach also makes it easy to handle loading and error states.

## Local Edits

Players are loaded from TheSportsDB API.

Users can edit and delete players locally without sending changes to the API. Changes are stored in Angular Signals and are reflected immediately in the application.

When the page is refreshed, the original players are loaded again from TheSportsDB, so local changes are lost

## Lazy Loading 

Before 

| Initial chunk files | Names         |  Raw size | Estimated transfer size
|---|---|---|---|
| main-A6N7YMSF.js    | main          | 328.66 kB |                86.42 kB
| styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes
| ** Initial total ** | | **328.66 kB** |                86.42 kB|


After 

| Initial chunk files | Names                |  Raw size | Estimated transfer size
|---|---|---|---|
| chunk-ERFHWSRS.js   | -                    | 166.87 kB |                49.21 kB
| chunk-HECNOFII.js   | -                    | 104.92 kB |                27.24 kB
| main-H3GEFQBX.js    | main                 |   6.63 kB |                 2.25 kB
| styles-5INURTSO.css | styles               |   0 bytes |                 0 bytes
| **Initial total**       | | 278.40 kB |                78.70 kB|


| Lazy chunk files    | Names                |  Raw size | Estimated transfer size
|---|---|---|---|
| chunk-XTW2ZLUE.js   | soccer-player-form   |  51.90 kB |                11.34 kB
| chunk-FAEMD3WD.js   | soccer-player-detail |   1.24 kB |               607 bytes

Lazy loading reduced the initial bundle size from 328.66 kB to 278.40 kB by loading the form and detail components only when their routes are visited. The soccer players list remains eager because it is the landing page and should be available immediately.


## Lifecycle

1. What happened when you read this.id() in the constructor, and why?

When I tried to read this.id() in the constructor, Angular displayed error NG8118 because the required input did not have a value yet. This happens because Angular initializes the component inputs after the constructor runs.

2. Which action in your app caused ngOnDestroy to run, and what does that tell you about what the router does with a page when you leave it?

ngOnDestroy() ran when I navigated away from the soccer player details page to the players list. This shows that Angular Router destroys the current routed component when navigating away from its page.

## localStorage

The application stores saved soccer player IDs and the selected position filter in localStorage so users do not have to select them again after refreshing the page.

Filtering players by position also reduces the amount of content displayed, making the page shorter and easier to navigate.

Sensitive information such as passwords should never be stored in localStorage.
