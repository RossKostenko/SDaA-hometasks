import { Comparable } from './interfaces';

let id = 0;

export abstract class Item implements Comparable<Item> {
	protected id: number;

	constructor(protected name: string, protected value: number, protected weight: number) {
		this.id = id;
		id++;
	}

	abstract use(): string;

	public toString(): string {
		return `${this.getName()} − Value: ${this.getValue()}, Weight: ${this.getWeight()}`;
	}

	public getValue(): number {
		return this.value;
	}

	public getName(): string {
		return this.name;
	}

	public getWeight(): number {
		return this.weight;
	}

	public setValue(value: number): void {
		this.value = value;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public setWeight(weight: number): void {
		this.weight = weight;
	}

	public static reset(): void {
		id = 0;
	}

	public compareTo(other: Item): number {
		if (this.getValue() === other.getValue()) {
			return this.getName() > other.getName() ? 1 : this.getName() === other.getName() ? 0 : -1;
		}

		if (this.getValue() > other.getValue()) {
			return 1;
		}

		return -1;
	}

	public static numberOfItems(): number {
		return id;
	}
}
