interface Array<T extends []> {
}

// Array.prototype.dot = function(a: Array<[]>) {
// }

/**
       c0   c1   c2   cn
  r0 |    |    |    |    |
  r1 |    |    |    |    |
  r2 |    |    |    |    |
  rn |    |    |    |    |
        	     rn+cn

	cxr . rxc (r = rows, c = cols)

	A (2x3) =
		1   1   1
		2   2	1

 	A' (3x2) =
		1   2
		1   2
		1   2

	B (3x2) =
		1   1
		2   2
		3   3

	B' (2x3)
		1   2   3
		1   2   3

	C (2x2) =
		2   2
		2   2

	A * B = 2x3 * 3x2 = 2x2
	B * A = 3x2 * 2x3 = 3x3

	B * C = 3x2 * 2x2 = 3x2
	C * B = 2x2 * 3x2 = failure

	A * C = 2x3 * 2x2 = failure
	C * A = 2x2 * 2x3 = 2x3

 */
