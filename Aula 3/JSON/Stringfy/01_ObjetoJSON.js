let Student = {
    name: 'João',
    age: 35,
    isAdin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(Student);
console.log(json);