/**
 * This is an ES6 module which depends on jQuery.
 */

import $ from 'jquery';

export function update(id, text){
  console.log('Hi from module A.');
  $(id).append(text);
}

