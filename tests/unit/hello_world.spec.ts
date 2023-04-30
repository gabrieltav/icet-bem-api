import { test } from '@japa/runner'

test.group('Hello world', () => {
  test('test', async ({ assert }) => {
    assert.equal(1+1, 2)
  })
})
