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
import {Action} from './action.js';
import {Scene} from './scene.js';

window.addEventListener('load', () => {
  /* window.scene = new Scene();

  // Set Google Assistant Canvas Action at scene level
  window.scene.action = new Action(scene);
 */
  const config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
      width: window.innerWidth * window.devicePixelRatio,
      height: window.innerHeight * window.devicePixelRatio,
    },
    parent: 'phaser-example',
    scene: [Scene],
    backgroundColor: 0xffffff,
    audio: {
      disableWebAudio: false,
    },
    physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
    },
  };
  const game = new Phaser.Game(config);
  // Call setCallbacks to register interactive canvas
  // window.scene.action.setCallbacks();
  window.focus();
});
