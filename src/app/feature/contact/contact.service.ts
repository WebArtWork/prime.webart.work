import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Service()
export class ContactService {
	private readonly _http = inject(HttpClient);

	async send(message: string) {
		await firstValueFrom(
			this._http.post(`${environment.apiUrl}/api/telegram/contact`, {
				slug: environment.companyId,
				message,
			}),
		);
	}
}
