// Single source of truth for contact details, prices and integrations.
export const site = {
  name: 'Spanish with María',
  url: 'https://spanishwithmaria.co.uk',
  teacher: 'María Mercedes Egusquiza Perea',
  email: 'hola@spanishwithmaria.co.uk',
  phone: '+44 7522 534677',
  whatsapp: 'https://wa.me/447522534677',
  calLink: 'spanishwithmaria/free-trial',
  calUrl: 'https://cal.com/spanishwithmaria/free-trial',
  // Web3Forms keys are public by design (they only allow sending to the registered inbox).
  web3formsKey: '6d3b7e52-8b73-40a3-9072-c832bbe6c66c',
  area: 'West London',
};

export const services = [
  {
    slug: 'online-spanish-lessons',
    title: 'Online Spanish lessons',
    short: 'One-to-one video lessons, from your first words to confident conversation. Grammar, vocabulary and pronunciation at your own pace.',
    price: '£28',
    unit: 'per hour',
    photo: 'online',
  },
  {
    slug: 'spanish-conversation-practice',
    title: 'Conversation practice',
    short: 'An hour a week of real, relaxed Spanish conversation to keep your Spanish alive and grow your confidence.',
    price: '£22',
    unit: 'per 45 minutes',
    photo: 'conversation',
  },
  {
    slug: 'spanish-for-children',
    title: 'Spanish for children',
    short: 'Playful lessons with stories, songs and games, the way María taught the children she looked after for years.',
    price: '£28',
    unit: 'per hour',
    photo: 'children',
  },
  {
    slug: 'in-person-spanish-lessons-london',
    title: 'In-person lessons in London',
    short: 'Lessons at your home or a quiet café in London, for people who learn best face to face.',
    price: '£35',
    unit: 'per hour',
    photo: 'inperson',
  },
  {
    slug: 'spanish-cooking-classes',
    title: 'Cooking in Spanish',
    short: 'Learn Spanish while cooking Peruvian and Italian dishes together, from ceviche to fresh pasta.',
    price: '£40',
    unit: 'per class',
    photo: 'cooking',
  },
];

export const packNote = 'Book 10 lessons and save 10%.';
