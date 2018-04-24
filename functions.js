const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Isla' }
    user['lastName'] = `Chan`
    return user
  }
}

module.exports = functions
