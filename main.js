window.addEventListener("DOMContentLoaded", () => {
  fetch('pages/dashboard.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    })
    .catch(err => {
      document.getElementById('app').innerHTML = "<p>Failed to load dashboard.</p>";
      console.error("Error loading dashboard:", err);
    });
});
