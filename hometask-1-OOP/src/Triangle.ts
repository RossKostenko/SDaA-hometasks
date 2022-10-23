import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
	public constructor(point1: Point, point2: Point, point3: Point);
	public constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean);

	public constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
		const points = [point1, point2, point3];

		if (color && typeof filled === 'boolean') {
			super(points, color, filled);
			return;
		}

		super(points);
	}

	public toString(): any {
		const pointsStringified = this.points.map((point: Point, idx: number): string => `v${idx + 1}=${point.toString()}`).join(',');
		return `Triangle[${pointsStringified}]`;
	}

	public getType(): any {
		const sides = this.getSides(this.points);

		if (this.isEquilateral(sides)) {
			return 'equilateral triangle';
		}

		if (this.isIsosceles(sides)) {
			return 'isosceles triangle';
		}

		return 'scalene triangle';
	}

	private getSides(points: Point[]): number[] {
		return points.map((point: Point, idx: number): number =>
			idx === this.points.length - 1 ? point.distance(this.points[0]) : point.distance(this.points[idx + 1])
		);
	}

	private isEquilateral(sides: number[]): boolean {
		return new Set(sides).size === 1;
	}

	private isIsosceles(sides: number[]): boolean {
		return new Set(sides).size === 2;
	}
}
