/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represent Triangle scene
 */
import {Action} from './action.js';

export class Scene extends Phaser.Scene {

  constructor() {
    super('Scene');
  }

  preload(){
    // Images
    this.load.image('main', '/assets/main.jpg');
    this.load.image('neila', '/assets/neila.jpg');
    this.load.image('well_done', '/assets/well_done.jpg');
    this.load.image('welcome_2', '/assets/welcome_2.jpg');
    this.load.image('solovino', '/assets/solvino.jpg');
    this.load.image('earthquake_1', '/assets/earthquake_1.jpg');
    this.load.image('earthquake_2', '/assets/earthquake_3.jpg');
    this.load.image('earthquake_3', '/assets/earthquake_3.jpg');
    this.load.image('earthquake_4', '/assets/earthquake_4.jpg');
    this.load.image('earthquake_5', '/assets/earthquake_5.jpg');
    this.load.image('earthquake_6', '/assets/earthquake_6.jpg');
    
    // Sounds
    this.mainSound = new Howl({
      src: ['https://actions.google.com/sounds/v1/science_fiction/robot_code.ogg'],
      autoplay: false,
      loop: false,
      volume: 1,
    });
    
    this.alertSound = new Howl({
      src: ['https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg'],
      autoplay: false,
      loop: false,
      volume: 1,
    });
  }

  create(){

    this.visibleObjects = [];
    // Welcome - main
    this.main = this.add.image(0, 0, 'main')
      .setOrigin(0, 0)
      .setDisplaySize(this.scale.width, this.scale.height);
    window.interactiveCanvas.getHeaderHeightPx()
      .then((headerHeight) => {
        this.main
          .setY(headerHeight)
          .setDisplaySize(this.scale.width, this.scale.height - headerHeight);
      });

    // Neila  
    this.neila = this.add.image(0, 0, 'neila')
    .setOrigin(0, 0)
    .setDisplaySize(this.scale.width, this.scale.height);
    window.interactiveCanvas.getHeaderHeightPx()
      .then((headerHeight) => {
        this.neila
          .setY(headerHeight)
          .setDisplaySize(this.scale.width, this.scale.height - headerHeight);
      });

    // Alert
    this.alert = this.add.image(0, 0, 'earthquake_3')
    .setOrigin(0, 0)
    .setDisplaySize(this.scale.width, this.scale.height);
    window.interactiveCanvas.getHeaderHeightPx()
      .then((headerHeight) => {
        this.alert
          .setY(headerHeight)
          .setDisplaySize(this.scale.width, this.scale.height - headerHeight);
      });  

    // Table-rug 
    this.table = this.add.image(0, 0, 'earthquake_5')
    .setOrigin(0, 0)
    .setDisplaySize(this.scale.width, this.scale.height);
    window.interactiveCanvas.getHeaderHeightPx()
      .then((headerHeight) => {
        this.table
          .setY(headerHeight)
          .setDisplaySize(this.scale.width, this.scale.height - headerHeight);
      });  

    // Stairs-elevator
    this.stairs = this.add.image(0, 0, 'earthquake_6')
    .setOrigin(0, 0)
    .setDisplaySize(this.scale.width, this.scale.height);
    window.interactiveCanvas.getHeaderHeightPx()
      .then((headerHeight) => {
        this.stairs
          .setY(headerHeight)
          .setDisplaySize(this.scale.width, this.scale.height - headerHeight);
      });   
    
    // Doggy
    this.doggy = this.add.image(0, 0, 'earthquake_6')
    .setOrigin(0, 0)
    .setDisplaySize(this.scale.width, this.scale.height);
    window.interactiveCanvas.getHeaderHeightPx()
      .then((headerHeight) => {
        this.doggy
          .setY(headerHeight)
          .setDisplaySize(this.scale.width, this.scale.height - headerHeight);
      });    
 
    this.visibleObjects.push(this.main); 
    this.visibleObjects.push(this.neila); 
    this.visibleObjects.push(this.alert); 
    this.visibleObjects.push(this.table); 
    this.visibleObjects.push(this.stairs); 
    this.visibleObjects.push(this.doggy); 
    // Set assistant at game level.
    this.assistant = new Action(this);
    // Call setCallbacks to register assistant action callbacks.
    this.assistant.setCallbacks();
  }

 /*  start() {
    this.setVisible(true);
    this.updateCanvasState();
  } */
  welcome(){
    // this.mainSound.play();
    this.main.setVisible(true);
    this.updateCanvasState();
  }
  neila(){
    this.neila.setVisible(true);
    this.updateCanvasState();
  }
  alert(){
    this.mainSound.play('up');
    this.alert.setVisible(true);
    this.updateCanvasState();
  }
  tableRug(){
    this.table.setVisible(true);
    this.updateCanvasState();
  }
  stairsElevator(){
    this.stairs.setVisible(true);
    this.updateCanvasState();
  }
  doggy(){
    this.doggy.setVisible(true);
    this.updateCanvasState();
  }
 /**
   * Set visibility to images. Since images use Alpha, then 0 is false and
   * 1 is true.
   * @param  {boolean} visible to set visibility to true or false on a object.
   */
  setVisible(visible) {
    this.visibleObjects.forEach((vo) => vo.setAlpha(visible ? 1 : 0));
  }
}
