import React from 'react';

function SkillInput(props){
 
  const { setSkill, skill } = props;

  const handleChange = event => {
    event.preventDefault();
    setSkill(event.target.value);
  }

  return (
    <form>
      <div>
        <input type="text" placeholder="Zoek op skills..." value={skill} onChange={handleChange} />
      </div>
    </form>
  )
}

export default SkillInput;
