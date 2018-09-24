// Creates a new object that is a subset of another object.
const pick = (object, keys) => {
  const newObject = {}
  keys.forEach(key => {
    if (object[key]) {
      newObject[key] = object[key]
    }
  })
  return newObject
}

export default {
  pick,
}
