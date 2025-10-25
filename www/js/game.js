// Datos y configuración inicial
const characters = [
  { id: 1, name: "Ana", genero: "femenino", edad: "edad2", peloC: "castano", peloL: "largo", ropa: "tirantes", piel: "morena", negro: true, joyas: true, image: "img/ana.png" },
  { id: 2, name: "Ángel", genero: "masculino", edad: "edad3", peloC: "canoso", peloL: "muycorto", ropa: "largo", piel: "claro", negro: true, image: "img/angel.png" },
  { id: 3, name: "César", genero: "masculino", edad: "edad2", peloC: "negro", peloL: "muycorto", ropa: "largo", piel: "morena", blanco: true, marron: true, joyas: true, gafas: true, image: "img/cesar.png" },
  { id: 4, name: "Chris", genero: "femenino", edad: "edad1", peloC: "negro", peloL: "largo", ropa: "tirantes", piel: "oscuro", blanco: true, image: "img/chris.png" },
  { id: 5, name: "Cristina", genero: "femenino", edad: "edad3", peloC: "castano", peloL: "corto", ropa: "largo", piel: "claro", rojo: true, image: "img/cristina.png" },
  { id: 6, name: "Daniel", genero: "masculino", edad: "edad3", peloC: "canoso", peloL: "rapado", ropa: "largo", piel: "claro", verde: true, image: "img/daniel.png" },
  { id: 7, name: "Diana", genero: "femenino", edad: "edad3", peloC: "pelirroja", peloL: "largo", ropa: "tirantes", piel: "claro", blanco: true, image: "img/diana.png" },
  { id: 8, name: "Diego", genero: "masculino", edad: "edad2", peloC: "negro", peloL: "rapado", ropa: "largo", piel: "morena", negro: true, image: "img/diego.png" },
  { id: 9, name: "Eva", genero: "femenino", edad: "edad2", peloC: "castano", peloL: "largo", ropa: "largo", piel: "claro", marron: true, joyas: true, image: "img/eva.png" },
  { id: 10, name: "Fefa", genero: "femenino", edad: "edad4", peloC: "rubio", peloL: "muycorto", ropa: "largo", piel: "claro", marron: true, joyas: true, image: "img/fefa.png" },
  { id: 11, name: "Fer", genero: "masculino", edad: "edad3", peloC: "canoso", peloL: "muycorto", ropa: "largo", piel: "claro", negro: true, blanco: true, joyas: true, gafas: true, image: "img/fernando.png" },
  { id: 12, name: "Hugo", genero: "masculino", edad: "edad1", peloC: "negro", peloL: "muycorto", ropa: "tirantes", piel: "morena", blanco: true, image: "img/hugo.png" },
  { id: 13, name: "Jose", genero: "masculino", edad: "edad3", peloC: "negro", peloL: "rapado", ropa: "largo", piel: "claro", negro: true, gafas: true, image: "img/jose.png" },
  { id: 14, name: "Laura", genero: "femenino", edad: "edad2", peloC: "negro", peloL: "largo", ropa: "tirantes", piel: "claro", verde: true, joyas: true, image: "img/laura.png" },
  { id: 15, name: "Lauri", genero: "femenino", edad: "edad1", peloC: "negro", peloL: "largo", ropa: "tirantes", piel: "claro", negro: true, joyas: true, image: "img/lauri.png" },
  { id: 16, name: "Leo", genero: "masculino", edad: "edad1", peloC: "castano", peloL: "rapado", ropa: "largo", piel: "claro", blanco: true, marron: true, image: "img/leo.png" },
  { id: 17, name: "Lucia", genero: "femenino", edad: "edad2", peloC: "castano", peloL: "largo", piel: "claro", marron: true, joyas: true, image: "img/lucia.png" },
  { id: 18, name: "María", genero: "femenino", edad: "edad2", peloC: "castano", peloL: "largo", ropa: "largo", piel: "claro", joyas: true, gafas: true, image: "img/maria.png" },
  { id: 19, name: "Mónica", genero: "femenino", edad: "edad2", peloC: "rubio", peloL: "corto", ropa: "tirantes", piel: "claro", rojo: true, joyas: true, image: "img/monica.png" },
  { id: 20, name: "Nerea", genero: "femenino", edad: "edad1", peloC: "negro", peloL: "largo", ropa: "largo", piel: "oscuro", negro: true, joyas: true, image: "img/nerea.png" },
  { id: 21, name: "Pilar", genero: "femenino", edad: "edad4", peloC: "pelirroja", peloL: "muycorto", ropa: "largo", piel: "claro", rojo: true, gafas: true, image: "img/pilar.png" },
  { id: 22, name: "Rosa", genero: "femenino", edad: "edad3", peloC: "castano", peloL: "corto", ropa: "largo", piel: "claro", negro: true, joyas: true, image: "img/rosa.png" },
  { id: 23, name: "Ruiza", genero: "masculino", edad: "edad2", peloC: "negro", peloL: "rapado", ropa: "largo", piel: "claro", verde: true, gafas: true, image: "img/ruiza.png" },
  { id: 24, name: "Tiago", genero: "masculino", edad: "edad1", peloC: "castano", peloL: "rapado", ropa: "largo", piel: "claro", marron: true, image: "img/tiago.png" },
];

