import axios from 'axios';
console.log(axios.defaults);

const ERR_OK = 0;

export default function get(url){
    return function(params){
        return axios.get(url , {params}).then(res=>{
            console.log(res);
            res = res.data;
            if(res.error == ERR_OK){
                return res.data;
            }
        })
    }
} 