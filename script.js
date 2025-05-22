
function loadContent(section) {
  fetch(`articles/${section}.txt`)
    .then(response => response.text())
    .then(text => {
      document.getElementById('content-title').textContent = section;
      document.getElementById('content-date').textContent = new Date().toDateString();
      document.getElementById('content-text').innerHTML = text.replace(/\n/g, '<br>');
    })
    .catch(err => {
      document.getElementById('content-text').innerHTML = '<p>Failed to load content.</p>';
    });
}
