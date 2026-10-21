// Write your code here!

function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  for (let i = 0; i < posts.length; i++) {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");

    h1.textContent = posts[i].title;

    const p = document.createElement("p");
    p.textContent = posts[i].body;
    li.appendChild(h1);
    li.appendChild(p);

    ul.appendChild(li);
  }

  async function getPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      displayPosts(data);
    } catch (error) {
      console.log(error);
    }
  }
}

getPosts();
