import React, { useState } from 'react';

const ScreenHeader = props => {

  const [active, setActive] = useState({
    MatchSkills: '',
    Hacklab: 'active',
    Instanties: ''
  })
  
  const onClickHandler = event => {
    event.preventDefault();
    setActive({ 
      MatchSkills: '',
      Hacklab: '',
      Instanties: '', 
      [event.target.id]: 'active'
  })
    props.onChange(event.target.id)
  }

  return (
    <header className="header">
      <ul className="tabs">
        <li onClick={onClickHandler} className={active.Instanties} id="Instanties">Instanties</li>
        <li onClick={onClickHandler} className={active.Hacklab} id="Hacklab">Hacklab</li>
        <li onClick={onClickHandler} className= {active.MatchSkills} id="MatchSkills">MatchSkills</li>
      </ul>
    </header>
  )
}

export default ScreenHeader;
