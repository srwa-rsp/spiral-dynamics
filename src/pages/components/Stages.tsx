import React from 'react'
import { Stages } from '../types/stages'
import { GetServerSideProps } from 'next';

type Props = {
    stages: Stages[];
  };

const Stages: React.FC<Props> = ({ stages }) => {
  return (
    <div>
      <h1>Spiral Dynamics Stages</h1>
      <ul>
        {stages.map(stage => (
          <li key={stage.id}>
            <strong style={{color: stage.color}}>{stage.name}:</strong> {stage.description}
          </li>
        ))}
      </ul>
    </div>  )
}



export default Stages