# Notes

1. Middle-Out Algorythm
  * MagicRows.js:
    - Find middle visible row by combining scrollTop, viewport height, table offset,
    - Distribute rows outward in both directions '
    - Preference the direction of travel (Eg. "2 for me, 1 for you")
    - Stop at first row or last row
    - Vanish remaining rows
  * TopRow.js:
    - Remove "clamping"?  
      * Negative or greater than number of rows will be handled by new algorythm
      
