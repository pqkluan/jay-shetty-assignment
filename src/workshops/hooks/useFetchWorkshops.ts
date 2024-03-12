import { Dimensions } from 'react-native';
import { Workshop } from '../types/Workshop';
import { GOLDEN_RATIO } from '../constants';

const uniqueWorkshopData: Pick<Workshop, 'title' | 'tags' | 'duration'>[] = [
  {
    title: '129: Perspective & Empathy: Developing Perspective',
    tags: ['PERSONAL', 'RELATIONSHIPS'],
    duration: '42:34',
  },
  {
    title: '118: Work from home special',
    tags: ['WORK', 'HEALTH'],
    duration: '29:00',
  },
  {
    title: '98: Procrastination: Finding the Root',
    tags: ['PERSONAL'],
    duration: '42:10',
  },
  {
    title: '95: Relationship Dynamics: Healthy Conflict Resolution',
    tags: ['RELATIONSHIPS'],
    duration: '41:20',
  },
  {
    title: '81: Spirituality: Mindfulness & Meditation Benefits',
    tags: ['SPIRITUALITY', 'PERSONAL'],
    duration: '38:03',
  },
  {
    title: '78: Physical Health: 5 Healthy Habits For A Long Life',
    tags: ['HEALTH', 'PERSONAL'],
    duration: '37:45',
  },
  {
    title: '71: Stress & Anxiety: Create Your Happy Place',
    tags: ['PERSONAL', 'HEALTH'],
    duration: '44:50',
  },
  {
    title: '65: On The Money: Audit Your Money Habits',
    tags: ['WORK & FINANCE'],
    duration: '34:54',
  },
  {
    title: '44: Dealing with Loss: Ways of Dealing With Loss',
    tags: ['PERSONAL', 'SPIRITUALITY'],
    duration: '34:31',
  },
  {
    title: '18: How to Develop Confidence: Mind',
    tags: ['PERSONAL'],
    duration: '39:19',
  },
];

export const useFetchWorkshops = (): {
  workshops: Workshop[];
  loading: boolean;
  error?: string;
} => {
  const { width } = Dimensions.get('window');
  const desiredThumbnailWidth = Math.round(width - 32);
  const desiredThumbnailHeight = Math.round(desiredThumbnailWidth / GOLDEN_RATIO);

  const workshops: Workshop[] = uniqueWorkshopData.map((workshop, index) => ({
    ...workshop,
    workshopId: String(index),
    thumbnail: getSampleImage(desiredThumbnailWidth, desiredThumbnailHeight),
  }));

  return {
    workshops,
    loading: false,
  };
};

let seed = 1;
const getSampleImage = (width: number, height: number): string => {
  return `https://picsum.photos/seed/${seed++}/${width}/${height}`;
};
