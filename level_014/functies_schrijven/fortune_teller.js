const tellFortune = function (numberOfKids, partnerName, location, jobTitle) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    location +
    ", and married to " +
    partnerName +
    " with " +
    numberOfKids +
    " kids.";
  console.log(future);
};

tellFortune(2, "Lina", "Germany", "CEO");
tellFortune(5, "Juan", "El Salvador", "housewife");
tellFortune(3, "the Princess of Monaco", "Monaco", "prince");

