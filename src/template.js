export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet">
        <link rel="icon" href="data:;base64,iVBORw0KGgo=">
      </head>
      
      <body>
        <div id="root">${body}</div>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <script src="/assets/bundle.js" defer></script>
      </body>
    </html>
  `;
};
