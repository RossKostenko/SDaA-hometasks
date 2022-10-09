export class Point {
	public x: number;
	public y: number;

	public constructor();
	public constructor(x: number, y: number);

	public constructor(...args: number[]) {
		if (args.length === 0) {
			this.x = 0;
			this.y = 0;

			return;
		}

		this.x = args[0];
		this.y = args[1];
	}

	public toString() {
		return `(${this.x}, ${this.y})`;
	}

	public distance(): number;
	public distance(point: Point): number;
	public distance(x: number, y: number): number;

	public distance(...args: any[]): number {
		if (args.length === 0) {
			return this.calculateDistance(this.x, this.y);
		}

		if (args.length === 1) {
			const x = this.x - args[0]?.x;
			const y = this.y - args[0]?.y;

			return this.calculateDistance(x, y);
		}

		if (args.length === 2) {
			const x = this.x - args[0];
			const y = this.y - args[1];

			return this.calculateDistance(x, y);
		}

		throw new Error('OOPS, Something went wrong in distance method');
	}

	private calculateDistance(x: number, y: number): number {
		return Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 10) / 10;
	}
}
