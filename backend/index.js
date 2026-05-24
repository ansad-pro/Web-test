import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors())

const YT_KEY = 'YOUR_YOUTUBE_API_KEY'

app.get('/api/search/:query', async (req, res) => {
  try {
    const q = req.params.query
    const { data } = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          q,
          part: 'snippet',
          maxResults: 10,
          key: YT_KEY,
          type: 'video'
        }
      }
    )
    const results = data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.medium.url
    }))
    res.json(results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(5000, () => console.log('✅ Coldfy backend running → http://localhost:5000'))
