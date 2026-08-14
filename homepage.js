// Following options represent the defaults
const options = {
   // Whether or not the true cursor should be hidden when the custom cursor is initialized
   hideTrueCursor: false,

   // Array of DOM elements/selector strings that add interactions on hover
   focusElements: ['a', 'button'],

   // Class applied when the true cursor is hovering over a focusElement
   focusClass: 'cursor--focused',
}

// Can be selector string or DOM node
const element = '.cursor'

const customCursor = new CustomCursor(element, options)