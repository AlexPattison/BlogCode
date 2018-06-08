const kthToLast = (k, node, count = [1]) => {
  if (!node.nextElementSibling) return count;
  const retFromNext = kthToLast(k, node.nextElementSibling, count);

  if (k === retFromNext[0] + 1) {
    node.style.background = 'red';
  }

  return [retFromNext[0] + 1];
}

kthToLast(5, document.querySelector('.link'));
