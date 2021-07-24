import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	public add(key: string, data: any): void {
		localStorage.setItem(key, JSON.stringify(data));
	}

	public get(key: string): any {
		const data: string | null = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	}

	public remove(key: string): void {
		localStorage.removeItem(key);
	}
}
