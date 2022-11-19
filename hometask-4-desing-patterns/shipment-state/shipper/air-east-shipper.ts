import { PackageType, ShipmentCost } from "../../enums";
import { Shipper } from "./shipper";

class AirEastShipper extends Shipper {
	private static _shipper: AirEastShipper;

	public static getInstance() {
		if (!this._shipper) {
			this._shipper = new AirEastShipper();
		}

		return this._shipper
	}

	getCost(packageType: PackageType, weight: number): number {
		if (packageType === PackageType.LETTER) {
			return weight * ShipmentCost.AIRWESTLETTER
		}

		if (packageType === PackageType.OVERSIZED) {
			return weight * ShipmentCost.AIRWESTPACKAGE + ShipmentCost.AIRWESTOVERSIZED
		}

		return weight * ShipmentCost.AIRWESTPACKAGE;
	}
}

export const airEastShipper = AirEastShipper.getInstance();

