const addClassToChild = (parent, className) => {
  parent.firstElementChild.classList.add(className);
};

const removeClassFromChild = (parent, className) => {
  parent.firstElementChild.classList.remove(className);
}

const pointToNext = (ref, className) => {
  removeClassFromChild(ref[0], className);
  ref[0] = ref[0].nextElementSibling;
  addClassToChild(ref[0], className);
}

const turnKthFromLastRed = (head, k) => {
  let count = 1;
  let leader = head;
  let follower = head;

  while (leader.nextElementSibling) {
    if (count < k) {
      count++;
    } else {
      follower = follower.nextElementSibling;
    }

    leader = leader.nextElementSibling;
  }

  if (count === k) {
    follower.firstElementChild.style.background = 'red';
  }
}

const visualizePointers = (headPlaceHolder, k) => {
  let frontRef = [headPlaceHolder];
  addClassToChild(headPlaceHolder, 'front');
  let backRef = [headPlaceHolder];
  let count = 1;

  let movePointers = setInterval(() => {
    if (count < k) {
      if (count + 1 === k) {
        addClassToChild(headPlaceHolder, 'back');
      }

      count++;
    } else {
      pointToNext(backRef, 'back');
    }

    pointToNext(frontRef, 'front');

    if (!frontRef[0].nextElementSibling) {
      clearInterval(movePointers);
      setTimeout(() => {
        turnKthFromLastRed(document.querySelector('.container'), k);
      }, 500);
    }
  }, 500);
}

let headPointer = document.getElementById('head-pointer');
visualizePointers(headPointer, 3);
