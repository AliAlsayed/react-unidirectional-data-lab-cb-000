'use strict';

export default class Store {
  constructor(initialState){
    this.state = initialState;
    this.listeners = []
  }

  getState(){
    return this.state;
  }

  setState(state){
    this.state = state
  }

}
