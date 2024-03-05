import type { NextApiRequest, NextApiResponse } from 'next';
import { Stages } from '@/pages/types/stages'; // Adjust the import path as necessary

const spiralDynamicsStages: Stages[] = [
  { id: 1, name: 'Beige', color: 'Beige', description: 'SurvivalSense - Instinctive', category: 'tier one' },
  { id: 2, name: 'Purple', color: 'Purple', description: 'KinSpirits - Animistic', category: 'tier one' },
  { id: 3, name: 'Red', color: 'Red', description: 'PowerGods - Egocentric', category: 'tier one' },
  { id: 4, name: 'Blue', color: 'Blue', description: 'TruthForce - Absolutistic', category: 'tier one' },
  { id: 5, name: 'Orange', color: 'Orange', description: 'StriveDrive - Multiplistic', category: 'tier one' },
  { id: 6, name: 'Green', color: 'Green', description: 'HumanBond - Relativistic', category: 'tier one' },
  { id: 7, name: 'Yellow', color: 'Yellow', description: 'FlexFlow - Systemic', category: 'tier two' },
  { id: 8, name: 'Turquoise', color: 'Turquoise', description: 'GlobalView - Holistic', category: 'tier two' },
  { id: 9, name: 'Coral', color: 'Coral', description: 'WholeView - Holonic', category: 'tier two' }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ stages: Stages[] } | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json({ stages: spiralDynamicsStages });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
