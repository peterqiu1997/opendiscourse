import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from './app/components/routes';
import template from './template';

const app = express();
const mongoose = require('mongoose');
const DataModel = require('./model.js');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const server = app.listen(port);

const dbString = "mongodb://heroku_4sr5ldpv:dgrg5e22e6md9uhrndeuknoe5f@ds023105.mlab.com:23105/heroku_4sr5ldpv"

mongoose.connect(dbString, function(err, res) {
    if (err) { alert(err); }
});

app.use('/assets', express.static('assets'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('*', (req, res) => {
  console.log(req.url);
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const appString = renderToString(<RouterContext {...props}/>)
    res.send(template({
      body: appString,
      title: 'server routing',
      initialState: safeStringify({ id: '1234' })
    }));
  });
});

app.post('/save', (req, res) => {
  const key = req.body.id
  const modelID = new DataModel({
    id: key,
    question: "Do you really like pringles?"
  });
  // save to database
  modelID.save(function(err) {
    if (!err) {
      res.send(req.body.id)
    } else {
      console.log(err);
    }
  })
})

function safeStringify(obj) {
  return JSON.stringify(obj)
    .replace(/<\/(script)/ig, '<\\/$1')
    .replace(/<!--/g, '<\\!--')
    .replace(/\u2028/g, '\\u2028') // Only necessary if interpreting as JS, which we do
    .replace(/\u2029/g, '\\u2029') // Ditto
}
