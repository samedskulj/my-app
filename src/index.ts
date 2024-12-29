import { Hono } from 'hono'
import youtube from './routers/youtube'

const app = new Hono()

app.route('/', youtube)

export default app