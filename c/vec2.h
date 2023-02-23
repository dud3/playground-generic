#ifndef VEC2_H
#define VEC2_H

typedef struct Vec2 {
	int x;
	int y;
} Vec2;

Vec2 vec2_print(Vec2 v) {
	printf("x: %d, y: %d\n", v.x, v.y);
}
Vec2 vec2_add(Vec2 va, Vec2 vb) {
	Vec2 vc = { .x = va.x + vb.x, .y = va.y + vb.y };
	return vc;
}

#endif
