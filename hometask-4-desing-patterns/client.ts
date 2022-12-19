import { GUI } from './gui/gui'

export class Client {
	private static client: Client;

	constructor(private gui: GUI) { }

	public static getInstance() {
		if(!this.client) {
			this.client = new Client(null as unknown as GUI);
		}

		return this.client
	}

	ship(): string {
		if (!this.gui) {
			throw new Error('No GUI has been provided');
		}

		return this.gui.ship()
	}
}