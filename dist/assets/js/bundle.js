const setPosts = (data) => {
  const postsContainer = document.querySelector('.Posts');

  postsContainer.innerHTML = '';

  for (const item of data) {
    postsContainer.innerHTML += `<a href="/post/${item.id}">${item.title}</a>`;
  }
};

const handleSubmit = (e) => {
  const target = e.target.closest('.Search');

  if (target) {
    e.preventDefault();

    const input = e.target.querySelector('[name="q"]');

    console.log(fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPosts(response);
      }));
  }
};
addEventListener('submit', handleSubmit);
