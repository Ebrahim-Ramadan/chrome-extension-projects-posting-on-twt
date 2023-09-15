function isUserTyping() {
    const inputFields = document.querySelectorAll("div[data-testid='tweetTextarea_0'], [data-text='true']");
    for (const field of inputFields) {
      if (field === document.activeElement) {
        return field; // Return the focused input field or textarea
      }
    }
    return null; // No input field or textarea is focused
  }
  
  // Function to get the position (coordinates) of an element on the page
  function getPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      bottom: rect.bottom + window.scrollY,
      right: rect.right + window.scrollX
    };
  }
  
  // Event listener to track keyboard events
  document.addEventListener("keydown", function (event) {
      const focusedElement = isUserTyping();
      

      if (focusedElement != null) {
        focusedElement.textContent  = "Default textContent  \n"; 
        // focusedElement.setAttribute("contenteditable", "false");
        // focusedElement.removeAttribute("readonly");

    }  
else {
      console.log(`User is typing in no input field.`);
    }
  
  });
  
  // Event listener to track focus changes
  document.addEventListener("focusin", function (event) {
      const focusedElement = isUserTyping();

      if (focusedElement != null) {
          focusedElement.textContent  = "Default textContent  \n";
          // focusedElement.removeAttribute("readonly");
        // focusedElement.setAttribute("contenteditable", "false");
      }  
else {
        console.log(`User is typing in no input field.`);
      }
    
  });
  