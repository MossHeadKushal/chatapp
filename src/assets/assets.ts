import reactsvg from './react.svg';
import multiplai from './multiplai.jpg';
import luffy from './luffy.jpg';
import zoro from './zoro.jpg';
import setting from './setting.png';
import search from './search.png';
import add from './add.png';
import type { Message } from '../library/util';

const assets = {
  reactsvg,
  multiplai,
  luffy,
  zoro,
  setting,
  search,
  add,
};

export const chatDummyData:Omit<Message,'createdAt'>[] = [
  { id: 1, text: 'What is React?', sender: 'user' },
  { id: 2, text: 'React is a JavaScript library.', sender: 'bot' },

  {
    id: 3,
    text: 'jdbaksdgaskdgaksgdaksdksagdkajsgdksadgkasdggasdgaskdkasdgkasgdkadgjasgdaksdgkaskgksagdkasddsadgsakgdkasgdksadaskjdgksadgsakdgskkgdasdbsbajdbsadjasdjhjsdhjshdjsdhs',
    sender: 'user',
  },
  {
    id: 4,
    text: 'leomeasdbgajsdgajsdgasdaksdgakskaskaskdkkaskdkasdjasaskdkdkhadskhaskhdaksadhasdhakshkashkasdhkashkashkdhkhadkshkashksahkdhksahkshkadskhhkhksahkasdhkakshks',
    sender: 'bot',
  },

  { id: 5, text: 'What is your name?', sender: 'user' },
  { id: 6, text: 'Hi my name is BotAi', sender: 'bot' },

  { id: 7, text: 'hello', sender: 'user' },
  { id: 8, text: 'hello my frined', sender: 'bot' },
];

export default assets;
