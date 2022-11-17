import { Item } from './Item';

export abstract class Weapon extends Item {
	protected MODIFIER_CHANGE_RATE: number;
	protected damageModifier: number;
	protected durabilityModifier: number;

	constructor(name: string, protected baseDamage: number, protected baseDurability: number, value: number, weight: number) {
		super(name, value, weight);

		this.MODIFIER_CHANGE_RATE = 0.05;
		this.damageModifier = 0;
		this.durabilityModifier = 0;
	}

	public getDamage(): number {
		return Math.round((this.getValue() + this.damageModifier) * 100) / 100;
	}

	public getDurability(): number {
		return Math.round((this.getDurability() + this.durabilityModifier) * 10000) / 100;
	}

	public toString(): string {
		return `${this.getName()} − Value: ${this.getValue()}, Weight:${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
	}

	public use(): string {
		if (this.getDurability() <= 0) {
			return `You can't use the ${this.getName()}, it is broken.`;
		}

		this.decreaseDurability(this.MODIFIER_CHANGE_RATE);

		if (this.getDurability() <= 0) {
			return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage. The ${this.getName()} breaks.`;
		}

		return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;
	}

	private decreaseDurability(value: number): void {
		this.baseDurability -= value;
	}
}
