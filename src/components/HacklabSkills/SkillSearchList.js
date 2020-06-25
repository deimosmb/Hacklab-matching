import React, {useEffect, useState} from 'react';
import { hackLabSkills } from './../../data';

function SkillSearchList(props){
 
  const [filterSkills, setFilterSkills] = useState([]);

  useEffect(() => {
    setFilterSkills(() => {
      if(props.searchValue.length > 0){
        return hackLabSkills.filter(f => f.name.toLowerCase().includes(props.searchValue.toLowerCase()));
      }
      return [];
    })
  },[props.searchValue])

  const addToList = event => {
    event.preventDefault();
    const item = hackLabSkills.find(item => item.name === event.target.id);
    props.addSkill(item);
  }

  return (
    <ul className="filter_list">
      {filterSkills.map((skill, index) => <li onClick={addToList} id={skill.name} key={index}>{skill.name}</li>)}
    </ul>
  )
  
}

export default SkillSearchList;
