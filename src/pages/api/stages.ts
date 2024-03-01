import type { NextApiRequest, NextApiResponse } from 'next';
import { Stages } from '@/pages/types/stages'; // Adjust the import path as necessary

const spiralDynamicsStages: Stages[] = [
  { id: 1, name: 'Beige', color: 'Beige', description: 'SurvivalSense - Instinctive' },
  { id: 2, name: 'Purple', color: 'Purple', description: 'KinSpirits - Clannish' },
  { id: 3, name: 'Red', color: 'Red', description: 'PowerGods - Egocentric' },
  { id: 4, name: 'Blue', color: 'Blue', description: 'TruthForce - Absolutistic' },
];

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
