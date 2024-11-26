const snowContainer = document.querySelector(".snow-container");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  const size = Math.random() * 10 + 5; // Tamaño aleatorio entre 5 y 15px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración aleatoria entre 2 y 5 segundos
  snowContainer.appendChild(snowflake);

  // Eliminar el copo de nieve después de que cae
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// Crear copos de nieve cada 300ms
setInterval(createSnowflake, 300);
