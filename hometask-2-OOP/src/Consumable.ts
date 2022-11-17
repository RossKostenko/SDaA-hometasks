import { Item } from './Item';

export abstract class Consumable extends Item {
	protected consumed: boolean;

	constructor(name: string, value: number, weight: number, protected spoiled: boolean) {
		super(name, value, weight);

		this.consumed = false;
	}

	public use(): string {
		if (this.consumed) {
			return `There is nothing left of the ${this.getName()} to consume.`;
		}

		if (this.spoiled) {
			return this.eat() + '\nYou feel sick.';
		}

		return this.eat();
	}

	protected abstract eat(): string;
}
