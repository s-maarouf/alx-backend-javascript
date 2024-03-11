export default function getListStudents() {
  const ids = [1, 2, 5];
  const names = ['Guillaume', 'James', 'Serena'];
  const locs = ['San Francisco', 'Columbia', 'San Francisco'];
  return [
    { id: ids[0], firstName: names[0], location: locs[0] },
    { id: ids[1], firstName: names[1], location: locs[1] },
    { id: ids[2], firstName: names[2], location: locs[2] },
  ];
}
