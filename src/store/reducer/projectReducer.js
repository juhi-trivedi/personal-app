// import { state } from "fs";

const initState = {
    projects: [
        { id: '1', title: 'This is My First Blog', content: 'These is your very first content' },
        { id: '2', title: 'Where can I read good blogs? ', content: 'These is your very first content' },
        { id: '3', title: 'Hello world', content: 'These is your very first content' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer