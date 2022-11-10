import { ItemComparator } from './interfaces';
import { Item } from './Item';

export class Inventory {
	private items: Item[];

	public addItem(item: Item): void {
		this.items.push(item);
	}

	public sort(): void;
	public sort(comparator: ItemComparator): void;
	
	public sort(comparator?: ItemComparator): void {
		if (comparator) {
			this.items.sort(comparator.compare);
		}

		this.items.sort((a: Item, b: Item) => (a.getName() > b.getName() ? 1 : a.getName() === b.getName() ? 0 : -1));
	}

	public toString(): string {
		return this.items.map((item: Item) => item.toString()).join(', ');
	}
}
