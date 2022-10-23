import { Item } from './Item';
import { ItemComparator } from './interfaces';

export class ItemWeightComparator implements ItemComparator {
	public compare(first: Item, second: Item) {
		if (first.getWeight() === second.getWeight()) {
			return first.compareTo(second);
		}

		if (first.getWeight() > second.getWeight()) {
			return 1;
		}

		return -1;
	}
}
