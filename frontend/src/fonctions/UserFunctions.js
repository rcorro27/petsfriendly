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
            console.log(localStorage.getItem('usertoken'))

            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const register = newUser => {
    return axios
        .post('https://pets-friendly.herokuapp.com/utilisateurs/creation', {
            utilisateur: {
                id_role: newUser.id_role,
                nom: newUser.nom,
                prenom: newUser.prenom,
                age: newUser.age,
                email: newUser.email,
                mot_de_passe: newUser.mot_de_passe,
                sexe: newUser.sexe,
                telephone: newUser.telephone
            },
            adresse: {
                numero_rue: newUser.numero_rue,
                nom_rue: newUser.nom_rue,
                code_postal: newUser.code_postal,
                ville: newUser.ville,
                province: newUser.province,
                pays: newUser.pays,
                numero_appt: newUser.numero_appt
            }

        })
        .then(response => {
            console.log('Registered', response)
        })
}
