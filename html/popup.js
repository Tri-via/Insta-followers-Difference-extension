const followersURL = "";
var followers = [];
var followings = [];
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("captureFollowers")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: captureFollowers,
        });
      });
    });

  // document
  //   .getElementById("captureFollowings")
  //   .addEventListener("click", function () {
  //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //       chrome.scripting.executeScript({
  //         target: { tabId: tabs[0].id },
  //         function: captureFollowings,
  //       });
  //     });
  //   });

  // let textBoxValue = document.getElementById("differenceList").innerHTML;
  // chrome.storage.sync.set({ textBoxValue });

  document
    .getElementById("updateDifference")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: updateDifference,
        });
      });
    });
});

function updateDifference() {
  var namesWithMetadata = document.getElementsByClassName(
    "x9f619 xjbqb8w x1rg5ohu x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1"
  );
  var namesWithMetadataArray = Array.from(namesWithMetadata);
  var namesArray = namesWithMetadataArray.map(function (element) {
    if (!followers.includes(element.textContent)) {
      element.style.color = "red";
    }
    return element.textContent;
  });
  //console.log(namesArray);
}

function textContent(element) {
  return element.textContent;
}

function captureFollowings() {
  //console.log(document.getElementById("captureFollowings"));
  var namesWithMetadata = document.getElementsByClassName(
    "x9f619 xjbqb8w x1rg5ohu x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1"
  );
  var namesWithMetadataArray = Array.from(namesWithMetadata);
  var namesArray = namesWithMetadataArray.map(function (element) {
    return element.textContent;
  });

  var association = document.getElementsByClassName(
    "_aacl _aaco _aacw _aad6 _aade"
  );
  var count = 0;
  var associationArray = Array.from(association).map(function (element) {
    if (element.textContent == "Following") {
      count++;
    }
  });
  const finalList = namesArray.slice(0, count);
  //console.log(finalList);
  followings = finalList;
}

function captureFollowers() {
  var namesWithMetadata = document.getElementsByClassName(
    "x9f619 xjbqb8w x1rg5ohu x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1"
  );
  var namesWithMetadataArray = Array.from(namesWithMetadata);
  var namesArray = namesWithMetadataArray.map(function (element) {
    return element.textContent;
  });
  var association = document.getElementsByClassName(
    "x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x18d9i69 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x1lku1pv x1a2a7pz x6s0dn4 xjyslct x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1ejq31n xd10rxx x1sy0etr x17r0tee x9f619 x1ypdohk x78zum5 x1i0vuye xwhw2v2 x10w6t97 xl56j7k x17ydfre x1f6kntn x1swvt13 x1pi30zi x2b8uid xlyipyv x87ps6o x14atkfc x1n2onr6 x1d5wrs8 x1gjpkn9 x175jnsf xsz8vos"
  );
  var count = 0;
  var associationArray = Array.from(association).map(function (element) {
    if (element.textContent == "Remove") {
      count++;
    }
  });
  const finalList = namesArray.slice(0, count);
  //console.log(finalList);
  followers = finalList;
}

async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  //console.log(data);
  return data;
}
