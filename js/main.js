document.getElementById("year").textContent = new Date().getFullYear();

const video = document.getElementById("demo-video");
const placeholder = document.getElementById("video-placeholder");

function showPlaceholder() {
  video.hidden = true;
  placeholder.hidden = false;
}

video.addEventListener("error", showPlaceholder);
video.querySelector("source").addEventListener("error", showPlaceholder);

fetch(video.querySelector("source").src, { method: "HEAD" })
  .then((res) => { if (!res.ok) showPlaceholder(); })
  .catch(showPlaceholder);
