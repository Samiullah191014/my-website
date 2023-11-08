import React from 'react';
import './App.css';
import SkillBar from "./SkillBar";

function ProgressBar1() {
  return (
    <div className="App">
      <h1>Skill Progress Bars</h1>
      <SkillBar skill="React" level={10} />
      <SkillBar skill="JavaScript" level={8} />
      <SkillBar skill="CSS" level={6} />
    </div>
  );
}

export default ProgressBar1;
