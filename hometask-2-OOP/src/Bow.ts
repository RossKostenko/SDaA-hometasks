import { Weapon } from './Weapon';

export class Bow extends Weapon {
	constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
		super('bow', baseDamage, baseDurability, value, weight);
	}

	polish(): void {
		const maxDurabilityModifier = 1;

		if (this.durabilityModifier >= maxDurabilityModifier) {
			return;
		}

		const cachedDurabilityModifier = this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
		this.durabilityModifier = cachedDurabilityModifier >= maxDurabilityModifier ? maxDurabilityModifier : cachedDurabilityModifier;
	}
}
