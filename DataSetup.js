import axios from "axios";

axios
  .post("https://kondwani-project1.herokuapp.com/Appeal", {
    Appeal_slug: "Banger",
    Appeal: 1,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
