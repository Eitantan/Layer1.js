function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
  	if (typeof child != "string") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

function append(node) {
	document.body.appendChild(node)
	return node;
}

function img(src,alt,width=100,height=100) {
	let tag = document.createElement("img")
	tag.src = src
	tag.alt = alt
	tag.width = width
	tag.height = height
	document.body.appendChild(tag)
}

function a(href) {
	let tag = document.createElement("a")
	tag.href = href
	document.body.appendChild(tag)
}

// Not in the tutorial, but still helpful. (VERY HELPFUL)

function btn(text,onclick) {
	let tag = document.createElement("button")
	tag.innerText = text
	tag.addEventListener("click", onclick)
	document.body.appendChild(tag)
}

function title(text) {
	let tag = document.createElement("title")
	tag.innerText = text
	document.head.appendChild(tag)
}

function header(level,text) {
	let tag = document.createElement(`h${level}`)
	tag.innerText = text
	document.body.appendChild(tag)
}

function p(text) {
	let tag = document.createElement("p")
	tag.innerText = text
	document.body.appendChild(tag)
}

function article(html) {
	let tag = document.createElement("article")
	tag.innerHTML = html
	document.body.appendChild(tag)
}

function charset(charset) {
	let tag = document.createElement("meta")
	tag.charset = charset
}

function boilerplate() {
	document.write(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Document</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>`)
}

function html(html) {
	document.body.write(html)
}

function script(src,js=``) {
	let tag = document.createElement("script")
	tag.innerText = js
	tag.src = src
	document.head.appendChild(tag)
}

function marquee(html) {
	let tag = document.createElement("marquee")
	tag.innerHTML = html
	document.body.appendChild(tag)
}

function comment(text) {
	document.write(`<!-- ${text} -->`)
}

function aside(a) {
	document.body.appendChild(document.createElement("aside")).innerHTML = a
}

function base(font,color,size,measure) {
	document.head.appendChild(document.createElement('style')).innerHTML = `* {
		font-family: ${font}, sans-serif;
		color: ${color};
		font-size: ${size}${measure}
	}`;
}

function style(selector,style) {
	document.head.appendChild(document.createElement('style')).innerHTML = `${selector} {
		${style}
	}`;
}

function stylesheet(styles) {
	document.head.appendChild(document.createElement('style')).innerHTML = styles;
}

function script(script) {
	document.head.appendChild(document.createElement('script')).innerHTML = script;
}

function main() {
	document.body.appendChild(document.createElement('main'))
}