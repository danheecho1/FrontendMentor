# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## Built with

- HTML with semantic tags
- CSS

### What I learned

- hsl can take in an additional input for alpha representing opacity. 
- 'position: absolute' needs to be confined within an ancestor element that is positioned (relative, absolute, fixed, or sticky). To maintain original placement of elements, 'position: relative' is usually used. 
  - Centering images -> position: absolute, top: 50%, left: 50%, transform: translate(-50%, -50%)
- The hover effect for the main image was achieved by creating a separate div with a background color (cyan @ 60% opacity) and the view image at the center. This div normally has opacity of 0, but 1 when hovered. On hover (when the opacity of the div is changed to 1), we see the div as well as the original image due to the div's background color having 60% opacity. 
- Provided designs seem to have the content centered horizontally and **vertically**. I would use flexbox to strictly follow the designs provided so that the content is centered vertically too, but that doesn't sound practical. In real life, content starts at the top of viewport. Moving forward, I will ignore vertical centering and simply add padding between the top of viewport and the main content. 