const ATTACK_VALUE = 15;

let staticMaxLife = 100;
let currentMonsterHealth = staticMaxLife;
let currentPlayerHealth = staticMaxLife;

adjustHealthBars(staticMaxLife);

function normalAttackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

normalAttackBtn.addEventListener('click', normalAttackHandler);
