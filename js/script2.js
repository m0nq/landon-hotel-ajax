'use strict';

(() => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,England';
  const apiKey = 'eac9eebd5253a65b267d683dfc52b619'; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
  let httpRequest;

  /**
   * @name: makeRequest
   * - create and send an XHR request
   */
  const makeRequest = () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', `${url}&appid=${apiKey}`);
    httpRequest.send();
  };

  /**
   * @name: responseMethod
   * - Handle XHR response
   */
  const responseMethod = () => {
    if (httpRequest.readyState === 4) console.log('Response text ->', httpRequest.responseText);
  };

  makeRequest();
})();
