import { Component, html, render } from '/web_modules/htm/preact.js'
import { useState } from '/web_modules/preact/hooks.js';

import Switch from './switch.js'

function useToggle() {
  const [on, setOnState] = useState(false)

  const toggle = () => setOnState(o => !o)
  const setOn = () => setOnState(true)
  const setOff = () => setOnState(false)

  return {on, toggle, setOn, setOff}
}

class Toggle extends Component {
  render() {
    const { on, toggle, setOn, setOff } = useToggle()

    return html`<div>
        <button onClick=${setOff}>Switch Off</button>
        <button onClick=${setOn}>Switch On</button>
        <${Switch} on=${on} onClick=${toggle} />
      </div>`
  }
}

render(html`<${Toggle}/>`, document.getElementById('root'))