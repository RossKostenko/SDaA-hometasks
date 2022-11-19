import { GUI } from './gui'

export class Client {
	// private _shipment: Shipment;
	private static client: Client;

	constructor(private gui: GUI) { }

	public static getInstance() {
		if(!this.client) {
			this.client = new Client(null as unknown as GUI);
		}

		return this.client
	}
}