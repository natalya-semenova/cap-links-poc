const fastify = require('fastify');
const fastifyStatic = require('@fastify/static');
const path = require('path')

const app = fastify({
  logger: {
    level: 'debug',
  }
});


app.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'packages'),
  prefix: '/packages/',
});

const main = async () => {
  let port = parseInt(process.env.LISTEN_PORT || '', 10);

  if (!port || port < 0 || port > 65535) {
    port = 3000;
  }

  app.listen({
    port,
    host: '0.0.0.0',
  });
};

main();
