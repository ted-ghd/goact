import axios from 'axios';

export function insertPhone(data){
    return axios({
        method: 'post',
        url: 'http://localhost:8080/phone/insert',
        data : data
    });
}

export function listPhone() {
    return axios({
        method: 'get',
        url: 'http://localhost:8080/phone/list'
    })
}

export function deletePhone(data) {
    return axios({
        method: 'post',
        url: 'http://localhost:8080/phone/delete',
        data : data
    })
}