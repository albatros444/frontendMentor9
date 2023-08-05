let accordItems = document.getElementsByClassName("accordion_item_question");

let previousSection;
let previousSectionParent;

for (let accItem of accordItems) {
  accItem.addEventListener("click", () => {
    let answerSection = accItem.nextElementSibling;
    if (!previousSection) {
      ////first
      answerSection.classList.add("working");
      previousSection = answerSection;
      previousSectionParent = accItem;
    } else {
      //////////////////////////////
      if (!answerSection.classList.contains("working")) {
        answerSection.classList.add("working");
        previousSection.classList.remove("working");
        previousSectionParent.classList.remove("open");
        previousSection.style.maxHeight = null;
        previousSection = answerSection;
        previousSectionParent = accItem;
      }
    }
    if (answerSection.style.maxHeight) {
      answerSection.style.maxHeight = null;
      accItem.classList.remove("open");
    } else {
      answerSection.style.maxHeight = answerSection.scrollHeight + "px";
      accItem.classList.add("open");
    }
  });
}
