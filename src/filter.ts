export function filterByCharacter (character: string, amiibos: Array<any>): Array<any> {
  return amiibos.filter((amiibo: any) => amiibo.character.toLowerCase() === character.toLowerCase());
}