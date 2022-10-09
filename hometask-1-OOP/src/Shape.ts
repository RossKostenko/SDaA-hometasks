import { Point } from './Point';

export abstract class Shape {
	protected points: Point[];
	protected color: string;
	protected filled: any;

	constructor(points: Point[]);
	constructor(points: Point[], color: string, filled: boolean);

	constructor(points: Point[], color: string = 'green', filled: boolean = true) {
		if (points.length < 3) {
			throw new Error('Please provide at least 3 points to make a shape');
		}

		this.points = points;
		this.color = color;
		this.filled = filled;
	}

	abstract getType(): string;

	public toString() {
		const pointsStringified = this.points.map((point: Point): string => point.toString()).join(', ');

		return ['A Shape with color of ', `${this.color} and `, !this.filled && 'not ', `filled. Points: ${pointsStringified}.`]
			.filter(Boolean)
			.join('');
	}

	public getPerimeter(): number {
		return this.points.reduce((perimeter, point, idx) => {
			if (idx === this.points.length - 1) {
				return perimeter + point.distance(this.points[0]);
			}

			return perimeter + point.distance(this.points[idx + 1]);
		}, 0);
	}
}

export class TestShape extends Shape {
	public constructor(points: Point[]);
	public constructor(points: Point[], color: string, filled: boolean);

	public constructor(points: Point[], color?: string, filled?: boolean) {
		if (color && typeof filled === 'boolean') {
			super(points, color, filled);
			return;
		}

		super(points);
	}

	public getType(): string {
		return 'Its not used in test shape class';
	}
}
