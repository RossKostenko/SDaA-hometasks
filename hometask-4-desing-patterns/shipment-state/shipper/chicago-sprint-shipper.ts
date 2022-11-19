import { PackageType, ShipmentCost } from "../../enums";
import { Shipper } from "./shipper";

class ChicagoSprintShipper extends Shipper {
	private static _shipper: ChicagoSprintShipper;

	public static getInstance() {
		if (!this._shipper) {
			this._shipper = new ChicagoSprintShipper();
		}

		return this._shipper
	}

	getCost(packageType: PackageType, weight: number): number {
		if (packageType === PackageType.LETTER) {
			return weight * ShipmentCost.CHICAGOSPRINTLETTER;
		}

		return weight * ShipmentCost.CHICAGOSPRINTPACKAGE;
	}
}

export const chicagoSprintShipper = ChicagoSprintShipper.getInstance();
