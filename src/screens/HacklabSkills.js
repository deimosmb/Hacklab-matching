import React, { useState} from 'react';
import {SkillSearchList, SkillList, SkillInput } from './../components/HacklabSkills';

function Skills(props){
 
  const [value, setValue] = useState('');

  const addSkill = skill => {
    if(!props.skills.find(s => s.name === skill.name)){
      props.setSkills([skill, ...props.skills]);
      setValue("");
    }else{
      alert(`De Skill ${skill.name} is al toegevoegd!`)
      setValue("");
    }
  }

  return (
    <section>
      <SkillInput skill={value} setSkill={setValue} />
      <SkillSearchList searchValue={value} addSkill={addSkill} />
      <SkillList items={props.skills}/>
    </section>
  )

}

export default Skills;
