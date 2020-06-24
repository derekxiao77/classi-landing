import ReactPixel from "react-facebook-pixel";

if (process.env.NODE_ENV === "production") {
  ReactPixel.init("287733175935941");
} else {
  ReactPixel.init("2320268361602787");
}

let actions = {
  pageView: () => {
    ReactPixel.pageView();
  },
  trackEvent: (event) => {
    ReactPixel.trackCustom(event);
  },
};

export let FbPixel = actions;
