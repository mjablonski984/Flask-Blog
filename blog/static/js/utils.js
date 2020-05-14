// Makes file name visible in input[type=file] when using bootstrap 'custom-file' class
document.querySelector('.custom-file-input').addEventListener('change', function (e) {
    let fileName = document.querySelector('.custom-file-input').files[0].name;
    e.target.previousElementSibling.innerText = fileName
})