const categoryLabels = {
  genero: "Género",
  edad: "Edad",
  peloL: "Color pelo",
  peloC: "Largura pelo",
  piel: "Tono de piel",
  ropa: "Color ropa",
  accesorios: "Accesorios"
};

const questionsData = {
  genero: [
    { question: "¿Es un chico?", key: "genero", value: "masculino" },
    { question: "¿Es una chica?", key: "genero", value: "femenino" },
  ],
  edad: [
    { question: "¿Es menor a 20 años?", key: "edad", value: "edad1" },
    { question: "¿Tiene entre 20 y 40 años?", key: "edad", value: "edad2" },
    { question: "¿Tiene entre 50 y 80 años?", key: "edad", value: "edad3" },
    { question: "¿Es mayor a 80 años?", key: "edad", value: "edad4" },
  ],
  peloC: [
    { question: "¿Tiene el pelo rubio?", key: "peloC", value: "rubio" },
    { question: "¿Tiene el pelo castaño?", key: "peloC", value: "castano" },
    { question: "¿Tiene el pelo negro?", key: "peloC", value: "negro" },
    { question: "¿Tiene el pelo canoso?", key: "peloC", value: "canoso" },
    { question: "¿Es pelirroja?", key: "peloC", value: "pelirroja" },
  ],
  peloL: [
    { question: "¿Tiene el pelo rapado?", key: "peloL", value: "rapado" },
    { question: "¿Tiene el pelo muy corto?", key: "peloL", value: "muycorto" },
    { question: "¿Tiene el pelo corto/media melena?", key: "peloL", value: "corto" },
    { question: "¿Tiene el pelo largo?", key: "peloL", value: "largo" },
  ],
  piel: [
    { question: "¿Tiene la piel clara?", key: "piel", value: "claro" },
    { question: "¿Tiene la piel morena?", key: "piel", value: "morena" },
    { question: "¿Tiene la piel oscura?", key: "piel", value: "oscuro" },
  ],
  ropa: [
    { question: "¿Lleva algo negro?", key: "negro", value: true },
    { question: "¿Lleva algo blanco?", key: "blanco", value: true },
    { question: "¿Lleva algo rojo/rosa?", key: "rojo", value: true },
    { question: "¿Lleva algo verde/azul?", key: "verde", value: true },
    { question: "¿Lleva algo marrón/amarillo?", key: "marron", value: true },
  ],
  accesorios: [
    { question: "¿Lleva gafas?", key: "gafas", value: true },
    { question: "¿Lleva joyas?", key: "joyas", value: true },
  ],
};

let currentTurn = "player";
let userTarget = null;
let aiTarget = null;
let aiRemaining = [];
let userRemaining = [];
let isGuessing = false;
let askedQuestions = [];

document.getElementById("start-game-btn").addEventListener("click", () => {
    document.getElementById("home-screen").style.display = "none";
    
    showCharacterSelect();

    const music = document.getElementById("bg-music");
        if (music.paused) {
            music.volume = 0.3; // opcional
            music.play().catch(err => console.warn("El navegador bloqueó el audio:", err));
        }
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("character-select-screen").style.display = "block";
});

