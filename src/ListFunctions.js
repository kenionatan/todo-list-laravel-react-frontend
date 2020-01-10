import axios from 'axios';

export const getList = () => {
    return axios
    .get('api/tasks', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data
    })
}

export const addItem = title => {
    return axios
        .post('/api/task',
            {
                title: title
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(res => {
            console.log(res)
        })
}
