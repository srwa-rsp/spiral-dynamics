import type { NextApiRequest, NextApiResponse } from 'next';
import { Stages } from '@/pages/types/stages'; // Adjust the import path as necessary

const spiralDynamicsStages: Stages[] = [
  { id: 1, name: 'Beige', color: '#F5F5DC', description: 'SurvivalSense - Instinctive', category: 'tier one' },
  { id: 2, name: 'Purple', color: '#800080', description: 'KinSpirits - Animistic', category: 'tier one' },
  { id: 3, name: 'Red', color: '#FF0000', description: 'PowerGods - Egocentric', category: 'tier one' },
  { id: 4, name: 'Blue', color: '#0000FF', description: 'TruthForce - Absolutistic', category: 'tier one' },
  { id: 5, name: 'Orange', color: '#FFA500', description: 'StriveDrive - Multiplistic', category: 'tier one' },
  { id: 6, name: 'Green', color: '#008000', description: 'HumanBond - Relativistic', category: 'tier one' },
  { id: 7, name: 'Yellow', color: '#FFFF00', description: 'FlexFlow - Systemic', category: 'tier two' },
  { id: 8, name: 'Turquoise', color: '#40E0D0', description: 'GlobalView - Holistic', category: 'tier two' },
  { id: 9, name: 'Coral', color: '#FF7F50', description: 'WholeView - Holonic', category: 'tier two' }
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