document.addEventListener('deviceready', function () {
  document.getElementById("take-photo-btn").addEventListener("click", () => {
    if (!navigator.camera) {
      alert("La cámara no está disponible. ¿Estás usando un emulador o navegador?");
      return;
    }

    const permissions = cordova.plugins.permissions;

    permissions.checkPermission(permissions.CAMERA, (status) => {
      if (!status.hasPermission) {
        permissions.requestPermission(permissions.CAMERA, (status) => {
          if (status.hasPermission) {
            openCamera();
          } else {
            alert("Permiso de cámara denegado.");
          }
        }, (error) => {
          alert("Error al solicitar permiso: " + error);
        });
      } else {
        openCamera();
      }
    }, (error) => {
      alert("Error al verificar permisos: " + error);
    });
  });
});

function openCamera() {
  navigator.camera.getPicture(
    (imageData) => {
      const imgContainer = document.createElement("div");
      imgContainer.style.position = "relative";
      imgContainer.style.width = "100%";
      imgContainer.style.maxWidth = "300px";
      imgContainer.style.margin = "20px auto";

      // Imagen capturada
      const img = document.createElement("img");
      img.src = imageData;
      img.style.width = "100%";
      img.style.borderRadius = "12px";
      img.style.display = "block";

      // Logo superpuesto
      const logo = document.createElement("img");
      logo.src = "img/logo.png";
      logo.style.position = "absolute";
      logo.style.top = "10px";
      logo.style.left = "10px";
      logo.style.width = "60px";
      logo.style.opacity = "0.8";

      imgContainer.appendChild(img);
      imgContainer.appendChild(logo);

      // Muestra en pantalla
      document.body.appendChild(imgContainer);

      alert("📸 ¡Foto tomada con éxito!");

    },
    (error) => {
      alert("Error al tomar la foto: " + error);
    },
    {
      quality: 80,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }
  );
}

function startGameAfterSelection() {
  aiTarget = characters[Math.floor(Math.random() * characters.length)];
  aiRemaining = [...characters];
  userRemaining = [...characters];
  renderCharacters();
  updateTurnUI("player");
    
  resetGameState(); 
    
  console.log("Usuario eligió:", userTarget);
    
  document.getElementById("user-secret-img").src = userTarget.image;
  document.getElementById("user-secret-img").alt = userTarget.name;
  document.getElementById("user-secret-name").textContent = userTarget.name;

    //para ver el pensamiento del juego
    const aiTargetDisplay = document.getElementById("ai-target-display");
    aiTargetDisplay.innerHTML = `
        <p><strong>Objetivo del juego:</strong></p>
        <img src="${aiTarget.image}" alt="${aiTarget.name}">
        <p>${aiTarget.name}</p>
        `;

    document.getElementById("ai-debug").classList.remove("hidden");
    //yep
}

function showCharacterSelect() {
  const grid = document.getElementById("character-select-grid");
  grid.innerHTML = "";

  characters.forEach(char => {
    const div = document.createElement("div");
    div.classList.add("selectable-character");

    const img = document.createElement("img");
    img.src = char.image;
    img.alt = char.name;

    const name = document.createElement("p");
    name.textContent = char.name;

    div.appendChild(img);
    div.appendChild(name);

    div.addEventListener("click", () => {
      userTarget = char;
      document.getElementById("character-select-screen").style.display = "none";
      document.getElementById("game").style.display = "block";
      startGameAfterSelection();
    });

    grid.appendChild(div);
  });
    
  addZoomEventsToCharacterImages();

  document.getElementById("character-select-screen").style.display = "block";
  document.getElementById("game").style.display = "none";
}

function startGame() {
  userTarget = parseInt(userTarget);
  aiTarget = characters[Math.floor(Math.random() * characters.length)];
  aiRemaining = [...characters];
  userRemaining = [...characters];

  renderCharacters();
  updateTurnUI("player");
}

