import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './config/routes';

//initialize server
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public'));

//folder for static assets
app.use(Express.static(path.join(__dirname, './public')));

//universl routing and rendering
app.get('*', (req, res) => {
    match(
        {routes, location: req.url },
        (err, redirectLocation, renderProps) => {

            //in case of error
            if (err) {
                return res.status(500).send(err.message);
            }

            //handle redirect
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            //generate react markup for current route
            let markup;
            if (renderProps) {
                //if route match lets render!
                markup = renderToString(<RouterContext {...renderProps}/>);
            } else {
                res.status(404);
            }

            //render index template
            return res.render('index', {markup});
        }
    )
});

//start server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info("Server running on http://localhost:" + port + " [" + env + "]");
});
