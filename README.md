# EasySlider: Simple sliding menu

* Does not require jQuery
* Uses CSS width transitions instead of JavaScript
* Easy to use

## How to Setup

 Include the JavaScript file in your HTML document.
 
```html
 <script src="js/easyslider.min.js"></script>
```
### Setup your HTML.
 
 ```html
	<aside id="sidePanel">
		<div id="sideContent" class="closed">
			<div id="sideContentInner">
				
			</div>
		</div>
		<div id="sideButton" onclick="changeClass()">&#9776;</div>
	</aside>
 ```
 
 You may use any type of tag with the `id="sidePanel"`, but the `<aside>` tag is the most appropriate.
 
 The `<div id="sideContent" class="closed">` is not where the content will actually go, it is the wrapper for the `<div>` that contains the content. This was created to prevent any text inside from being wrapped as the menu was closed.
 
 Any content that you wish to have in your menu should go in `<div id="sideContentInner">`

 To open and close the menu create any tag that you wish that supports the `onclick` attribute. The only requirements are that it have the `id="sideButton"` and `onclick="changeClass()"`, any content within is irrelevant.
 
### Setup your CSS

 ```css
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}			
	#sidePanel{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 300px;
		z-index: 1000;
	}
		#sideContent{
			height: 100vh;
			float: left;
			-webkit-transition: width .5s;
			-moz-transition: width .5s;
			-o-transition: width .5s;
			transition: width .5s;
			background-color: #f06862;
			overflow: hidden;
		}
			#sideContentInner{
				min-width: 250px;
			}
		#sideButton{
			float: left;
			margin: 5px;
			width: 40px;
			height: 30px;
			background-color: #909090;
			line-height: 30px;
			text-align: center;
		}
	.open{
		width: 250px;
		max-width: 250px;
	}
	.closed{
		width: 0px;
	}
 ```
 
 You may change this as much as you like, however please note a few things.
 
* Because the `float` property is being used you must make sure that you have enough with remaining in your `#sidePanel` to accommodate the `#sideButton`
 * `#sidePanel` has a `width` defaulted to `width:300px;` which should total its contents
 * `#sideContent` does not have a set `width` because its width is defined by a class
 * `#sideContentInner` has a `width` defaulted to `width: 250px;`
 * `#sideButton` has a `width` defaulted to `width:40px` and a `margin` defaulted to `margin:5px`
 * `250px` + `40px` + `5px` + `5px` = `300px` (You add 5 twice because the margin is on both sides)
* If you do not allow for enough room for the `#sideButton` it will not be visible on the screen, because it will not be able to float to the top-left 
* Be sure to use `box-sizing: border-box;` this allows padding to be included in `width` and `height` measurements, so adding a padding will not change the width of your `div`
* Be sure that your `.open` class has a `width` and `max-width` that equals the width of your `#sideContentInner`
* Be sure that your `.closed` class has a `width` of `width: 0px;`
 * Do not add a `max-width` property to the `.closed` class, as it will negate the width change transition
 

