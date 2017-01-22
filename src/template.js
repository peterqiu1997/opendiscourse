export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet">
      </head>
      
      <body>
        <div id="root">${body}</div>
        <script src="/assets/bundle.js" defer></script>
      </body>
    </html>
  `;
};
