function generateFileAndDownload(filename, text) {
  const content = new Blob([`${encodeURIComponent(text)}`], {
    type: 'text/html',
  })
  console.log(content)
  const element = document.createElement('a')
  element.setAttribute('href', window.URL.createObjectURL(content))
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export const download = (htmlFileContent) => () => {
  try {
    generateFileAndDownload(`${htmlFileContent}.html`, htmlFileContent)
  } catch (error) {
    console.log(error)
  }
}
