import React from 'react';
import SkillItem from './SkillItem';

const SkillList = ({items}) => (
  <ul className="skill-list">
    {items.map((i, index) => <SkillItem  key={index} item={i.name} />)}
  </ul>
)

export default SkillList;
