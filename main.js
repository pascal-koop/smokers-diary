window.addEventListener("DOMContentLoaded", event => {
  let buttons = document.querySelectorAll("#accordion  button");
  buttons.forEach(button => {
    let content = button.nextElementSibling;
    button.addEventListener("click", event => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.setAttribute("aria-expanded", false);
        content.style.maxHeight = null;
        content.setAttribute("aria-hidden", true);
      } else {
        button.classList.add("active");
        button.setAttribute("aria-expanded", true);
        content.style.maxHeight = content.scrollHeight + "px";
        content.setAttribute("aria-hidden", false);
      }
    });
  });
});

// When all the DOM content is loaded...

//   Collect all the buttons that are child elements of the element
//   with the id #accordion...

//   Loop through each of these buttons...
//      Grab the button's sibling element and save it in a variable
//      called content AND

//      Add an event listener to each button, so that when the
//      button is clicked...

//        If the button has the class active...
//            Remove "active" from its class list AND

//            Set its aria-expanded attribute to false AND

//            Set the content variable's max-height value to null AND

//            Set the content variable's aria-hidden attribute to true.

//        Otherwise, if the button doesn't have the class active...
//             Add "active" to its class list AND

//            Set its aria-expanded attribute to true AND

//            Set the content variable's max-height value even
//            to the value of the content variable's scroll height
//            (the height of an element's content) AND

//            Set the content variable's aria-hidden attribute to false.
