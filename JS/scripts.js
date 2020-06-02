const orgString = prompt("Enter a Sentence");

console.log(orgString);

const newString1 = function(orgString) {
  return orgString.charAt(0).toUpperCase() + orgString.charAt(orgString.length-1).toUpperCase();
};

const newString2 = function(newString1) {
  return newString1(orgString).charAt(1) + newString1(orgString).charAt(0);
};

const newString3 = function(orgString, newString2) {
  return orgString + newString2;
};

const newString4 = function(orgString, newString3) {
  return orgString.charAt(Math.floor(orgString.length/2)) + newString3;
};

jQuery(document).ready(function(){
  jQuery(".img1").click(function() {
    alert(orgString);
  });

  jQuery(".img2").click(function() {
    alert(newString4(orgString, newString3(orgString, newString2(newString1))));
  });
});




