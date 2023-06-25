var countInterval;
function startCounter() {
  var number = parseInt(document.getElementById("number").value);
  if (isNaN(number)) {
    alert("Please enter a number");
    clearInterval(countInterval);
    return;
  }
  if (number < 1 || number > 99999) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
  }
  var currentnos = document.querySelectorAll(".counter .current");
  console.log(currentnos);
  var nextnos = document.querySelectorAll(".counter .next");
  var count = 0;
  resetnumbers(currentnos, nextnos, 5);
  clearInterval(countInterval);
  countInterval = setInterval(function () {
    if (count == number) {
      clearInterval(countInterval);
      alert("counter has stopped");
      return;
    }
    increaseCount(currentnos, nextnos, 4);
    count++;
  }, 1000);
}
function resetnumbers(currentnos, nextnos, end) {
  for (var i = 0; i < end; i++) {
    currentnos[i].innerText = 0;
    nextnos[i].innerText = 1;
  }
}
function increaseCount(currentnos, nextnos, index) {
  let current = currentnos[index];
  let next = nextnos[index];
  if (current.innerText == 9) {
    increaseCount(currentnos, nextnos, index - 1);
  }
  next.classList.add("animate");
  setTimeout(function () {
    current.innerText = next.innerText;
    next.classList.remove("animate");
    next.innerText = parseInt(next.innerText) + 1;
    if (next.innerText > 9) {
      next.innerText = 0;
    }
  }, 500);
}

