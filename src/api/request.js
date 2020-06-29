import elements from './astronauts.json';

/** True = 65%, False = 35% */
const rejectByChance = () => Math.random() <= 0.35;

/** Emulate get request */
export const getElement = () => new Promise((resolve, reject) => {
  if (rejectByChance()) {
    return reject(new Error('Server error'));
  }

  const delay = parseInt(Math.random() * 1000, 10);
  return setTimeout(() => {
    resolve(elements);
  }, delay);
});

/** Emulate delete request */
export const deleteElement = () => new Promise((resolve, reject) => {
  if (rejectByChance()) {
    return reject(new Error('Server error'));
  }
  const delay = parseInt(Math.random() * 1000, 10);
  return setTimeout(() => {
    resolve({ message: 'deleted' });
  }, delay);
});
