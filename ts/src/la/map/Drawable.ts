import { V, Vector } from './Vector'

class Drawable<T extends Vector<V>> {
	pos: T;
}

