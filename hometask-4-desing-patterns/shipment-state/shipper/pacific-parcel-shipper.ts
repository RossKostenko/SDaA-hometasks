import { PackageType, ShipmentCost } from "../../enums";
import { Shipper } from "./shipper";

export class PacificParcelShipper extends Shipper {
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