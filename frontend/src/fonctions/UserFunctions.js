// import axios from 'axios'

export const login = user => {
    if (user.userName === 'yahia' && user.password === 'benhaili') {
        localStorage.setItem('usertoken', user)
        return true
    } else { return false }
}
