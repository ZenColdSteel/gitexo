const select = document.querySelectorAll(".select");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let clicknumb = 1;
let currentPlayer = 1;
select.forEach((s) => {
  s.addEventListener("click", () => changeplayer(currentPlayer));

  function changeplayer(player) {
    const styles = window.getComputedStyle(s);
    if (clicknumb <= 1) {
      player1.style.backgroundImage =
        styles.getPropertyValue("background-image");
      currentPlayer = 2;
    } else if (clicknumb === 2) {
      player2.style.backgroundImage =
        styles.getPropertyValue("background-image");
    }
    clicknumb++;
  }
});
