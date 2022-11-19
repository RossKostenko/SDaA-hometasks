import { ShipmentSate } from "../shipment-state/shipment-state";

export class GUI {
	constructor(private shipmentState: ShipmentSate) { }

	changeParcel(shipmentState): void {
		this.shipmentState = shipmentState
	}

	ship(): string {
		return this.shipmentState.ship();
	}
} 