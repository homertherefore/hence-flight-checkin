'use strict';
/**
 * @module hence-flight-checkin
 */

import Hence from 'hence-component-framework';

/**
 * HenceFlightCheckin Component
 * @constructor
 */
let HenceFlightCheckin = Hence.Ui({
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  is: 'hence-flight-checkin',
  properties: {
    image: String,
    departureCode: String,
    arrivalCode: String,
    price: Number,
    duration: String,
    flightNumber: String,
    confirmationDate: String,
    confirmationNumber: String,
    boardingCity: String,
    boardingTime: String,
    boardingTerminal: {
      type: String,
      value: '&mdash;'
    },
    boardingGate: String,
    details: Object
  },

  /*********************************************************************************************************************
   * Event Listeners
   ********************************************************************************************************************/

  listeners: {},

  /*********************************************************************************************************************
   * Element DOM Hooks
   ********************************************************************************************************************/

    attached() {
  },

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  behaviors: []
});

export default HenceFlightCheckin;
