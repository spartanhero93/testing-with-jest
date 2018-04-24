const reverseString = require(`./reverseString`)

test(`reverseString function should exist`, () => {
  expect(reverseString).toBeDefined()
})

test(`String is reversed is with uppercase`, () => {
  expect(reverseString('Hello')).toEqual(`olleh`)
})
