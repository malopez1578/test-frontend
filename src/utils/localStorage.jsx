const prefix = 'front_'

const setStorageValue = (name, data) => {
  console.log(
    '🚀 ~ file: localStoraje.jsx ~ line 4 ~ setStorageValue ~ data',
    data
  )
  localStorage.setItem(`${prefix}${name}`, JSON.stringify(data))
}
const getStorageValue = (name) => {
  localStorage.getItem(`${prefix}${name}`)
}

const deleteStorageValue = (name) => {
  localStorage.removeItem(`${prefix}${name}`)
}

export { setStorageValue, getStorageValue, deleteStorageValue }
