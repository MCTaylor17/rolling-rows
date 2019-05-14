# TODO:

## Content
* 80% the rest of the content
* Separate content into partials
* Combine with MD import changes
* Add sections to index.html
* Add generalized js solution to the page

## Progressive Controls
* Order controls
* Display current row number
* At milestones (Eg Row #100!) unlock new controls

## Interjections
* Popup modals with an explanations of what the user is experiencing.
* Note unlocked features (see progressive controls above)
  * how to use features.
* "Did you notice?"
  * Describe subtleties and nuanced aspects of the code
  * Think learning blocks.
  * Examples:
    * Magical Houdini Background"?
    * React isn't as responsible as you may think.  In many cases, I'm actually passing state into CSS where the final calculations are made.  For example `--tableHeight: calc(var(--numberOfRows) * (var(--rowHeight) + var(gutters)))`
* 

## The Problem
Web browsers calculate page layouts by building dependancy graphs.  Each row in a table is dependant on the row before it.  The browser can only calculate the position of the very last row once all previous rows have been calculated.  In a 10,000 row table, the last row would depend on a chain of 9,999 rows before it.

Furthermore, row heights can't be determined until the content of each cell has been evaluated.  Unless I'm mistaken, that means each row actually depends on `(rows * columns) + (row-N - 1)` elements for it's final position.  In this case, the last row of a 10,000 row table with 4 columns would actually be dependant on `(10,000 * 4) + (10,000 -1) = 49,999` elements!

Yikes... That's a lot of work that needs to be done each and every time the DOM updates or the browser window is resized.  Especially considering most of those rows probably won't ever be seen by the user.

## A Solution

Traditionally, this would be dealt with using pagination, an option that potentially comes with a lot of tedium on the user's part.  In the age of single page applications, we can do better.  Rather than waiting for the browser to calculate the row positions, why not calculate them ourselves?

This projects explores some of the different ways of approaching this problem using a combination of React + Hooks and RxJS to build just enough state for CSS to take care of the rest.  All of the displayed rows are positioned with regular CSS while the magic background is rendered using the new CSS Houdini Paint API.