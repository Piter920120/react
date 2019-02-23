import React from 'react';

const Code = (props) => (
  <code>{props.text}</code>
)

const Intro = () => (
  <p>
    Edit <Code text="./src/App.js" /> and save to reload.
  </p>
)

export default Intro;