const recTurnKthToLastRed = (k, node) => {
  if (!node.nextElementSibling) return 1;
  const countAhead = recTurnKthToLastRed(k, node.nextElementSibling);

  if (k === countAhead + 1) {
    node.style.background = 'red';
  }

  return countAhead + 1;
}

recTurnKthToLastRed(5, document.querySelector('.link'));
