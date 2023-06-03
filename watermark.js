fetch('watermark.html')
.then(response => response.text())
.then(data => {
document.getElementById('watermark').innerHTML = data;
})
.catch(error => console.log(error));