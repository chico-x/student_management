const container = document.getElementById('container');
const teacherBtn = document.getElementById('teacherBtn');
const studentBtn = document.getElementById('studentBtn');

teacherBtn.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

studentBtn.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
