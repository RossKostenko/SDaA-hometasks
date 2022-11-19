import { PackageType } from "../../enums";

export abstract class Shipper {
	abstract getCost(packageType: PackageType, weight: number): number;
}