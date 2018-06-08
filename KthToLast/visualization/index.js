const visualizePointers = (headPlaceHolder, k) => {
  console.log(headPlaceHolder.firstElementChild);
  headPlaceHolder.firstElementChild.classList.add('arrow-up');

  setTimeout(() => {
    headPlaceHolder.firstElementChild.classList.remove('arrow-up');
    headPlaceHolder = headPlaceHolder.nextElementSibling;
    headPlaceHolder.firstElementChild.classList.add('arrow-up');
  }, 1000);
}

const head = document.getElementById('head-pointer');
visualizePointers(head);
