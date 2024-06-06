# Revisiting Web Dev from Scratch - 2024


## Read to understand - Good end user experience
```
SEO: Search Engine Optimizations

Web Core Vitals: Features search engines checks to rank better sites
```

| Concept   | Source  | 
|-----------|---------|
|   CLS     |  https://web.dev/articles/cls       |
|   LCP     |  https://web.dev/articles/lcp       |
|   FID     |  https://web.dev/articles/fid       |
|   Title   |    Change appropriate Title for every page     |
|  meta description tag     | Description in meta tag. Desc that is displayed on search engines.        |
|  Lighthouse         |     Inspect > Lighthouse > generate your report.    |
|           |         |


## Block and Inline Elements
```
Block Elements (Most Commonly Used First)

<div>: A generic container for flow content.
<p>: Paragraph.
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Headings.
<ul>: Unordered list.
<ol>: Ordered list.
<li>: List item.
<form>: A section containing form controls.
<table>: Table.
<section>: A standalone section of a document.
<header>: A container for introductory content or a set of navigational links.
<footer>: Footer of a section or page.
<nav>: A section of a page that contains navigation links.
<article>: A self-contained composition in a document.
<aside>: A section of a page that contains information indirectly related to the main content.
<main>: The main content of a document.
<fieldset>: A set of form controls grouped under a common name.
<blockquote>: A block of text that is a quotation from another source.
<pre>: Preformatted text.
<canvas>: A container used to draw graphics via JavaScript.
<dl>: Description list.
<dt>: Term in a description list.
<dd>: Description in a description list.
<figure>: Any content that is referenced from the main content.
<figcaption>: A caption for a <figure> element.
<address>: Contact information for the author or owner of the document.
<hr>: A thematic break or a horizontal rule.
<tfoot>: Footer of a table.



Inline Elements (Most Commonly Used First)
<a>: Anchor or hyperlink.
<img>: Image.
<span>: Generic inline container.
<input>: Input field.
<label>: Label for a form element.
<strong>: Strong emphasis.
<em>: Emphasized text.
<br>: Line break.
<code>: Code snippet.
<b>: Bold text.
<i>: Italic text.
<u>: Underlined text.
<small>: Smaller text.
<sub>: Subscript.
<sup>: Superscript.
<mark>: Marked or highlighted text.
<q>: Short inline quotation.
<cite>: Citation.
<kbd>: Keyboard input.
<samp>: Sample output.
<var>: Variable in a mathematical expression or programming context.
<time>: Time.
<abbr>: Abbreviation.
<data>: Machine-readable translation of content.
<acronym>: Acronym (Not supported in HTML5).
```


# CSS Specificity
```
Which style will win if we have multiple css on a single element? 

https://www.codewithharry.com/tutorial/css-specificity/  

Very Brief but incomplete ans -> *Important > Inline Style > ID Selector > Class or Attribute Selector > Element Selector > Universal Selector*
```

# CSS Display
```
https://developer.mozilla.org/en-US/docs/Web/CSS/display
```

# CSS Positions

```
1. Static: This is the default position type. Elements with static positioning are positioned according to the normal flow of the document. They ignore the top, bottom, left, and right properties.

2. Relative: Elements with relative positioning are positioned relative to their normal position in the document flow. Using the top, bottom, left, and right properties will move the element relative to its initial position, but it will still occupy the same space in the document flow.

3. Absolute: Elements with absolute positioning are removed from the normal document flow and positioned relative to their closest positioned ancestor. If no ancestor is positioned, they are positioned relative to the initial containing block (usually the viewport). Absolute positioned elements do not affect the position of other elements and can overlap them.

4. Fixed: Elements with fixed positioning are removed from the normal document flow and positioned relative to the viewport. They remain fixed in their specified position even when the page is scrolled.

5. Sticky: Elements with sticky positioning behave like a combination of relative and fixed positioning. They are initially positioned according to the normal flow of the document, but become fixed (like fixed positioning) once they reach a specified scroll position. Once the specified scroll position is passed, they revert to their original position.
```





# CSS Flexbox

Flexbox is a one-dimensional layout model that provides a flexible way to arrange items within a container along a single direction (either horizontally or vertically).

## Key Concepts

- **Container and Items**: Flexbox consists of a flex container (parent) and flex items (children).
- **Main Axis and Cross Axis**: Flex items are laid out along the main axis and cross axis of the flex container.
- **Flex Direction**: Determines the main axis direction (`row`, `column`, `row-reverse`, `column-reverse`).
- **Justify Content**: Aligns flex items along the main axis (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`).
- **Align Items**: Aligns flex items along the cross axis (`flex-start`, `flex-end`, `center`, `baseline`, `stretch`).
- **Flex Wrap**: Controls whether flex items wrap onto multiple lines (`nowrap`, `wrap`, `wrap-reverse`).
- **Flex**: A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` properties.
- **Align Self**: Allows individual flex items to override the alignment set by the container.
- **Responsive Layouts**: Flexbox is suitable for building responsive layouts.

## Usage

```css
.container {
  display: flex; /* Establishes flex container */
  flex-direction: row; /* Main axis direction */
  justify-content: center; /* Aligns items along the main axis */
  align-items: center; /* Aligns items along the cross axis */
  flex-wrap: wrap; /* Controls item wrapping */
}

.item {
  flex: 1; /* Flex shorthand */
  align-self: flex-start; /* Overrides alignment */
}
```


# CSS Grids

CSS Grid Layout is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns.

## Key Concepts

- **Grid Container and Grid Items**: The grid container is the parent element, and grid items are its children.
- **Grid Lines**: The horizontal and vertical lines that separate the rows and columns of the grid.
- **Grid Tracks**: The space between two adjacent grid lines, creating rows and columns.
- **Grid Areas**: Defined regions of the grid layout, where multiple grid cells are grouped together.
- **Grid Lines Numbering**: Grid lines are numbered starting from 1.
- **Grid Template Rows and Columns**: Define the size of grid tracks using values like `auto`, `1fr`, `100px`, etc.
- **Grid Gap**: The space between grid items, defined using `grid-column-gap` and `grid-row-gap`, or `grid-gap`.
- **Grid Line Names**: Custom names for grid lines can be assigned using `grid-template-rows` and `grid-template-columns`.
- **Grid Auto Placement**: Determines how grid items are placed inside the grid when not explicitly positioned.
- **Grid Lines Spanning**: Allows grid items to span across multiple rows or columns using `grid-row` and `grid-column` properties.
- **Responsive Grids**: Grid layouts can adapt to different screen sizes and devices using media queries.

## Usage

```css
.container {
  display: grid; /* Establishes grid container */
  grid-template-columns: 100px 1fr 100px; /* Defines column tracks */
  grid-template-rows: auto 100px auto; /* Defines row tracks */
  grid-gap: 10px; /* Defines gap between grid items */
}

.item {
  grid-column: span 2; /* Spans two columns */
  grid-row: 1 / 3; /* Occupies rows 1 to 3 */
}
```