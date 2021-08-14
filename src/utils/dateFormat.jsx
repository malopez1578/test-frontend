const dateFormat = (dateString) => {
  const options = new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
  return new Date(dateString).toLocaleDateString([], options)
}

export { dateFormat }
