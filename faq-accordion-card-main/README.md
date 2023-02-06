# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

## Built with

- HTML
- CSS
- Plain JS

## What I learned

- Readability and scalability of my JS code was improved by separating variable declarations, funtion, and iterator (loop). This is similar to the idea of encapsulation from OOP. Initially, I had all my variable declarations and the function logics within one loop that iterated over each question/answer pair. Until I get used to doing so, I think I should spend some time designing or planning how my code would be written before actually writing code. 
- Through some research, I learned that 'document.querySelectorAll' is generally preferred over 'document.getElementsByClassName' (provided that both can accomplish the same task) for a few reasons. 'getElementsByClassName' returns an **HTMLCollection object** that updates automatically as the elements on the page change. Whenever this object is accessed, the DOM is searched again. 'querySelectorAll' returns a **static** NodeList that does not change as the elements on the page change. DOM will be searched only once at the beginning and cached. When dealing with big amounts of data, the difference should be noticeable.. 
- Once DOM element is created, 'classList' attribute can be used to return a collection of the class attributes. For this project, I'm using remove and toggle methods. 
- When prepping/planning prior to writing HTML/CSS, reviewing both mobile and desktop view is **very** important.. Looking at the mobile view design, I decided to leave the image div out of the main element and have both overlap. If I had reviewed the desktop view as well prior to coding, I would have known that the image div should have been included in the main element. 