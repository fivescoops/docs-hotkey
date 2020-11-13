


const handleNewCommand = e => {
  e.preventDefault()
  const newAction = e.target[1].value.split(';&')
  const alias = e.target[0].value
  chrome.storage.sync.get(['commands'], result => {
    console.log('commands: ' + JSON.stringify(result.commands))
    const internalName = 'slot' + ((result.commands ? Object.keys(result.commands).length : 0) + 1)
    console.log(`${alias}: ${internalName}`)
    chrome.storage.sync.set({
      commands: {
        ...result.commands,
        [internalName]: {
          actions: newAction,
          alias
        }
      }
    }, () => {
      console.log('values set')
    })
  })
}

window.onload = () => document.getElementById('new-command').addEventListener('submit', handleNewCommand, false)

