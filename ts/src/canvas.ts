
interface Ret {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	clear: () => void;
};

export default (id: string): Ret | false  => {
	const canvas = document.getElementById(id) as HTMLCanvasElement;

	if(!canvas) return false;

	const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

	if(!ctx) return false;

	const clear = (): void => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	return { 
		canvas, 
		ctx, 
		clear 
	};
};

