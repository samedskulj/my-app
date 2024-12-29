import { Hono } from 'hono'

const app = new Hono()

app.get('/download-thumbnail/:videoId', async (c) => {
  const videoId = c.req.param("videoId");
  const response = await fetch(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)

  const outputPath = `./${videoId}.jpg`

  Bun.write(outputPath, response)

  
  return c.json({
    ok: true,
    message: 'File downloaded successfully',
  })
})

app.get("/download-video-data/:videoId", async (c) => {
  const videoId = c.req.param("videoId");
  const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`)
  
  const htmlContent = await response.text();
  const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
  const channelMatch = htmlContent.match(/"ownerChannelName":"(.*?)"/);
  const viewsMatch = htmlContent.match(/"viewCount":{"videoViewCountRenderer":{"viewCount":{"simpleText":"(.*?)"/);

  const videoData = {
    title: titleMatch ? titleMatch[1].replace(' - YouTube', '') : '',
    channelName: channelMatch ? channelMatch[1] : '',
    views: viewsMatch ? viewsMatch[1].split(" ")[0] : ''
  };

  await Bun.write(`./${videoId}.json`, JSON.stringify(videoData, null, 2))

  return c.json({
    ok: true,
    message: 'File HTML downloaded successfully',
  })  
})

export default app
