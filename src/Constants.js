class Constants {
    static environments = {
        dev: "DEVELOPMENT",
        prod: "PRODUCTION",
        test: "TESTING"
    };

    static apiEndpoints = {
      messages: {
          index: process.env.REACT_APP_API_URL + "api/v1/messages",
          smsOutgoing: process.env.REACT_APP_API_URL + "api/v1/messages/sms-outgoing",
          delete: process.env.REACT_APP_API_URL + "api/v1/messages/"
      }
    };
}

export default Constants
