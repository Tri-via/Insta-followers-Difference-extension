// // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
// //   if (message.action === "printContent") {
// //     sendResponse({ content: document.documentElement.outerHTML });
// //   }
// // });
// window.onload = function () {
//   var usernameHTML = document.getElementsByClassName(
//     "x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye x1ms8i2q xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj"
//   );
//   console.log(usernameHTML.length);
//   var username = usernameHTML[0].textContent;
//   console.log(username);

//   var followersURL = "https://www.instagram.com/" + username + "/followers/";
//   var followers = [];
//   fetch(followersURL)
//     .then((response) => response.text())
//     .then((htmlContent) => {
//       console.log(htmlContent);
//       const tempElement = document.createElement("div");

//       // Set the innerHTML of the temporary element to the HTML content string
//       tempElement.innerHTML = htmlContent;

//       // Retrieve the created element
//       const htmlElement = tempElement.firstChild;

//       // Now, you can use the htmlElement as an HTML element in your JavaScript code
//       console.log(htmlElement);

//       // Do something with the HTML content
//       var namesWithMetadata = htmlElement.getElementsByClassName(
//         "x9f619 xjbqb8w x1rg5ohu x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1"
//       );
//       var namesWithMetadataArray = Array.from(namesWithMetadata);
//       var namesArray = namesWithMetadataArray.map(function (element) {
//         return element.textContent;
//       });
//       var association = htmlElement.getElementsByClassName(
//         "x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x18d9i69 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x1lku1pv x1a2a7pz x6s0dn4 xjyslct x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1ejq31n xd10rxx x1sy0etr x17r0tee x9f619 x1ypdohk x78zum5 x1i0vuye xwhw2v2 x10w6t97 xl56j7k x17ydfre x1f6kntn x1swvt13 x1pi30zi x2b8uid xlyipyv x87ps6o x14atkfc x1n2onr6 x1d5wrs8 x1gjpkn9 x175jnsf xsz8vos"
//       );
//       var count = 0;
//       var associationArray = Array.from(association).map(function (element) {
//         if (element.textContent == "Remove") {
//           count++;
//         }
//       });
//       followers = namesArray.slice(0, count);
//       console.log(followers);
//     })
//     .catch((error) => {
//       // Handle any errors
//       console.error("Error:", error);
//     });
// };
