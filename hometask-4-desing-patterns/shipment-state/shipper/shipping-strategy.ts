import { PackageType } from "../../enums";
import { AirEastShipper } from "./air-east-shipper";
import { Shipper } from "./shipper";

export class ShippingStrategy {
	constructor(private _shipper: Shipper = new AirEastShipper()) { }

	public setStrategy(shipper: Shipper) {
		this._shipper = shipper;
	}

	public getCost(packageType: PackageType, weight: number) {
		return this._shipper.getCost(packageType, weight)
	}
}