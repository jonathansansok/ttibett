// my-next-app\src\api\generate-logo\route.ts
import puppeteer from 'puppeteer';

export async function GET(req: Request) {
  // Obtener los parámetros de la URL
  const { searchParams } = new URL(req.url);
  const color = searchParams.get('color') || '#f78629';
  const text = searchParams.get('text') || 'ㄒ';

  const browser = await puppeteer.launch({ headless: true }); // Inicia Puppeteer en modo sin cabeza
  const page = await browser.newPage();

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
            top: 50%;  /* Ajustamos la posición sin usar márgenes negativos */
            transform: translateY(-50%);
          }
        </style>
      </head>
      <body>
        <div class="logo">${text}</div>
      </body>
    </html>
  `;

  // Cargar la página con el contenido HTML
  await page.setContent(htmlContent);
  await page.waitForSelector('.logo'); // Espera a que el logo se cargue

  // Captura la imagen del logo
  const screenshot = await page.screenshot({ type: 'png' });

  await browser.close();

  // Devuelve la imagen como respuesta
  return new Response(screenshot, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename="logo.png"',
    },
  });
}
