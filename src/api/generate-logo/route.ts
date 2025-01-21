import puppeteer from 'puppeteer';

export async function GET(req: Request) {
  console.log('Request received:', req.url);

  // Obtener los parámetros de la URL
  const { searchParams } = new URL(req.url);
  const color = searchParams.get('color') || '#f78629';
  const text = searchParams.get('text') || 'ㄒ';

  console.log('Color:', color);
  console.log('Text:', text);

  const browser = await puppeteer.launch({ headless: true }); // Inicia Puppeteer en modo sin cabeza
  console.log('Browser launched');

  const page = await browser.newPage();
  console.log('New page created');

  // Definir el HTML y CSS para el logo
  const htmlContent = `
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: black;
          }
          .logo {
            font-family: 'Montserrat', sans-serif;
            font-size: 200px;
            color: ${color};
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .logo span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        </style>
      </head>
      <body>
        <div class="logo"><span>${text}</span></div>
      </body>
    </html>
  `;

  console.log('HTML content set');

  // Cargar la página con el contenido HTML
  await page.setContent(htmlContent);
  console.log('Page content loaded');

  await page.waitForSelector('.logo'); // Espera a que el logo se cargue
  console.log('Logo selector found');

  // Captura la imagen del logo
  const screenshot = await page.screenshot({ type: 'png' });
  console.log('Screenshot taken');

  await browser.close();
  console.log('Browser closed');

  // Devuelve la imagen como respuesta
  return new Response(screenshot, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename="logo.png"',
    },
  });
}