//import PropTypes  from 'react';
import PropTypes from 'prop-types'
import Constants from './Constants';
import {Alert} from 'react-native';

function APIError(message){
    this.message = message;
}
APIError.prototype = new Error();

export class Enum  {
  constructor(name) { this.name = name; }
  toString() { return `name`; }
}


export class API {

  static baseURL          = "https://reqres.in/api/"//"https://jsonplaceholder.typicode.com/" //"http://syonserver.com/pocket-seed/"
  static header           = Constants.kHeaders
  static apiPath          = API.baseURL
  //-------------------------------------------------------------------
    /**@param {APIMethod} APIMethod
     * @param {APIPath} APIPath
     * @param {?Object} params  {key:value}
     * @param {function} responseCallback (json) => void
     * @param {function} errorCallback (error) => void
     */
   static requst(method, path, params, responseCallback, errorCallback) {

      if (typeof(responseCallback) !== 'function') {
        throw "API.request requires a fetch responseCallback at 2nd argument";
      }
      /*
      if (typeof(errorCallback) == 'function') {
        throw "API.request requires a fetch errorCallback at 2nd argument";
      }
      */
      const url = API.apiPath + path 
      var jsonParam = null
      if  (method == 'get' || method == 'head') {
        jsonParam = null;
      }else {
        jsonParam = JSON.stringify(params);
      }
  
      fetch(url, {
        method: method,
        headers: Constants.kHeaders,
        body: jsonParam,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            validateJsonResponse(responseJson, responseCallback, errorCallback)
          }
        )
        .catch((error) => {
          if (typeof(errorCallback) == 'function') {
              errorCallback(error)
          }else {
            Alert.alert("looks like there is some network error,\nPlease try after some time.");
          }
          console.error(error);
        });
    }
}

const validateJsonResponse = (json, responseCallback, errorCallback) => {
  //Alert.alert('Json :' + JSON.stringify(json));
  responseCallback(json)
}

export const APIMethod = {
  post   : 'post',
  get    : 'get',
  put    : 'put',
  delete : 'delete',
  head   : 'head',
}

export const APIPath = {
   login            : 'users/login',
   signUp           : 'users/register',
   forgotPassword   : 'users/forgot',
   logOut           : 'users/logout"',
   posts            : 'posts',
   products         : 'photos',
   user             : 'users/2',
   users            : 'users?page=2',

}
export const APIState = {
  loading     : 'api/loading',
  failed      : 'api/failed',
  success     : 'api/success',
}  

export default API