/*
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treates as true
toBeFalsy matches anything that an if statement treats as false
*/

const functions = require(`./functions`)

// <=== runs before each test and after ===>//
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// <=== Runs before all tests and after ===>//
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// <=== Target specific tests to display===>//
const nameCheck = () => console.log(`Checking name...`)

describe(`Checking names`, () => {
  beforeEach(() => nameCheck())

  test(`User is Taiga`, () => {
    const user = 'Taiga'
    expect(user).toBe('Taiga')
  })
  test(`User is Ayase`, () => {
    const user = 'Ayase'
    expect(user).toBe('Ayase')
  })
})

const initDatabase = () => console.log(`Database initialized...`)
const closeDatabase = () => console.log(`Database closed...`)

// <=== toBe ===>//
test(`Adds 2 + 2 to equal 4`, () => {
  expect(functions.add(2, 2)).toBe(4)
})

// <=== toBeNull ===>//
test(`Should be null`, () => {
  expect(functions.isNull()).toBeNull()
})

// <=== toBeFalsy ===>//
test(`Should be falsy`, () => {
  expect(functions.checkValue('')).toBeFalsy()
})

// <=== toBeEqual ===>//
test(`Should be Isla Chan object`, () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Isla',
    lastName: 'Chan'
  })
})

// <=== Less than and greater than ===>//
test(`Should be under 9000`, () => {
  const power1 = 6000
  const power2 = 2000
  const power3 = 500
  expect(power1 + power2 + power3).toBeLessThan(9000)
})

// <=== RegEx ===>//
test(`There is no I in team`, () => {
  expect(`team`).not.toMatch(/[iI]/)
})

// <=== Arrays ===>//
test(`Admin should be in usernames`, () => {
  userNames = [`Isla`, `Taiga`, `admin`]
  expect(userNames).toContain(`admin`)
})

// <=== Working with async data ===>//
test(`User fetched name must be Leanne Graham`, async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual(`Leanne Graham`)
})
