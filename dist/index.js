"use strict";
const fastify = require('fastify');
const fastifyStatic = require('@fastify/static');
const path = require('path');
const app = fastify({
    logger: {
        level: 'debug',
    }
});

app.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'packages'),
    prefix: '/packages/',
});


app.listen({
    port: 8000,
    host: '0.0.0.0',
  });
