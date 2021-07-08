import { filterByCharacter } from '../src/filter';
import { amiibos }  from '../data/amiibos';

test('filter amiibos by name', () => {
  const foxAmiibos = filterByCharacter('fox', amiibos)

  expect(foxAmiibos.length).toBe(1);
  expect(foxAmiibos[0]).toMatchObject({
    character: 'Fox',
    gameSeries: 'Star Fox',
    amiiboSeries: 'Super Smash Bros.',
    image: expect.any(String)
  });
})