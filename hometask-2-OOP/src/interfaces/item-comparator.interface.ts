import { Item } from '../Item';
import { Comparator } from './comparator.interface';

export interface ItemComparator extends Comparator<Item> {
	compare(first: Item, second: Item): number;
}
