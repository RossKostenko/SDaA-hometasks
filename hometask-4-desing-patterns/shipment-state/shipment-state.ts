import { PackageType } from "../enums/package-type.enum";
import { Shipper } from "./shipper/shipper";
import { capitalizeFirstLetter } from '../helpers'
import { Mark } from "../enums";
import { airEastShipper, chicagoSprintShipper, pacificParcelShipper } from "./shipper";

export class ShipmentSate {
	private _shipper: Shipper;
	private _packageType: PackageType;
	private _shipmentId: number;
	private _weight: number;
	private _senderAdress: string;
	private _senderZipCode: string;
	private _deliveryAdress: string;
	private _deliveryZipCode: string;
	private _mark: Mark | null;

	public set packageType(value: PackageType) {
		this._packageType = value
	}

	public set weight(value: number) {
		this._weight = value
	}

	public set senderAdress(value: string) {
		this._senderAdress = value
	}

	public set senderZipCode(value: string) {
		this._senderZipCode = value
		if (value[0] === '1' || '2' || '3') {
			this._shipper = airEastShipper
		}

		if (value[0] === '4' || '5' || '6') {
			this._shipper = chicagoSprintShipper
		}

		if (value[0] === '7' || '8' || '9') {
			this._shipper = pacificParcelShipper
		}
	}

	public set deliveryAdress(value: string) {
		this._deliveryAdress = value
	}

	public set deliveryZipCode(value: string) {
		this._deliveryZipCode = value
	}

	public set mark(value: Mark) {
		this._mark = value;
	}

	constructor() {
		this._shipmentId = Math.round(Math.random() * 1000000000000);
	}

	getInstance(): ShipmentSate {
		return this
	}

	getShipmentId(): number {
		return this._shipmentId
	}

	ship(): string {
		return `${capitalizeFirstLetter(this._packageType)} with id ${this._shipmentId}, ` +
			`that weights ${this._weight}oz` +
			`has been sent from ${this._senderAdress} ZIP ${this._senderZipCode} ` +
			`to ${this._deliveryAdress} ZIP ${this._deliveryZipCode}.` + '\n' +
			`Cost = ${this._shipper.getCost(this._packageType, this._weight)}` +
			this._mark ? '\n' + `${this._mark}` : '';
	}
}