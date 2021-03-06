import axios from "axios";

class API {

    axios;

    constructor() {

        this.axios = axios.create();

    }

    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader( name, value ) {

        if( value )

            this.axios.defaults.headers.common[name] = value;

        else

            delete this.axios.defaults.headers.common[name];

    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * @param {STring} userData.username
     * 
     * @returns {Promise}
     */
    register( userData ) {
      console.log(userData)
        return this.axios.post("/api/user/register", userData);

    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * @param {STring} userData.username
     * 
     * @returns {Promise}
     */
    login( userData ) {

        return this.axios.post("/api/user/login", userData);

    }

    authenticated() {

        return this.axios.post("/api/user/authenticated");

    }

}

export default new API();