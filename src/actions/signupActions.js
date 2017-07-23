import axios from 'axios';

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('http://localhost:3001/api/users', userData)
            // .catch(function(err){
            //     console.log('error in axios');
            //     //return enhanceError(error, config, code, request, response);
            //     console.log(err.response);
            // })
        ;
    }
}