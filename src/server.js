import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from './app/components/routes';
import template from './template';

const app = express();
import mongoose from 'mongoose';
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
  const url=req.url.slice(1);
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const appString = renderToString(<RouterContext {...props}/>)
    if (req.url != "/") {
      DataModel.findOne({ 'id': url }, 'question', function (err, result) {
        if (err) return console.log(err);
        res.send(template({
          body: appString,
          title: 'server routing',
          initialState: safeStringify({ question: result.question })
        }));
      })
    } else {
      res.send(template({
        body: appString,
        title: 'server routing',
        initialState: safeStringify({ question: '' })
      }));
    }
  });
});

app.post('/save', (req, res) => {
  const modelID = new DataModel({
    id: req.body.id,
    question: req.body.question
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
