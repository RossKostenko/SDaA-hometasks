import { PackageType, ShipmentCost } from "../../enums";
import { Shipper } from "./shipper";

export class AirEastShipper extends Shipper {
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

