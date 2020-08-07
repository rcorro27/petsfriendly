import axios from 'axios'

export const login = user => {
    return axios
        .post('https://pets-friendly.herokuapp.com/utilisateurs/connexion', {
            email: user.userName,
            mot_de_passe: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', JSON.stringify(response.data))
            // console.log(response.data)
            return response.data
            // console.log(localStorage.getItem('usertoken'))
        })
        .catch(err => {
            console.log(err)
        })
}
