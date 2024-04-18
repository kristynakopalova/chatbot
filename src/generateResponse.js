const answers = [
  'I have no idea what you are talking about.',
  'That is great!',
  'I am so sorry.',
  'Tomorrow will be better.',
  'Just keep moving.',
];

export function generateResponse() {
  const index = Math.floor(Math.random() * answers.length);
  return answers[index];
}
