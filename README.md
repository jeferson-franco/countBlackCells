# countBlackCells

Imagine a white rectangular grid of `n` rows and `m` columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

-   A cell is painted black if it has at least one point in common with the diagonal;
-   Otherwise, a cell is painted white.

Count the number of cells painted black.

## Example

-   For `n = 3` and `m = 4`, the output should be
    `solution(n, m) = 6`.

There are `6` cells that have at least one common point with the diagonal and therefore are painted black.

![example1](src/example1.png)

-   For `n = 3` and `m = 3`, the output should be
    `solution(n, m) = 7`.

`7` cells have at least one common point with the diagonal and are painted black.

![example2](src/example2.png)

## Input/Output

-   [execution-time-limit] 4 seconds (js)

-   [input] integer n

The number of rows.

Guaranteed constraints:
`1 ≤ n ≤ 10^5`.

-   [input] integer m

The number of columns.

Guaranteed constraints:
`1 ≤ m ≤ 10^5`.

-   [output] integer

The number of black cells.
