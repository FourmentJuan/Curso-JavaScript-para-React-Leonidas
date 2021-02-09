
import {render} from './react-dom/index.js'
import Title from './components/title.js'


//Tarae del curso
const tags = ["h1", "h2"];
let stylesforTags = {};
tags.forEach((tag) => {
  stylesforTags[tag] = function (styles) {
    return function (content) {
      return `
            <h1 style="${styles}">
              ${content}
            </h1>
          `;
    };
  };
});

//Tarea del curso devuelve el estilo por cada tag que se cargo en tags
const Style = stylesforTags.h1`
      font-family: system-ui;
      color: orange;
      font-size: 50px;
      text-shadow: 2px 2px 0 black;
      line-height: 100vh;
    `;





//Render de la tarea
render(Title, window.container);
