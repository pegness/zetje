import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
//import ReactGoogleSheets from 'react-google-sheets';

class PaymentSuccess extends Component {
  constructor() {
    super();

    //create an array variable state for the data
    this.state = {
      isLoading: true,
      errorPhone: false,
      emails: [],
    };
  
    const SPREADSHEET_ID = '1_YylcWRnJtiMqK8lzJulU5MiVFyarNpQZOhq5OccdB8'; //from the URL of your blank Google Sheet
    const CLIENT_ID = '2d280542491u-3aofp4eFeftog7q0u5a73ro566h8vi.apps.googleusercontent.com'; //from https://console.developers.google.com/apis/credentials
    const API_KEY = 'AIzaSyBAkv8ioCZZnSAcCZ4FpX9d2cXWPxLQf50'; //https://console.developers.google.com/apis/credentials
    const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

  }  
  //useEffect(() => tagManager({ event: 'pageView', pageName: 'success' }), []);
  

  componentDidMount() {
    //var sheetID = '1Hke5wPTdUFQ1R2GZod_Th7i1yY4_im2uwpuPf44gzQ0';
    //var url = 'https://spreadsheets.google.com/feeds/list/'+sheetID+'/od6/public/values?alt=json';
  }

  handleClientLoad() { //initialize the Google API
    gapi.load('client:auth2', this.initClient);
  }

  initClient() { //provide the authentication credentials you set up in the Google developer console
    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPE,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(()=> {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
      this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  validatePhoneNumber(this.phoneNumber) {
    const phoneNumberWithoutWhiteSpace = phoneNumber.replace(/\s+/g, '');

    const regexPhoneNumber = /06[0-9]{8}/;

    if (phoneNumberWithoutWhiteSpace.match(regexPhoneNumber)) {
      setErrorPhone(false);
      return true;
    }

    setErrorPhone(true);
    tagManager({ event: 'error', field: 'phone' });
    return false;
  }

  handleSubmit (values) {
    //setErrorAPI(false);

    if (validatePhoneNumber(values.phoneNumber)) {
      const params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: SPREADSHEET_ID, 
        // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
        range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
        // How the input data should be interpreted.
        valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
        // How the input data should be inserted.
        insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
      };
  
      const valueRangeBody = {
        'majorDimension': 'ROWS', //log each entry as a new row (vs column)
        'values': [submissionValues] //convert the object's values to an array
      };
  
      let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function (response) {
        // TODO: Insert desired response behaviour on submission
        console.log(response.result);
      }, function (reason) {
        console.error('error: ' + reason.result.error.message);
      });
      
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="pay">
          
            <Logo />
  
            <h3>
                Bedankt, het Zetje is gegeven!
            </h3>
            <img className="gifje" src="/img/animated-penguin.gif" alt="zetje-logo" width="100%" />
            <p>
            Zetje maakt goed doen makkelijk en effectief. Een deel van elk betaalverzoek gaat rechtstreeks naar iemand in nood.
            </p>
            <p>Doe een tikkie anders.</p>
  
            <Link to="/" className="button primary">
              Stuur ook een Zetje
            </Link>
            
            <p>Wil je ook weten aan wie gedoneerd is? Laat je telefoonnummer achter..</p>
            
            <form onSubmit={handleSubmit} className="form">
              <input
                placeholder="Telefoonnummer"
                type="tel"
                name="phoneNumber"
                //value={phoneNumber}
                //onChange={handleChange}
                className="input"
                required
              />
              <input
                type="submit"
                value="Verder"
                className="submit input"
                //{...submitAttributes}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentSuccess;
