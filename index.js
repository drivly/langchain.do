import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { MongoClient } from 'mongodb'


const app = new Hono()
app.get('*', (c) => c.json({ Hello: 'Fly.io!' }))

serve(app)