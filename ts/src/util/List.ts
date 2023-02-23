type n = number;

export type l1<T> = [T];
export type l2<T> = [T, T];
export type l3<T> = [T, T, T];
export type l4<T> = [T, T, T, T];

export type ln1 = l1<n>;
export type ln2 = l2<n>;
export type ln3 = l3<n>;
export type ln4 = l4<n>;
