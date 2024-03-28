// Ilusion1: Líneas verticales
function drawVerticalLines(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const height = canvas.height;
    const width = canvas.width;
  
    for (let i = 10; i < width; i += 10) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, height);
      context.stroke();
    }
  }
  
  // Ilusion2: Líneas horizontales
  function drawHorizontalLines(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const height = canvas.height;
    const width = canvas.width;
  
    for (let i = 10; i < height; i += 10) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(width, i);
      context.stroke();
    }
  }
  
  // Ilusion3: Grilla
  function drawGrid(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const height = canvas.height;
    const width = canvas.width;
  
    for (let i = 10; i < width; i += 10) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, height);
      context.moveTo(0, i);
      context.lineTo(width, i);
      context.stroke();
    }
  }
  
  // Ilusion4: Rayos desde el centro a los bordes superior e inferior
  function drawCenterToEdges(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const height = canvas.height;
    const width = canvas.width;
  
    for (let i = 0; i <= width; i += 10) {
      context.beginPath();
      context.moveTo(width / 2, height / 2);
      context.lineTo(i, 0);
      context.moveTo(width / 2, height / 2);
      context.lineTo(i, height);
      context.stroke();
    }
  }
  
  // Ilusion5: Líneas diagonales desde la esquina superior izquierda
  function drawDiagonalTopLeft(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const width = canvas.width;
  
    for (let i = 0; i <= width * 2; i += 10) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(0, i);
      context.stroke();
    }
  }
  
  // Ilusion6: Líneas diagonales desde la esquina superior izquierda a la inferior derecha
  function drawDiagonal(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const height = canvas.height;
    const width = canvas.width;
  
    for (let i = 0; i <= width; i += 10) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(width, i);
      context.stroke();
    }
  }
  
  // Ilusion7: Líneas que conectan las esquinas con el centro de sus respectivos lados
  function drawCornerToCenter(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const height = canvas.height;
    const width = canvas.width;
  
    for (let i = 0; i <= width; i += 10) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(width, i);
      context.moveTo(0, height - i);
      context.lineTo(i, 0);
      context.moveTo(0, i);
      context.lineTo(i, width);
      context.moveTo(width - i, height);
      context.lineTo(height, i);
      context.stroke();
    }
  }
  
  // Ilusion8: Rayos desde las esquinas superior e inferior al centro del lienzo
  function drawEdgesToCenter(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const height = canvas.height;
    const width = canvas.width;
  
    for (let i = 0; i <= width; i += 10) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(width / 2, height / 2);
      context.moveTo(width, i);
      context.lineTo(width / 2, height / 2);
      context.stroke();
    }
  }
  // Ilusion2-1
function drawIlusion2_1(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/2; i+=5) {
    context.beginPath();
    context.moveTo(i, h/2);
    context.lineTo(w/2, h/2 - i);
    context.moveTo(w - i, h/2);
    context.lineTo(w/2, h/2 - i);
    context.moveTo(i, h/2);
    context.lineTo(w/2, h/2 + i);
    context.moveTo(w - i, h/2);
    context.lineTo(w/2, h/2 + i);
    context.stroke();
  }
}

// Ilusion2-2
function drawIlusion2_2(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w; i += 5) {
    context.beginPath();
    context.moveTo(i, h/2);
    context.lineTo(w/2, i);
    context.moveTo(w - i, h/2);
    context.lineTo(w/2, i);
    context.stroke();
  }
}

