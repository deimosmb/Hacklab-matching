import React, { useState} from 'react';
import Header from './ScreenHeader';
import SkillsCompare from '../components/ComparePersonsSkills';
import PersonsList from '../components/PersonsList';
import HackSkills from './HacklabSkills';
import './../components/compare.scss';
import './screen.scss';

function Screen() {

  const [page, setPage] = useState('Hacklab');

  const [skills, setSkills] = useState([{name: "De Hacklab Skill"}]);

  const switchTab = pageComponent => <><Header onChange={setPage} /><main>{pageComponent}</main></>;

  switch (page) {
    case 'Instanties':
      return switchTab(<PersonsList />)
    case 'Hacklab':
      return switchTab(<HackSkills skills={skills} setSkills={setSkills} />)
    case 'MatchSkills':
      return switchTab(<SkillsCompare />)
    default:
      return switchTab();
  }
}

export default Screen;
