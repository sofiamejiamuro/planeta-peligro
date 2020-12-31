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


const {
  conversation,
  Canvas,
} = require('@assistant/conversation');
const functions = require('firebase-functions');

const CANVAS_URL = 'https://planetapeligro.web.app';

const app = conversation({debug: true});

app.handle('welcome', (conv) => {
  if (!conv.device.capabilities.includes('INTERACTIVE_CANVAS')) {
    conv.add('Lo sentimos, este dispositivo no soporta Interactive Canvas');
    conv.scene.next.name = 'actions.page.END_CONVERSATION';
    return;
  }
  conv.add('Estás a punto de entrar a planeta peligro. Un lugar en el que te enfrentarás a diferentes aventuras extremas.¿Quieres empezar el viaje?');
  conv.add(new Canvas({
    data: {
      command: 'WELCOME',
    },
  }));
});

app.handle('neilaIntro',(conv) => {
  conv.add('Hola, yo soy Neila la Alien y seré tu compañera en esta aventura... ¿Cómo te llamas terricola? ');
  conv.add(new Canvas({
    data: {
      command: 'NEILA',
    },
  }));
});

app.handle('kidName',(conv) => {
  conv.add(`$session.params.name qué nombres tan raros tienen los terrícolas... en fin. Es hora de irnos , mi amigo Juanito Temblores nos está esperando en su casa`);
});

app.handle('earthquake1Prompt', (conv) => {
  conv.add('¡Llegamos! Esos ocho pisos me dieron hambre... Juanito ya llegamos ¿dónde estás?. Alerta Sísmica... ¿escuchan eso?  ¡Es la alerta sísmica de planeta peligro! ¿$session.params.name qué hacemos? ¿Bajamos corriendo los ocho pisos o nos resguardamos?');
  conv.add(new Canvas({
    data: {
      command: 'ALERT',
    },
  }));
});

app.handle('earthquake2Prompt', (conv) => {
  conv.add('Rápido ¿Dónde nos resguardamos?... ¿Abajo de la mesa o  abajo de la alfombra?');
  conv.add(new Canvas({
    data: {
      command: 'TABLE_RUG',
    },
  }));
});
app.handle('earthquake3Prompt', (conv) => {
  conv.add('Ahora lo más seguro es salir del edificio, ¿Qué hacemos? ¿Usamos el elevador o bajamos los ocho pisos por las escaleras?');
  conv.add(new Canvas({
    data: {
      command: 'STAIRS_ELEVATOR',
    },
  }));
});
app.handle('earthquake4Prompt', (conv) => {
  conv.add(`$session.params.name este perrito nos viene siguiendo desde casa de Juanito Temblores, creo que sería un buen compañero de aventuras, ¿Cómo le ponemos?`);
  conv.add(new Canvas({
    data: {
      command: 'DOGGY',
    },
  }));
});

app.handle('fallback', (conv) => {
  conv.add(`I don't understand. You can change my color or pause spinning.`);
  conv.add(new Canvas());
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