function renderCharacters() {
  const grid = document.getElementById("characters-grid");
  grid.innerHTML = "";
  userRemaining.forEach(char => {
    const div = document.createElement("div");
    div.className = "character";
    div.dataset.id = char.id;

    const img = document.createElement("img");
    img.src = char.image;
    img.alt = char.name;

    const name = document.createElement("p");
    name.textContent = char.name;

    div.appendChild(img);
    div.appendChild(name);

    div.addEventListener("click", () => {
        if (isGuessing) {
            const guessedId = parseInt(div.dataset.id);
            isGuessing = false;
            
            if (guessedId === aiTarget.id) {
                showEndMessage("🎉 ¡Enhorabuena, has ganado!");
                enableCategories(false);
                enableContinueButton(false);
                document.getElementById("characters-grid").style.pointerEvents = "none";
            } else {
                showAlert("❌ Incorrecto. Ese no era el personaje. Pierdes el turno :c");
                updateTurnUI("ai");
                aiTurn();
            }
            
            document.querySelectorAll("#characters-grid .character").forEach(c => {
                c.classList.remove("guessable");
            });
        } else {
            div.classList.toggle("eliminated");
        }
    });

    grid.appendChild(div);
    addZoomEventsToCharacterImages();
  });
}

function addZoomEventsToCharacterImages() {
  document.querySelectorAll(".character img, .selectable-character img").forEach(img => {
    img.addEventListener("touchstart", showZoom);
    img.addEventListener("touchend", hideZoom);
    img.addEventListener("mousedown", showZoom);
    img.addEventListener("mouseup", hideZoom);
    img.addEventListener("mouseleave", hideZoom); // por si sale del área
  });
}

function showZoom(e) {
  const zoomOverlay = document.getElementById("zoom-overlay");
  const zoomImg = document.getElementById("zoom-image");
  zoomImg.src = e.target.src;
  zoomOverlay.classList.remove("hidden");
}

function hideZoom() {
  const zoomOverlay = document.getElementById("zoom-overlay");
  zoomOverlay.classList.add("hidden");
}


let activeCategory = null;

function toggleQuestions(category) {
  document.querySelectorAll(".category-questions").forEach(div => {
    div.innerHTML = "";
  });

  if (activeCategory === category) {
    activeCategory = null;
    return;
  }
  activeCategory = category;
  const container = document.querySelector(`.category-block[data-category="${category}"] .category-questions`);
  questionsData[category].forEach(q => {
    const btn = document.createElement("button");
    btn.textContent = q.question;
    
    btn.onclick = () => {
        disableAllQuestions();
        enableCategories(false); 
        enableContinueButton(true); 
        
        const answer = (aiTarget[q.key] === q.value) ? "Sí" : "No";
        
        showFloatingInfo(q.question, answer);
    };

    container.appendChild(btn);
  });
}

function disableAllQuestions() {
  document.querySelectorAll(".category-questions button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = 0.5;
    btn.style.cursor = "not-allowed";
  });
}

function showFloatingInfo(questionText, answerText) {
  const box = document.getElementById("info-alert");
  document.getElementById("info-alert-question").textContent = `❓ ${questionText}`;
  document.getElementById("info-alert-answer").textContent = `💬 ${answerText}`;
  box.classList.remove("hidden");
}

function hideFloatingInfo() {
  document.getElementById("info-alert").classList.add("hidden");
}

function updateTurnUI(turn) {
  const isPlayerTurn = turn === "player";

  document.getElementById("question-category").style.display = isPlayerTurn ? "block" : "none";
  document.getElementById("questions").style.display = isPlayerTurn ? "block" : "none";
  document.getElementById("characters-grid").style.display = isPlayerTurn ? "grid" : "none";
  document.getElementById("continue-btn").style.display = isPlayerTurn ? "block" : "none";

  document.getElementById("game-question").style.display = !isPlayerTurn ? "block" : "none";
  document.getElementById("game-answer").style.display = !isPlayerTurn ? "block" : "none";
  document.getElementById("user-secret").style.display = !isPlayerTurn ? "block" : "none";
  document.getElementById("right-panel-title").textContent = isPlayerTurn ? "Personajes" : "Tu personaje secreto escogido";

  if (isPlayerTurn) {
    enableCategories(true);
    enableContinueButton(false);
  }
    
  document.getElementById("guess-btn").style.display = isPlayerTurn ? "block" : "none";

  hideFloatingInfo();
}

