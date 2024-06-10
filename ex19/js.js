// Vitória Karoline de Carvalho Bernardo
const fileInput = document.getElementById('fileInput');
const uploadForm = document.getElementById('uploadForm');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {
  preview.innerHTML = ''; 
  
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(event) {
      const previewItem = document.createElement('div');
      previewItem.className = 'preview-item';

      const img = document.createElement('img');
      img.src = event.target.result;
      img.alt = file.name;

      const fileName = document.createElement('p');
      fileName.textContent = file.name;

      previewItem.appendChild(img);
      previewItem.appendChild(fileName);
      preview.appendChild(previewItem);
    };

    reader.readAsDataURL(file);
  }
});

uploadForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
});
