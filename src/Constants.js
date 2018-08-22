class Constants {
    static environments = {
        dev: "DEVELOPMENT",
        staging: "STAGING",
        prod: "PRODUCTION",
        test: "TESTING"
    };

    static apiEndpoints = {
      messages: {
          index: Constants.getApiUrl() + "api/v1/messages",
          send_message: Constants.getApiUrl() + "api/v1/messages/sms-outgoing"
      }
    };

    static environment() {
        return process.env.REACT_APP_ENVIRONMENT;
    };

    static getApiUrl() {
        return "https://textiodev.ngrok.io/";
        const env = process.env.REACT_APP_ENVIRONMENT;
        console.log(env);
        let url = "";
        switch(env){
            case Constants.environments.dev:
                url = "https://textiodev.ngrok.io/";
                break;
            case Constants.environments.test:
                break;
            case Constants.environments.staging:
                url = "https://textio-api-staging.herokuapp.com/";
                break;
            case Constants.environments.prod:
                break;
        }
        console.log(url);
        return url;
    };
}

export default Constants
