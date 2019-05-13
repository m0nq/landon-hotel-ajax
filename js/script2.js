'use strict';

// jQuery request
// (() => {
//   const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,England';
//   const apiKey = 'eac9eebd5253a65b267d683dfc52b619'; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
//
//   const updateUISuccess = response => {
//     let condition = response.weather[0].main;
//     let degC = response.main.temp - 273.15;
//     let degCInt = Math.floor(degC);
//     let degF = degC * 1.8 + 32;
//     let degFInt = Math.floor(degF);
//     // let weatherBox = document.querySelector('#weather');
//     // weatherBox.innerHTML = `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p><p>${condition}</p>`;
//     let $weatherBox = $('#weather');
//     $weatherBox.append(`<p>${degCInt}&#176; C / ${degFInt}&#176; F</p><p>${condition}</p>`);
//   };
//
//   const updateUIError = () => {
//     // let weatherBox = document.querySelector('#weather');
//     // weatherBox.className = 'hidden';
//     let $weatherBox = $('#weather');
//     $weatherBox.addClass('hidden');
//   };
//
//   $.get(`${url}&appid=${apiKey}`)
//     .done(response => updateUISuccess(response))
//     .fail(error => updateUIError(error));
//
//   console.log(this);
//
// })();

// Fetch request
// (() => {
//   const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,England';
//   const apiKey = 'eac9eebd5253a65b267d683dfc52b619'; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
//
//   fetch(`${url}&appid=${apiKey}`)
//     .then(response => {
//       if (!response.ok) throw Error(response.statusText);
//       return response.json();
//     })
//     .then(response => {
//       updateUISuccess(response);
//     })
//     .catch(error => {
//       updateUIError();
//     });
//
//   const updateUISuccess = response => {
//     let condition = response.weather[0].main;
//     let degC = response.main.temp - 273.15;
//     let degCInt = Math.floor(degC);
//     let degF = degC * 1.8 + 32;
//     let degFInt = Math.floor(degF);
//     let weatherBox = document.querySelector('#weather');
//     weatherBox.innerHTML = `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p><p>${condition}</p>`;
//   };
//
//   const updateUIError = () => {
//     let weatherBox = document.querySelector('#weather');
//     weatherBox.className = 'hidden';
//   };
// })();

// XHR request
// (() => {
//   const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,England';
//   const apiKey = 'eac9eebd5253a65b267d683dfc52b619'; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
//   let httpRequest;
//
//   /**
//    * @name: makeRequest
//    * - create and send an XHR request
//    */
//   const makeRequest = () => {
//     httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = responseMethod;
//     httpRequest.open('GET', `${url}&appid=${apiKey}`);
//     httpRequest.send();
//   };
//
//   /**
//    * @name: responseMethod
//    * - Handle XHR response
//    */
//   const responseMethod = () => {
//     if (httpRequest.readyState === 4) {
//       httpRequest.status === 200 ?
//         updateUISuccess(httpRequest.responseText) :
//         updateUIError(httpRequest.responseText);
//       console.log('Response text ->', httpRequest.responseText);
//     }
//   };
//
//   /**
//    * updateUISuccess
//    * - Handle XHR Success
//    */
//   const updateUISuccess = responseText => {
//     let response = JSON.parse(responseText);
//     let condition = response.weather[0].main;
//     let degC = response.main.temp - 273.15;
//     let degCInt = Math.floor(degC);
//     let degF = degC * 1.8 + 32;
//     let degFInt = Math.floor(degF);
//     let weatherBox = document.querySelector('#weather');
//     weatherBox.innerHTML = `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p><p>${condition}</p>`;
//   };
//
//   /**
//    * updateUIError
//    * - Handle XHR Error
//    */
//   const updateUIError = () => {
//     let weatherBox = document.querySelector('#weather');
//     weatherBox.className = 'hidden';
//   };
//
//   makeRequest();
// })();
