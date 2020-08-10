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
export const register = newUser => {
    return axios
        .post('users/register', {
            id_role: newUser.id_role,
            nom: newUser.nom,
            prenom: newUser.prenom,
            age: newUser.age,
            email: newUser.email,
            mot_de_passe: newUser.mot_de_passe,
            sexe: newUser.sexe,
            telephone: newUser.telephone

        })
        .then(response => {
            console.log('Registered')
        })
}
