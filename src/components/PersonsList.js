import React from 'react';
import { fakePersons } from '../data/fakedata.js';
import { CompareInfo } from './CompareInfo';

function RawSkillsData(){
 
  return (
    <section>
      <h2 className="skills-header">{fakePersons.length} personen geïmporteerd</h2>
      <CompareInfo data={fakePersons} />
    </section>
  )

}

export default RawSkillsData;
