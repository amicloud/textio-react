class Constants {
    static environments = {
        dev: "DEVELOPMENT",
        staging: "STAGING",
        prod: "PRODUCTION",
        test: "TESTING"
    };


    static apiEndpoints = {
      messages: {
          index: Constants.getApiUrl() + "api/v1/messages/index.json",
          send_message: Constants.getApiUrl() + "api/v1/messages/send_message"
      }
    };

    static environment() {
        return process.env.REACT_APP_ENVIRONMENT;
    };

    static getApiUrl() {
        const env = process.env.REACT_APP_ENVIRONMENT;
        console.log(env);
        let url = "";
        switch(env){
            case Constants.environments.dev:
                url = "http://localhost:3001/";
                break;
            case Constants.environments.test:
                break;
            case Constants.environments.staging:
                url = "http://textio-api-staging.herokuapp.com/";
                break;
            case Constants.environments.prod:
                break;
        }
        return url;
    };
}

export default Constants
