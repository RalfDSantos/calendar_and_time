function carregar() {
  
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let titulo = document.querySelector("h1");
  let secao = document.querySelector("section");
  let data = new Date();
  let hora = data.getHours();
  let minu = data.getMinutes();
  let segu = data.getSeconds();

  minu = minu.toString().padStart(2, "0");
  segu = segu.toString().padStart(2, "0");

  if (hora >= 6 && hora < 9) {
    document.body.style.background = "#fff4b4da";
    titulo.style.color = "#0009";
    secao.style.background = "#eed85ab0";
    msg.style.color = "#0009";
    msg.innerHTML = `Bom dia! Agora são ${hora}:${minu}:${segu}`;
    img.src = "../photos/img/6-9.png";
  } 
  else if (hora >= 9 && hora < 12) {
    document.body.style.background = "#f1f877";
    titulo.style.color = "#0009";
    secao.style.background = "#f7d757f3";
    msg.style.color = "#0009";
    msg.innerHTML = `Bom dia! Agora são ${hora}:${minu}:${segu}`;
    img.src = "../photos/img/9-12.png";
  } 
  else if (hora >= 12 && hora < 15) {
    document.body.style.background = "#e3c95f";
    titulo.style.color = "#0009";
    secao.style.background = "#d8b525";
    msg.style.color = "#0009";
    img.src = "../photos/img/12-15.png";
    msg.innerHTML = `Boa tarde! Agora são ${hora}:${minu}:${segu}`;
  } 
  else if (hora >= 15 && hora < 18) {
    document.body.style.background = "#f8ad78e4";
    titulo.style.color = "#0009";
    secao.style.background = "#d37837e4";
    img.src = "../photos/img/15-18.png";
    msg.style.color = "#0009";
    msg.innerHTML = `Boa tarde! Agora são ${hora}:${minu}:${segu}`;
  } 
  else if (hora >= 18 && hora < 19) {
    document.body.style.background = "#c8673bc9";
    titulo.style.color = "#0039";
    secao.style.background = "#da6c3ac9";
    msg.style.color = "#0039";
    img.src = "../photos/img/18-19.png";
    msg.innerHTML = `Boa tarde! Agora são ${hora}:${minu}:${segu}`;
  } 
  else {
    document.body.style.background = "#364256f5";
    titulo.style.color = "#000124";
    secao.style.background = "#313e54f5";
    msg.style.color = "#000124";
    img.src = "../photos/img/noite.png";
    msg.innerHTML = `Boa noite! Agora são ${hora}:${minu}:${segu}`;
  }

  setInterval(carregar, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

  var monthYearText = document.getElementById("month-year");
  var calendarBody = document.getElementById("calendar-body");
  var prevMonthBtn = document.getElementById("prev-month");
  var nextMonthBtn = document.getElementById("next-month");

  renderCalendar(currentMonth, currentYear);

  prevMonthBtn.addEventListener("click", function () {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    renderCalendar(currentMonth, currentYear);
  });

  nextMonthBtn.addEventListener("click", function () {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    renderCalendar(currentMonth, currentYear);
  });

  function renderCalendar(month, year) {
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var daysInMonth = lastDay.getDate();

    monthYearText.textContent = getMonthName(month) + " " + year;
    calendarBody.innerHTML = "";

    var date = 1;
    for (var i = 0; i < 6; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay.getDay()) {
          var cell = document.createElement("td");
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          var cell = document.createElement("td");
          cell.textContent = date;
          if (
            date === currentDay &&
            month === currentMonth &&
            year === currentYear
          ) {
            cell.classList.add("current-day");
          }
          row.appendChild(cell);
          date++;
        }
      }
      calendarBody.appendChild(row);
    }
  }

  function getMonthName(month) {
    var monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return monthNames[month];
  }
});
