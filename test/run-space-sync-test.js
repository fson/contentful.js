import test from 'tape'

import contentful from '../lib/contentful'

test('Runs first test', t => {
  t.ok(contentful.createClient())
  t.end()
})