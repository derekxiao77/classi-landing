import ReactPixel from "react-facebook-pixel";

if (process.env.NODE_ENV === "production") {
  ReactPixel.init("2718731281784340");
} else {
  ReactPixel.init("2718731281784340");
}

let actions = {
  pageView: () => {
    ReactPixel.pageView();
  },
  trackEvent: (event) => {
    ReactPixel.trackCustom(event);
  },
  trackSubmission: () => {
    ReactPixel.track("CompleteRegistration");
  },
};

export let FbPixel = actions;
