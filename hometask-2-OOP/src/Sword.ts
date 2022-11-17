import { Weapon } from './Weapon';

export class Sword extends Weapon {
	constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
		super('sword', baseDamage, baseDurability, value, weight);
	}

	polish(): void {
		const maxDamageModifier = 0.25 * this.baseDamage;

		if (this.damageModifier >= maxDamageModifier) {
			return;
		}

		const cachedDamageModidifer = this.damageModifier + this.MODIFIER_CHANGE_RATE * this.baseDamage;
		this.damageModifier = cachedDamageModidifer >= maxDamageModifier ? maxDamageModifier : cachedDamageModidifer;
	}
}
