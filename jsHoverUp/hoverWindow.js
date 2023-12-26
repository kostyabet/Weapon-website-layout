var modal = document.getElementById("myModal");
var button = document.getElementById("myButton");
var close = document.getElementsByClassName("close")[0];
var scrollPosition;

button.onclick = function(event) {
  event.preventDefault();
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Запрещаем прокрутку страницы
  document.body.style.position = "fixed"; // Фиксируем положение страницы
  document.body.style.top = `-${scrollPosition}px`; // Сохраняем текущую позицию прокрутки
}

close.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "";
  document.body.style.position = ""; 
  window.scrollTo(0, scrollPosition);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.position = "";
    window.scrollTo(0, scrollPosition);
  }
}