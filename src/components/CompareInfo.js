import React from 'react';

export const CompareInfo = ({data}) => (
  <ul className="compare-list">
    {data.map((person, index) => (
      <li className="compare-list-items" key={index}>
        <div className="compare-list-header">
          <span className="compare-list-items-id">{person.uid}</span> 
          {person.count ? <span>{Math.ceil(100 / person.skills.length * person.count)}%</span> : null}
        </div>
        <span className="compare-list-items-source">{person.source} </span>
        <ul className="compare-skills">
          {person.skills.map((s, i) => 
            <li className="compare-skills-item" key={i}>{s} </li>
          )}   
        </ul>
      </li>
    ))}
  </ul>
)
