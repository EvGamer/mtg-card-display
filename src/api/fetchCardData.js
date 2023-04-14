export async function fetchCardData(cardsIdentifiers) {
  const response = await fetch('https://api.scryfall.com/cards/collection', {
    method: 'post',
    body: JSON.stringify({
      identifiers: cardsIdentifiers
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const data = await response.json();

  if (data.object === 'error') {
    throw new Error(data.details);
  }
  
  return data;
}