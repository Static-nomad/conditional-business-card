import "../style/index.scss";

/**
 *  1) Here are all the variables to be used in the conditions
 */
function render(variables = {}) {
  /**
   *  2) The conditional rendering logic starts here
   */
  // here we ask the logical questions to make decitions on how to build the heml
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let firstname = "Name ";
  if (variables.name) {
    firstname = variables.name;
  }

  let surname = " Surname";
  if (variables.lastname) {
    surname = variables.lastname;
  }
  let twit = "twitter";
  if (variables.twitter) {
    twit = variables.twitter;
  }
  let gitter = "github";
  if (variables.github) {
    gitter = variables.github;
  }
  let link = "linkedin";
  if (variables.linkedin) {
    link = variables.linkedin;
  }
  let insta = "instagram";
  if (variables.instagram) {
    insta = variables.instagram;
  }
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />

          <h1>${firstname} ${surname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city},${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${twit}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${gitter}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${link}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${insta}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}
//ignore this lines, here is where we do the logic for the dropdowns
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
