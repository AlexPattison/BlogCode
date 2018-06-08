(function() {
  const TurnKthFromLastRed = (head, k) => {
    let leader = head;
    let follower = head;

    while (leader.nextElementSibling) {
      if (k > 1) {
        k--;
      } else {
        follower = follower.nextElementSibling;
      }

      leader = leader.nextElementSibling;
    }

    if (k === 1) {
      follower.style.background = 'red';
    }
  }

  const head = document.querySelector('.link');
  TurnKthFromLastRed(head, 2);
})();
