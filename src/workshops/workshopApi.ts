import { Dimensions } from 'react-native';

import { GOLDEN_RATIO } from '../shared/constants';

import { Workshop, WorkshopDetails } from './types/Workshop';

export const workShopApi = {
  fetchWorkshop: async (params: { workshopId: string }): Promise<WorkshopDetails | undefined> => {
    const { workshopId } = params;
    return { ...mockWorkshops[Number(workshopId)], content: mockContent };
  },
  fetchWorkshops: async (params: { page: number; pageSize: number }): Promise<Workshop[]> => {
    await simulateNetworkDelay();

    const { page, pageSize } = params;
    return mockWorkshops.slice((page - 1) * pageSize, page * pageSize);
  },
};

const simulateNetworkDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));

const { width } = Dimensions.get('window');
const desiredThumbnailWidth = Math.round(width - 32);
const desiredThumbnailHeight = Math.round(desiredThumbnailWidth / GOLDEN_RATIO);
let seed = 1;
const getSampleImage = (w: number, h: number): string => {
  return `https://picsum.photos/seed/${seed++}/${w}/${h}`;
};

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

const mockWorkshops: Workshop[] = uniqueWorkshopData.map((workshop, index) => ({
  ...workshop,
  workshopId: String(index),
  thumbnail: getSampleImage(desiredThumbnailWidth, desiredThumbnailHeight),
}));

const mockContent: WorkshopDetails['content'] = [
  {
    id: 'section-1',
    title: 'What is Lorem Ipsum?',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 'section-2',
    title: 'Where does it come from?',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  },
];
