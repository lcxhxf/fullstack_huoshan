const inventors = [
    { frist: 'Alert', last: 'Einstein', year: 1879 },
    { frist: 'Isaac', last: 'Newton', year: 1643 },
    { frist: 'Galileo', last: 'Galilei', year: 1564},
    { frist: 'Marie', last: 'Curie', year: 1867},
    { frist: 'Johannes', last: 'Kapler', year: 1571},
    { frist: 'Nicolaus', last: 'Copernicus', year: 1473},
    { frist: 'Max', last: 'Planck', year: 1858},
  ]

function* listPeople(arr) {
    for (const item of arr) {
        yield item;
    }
}
const people = listPeople(inventors);
console.log(people.next());
console.log(people.next());
console.log(people.next());
console.log(people.next());
console.log(people.next());
console.log(people.next());