function enableCategories(state) {
  document.querySelectorAll(".category-btn").forEach(btn => btn.disabled = !state);
}

function enableContinueButton(state) {
  const btn = document.getElementById("continue-btn");
  btn.disabled = !state;
  btn.style.opacity = state ? 1 : 0.4;
  btn.style.cursor = state ? "pointer" : "not-allowed";
}

document.getElementById("howtoplay-btn").addEventListener("click", () => {
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("howtoplay-screen").style.display = "block";

  renderHowToPlayCharacters();
  renderHowToPlayCategories();
});

document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("howtoplay-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
});

document.querySelectorAll(".music-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.dataset.src;
    const audio = document.getElementById("bg-music");
    audio.src = src;
    audio.volume = 0.5;
    audio.play().catch(e => console.warn("Música bloqueada por autoplay:", e));
  });
});

document.getElementById("settings-btn").addEventListener("click", () => {
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("settings-screen").style.display = "block";
});

document.getElementById("back-from-settings").addEventListener("click", () => {
  document.getElementById("settings-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  // Asegura que la alerta personalizada esté oculta
  const overlay = document.getElementById("custom-alert-overlay");
  if (overlay) {
    overlay.classList.add("hidden");
  }

  //showCharacterSelect();
});

document.getElementById("reset-howtoplay").addEventListener("click", () => {
    document.querySelectorAll("#howtoplay-grid .character").forEach(card => {
        card.style.opacity = "1";
    });
});

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    toggleQuestions(category);
  });
});

document.getElementById("continue-btn").addEventListener("click", () => {
  currentTurn = "ai";
  updateTurnUI("ai");
  aiTurn();
});

document.getElementById("guess-btn").addEventListener("click", () => {
  if (!userRemaining.length) return;
  isGuessing = true;

  document.querySelectorAll("#characters-grid .character").forEach(div => {
    div.classList.add("guessable");
  });
});

function renderHowToPlayCharacters() {
    const grid = document.getElementById("howtoplay-grid");
    grid.innerHTML = "";

    characters.forEach(char => {
        const div = document.createElement("div");
        div.className = "character";

        for (const prop in char) {
            div.dataset[prop] = char[prop];
        }

        const img = document.createElement("img");
        img.src = char.image;
        img.alt = char.name;

        const name = document.createElement("p");
        name.textContent = char.name;

        div.appendChild(img);
        div.appendChild(name);
        grid.appendChild(div);
    });
  }

    function renderHowToPlayCategories() {
        const container = document.getElementById("howtoplay-categories");
        container.innerHTML = "";

        for (const cat in questionsData) {
            const block = document.createElement("div");
            block.classList.add("category-block");
            block.dataset.category = cat;

            const catBtn = document.createElement("button");
            catBtn.className = "category-btn";
            catBtn.textContent = categoryLabels[cat] || cat;
            block.appendChild(catBtn);

            const questionsDiv = document.createElement("div");
            questionsDiv.className = "category-questions";
            block.appendChild(questionsDiv);

            catBtn.addEventListener("click", () => {
                questionsDiv.innerHTML = "";
                questionsData[cat].forEach(q => {
                    const qBtn = document.createElement("button");
                    qBtn.textContent = q.question;
                    qBtn.onclick = () => {
                        filterHowToPlayCharacters(q.key, q.value);
                    };
                    questionsDiv.appendChild(qBtn);
                });
            });

            container.appendChild(block);
        }
    }

    function filterHowToPlayCharacters(key, value) {
        const cards = document.querySelectorAll("#howtoplay-grid .character");
        cards.forEach(card => {
            const match = card.dataset[key] === String(value);
            card.style.opacity = match ? "1" : "0.2";
        });
    }

