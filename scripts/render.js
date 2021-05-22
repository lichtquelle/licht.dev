const { Server } = require('wanilla-machine/lib/server')
const { render } = require('generate-static-site/lib/render')
const { writeFile } = require('fs').promises

const server = new Server()
const port = 4600

const main = async () => {
  await server.serve('www', port)

  await render(`http://localhost:${port}`, 'dist')

  await server.kill()

  await writeFile('dist/CNAME', 'licht.dev', { encoding: 'utf-8' })
}
main()
