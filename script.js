document.addEventListener('DOMContentLoaded', () => {
  fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'quotes15.p.rapidapi.com',
      'x-rapidapi-key': 'RAPIDAPI_KEY'
    }
  })
  .then(response => response.json())
  .then(data => {
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.textContent = `${data.content} - ${data.originator.name}`;
  })
  .catch(error => {
    console.error('Error fetching quote:', error);
    document.getElementById('quoteContainer').textContent = 'Failed to load quote.';
  });
});