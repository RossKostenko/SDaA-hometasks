import { PackageType, ShipmentCost } from "../../enums";
import { Shipper } from "./shipper";

class PacificParcelShipper extends Shipper {
	private static _shipper: PacificParcelShipper;

	public static getInstance() {
		if (!this._shipper) {
			this._shipper = new PacificParcelShipper();
		}

		return this._shipper
	}

	getCost(packageType: PackageType, weight: number): number {
		if (packageType === PackageType.LETTER) {
			return weight * ShipmentCost.PACIFICPARCELLETTER
		}

		if (packageType === PackageType.OVERSIZED) {
			return weight * ShipmentCost.PACIFICPARCELPACKAGE + weight * ShipmentCost.PACIFICPARCELOVERSIZED
		}

		return weight * ShipmentCost.PACIFICPARCELPACKAGE;
	}
}

export const pacificParcelShipper = PacificParcelShipper.getInstance();