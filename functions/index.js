const functions = require('firebase-functions');
const express = require('express');
const rendertron = require('rendertron-middleware');
const fetch = require('node-fetch');
const url = require('url');
const app = express();
const admin = require('firebase-admin');

//const appUrl = 'localhost:5000';
//const renderUrl = 'localhost:3000/render';

const appUrl = 'itforsocietydev.firebaseapp.com';
const renderUrl = 'https://render-tron.appspot.com/render';
// init firebase
admin.initializeApp(functions.config().firebase);
// Generates the URL 
function generateUrl(request) {
  return url.format({
    protocol: request.protocol,
    host: appUrl, 
    pathname: request.originalUrl
  });
}
// List of bots to target, add more if you'd like
function detectBot(userAgent) {
const bots = [
    // search engine crawler bots
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    // social media link bots
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
    'embedly',
    'baiduspider',
    'pinterest',
    'slackbot',
    'vkshare',
    'facebot',
    'outbrain',
    'w3c_validator'
  ]
// Return true if the user-agent header matches a bot namespace
  const agent = userAgent.toLowerCase()
for (const bot of bots) {
    if (agent.indexOf(bot) > -1) {
      console.log('bot detected', bot, agent)
      return true
    }
  }
return false
}
app.get('*', (req, res) => {
  console.log('"called')
  const isBot = detectBot(req.headers['user-agent']);
if (isBot) {
const botUrl = generateUrl(req);
    // If Bot, fetch url via rendertron
//fetch(`http://${renderUrl}/${botUrl}`)
fetch(`${renderUrl}/${botUrl}`)
      .then(res => res.text() )
      .then(body => {
          //console.log("tu sam",`${renderUrl}/${botUrl}`)
// Set the Vary header to cache the user agent, based on code from:
        // https://github.com/justinribeiro/pwa-firebase-functions-botrender
        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        res.set('Vary', 'User-Agent');
        
        res.send(body.toString())
      
    });
} else {
    //console.log("tu sam", `https://${appUrl}`)
// Not a bot, fetch the regular Angular app
    // This is not an infinite loop because Firebase Hosting Priorities dictate index.html will be loaded first
    fetch(`https://${appUrl}`)
      .then(res => res.text())
      .then(body => {
        res.send(body.toString());
      })
  }
  
});
exports.app = functions.https.onRequest(app);