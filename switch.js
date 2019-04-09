import { Component, html } from '/web_modules/htm/preact.js'

const noop = () => {}

export default class Switch extends Component {
  render({
    on,
    className = '',
    'aria-label': ariaLabel,
    onClick,
    ...props
  }) {

    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off'
    ].filter(Boolean).join(' ')

    return (
      html`
      <label aria-label=${ariaLabel || 'Toggle'} style=${{ display: 'block' }}>
       <input
        className="toggle-input"
        type="checkbox"
        checked=${on}
        onChange=${noop}
        onClick=${onClick}
        data-testid="toggle-input"
       />
       <span className=${btnClassName} ...${props} />
     </label>
     `
    )
  }
 }