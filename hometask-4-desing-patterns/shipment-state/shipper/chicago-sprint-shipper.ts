import { PackageType, ShipmentCost } from "../../enums";
import { Shipper } from "./shipper";

export class ChicagoSprintShipper extends Shipper {
	getCost(packageType: PackageType, weight: number): number {
		if (packageType === PackageType.LETTER) {
			return weight * ShipmentCost.CHICAGOSPRINTLETTER;
		}

		return weight * ShipmentCost.CHICAGOSPRINTPACKAGE;
	}
}
