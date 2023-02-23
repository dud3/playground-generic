// Util

void lambda() {}
void* plambda() {}

void util_print_int(void *data) {
	printf("i: %d\n", *(int*) data); 
}

int* util_int_p(int n) {
	int* _n = &n;
	return _n;
}

void util_print_double(void *data) {
	printf("f: %f\n", *(double*) data);
}

double* util_double_p(double n) {
	double* _n = &n;
	return _n;
}

