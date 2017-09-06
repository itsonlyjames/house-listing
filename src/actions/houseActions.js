export const SAVE_HOUSE = 'SAVE_HOUSE';
export const REMOVE_HOUSE = 'REMOVE_HOUSE';

export function saveHouse(house) {
  return {
    type: SAVE_HOUSE,
    house,
  };
}

export function removeHouse(house) {
  return {
    type: REMOVE_HOUSE,
    house,
  }
}
