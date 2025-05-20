document.addEventListener('DOMContentLoaded', () => {
  // Quotes API
  const quoteContainer = document.getElementById('quote-container');
  const quoteContent = document.getElementById('quote-content');
  const fetchQuoteBtn = document.getElementById('fetch-quote-btn');

  fetchQuoteBtn.addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quoteContent.innerHTML = `<p>${data.content} - ${data.author}</p>`;
      })
      .catch(error => console.error('Error fetching quote:', error));
  });

  // Random Fact API
  const randomFactContainer = document.getElementById('weather-container');
  const randomFactInfo = document.getElementById('weather-info');
  const fetchRandomFactBtn = document.getElementById('fetch-weather-btn');

  fetchRandomFactBtn.addEventListener('click', () => {
    const apiUrl = 'https://uselessfacts.jsph.pl/random.json';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        randomFactInfo.innerHTML = `<p>${data.text}</p>`;
      })
      .catch(error => console.error('Error fetching random fact:', error));
  });

  // Chuck Norris Jokes API
  const jokeContainer = document.getElementById('joke-container');
  const jokeContent = document.getElementById('joke-content');
  const fetchJokeBtn = document.getElementById('fetch-joke-btn');

  fetchJokeBtn.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        jokeContent.innerHTML = `<p>${data.value}</p>`;
      })
      .catch(error => console.error('Error fetching joke:', error));
  });

  // Random User API
  const userContainer = document.getElementById('user-container');
  const userInfo = document.getElementById('user-info');
  const fetchUserBtn = document.getElementById('fetch-user-btn');

  fetchUserBtn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        const { name, email, picture } = user;
        const userHtml = `
          <img src="${picture.medium}" alt="User Picture">
          <p>Name: ${name.first} ${name.last}</p>
          <p>Email: ${email}</p>
        `;
        userInfo.innerHTML = userHtml;
      })
      .catch(error => console.error('Error fetching user data:', error));
  });

  // Random Image API
  const imageContainer = document.getElementById('image-container');
  const randomImage = document.getElementById('random-image');
  const fetchImageBtn = document.getElementById('fetch-image-btn');

  fetchImageBtn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        randomImage.src = data.message;
      })
      .catch(error => console.error('Error fetching random image:', error));
  });
});