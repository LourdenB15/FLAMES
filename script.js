const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const submit = document.getElementById('submit');
const box = document.getElementById('box');

submit.addEventListener('click', () => {
  box.innerHTML = flamesGame(name1.value, name2.value);
});

function flamesGame(nameOne, nameTwo) {
  const name1 = nameOne.replaceAll(' ', '').toUpperCase();
  const name2 = nameTwo.replaceAll(' ', '').toUpperCase();
  if (!name1 || !name2) return 'Invalid result!';
  const result = removedLetters(name1, name2) % 6;
  switch (result) {
    case 1:
      return 'You are Friends!';
      break;
    case 2:
      return 'You are in Love!';
      break;
    case 3:
      return 'You have Affection!';
      break;
    case 4:
      return 'You are Meant to be Married!';
      break;
    case 5:
      return 'You are Enemies!';
      break;
    case 0:
      return 'You are Siblings!';
      break;
    default:
      return 'Invalid result!';
  }
}

function removedLetters(nameOne, nameTwo) {
  let twoRemovedLetters = '';
  let oneRemovedLetters = '';
  for (let i = 0; i < nameOne.length; i++) {
    for (let j = 0; j < nameTwo.length; j++) {
      if (nameOne[i] === nameTwo[j]) {
        twoRemovedLetters += nameTwo[j];
        nameTwo = nameTwo.slice(0, j) + nameTwo.slice(j + 1);
        j--;
      }
    }
  }

  for (let i = 0; i < twoRemovedLetters.length; i++) {
    for (let j = 0; j < nameOne.length; j++) {
      if (nameOne[j] === twoRemovedLetters[i]) {
        oneRemovedLetters += nameOne[j];
        nameOne = nameOne.slice(0, j) + nameOne.slice(j + 1);
        j--;
      }
    }
  }
  return oneRemovedLetters.length + twoRemovedLetters.length;
}
