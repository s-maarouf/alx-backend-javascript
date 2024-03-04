export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      const departments = Object.values(report.allEmployees);
      const employees = departments.reduce((acc, item) => acc.concat(item), []);
      return {
        next() {
          const done = i >= employees.length;
          const value = !done ? employees[i] : undefined;
          i += 1;
          return {
            value,
            done,
          };
        },
      };
    },
  };
}
