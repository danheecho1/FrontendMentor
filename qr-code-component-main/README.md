# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Built with

- HTML
- CSS

## What I learned

- For centering items, using 'display: table' and 'display: table-cell' is also  one of the preferred options. I used flexbox with 'justify-content: center' and 'align-items: center'. I am still not sure if 'table' and 'table-cell' is better than flexbox. 

- In terms of heights and vertical alignment, flexbox does not seem to be the way to go. When the viewport height is small, the top of the content is above the viewport, and I do not have the option to scroll up. Having a set height and top margin/padding will display content and cut off the bottom excess portion of the content, but I can still scroll to see the rest of the content. 

- Moving forward, I will consider giving semantic tags class attributes. While semantic tags are somewhat self-defined, I think giving them class/id attributes can help with writing more descriptive/undestandable codes (especially when looking at HTML and CSS together). 