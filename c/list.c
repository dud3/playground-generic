#include <stdio.h>
#include "types.h"
#include "util.h"
#include "list.h"
#include "point.h"

int main() {
	Point* point = point_unit(); 
	List* list = list_create(point_print, lambda, lambda);

	point_add(point, point_new_i(2,2));

	list_push(list, point);
	list_push(list, point_new(1,1));

	list_print(list);

	/* size */

	printf("length/size: %d\n", list->size);

	void point_traverse(void* data) {
		Point* point = (Point*) data;
		point_print(point);
	}

	void double_print(void* n) {
		double* _n = (double*) n;
		printf("double: %f\n", *_n);
	}

	void point_to_int(List* dest, void* data) {
		Point* point = (Point*) data;
		list_push(dest, &(point->x));
	}

	// List* dobule_list = list_create(double_print, lambda, lambda);
	List* dobule_list = list_map(list, 
		list_create(double_print, lambda, lambda),
		point_to_int);

	list_print(dobule_list);

	/* find in list */

	bool point_find(void* data) {
		Point* point = (Point*) data;
		if (point->x == 2) return true;

		return false;
	}

	Point* the_point = list_find(list, point_find);

	printf("The point\n");
	point_print(the_point);
	printf("End the point\n");

	// ---

	list_traverse(list, point_traverse);

	List* list_int = list_create(util_print_int, lambda, lambda);
	list_push(list_int, util_int_p(0));
	list_push(list_int, util_int_p(1));

	list_print(list_int);

	util_print_int(util_int_p(1));
	util_print_double(util_double_p(2.0f));

	return 1;
}
