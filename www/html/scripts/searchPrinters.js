function searchPrinters() {
  let input = document.getElementById("searchPrinter").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  let articles = document.getElementsByClassName("printersBox");

  for (let i = 0; i < articles.length; i++) {
    let articleText = articles[i].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    if (!articleText.includes(input)) {
      articles[i].style.display = "none";
    } else {
      articles[i].style.display = "block";
    }
  }
}