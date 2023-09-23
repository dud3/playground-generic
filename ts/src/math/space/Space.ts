import { Matrix, Mat } from "~math/Matrix"
import { Vector, Vec, Vec3, Vec4 } from "~math/Vector"
import { Canvas } from "~canvas/canvas";

export type Origin = Vector<Vec3>;
export type Basis = Matrix<Vector<Vec4>[]>;
export type Span = (v: Vector<Vec3>) => Vector<Vec3>;

export class Space {
	origin: Origin;
	basis: Basis;
	readonly span: Span;

	/**
	 * We construct the bases where rest of the
	 * vertices will be referenced from.
	 *
	 * Origin + Ma = b where
	 *
	 * Origin = 3D vector
	 * Origin = [0,0,0]
	 *
	 * T = Translation matrix
	 * T = [
	 * 	[1,0,0,Origin.x],
	 * 	[0,1,0,Origin.x],
	 * 	[0,0,1,Origin.x],
	 * 	[0,0,0,1]
	 * ]
	 *
	 * M = any transformation matrix, flipped, rotated,
	 * strached, isometric, perspective...
	 *
	 * For instance he following would flip the y axis.
	 *
	 * M = [
	 * 	[1,0,0,0],
	 * 	[0,-1,0,0],
	 * 	[0,0,1,0],
	 * 	[0,0,0,1]
	 * ]
	 *
	 * a = The input vector
	 * a = [2,2,0]
	 *
	 * b = The output vector
	 * b = origin + Ma
	 * b = [0,0,0] + ([...] * [2,2,0])
	 * b = [0,0,0] + ([2,-2,0])
	 * b = [2,-2,0]
	 *
	 * ... in this example the origin is at [0,0,0]
	 * and our basis has y axis flipped, hence [2,*-2*...]
	 */

	constructor(origin = Vec3([0,0,0]), basis?: Basis) {
		this.origin = origin;
		this.basis = basis ?? Mat([]).identity();

		this.span = (v) => Vec3(Vec4([
			v.v[0], v.v[1], v.v[2], 1
		])._t(Mat([
			[1,0,0,this.origin.v[0]],
			[0,1,0,this.origin.v[1]],
			[0,0,1,this.origin.v[2]],
			[0,0,0,1]
		]).t(this.basis)).v.slice(0, -1) as Vec3);
	}

	setOrigin(origin: Origin) {
		this.origin = origin;
		return this;
	}

	setBasis(basis: Basis) {
		this.basis = basis;
		return this;
	}

	render(canvas: Canvas) {
		const x = this.origin.v[0];
		const y = this.origin.v[1];
		const z = this.origin.v[2];

		const u = this.span(Vec3([64,0,0]));
		const v = this.span(Vec3([0,64,0]));
		const w = this.span(Vec3([0,0,64]));

		canvas.ctx.strokeStyle = "#f00";
		canvas.ctx.beginPath();
		canvas.ctx.moveTo(x, y);
		canvas.ctx.lineTo(u.v[0], u.v[1]);
		canvas.ctx.stroke();

		canvas.ctx.strokeStyle = "#00f";
		canvas.ctx.beginPath();
		canvas.ctx.moveTo(x, y);
		canvas.ctx.lineTo(v.v[0], v.v[1]);
		canvas.ctx.stroke();
	}
}
