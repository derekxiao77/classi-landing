import mixpanel from "mixpanel-browser";

if (process.env.NODE_ENV === "production") {
  mixpanel.init("d44fdd78001659f671a05a013fcfc367");
} else {
  mixpanel.init("217e012b200d5e6ce2a7b2c60cd555d4");
}

let actions = {
  pageView: (props) => {
    mixpanel.track("pageView", props);
  },
  emailSubmitted: (props) => {
    mixpanel.track("emailSubmited", props);
  },

  clickFriends: (props) => {
    mixpanel.track("clickFriends", { section: "student", ...props });
  },
  clickFree: (props) => {
    mixpanel.track("clickFree", { section: "student", ...props });
  },
  clickGoals: (props) => {
    mixpanel.track("clickGoals", { section: "student", ...props });
  },
  clickEarn: (props) => {
    mixpanel.track("clickEarn", { section: "instructor", ...props });
  },
  clickBrand: (props) => {
    mixpanel.track("clickBrand", { section: "instructor", ...props });
  },
  clickTeach: (props) => {
    mixpanel.track("clickTeach", { section: "instructor", ...props });
  },
};

export let Mixpanel = actions;
