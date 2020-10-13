const setUser = (userData) => {
    return {
        type: "SET_USER",
        payload: userData
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export default {
    setUser,
    logOut
}