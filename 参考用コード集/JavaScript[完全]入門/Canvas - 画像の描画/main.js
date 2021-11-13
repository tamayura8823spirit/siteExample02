const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const img = new Image();

img.onload = function() {
  context.drawImage(img,
    850, 1250, 700, 500, 0, 0, 700, 500)
};

img.src = 'https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg';
