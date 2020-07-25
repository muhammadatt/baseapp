export const ErrorLoggingMixin = {
  methods: {
    //abstract this to general error logging while in dev environment

    logErrors(snack) {
      if (snack.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(snack.response.data);
        console.log(snack.response.status); //e.g. 401
        console.log(snack.response.headers);
      } else if (snack.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(snack.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", snack.message);
      }
      console.log(snack.config);
    }
  }
};
