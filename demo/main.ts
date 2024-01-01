/// <reference types="bun-types"/>
import { Server } from 'bun'

const proc = Bun.spawnSync({
  cmd: ['bun', 'build', 'demo/index.tsx', '--outdir', 'demo/dist'],
})

if (proc.exitCode !== 0) {
  console.error(proc.stderr)
  process.exit(proc.exitCode)
}

const code = await Bun.file('demo/dist/index.js').text()


const page = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Chat</title>
    <link href="//cdn.jsdelivr.net/npm/@radix-ui/themes@latest/styles.css" rel="stylesheet">
    <script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">${code}</script>
  </body>
</html>
`

const port = 3000

console.log(`Starting server on http://localhost:${port}/`)

export default {
  fetch(request) {
    return new Response(page, {
      headers: { charset: 'utf-8', 'content-type': 'text/html' },
    })
  },
  port,
} as Server
