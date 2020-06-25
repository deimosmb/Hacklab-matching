import React, { useState, useEffect} from 'react';
import { fakePersons } from '../data/fakedata.js';
import { hackLabSkills } from '../data';
import { CompareInfo } from './CompareInfo';

function SkillsCompare(){

  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => 
    setfilteredData(() => {
      const newSet = hackLabSkills.map(h => h.name);
      return fakePersons.map(d => {
        const count = d.skills.filter(f => newSet.includes(f)).length
        if(count > 0) return {...d, count: count};
        return null;
      }).filter(f => f);
    })
  ,[])
 
  return (
    <section>
      <h2 className="skills-header">{filteredData.length} personen gevonden</h2>
      <CompareInfo data={filteredData} />
    </section>
  )

}

export default SkillsCompare;
