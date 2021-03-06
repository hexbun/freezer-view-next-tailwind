import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { filterState } from './categoryAtoms';
import { compare } from '../lib/sort';

const { persistAtom } = recoilPersist();

export const itemsState = atom({
	key: 'itemsState',
	default: [],
});

export const itemState = atom({
	key: 'itemState',
	default: {},
	effects_UNSTABLE: [persistAtom],
});

export const sortState = atom({
	key: 'sortState',
	default: 'ID',
});

export const searchState = atom({
	key: 'searchState',
	default: '',
});

export const sortedItemsState = selector({
	key: 'sortedItemsState',
	get: ({ get }) => {
		const filterBy = get(filterState);
		const sortBy = get(sortState);
		const searchBy = get(searchState);
		const list = get(itemsState);

		let items = [...list];

		if (filterBy !== null) {
			items = items.filter((item) => filterBy === item.category);
		}

		items = items.filter((item) => item.name.toLowerCase().includes(searchBy));

		return items.sort((a, b) => compare(sortBy, a, b));
	},
});
