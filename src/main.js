//  console.log('Hello World');
//  console.error('This is an error');
//  console.warn('This is a warning');

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {   id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {   id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }    
];

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}


// forEach, map, filter

