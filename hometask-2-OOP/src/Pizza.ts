import { Consumable } from './Consumable';

export class Pizza extends Consumable {
	constructor(name: string, value: number, weight: number, spoiled: boolean, private numberOfSlices: number) {
		super(name, value, weight, spoiled);
	}

	public eat(): string {
		if (this.numberOfSlices <= 0) {
			throw new Error('Pizza Eat Call');
		}

		this.numberOfSlices -= 1;

		if (this.numberOfSlices === 0) {
			this.consumed === true;
		}

		return 'You eat the slice of the pizza';
	}
}
