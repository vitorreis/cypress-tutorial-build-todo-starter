import React from 'react'

export default props =>
  <form>
    <input
      autoFocus
      test-id="new-todo"
      type='text'
      className="new-todo"
      value = {props.currentTodo}
      onChange={props.onUpdate}
      placeholder="What needs to be done?"/>
  </form>
