# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## Built with

- HTML
- CSS
- JS (vanilla)

## What I learned

- When there are multiple radio inputs for multiple questions/prompts, 'name' attribute is used to group the inputs by questions. This way, only one selection will be made per question among many radio inputs. 
- When a radio input has an 'id' attribute and its corresponding label has a matching 'for' attribute, the input and label tags become related (?). Once they are related, you can click on the label to indicate your selection. This allows you to hide the actual input tag (which cannot be styled as much) and display the label that is styled like a clickable selection. 
```html
<input type="radio" name="rating" id="one"><label for="one">1</label>
```
- Another way to create this behavior is to wrap the input element inside the label element. 
```html
<label for="one"><input type="radio" name="rating" id="one"> 1</label>
```
- I tried using 'getElementsByClassName' method for my JS file because I used classes, not ids, for CSS. This method returns 'HTMLCollection', which is like an array. I needed to use either 'getElementById' or 'querySelector' to select the specific element and change its style. If I really wanted to use 'getElementsByClassName', I should have added '[0]' or whichever appropriate index to specify element that I wanted to select (among many other elements that share the same class name). 