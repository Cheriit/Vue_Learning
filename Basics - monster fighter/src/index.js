new Vue({
	el: '#app',
	data: {
		player: {
			maxHealth: 100,
			currentHealth: 100
		},
		monster: {
			maxHealth: 100,
			currentHealth: 100
		},
		isGame: false,
		gameLog: []
	},
	computed: {
		playerProgressBar: function() {
			const { player } = this;
			return (player.currentHealth / player.maxHealth) * 100 + '%';
		},
		monsterProgressBar: function() {
			const { monster } = this;

			return (monster.currentHealth / monster.maxHealth) * 100 + '%';
		}
	},
	methods: {
		startGame() {
			this.isGame = true;
			this.gameLog.length = 0;
			this.player.currentHealth = this.player.maxHealth;
			this.monster.currentHealth = this.monster.maxHealth;
		},
		attack() {
			const damageGiven = this.calculateDamage(3, 10);
			this.monster.currentHealth -= damageGiven;

			this.addToActionLog(true, `Player hits Monster for ${damageGiven}`);
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},
		specialAttack() {
			const damageGiven = this.calculateDamage(10, 20);
			this.monster.currentHealth -= damageGiven;

			this.addToActionLog(
				true,
				`Player hits Monster hard for ${damageGiven}`
			);

			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},
		heal() {
			if (this.player.maxHealth - this.player.currentHealth >= 10) {
				this.player.currentHealth += 10;
			} else {
				this.player.currentHealth = this.player.maxHealth;
			}
			this.addToActionLog(true, `Player heals for 10`);

			this.monsterAttacks();
		},
		giveUp() {
			this.isGame = false;
		},
		calculateDamage(max, min) {
			return Math.floor(Math.random() * (max - min)) + min;
		},
		checkWin() {
			if (this.monster.currentHealth <= 0) {
				this.confirmNewGameBox('You won! Next game?');
				return true;
			} else if (this.player.currentHealth <= 0) {
				this.confirmNewGameBox('You lost! Next game?');
				return true;
			}
			return false;
		},
		confirmNewGameBox(str) {
			if (confirm(str)) {
				this.startGame();
			} else {
				this.isGame = false;
			}
		},
		monsterAttacks() {
			const damageGiven = this.calculateDamage(5, 12);
			this.player.currentHealth -= damageGiven;

			this.addToActionLog(false, `Monster hits Player for ${damageGiven}`);
		},
		addToActionLog(isPlayer, text) {
			this.gameLog.unshift({
				isPlayer,
				text
			});
		}
	}
});
