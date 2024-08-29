function up(p) {
  let score = `score-${p}`;
  let scoreUp = document.getElementById(score);
  scoreUp.innerText++;
}

function down(p) {
  let score = `score-${p}`;
  let scoreDown = document.getElementById(score);
  let scoreDownInt = Number(scoreDown.innerText);
  if (scoreDownInt > 0) {
    scoreDown.innerText--;
  }
}

function entryScore(p) {
  let entry = prompt("Gol Sayısını Giriniz:");
  if (entry >= 0 && entry != "") {
    let score = `score-${p}`;
    if (entry == null) {
      return;
    } else {
      document.getElementById(score).textContent = entry;
    }
  } else {
    alert("Bir sayı giriniz!");
    entryScore(p);
  }
}

function changeTeamName(p) {
     let teamName = prompt("Takım Adını Giriniz");
  let teamId = `teamName${p}`;
  if (teamName != "") {
    if (teamName == null) {
      return;
    } else {
      document.getElementById(teamId).textContent = teamName;
    }
  } else {
    alert("Takım Adı Boş Bırakılamaz");
    changeTeamName(p);
  }
}
