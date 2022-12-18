import { Mark, PackageType } from '../enums';
import { ShipmentSate } from './shipment-state'

export class ShipmentSateBuilder {
	constructor(protected shipmentState = new ShipmentSate()) {
		this.shipmentState = shipmentState;
	}

	get from() {
		return new SenderBuilder(this.shipmentState);
	}

	get to() {
		return new DeliveryBuilder(this.shipmentState);
	}

	ofType(packageType: PackageType) {
		this.shipmentState.packageType = packageType;
		return this;
	}

	weigths(weight: number) {
		this.shipmentState.weight = weight
		return this
	}

	markIt(value: Mark) {
		this.shipmentState.mark = value;
		return this;
	}

	build() {
		return this.shipmentState;
	}
}

class SenderBuilder extends ShipmentSateBuilder {
	constructor(shipmentState) {
		super(shipmentState);
	}

	adress(adress: string) {
		this.shipmentState.senderAdress = adress;
		return this;
	}

	zip(zip: string) {
		this.shipmentState.senderZipCode = zip;
		return this;
	}
}

class DeliveryBuilder extends ShipmentSateBuilder {
	constructor(shipmentState) {
		super(shipmentState);
	}

	adress(streetAddress) {
		this.shipmentState.deliveryAdress = streetAddress;
		return this;
	}

	zip(postcode) {
		this.shipmentState.deliveryZipCode = postcode;
		return this;
	}
}