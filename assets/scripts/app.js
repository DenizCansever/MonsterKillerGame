const jsConfetti = new JSConfetti();

const NORMAL_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let staticMaxLife = 100;
let currentMonsterHealth = staticMaxLife;
let currentPlayerHealth = staticMaxLife;

adjustHealthBars(staticMaxLife);

function attackHandler(attackValue) {
  const monsterDamage = dealMonsterDamage(attackValue);
  currentMonsterHealth -= monsterDamage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    jsConfetti.addConfetti({
      emojis: ['ð', 'â¡ï¸', 'ð¥', 'â¨', 'ð«', 'ð¸'],
    });
    alert('You Won Ãido');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    jsConfetti.addConfetti({
      emojis: ['ð', 'â¡ï¸', 'ð¥', 'â¨', 'ð«', 'ð¸'],
    });
    alert('You Lose Ãido');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    jsConfetti.addConfetti({
      emojis: ['ð', 'â¡ï¸', 'ð¥', 'â¨', 'ð«', 'ð¸'],
    });
    alert('You have a draw Ãido!');
  }
}

normalAttackBtn.addEventListener('click', () =>
  attackHandler(NORMAL_ATTACK_VALUE)
);
strongAttackBtn.addEventListener('click', () =>
  attackHandler(STRONG_ATTACK_VALUE)
);
