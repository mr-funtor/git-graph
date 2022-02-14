const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
  const level = Math.floor(Math.random() * 3);  
  squares.innerHTML+=`<li data-level="${level}"></li>`;
}