const apiKey = "lW3zBOZ4TnLYr64LZAfCVzrFbnHDJgkm"; 
const query = "funny";
const limit = 9;
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("results");
    container.innerHTML = "";
    data.data.forEach((gif) => {
      const img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      container.appendChild(img);
    });
  })
  .catch((err) => console.error("error", err));
