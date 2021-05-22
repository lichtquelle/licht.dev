const { Server } = require('wanilla-machine/lib/server')
const { render } = require('generate-static-site/lib/render')

const server = new Server()
const port = 4600

const main = async () => {
  await server.serve('www', port)

  await render(`http://localhost:${port}`, 'dist')

  await server.kill()
}
main()
