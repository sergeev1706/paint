// сохранение в формате PDF
document.querySelector('#download').addEventListener('click', () => {

  // var doc = new jspdf("p", "pt", "a4"); // книжный
  let pdf = new jsPDF('l'); // альбомный

  // Получение данных из canvas
  let canvasData = canvas.toDataURL('image/jpeg', 1.0);

  // коэффициент от ширины холста
  let k
  if (canvas.width <= 800) k = 0.3;
  if (canvas.width > 800 && canvas.width <= 900) k = 0.28;
  if (canvas.width > 900 && canvas.width <= 1000) k = 0.26;
  if (canvas.width > 1000 && canvas.width <= 1100) k = 0.24;
  if (canvas.width > 1100 && canvas.width <= 1200) k = 0.23;
  if (canvas.width > 1200 && canvas.width <= 1300) k = 0.22;
  if (canvas.width > 1300 && canvas.width <= 1400) k = 0.2;

  let pdfWidth = canvas.width * k
  let pdfHeight = canvas.height * k

  // Добавление данных из canvas в PDF
  const left = (297 - pdfWidth) / 2
  const top = (210 - pdfHeight) / 2

  pdf.addImage(canvasData, 'JPEG', left, top, pdfWidth, pdfHeight);

  // Сохранение PDF-файла
  pdf.save('myCanvas.pdf');
})