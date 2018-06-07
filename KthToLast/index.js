(function() {
  const TurnKthFromLastRed = (head, k) => {
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
      follower.style.background = 'red';
    }
  }

  const head = document.querySelector('.link');
  TurnKthFromLastRed(head, 2);
})();
