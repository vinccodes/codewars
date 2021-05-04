/* You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

    < firstName here >, < country here > of the first Python developer who has signed up; or
    There will be no Python developers if no Python developer has signed up.

For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

your function should return Victoria, Puerto Rico.
*/


const list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Java' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];
  
  function getFirstPython(list) {
  
    // filter all people with Python as their language into new array
    const result = list.filter(item => item.language == 'Python');
  
    // check if there are people in the array, return the first person if array is not empty
    if (result.length > 0) {
        let signedUp = `${result[0].firstName}, ${result[0].country}`;
        return signedUp
    }
    else {
        return 'There will be no Python developers';
    }
}
  
  // Testing
  //getFirstPython(list1);