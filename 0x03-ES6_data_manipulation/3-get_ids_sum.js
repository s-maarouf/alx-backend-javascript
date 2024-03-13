export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((prev, curr) => prev.id || prev + curr.id, 0);
  }
  return 0;
}
