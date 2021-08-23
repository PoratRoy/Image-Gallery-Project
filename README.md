# Image - Gallery - Project

### Introduction
This is a full-stack web application where you can store your photos.  
Frontend is built with Angular. Backend is built with Express.js and Node.js.
___

### How to use
Follow the steps below to have this application up and running 

1. Clone this repo
2. Once you have the repo, you need to install its dependencies. 
So using a terminal, open two separate directories, one for server directory and one for client directory. 
For each one of them execute ```npm install``` to install the dependencies.
4. On the client directory, in src/environments add new file named ```environment.ts``` and add the follwing code:
```
export const environment = {
  production: false,

  SERVER_URL: 'http://localhost:<Your-Server-Localhost-Number>/api/',

  PRIVATE_MODE_PASSWORD: <Your-Private-Mode-Password>,

  MAP_API_KEY: <Google-Map-Key>,

  PHOTOS_PEXELS_API_AUTHO: <Pexels-Api-Key>,

};
```
<br/>Replace - ```<Your-Server-Localhost-Number>``` and ```<Your-Private-Mode-Password>``` with your localhost number and your password.
5. This appliction uses multiple API's, to make the app workes you need to get the AIP's keyes.
- You can find detailed guides on how to get the Pexels images Api [here](https://www.pexels.com/api/).
<br/>Replace ```<Pexels-Api-Key>``` with your pexels API key.
- You can find detailed guides on how to get the google maps Api [here](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#creating-api-keys).
<br/>Replace ```<Google-Map-Key>``` with your google maps API key.
5. Finally, all you have to do is type ```node index.js``` on the server terminal and ```ng s -o``` on the client terminal. 
6. The frontend of the application will be automatically opened in your web browser and you can test it away.