// Ilusion 2-3
function drawIlusion2_3(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/2; i += 5) {
    context.beginPath();
    context.moveTo(i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(w - i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(i, 0);
    context.lineTo(w/2, i);
    context.moveTo(w - i, 0);
    context.lineTo(w/2, i);
    context.moveTo(i, h - i);
    context.lineTo(w/2 - i, h/2 - i);
    context.moveTo(w - i, i);
    context.lineTo(w/2 + i, h/2 + i);
    context.stroke();
  }
}

// Ilusion2-4
function drawIlusion2_4(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/2; i += 5) {
    context.beginPath();
    context.moveTo(i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(w - i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(i, 0);
    context.lineTo(w/2, i);
    context.moveTo(w - i, 0);
    context.lineTo(w/2, i);
    context.moveTo(0, i);
    context.lineTo(i, h/2);
    context.moveTo(0, h - i);
    context.lineTo(i, h/2);
    context.moveTo(w, h - i);
    context.lineTo(w - i, h/2);
    context.moveTo(w, i);
    context.lineTo(w - i, h/2);
    context.stroke();
  }
}

// Ilusion2-5
function drawIlusion2_5(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/2; i += 5) {
    context.beginPath();
    // Techo
    context.moveTo(0, h/2 - i);
    context.lineTo(i, 0);
    context.moveTo(w, h/2 - i);
    context.lineTo(w - i, 0);
    // Centro
    context.moveTo(i, h - i);
    context.lineTo(w/2, h/2 - i);
    context.moveTo(w - i, h - i);
    context.lineTo(w/2, h/2 - i);
    context.moveTo(i, h - i);
    context.lineTo(w/2 + i, h/2 + i);
    context.stroke();
  }
  for (let i = 0; i <= w/4; i += 5) {
    // Piso
    context.beginPath();
    context.moveTo(w/4 + i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(3*w/4 - i, h);
    context.lineTo(w/2, h - i);
    context.stroke();
  }
}

// Ilusion 2-6
function drawIlusion2_6(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w; i += 5) {
    context.beginPath();
    context.moveTo(i, h - i);
    context.lineTo(i, i);
    context.moveTo(i, i);
    context.lineTo(w - i, i);
    context.stroke();
  }
}

// Ilusion2-7
function drawIlusion2_7(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/2; i += 5) {
    context.beginPath();
    context.moveTo(i, h - i);
    context.lineTo(w/2, i);
    context.moveTo(w - i, h - i);
    context.lineTo(w/2, i);
    context.moveTo(i, h - i);
    context.lineTo(w - i, h - i);
    context.stroke();
  }
}

// Ilusion2-8
function drawIlusion2_8(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  const r = 10;
  for (let i = 0; i < w; i += 10) {
    context.beginPath();
    context.ellipse(w/2, h/2, r+i/2, r+i/2, 0, 0, 2 * Math.PI);
    context.stroke();
  }
}

// Ilusion Extra 7
function drawExtraIllusion7(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;

  for (let i = 0; i <= w; i += 10) {
    // Parte arriba izquierda
    ctx.beginPath();
    ctx.moveTo(0, h / 2 - i / 2);
    ctx.lineTo(i / 2, 0);
    ctx.stroke();

    // Parte arriba derecha
    ctx.beginPath();
    ctx.moveTo(w - i / 2, 0);
    ctx.lineTo(w, h / 2 - i / 2);
    ctx.stroke();


    // Parte abajo izquierda
    ctx.beginPath();
    ctx.moveTo(0, h / 2 + i / 2);
    ctx.lineTo(i / 2, h);
    ctx.stroke();

    // Parte abajo derecha
    ctx.beginPath();
    ctx.moveTo(w, h / 2 + i / 2);
    ctx.lineTo(w - i / 2, h);
    ctx.stroke();


    // flecha izquierda
   
  }

  for( let i = 0; i <= w/4; i += 10){
    
    //flecha hacia arriba derecha
    ctx.beginPath();
    ctx.moveTo((w/4)*3 - i, h / 2 - i);
    ctx.lineTo(w/2 , ((h/4))-i);
    ctx.stroke();
  }

  for( let i = 0; i <= w/4; i += 10){
    
    //flecha hacia arriba izquierda
    ctx.beginPath();
    ctx.moveTo((w/4) + i, h / 2 - i);
    ctx.lineTo(w/2 , ((h/4))-i);
    ctx.stroke();
  }

  for( let i = 0; i <= w/4; i += 10){
    
    //flecha hacia arriba-centro
    ctx.beginPath();
    ctx.moveTo((w/4) + i , h / 2 - i);
    ctx.lineTo(w/2 +i, (h/4)+i);
    ctx.stroke();
  }

  for( let i = 0; i <= (w/4); i += 10){
    ctx.beginPath();
    ctx.moveTo(0+i,((h/4)*3)-i);
    ctx.lineTo(w/4-(i), (h/2)-i);
    ctx.stroke();
  }
  // flecha derecha
  for( let i = 0; i <= (w/4); i += 10){
    ctx.beginPath();
    ctx.moveTo(w-i,(h/4)*3-i);
    ctx.lineTo((w/4)*3+(i), (h/2-i));
    ctx.stroke();
  }

  for( let i = 0; i <= w/4; i += 10){
    
    //flecha hacia abajo-centro
    ctx.beginPath();
    ctx.moveTo((w/4)*3 - i, h / 2 + i);
    ctx.lineTo((w/2)- i, (((h/4)*3)-i));
    ctx.stroke();
  }

  for (let i = 0; i <= w/4; i += 10) {
    ctx.beginPath();
    ctx.moveTo((50)+i, (100)+i);
    ctx.lineTo((100) , (150)+i);
    ctx.stroke();
  }

  for( let i = 0; i <= w/4; i += 10){
    
    //flecha hacia abajo izquierda
    ctx.beginPath();
    ctx.moveTo((w/4)*3-i, (h/2+i));
    ctx.lineTo((w/2) , ((h/4)*3)+i);
    ctx.stroke();
  }
}


