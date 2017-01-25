import config from '../config'
import {
    AsyncStorage,
} from 'react-native';

const APIUtils = {
get: function(endpoint, query, options, done) {
    if (arguments.length === 3) {
        done = options
        query = {}
    }
    if (arguments.length === 2) {
        done = query
        query = {}
    }
    
    const url = '${config.default.apiRoot}${endpoint}'
    
    
    AsyncStorage.getItem('connect.sid', (err, result) => {
                         
                         fetch(url, {
                               credentials: 'same-origin',
                               headers: {
                               'Cookie': 'connect.sid=' + result,
                               // 'Accept': 'application/json',
                               // 'Content-Type': 'application/json',
                               }
                               })
                         .then(checkStatus)
                         .then( response => response.json() )
                         .then( jsonData => {
                               done(null, jsonData)
                               })
                         .catch( error => {
                                // done(error)
                                done(error.toString())
                                });
                         })
},
post: function(endpoint, query, body, options, done) {
    if (arguments.length === 3) {
        done = body
        body = query
        query = {}
    }
    if (arguments.length === 2) {
        done = query
        query = {}
    }
    
    
    const url = `${config.default.apiRoot}${endpoint}`
    
    AsyncStorage.getItem('connect.sid', (err, result) => {
                         fetch(url, {
                               method: 'POST',
                               credentials: 'same-origin',
                               headers: {
                               'Cookie': 'connect.sid=' + result,
                               // 'Accept': 'application/json',
                               'Content-Type': 'application/json',
                               },
                               body: JSON.stringify(body)
                               })
                         .then(checkStatus)
                         .then( response => {
                               if (options && options.login) {
                               var setCookie = JSON.parse(JSON.stringify(response)).headers.map['set-cookie']
                               setCookie = setCookie[0]
                               var connectSid = setCookie.split(';')[0]
                               connectSid = connectSid.slice(connectSid.indexOf('=') + 1)
                               AsyncStorage.setItem('connect.sid', connectSid, () => {
                                                    AsyncStorage.setItem('user', JSON.stringify(response.json()), () => {
                                                                         
                                                                         })
                                                    })
                               }
                               return response.json()
                               })
                         .then( jsonData => {
                               done(null, jsonData)
                               })
                         .catch( error => {
                                console.log(error);
                                done(error.toString())
                                });
                         })
},
put: function(endpoint, query, body, options, done) {
    if (arguments.length === 3) {
        done = body
        body = query
        query = {}
    }
    if (arguments.length === 2) {
        done = query
        query = {}
    }
    
    
    const url = `${config.default.apiRoot}${endpoint}`
    
    AsyncStorage.getItem('connect.sid', (err, result) => {
                         fetch(url, {
                               method: 'PUT',
                               credentials: 'same-origin',
                               headers: {
                               'Cookie': 'connect.sid=' + result,
                               // 'Accept': 'application/json',
                               'Content-Type': 'application/json',
                               },
                               body: JSON.stringify(body)
                               })
                         .then(checkStatus)
                         .then( response => {
                               return response.json() 
                               })
                         .then( jsonData => {
                               done(null, jsonData)
                               })
                         .catch( error => {
                                console.log(error);
                                done(error.toString())
                                });
                         })
},
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

module.exports = APIUtils