function aiTurn() {
  document.getElementById("game-content").style.display = "none";
  document.getElementById("thinking-screen").style.display = "block";

  setTimeout(() => {
    document.getElementById("game-content").style.display = "flex";
    document.getElementById("thinking-screen").style.display = "none";

    if (aiRemaining.length === 1) {
        const finalGuess = aiRemaining[0];
        const gameQuestion = document.getElementById("game-question");
        const gameAnswer = document.getElementById("game-answer");

        gameQuestion.textContent = `🤖 Creo que ya tengo tu personaje secreto. ¿Es ${finalGuess.name}?`;
        gameAnswer.innerHTML = "";

        ["Sí", "No"].forEach(resp => {
            const btn = document.createElement("button");
            btn.textContent = resp;
            btn.onclick = () => {
                if (resp === "Sí") {
                    showEndMessage("🤖 Te he ganado... ¿quieres una revancha?");
                } else {
                    showAlert("¡Ups! Pierdo el turno.");
                    aiRemaining = [...characters];
                    askedQuestions = [];
                    currentTurn = "player";
                    updateTurnUI("player");
                }
            };
            gameAnswer.appendChild(btn);
        });
        return;
    }

    const allQuestions = [].concat(...Object.values(questionsData));
    const validQuestions = allQuestions.filter(q => {
      const values = new Set(aiRemaining.map(c => c[q.key]));
      const questionId = `${q.key}:${q.value}`;
      return values.size > 1 && !askedQuestions.includes(questionId);
    });

    if (validQuestions.length === 0) {
      showAlert("El juego ya no tiene más preguntas útiles.");
      return;
    }

    const question = validQuestions[Math.floor(Math.random() * validQuestions.length)];
    const questionId = `${question.key}:${question.value}`;
    askedQuestions.push(questionId);

    const gameQuestion = document.getElementById("game-question");
    gameQuestion.textContent = question.question;

    const gameAnswer = document.getElementById("game-answer");
    gameAnswer.innerHTML = "";
    ["Sí", "No"].forEach(resp => {
      const btn = document.createElement("button");
      btn.textContent = resp;
      btn.onclick = () => handleAiAnswer(question, resp);
      gameAnswer.appendChild(btn);
    });
  }, 2000);
}

function handleAiAnswer(question, response) {
  const keep = response === "Sí";
  aiRemaining = aiRemaining.filter(c => keep === (c[question.key] === question.value));
  currentTurn = "player";
  updateTurnUI("player");
    //yep
  updateAiDiscardedDisplay();
//yep
} 

function showAlert(message, callback) {
  const notif = document.getElementById("notification");
  const text = document.getElementById("notification-text");
  const btn = document.getElementById("notification-ok");

  text.textContent = message || "Mensaje vacío";
  notif.classList.remove("hidden");

  const handleClose = () => {
    notif.classList.add("hidden");
    btn.removeEventListener("click", handleClose);
    if (typeof callback === "function") callback();
  };

  btn.addEventListener("click", handleClose);
}

function showEndMessage(message) {
  showAlert(message, () => {
    document.getElementById("game").style.display = "none";
    document.getElementById("home-screen").style.display = "block";
  });
}

function resetGameState() {
  isGuessing = false;
  askedQuestions = [];

  document.querySelectorAll("#characters-grid .character").forEach(c => {
    c.classList.remove("eliminated");
    c.classList.remove("guessable");
  });

  // Restaurar interacciones
  document.getElementById("characters-grid").style.pointerEvents = "auto";

  // Restaurar UI
  enableCategories(true);
  enableContinueButton(false);
  hideFloatingInfo();
}

function filterCharacters(key, value) {
  document.querySelectorAll(".explore-character").forEach(div => {
    const match = div.dataset[key] === value || (value === "true" && div.dataset[key] === "true");
    div.style.opacity = match ? "1" : "0.2";
  });
}

document.getElementById("reset-filter").addEventListener("click", () => {
  document.querySelectorAll(".explore-character").forEach(div => {
    div.style.opacity = "1";
  });
});


//yep
function updateAiDiscardedDisplay() {
  const discarded = characters.filter(c => !aiRemaining.includes(c) && c !== aiTarget);
  const grid = document.getElementById("ai-discarded-grid");
  grid.innerHTML = "";

  discarded.forEach(char => {
    const div = document.createElement("div");
    div.className = "character";
    
    const img = document.createElement("img");
    img.src = char.image;
    img.alt = char.name;
    img.style.width = "100%";

    const name = document.createElement("p");
    name.textContent = char.name;

    div.appendChild(img);
    div.appendChild(name);
    grid.appendChild(div);
  });
}

//yep
