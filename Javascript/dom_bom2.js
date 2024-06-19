/**
 *  RUN on browser console
 * 
 * document.body
 * 
 * document.body.childNodes
 * 
 * document.body.childNodes[0]
 * 
 * document.body.childNodes[1].childNodes
 * 
 * let cont= document.body.childNodes[1]
 * 
 * cont
 * 
 * cont.firstChild                                                   -- first child
 * 
 * document.body.firstElementChild                                   -- will ignore blank texts
 * 
 * document.body.childNodes[1].lastElementChild.style.backgroundColor = "aqua";
 * 
 * document.body.childNodes[1].parentElement
 * 
 * document.body.firstElementChild.firstElementChild.nextElementSibling
 * 
 * document.body.firstElementChild.children                          -- element children
 * 
 * 
 * 
 * 
 *                              SELECTORS
 *  document.selectElementById("id_here")
 *  document.selectElementsByClassName("name_here")
 * 
 *  document.querySelector(".box")            --> select first 
 * 
 *  document.querySelectorAll(".box") will return collection of elements wth class box
 *  document.querySelectorAll(".box").forEach(e => {
 *      e.style.color = "green"
 *  })
 *  
 *  document.getElementsByTagName("tag_name") returns a collection
 * 
 *  matches(css selector)
 * 
 *  closest(css selector)
 *  
 *  contains(css selector)
 * 
 * 
 *  .innerText ---> text content of element
 * 
 *  .outerHTML / innerHTML
 * 
 *  .tagName --> only tags
 * 
 *  .nadeName -->  any node-- text, tag or comment
 * 
 *  .textContent --> only text, No tags
 * 
 *  .hidden   --> check and set hidden
 * 
 *  
 *  ////////////// Attributes Method
 * 
 *  .attributes
 *  .hasAttribute("style") 
 *  .getAttribute("style")
 *  .setAttributes(name, val)
 *  .removeAttributes(name)
 *  
 *  ************* FUN Hacks
 *  document.designMode = "on"              // set this in browser & change content of some page
 * 
 * 
 *  We can create our own data attributes 
 *  <p id="some" data-createdby="me" > 
 *  To access - .dataset 
 *  
 * 
 *  .append()  --> add element at end
 *  .before() --> before selected attr
 *  
 *  .insertAdjacentHTML(1 out of 4 args, html/element)  
 *   
 *  
 *  .className -> give all classnames
 * 
 *  .classList.add("xyz") --> adds a class for element
 *  .classList.remove("xyz") --> adds a class for element
 *  .classList.toggle("xyz") --> adds/removes (like on off) a class for element
 *  
 *   
 * 
*/  


