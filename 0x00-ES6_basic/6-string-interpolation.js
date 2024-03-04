export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the highest-income county in the United States, \
  with a per capita personal income of $${budget.capita}. It was the fifth-most \
  affluent county in the United States by per capita income, and has the highest \
  concentration of million-dollar homes in the United States.`;
}
