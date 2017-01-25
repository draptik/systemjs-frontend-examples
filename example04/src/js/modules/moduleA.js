/**
 * This is an ES6 module.
 */

import * as b from './moduleB.js';

export function update(){
  b.magic();
  console.log('Hi from module A.');
}

export function blub () { console.log('blub') };