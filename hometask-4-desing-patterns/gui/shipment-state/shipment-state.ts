export class ShipmentSate {
	private _shipmentId: number;
	private _weight: number;
	private _senderAdress: string;
	private _senderZipCode: string;
	private _deliveryAdress: string;
	private _deliveryZipCode: string;

	public set shipmentId(value: number) {
		this._shipmentId = value
	}

	public set weight(value: number) {
		this._weight = value
	}

	public set senderAdress(value: string) {
		this._senderAdress = value
	}

	public set senderZipCode(value: string) {
		this._senderZipCode = value
	}

	public set deliveryAdress(value: string) {
		this._deliveryAdress = value
	}

	public set deliveryZipCode(value: string) {
		this._deliveryZipCode = value
	}

	constructor() {
		this._shipmentId = Math.round(Math.random() * 1000000000000);
	}

	getShipmentId(): number {
		return this._shipmentId
	}

	ship(): string {
		return `Parcel with id ${this._shipmentId}, ` +
			`that weights ${this._weight}oz` +
			`has been sent from ${this._senderAdress} ZIP ${this._senderZipCode} ` +
			`to ${this._deliveryAdress} ZIP ${this._deliveryZipCode}.`
	}
}