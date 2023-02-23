#include <stdio.h>
#include "Vec2.h"

int main() {
	Vec2 v = { .x = 1, .y = 1 };
	Vec2 v1 = { .x = 2, .y = 2 };
	Vec2 v2 = vec2_add(v, v1);
		
	Vec2 varr[2];

	varr[1] = v;
	varr[2] = v;

	vec2_print(vec2_add(varr[0], varr[1]));
	vec2_print(varr[1]);
	
	enum {
		ONE,
		TWO,
		THREE
	};

	printf("One %d\n", ONE);
	printf("Two %d\n", TWO);

	return 1;
}
