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
            destroy: process.env.REACT_APP_API_URL + "api/v1/messages/"
        },
        conversations: {
            index: process.env.REACT_APP_API_URL + 'api/v1/conversations',
            create: process.env.REACT_APP_API_URL + 'api/v1/conversations',
            show: process.env.REACT_APP_API_URL + 'api/v1/conversations/',
            update: process.env.REACT_APP_API_URL + 'api/v1/conversations/',
            destroy: process.env.REACT_APP_API_URL + 'api/v1/conversations/'
        }
    };
}

export default Constants
