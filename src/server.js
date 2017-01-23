import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from './app/components/routes';
import template from './template';

const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const server = app.listen(port);

app.use('/assets', express.static('assets'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const appString = renderToString(<RouterContext {...props}/>)
    res.send(template({
      body: appString,
      title: 'server routing',
      initialState: JSON.stringify({ isMobile: true })
    }));
  });
});

app.post('/save', (req, res) => {
  console.log(req.body);
  console.log('received post request');
  res.send(req.body);
})