function drawExtraIllusion8(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/2; i += 5) {
    context.beginPath();
    // Techo
    context.moveTo(0, h/2 - i);
    context.lineTo(i, 0);
    context.moveTo(w, h/2 - i);
    context.lineTo(w - i, 0);
    // Centro
    context.moveTo(i, h - i);
    context.lineTo(w/2, h/2 - i);
    context.moveTo(w - i, h - i);
    context.lineTo(w/2, h/2 - i);
    context.moveTo(i, h - i);
    context.lineTo(w/2 + i, h/2 + i);
    context.stroke();
  }
  for (let i = 0; i <= w/4; i += 5) {
    // Piso
    context.beginPath();
    context.moveTo(w/4 + i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(3*w/4 - i, h);
    context.lineTo(w/2, h - i);
    context.stroke();
  }
}

function drawExtraIllusion88(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/4; i += 10) {
    ctx.beginPath();
    ctx.moveTo((50)+i, (100)+i);
    ctx.lineTo((100) , (150)+i);
    ctx.stroke();
  }
}


// Ilusion Extra 9
function drawExtraIllusion9(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;

  for (let i = 0; i <= w; i += 10) {
    // Parte arriba izquierda
    ctx.beginPath();
    ctx.moveTo(0, h / 2 - i / 2);
    ctx.lineTo(i / 2, i / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w / 2, i / 2);
    ctx.lineTo(w / 2 - i / 2, h / 2 - i / 2);
    ctx.stroke();

    // Parte arriba derecha
    ctx.beginPath();
    ctx.moveTo(w, h / 2 - i / 2);
    ctx.lineTo(w - i / 2, i / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w / 2, i / 2);
    ctx.lineTo(w / 2 + i / 2, h / 2 - i / 2);
    ctx.stroke();

    // Parte abajo izquierda
    ctx.beginPath();
    ctx.moveTo(0, h / 2 + i / 2);
    ctx.lineTo(i / 2, h);
    ctx.stroke();

    // Parte abajo derecha
    ctx.beginPath();
    ctx.moveTo(w, h / 2 + i / 2);
    ctx.lineTo(w - i / 2, h);
    ctx.stroke();

    // Estrella
    ctx.beginPath();
    ctx.moveTo(w / 4 + i / 4, 3 * h / 4);
    ctx.lineTo(w / 2, 3 * h / 4 - i / 4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(3 * w / 4 - i / 4, 3 * h / 4);
    ctx.lineTo(w / 2, 3 * h / 4 - i / 4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w / 4 + i / 4, 3 * h / 4);
    ctx.lineTo(w / 2, 3 * h / 4 + i / 4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(3 * w / 4 - i / 4, 3 * h / 4);
    ctx.lineTo(w / 2, 3 * h / 4 + i / 4);
    ctx.stroke();
  }
}
function drawExtraIllusion0(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w/2; i += 5) {
    context.beginPath();
    context.moveTo(i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(w - i, h);
    context.lineTo(w/2, h - i);
    context.moveTo(i, 0);
    context.lineTo(w/2, i);
    context.moveTo(w - i, 0);
    context.lineTo(w/2, i);
    context.moveTo(0, i);
    context.lineTo(i, h/2);
    context.moveTo(0, h - i);
    context.lineTo(i, h/2);
    context.moveTo(w, h - i);
    context.lineTo(w - i, h/2);
    context.moveTo(w, i);
    context.lineTo(w - i, h/2);
    context.stroke();
  }
}
function drawRadialIllusion(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  for (let angle = 0; angle < 360; angle += 5) {
    let rad = (angle * Math.PI) / 180;
    context.beginPath();
    context.moveTo(w/2, h/2);
    context.lineTo(w/2 + Math.cos(rad) * w/2, h/2 + Math.sin(rad) * h/2);
    context.stroke();
  }
}

function drawTwistedGridIllusion(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const step = 10;

  for (let i = step; i <= w; i += step) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(0, i);
    context.stroke();

    context.beginPath();
    context.moveTo(w, i);
    context.lineTo(i, h);
    context.stroke();

    context.beginPath();
    context.moveTo(i, h);
    context.lineTo(w, h - i);
    context.stroke();

    context.beginPath();
    context.moveTo(0, (h - i));
    context.lineTo(w - i, 0);
    context.stroke();
  }
}
function drawConcentricSquaresIllusion(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const step = 20;
  const center_x = w / 2;
  const center_y = h / 2;
  let size = Math.min(w, h) / 10;

  while (size < w) {
    context.beginPath();
    context.rect(center_x - size / 2, center_y - size / 2, size, size);
    context.stroke();
    size += step;
  }
}

function drawExtraIllusion1(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const h = canvas.height;
  const w = canvas.width;
  for (let i = 0; i <= w; i += 5) {
    context.beginPath();
    context.moveTo(w, h/2);
    context.lineTo(100, h - i);
    context.stroke();
  }
  for (let i = 0; i <= w; i += 5) {
    context.beginPath();
    context.moveTo(0, h/2);
    context.lineTo(100, h - i);
    context.stroke();
  }
  for (let i = 0; i <= 100; i += 5) {
    context.beginPath();
    context.moveTo(200-i, 100-i);
    context.lineTo(100-i, 200+i);
    context.stroke();
  }
}



  document.addEventListener('DOMContentLoaded', () => {
    drawVerticalLines('illusionCanvas1-1');
    drawHorizontalLines('illusionCanvas1-2');
    drawGrid('illusionCanvas1-3');
    drawCenterToEdges('illusionCanvas1-4');
    drawDiagonalTopLeft('illusionCanvas1-5');
    drawDiagonal('illusionCanvas1-6');
    drawCornerToCenter('illusionCanvas1-7');
    drawEdgesToCenter('illusionCanvas1-8');

     // Dibujar ilusiones ópticas para el Set 2
  drawIlusion2_1('illusionCanvas2-1');
  drawIlusion2_2('illusionCanvas2-2');
  drawIlusion2_3('illusionCanvas2-3');
  drawIlusion2_4('illusionCanvas2-4');
  drawIlusion2_5('illusionCanvas2-5');
  drawIlusion2_6('illusionCanvas2-6');
  drawIlusion2_7('illusionCanvas2-7');
  drawIlusion2_8('illusionCanvas2-8');

  //Ilusiones Extras
  drawExtraIllusion7('extraIllusion7');
  drawExtraIllusion8('extraIllusion8')
  drawExtraIllusion9('extraIllusion9');
  drawExtraIllusion0('extraIllusion0');
  drawExtraIllusion1('extraIllusion1');
  drawRadialIllusion('radialIllusion');
  drawTwistedGridIllusion('twistedGridIllusion');
  drawConcentricSquaresIllusion('concentricSquaresIllusion');
  drawExtraIllusion88('extraIllusion88');
  });

  

  