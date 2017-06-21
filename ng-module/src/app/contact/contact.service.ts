import { Contact } from './contact';
import { Injectable } from '@angular/core';

const CONTACTS: Contact[] = [
    new Contact(21, 'Sam Spade'),
    new Contact(22, 'Nick Danger')
];

const FETCH_LATENCY = 5000;

@Injectable()
export class ContactService {
    getContacts() {
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
        });
    }

    getContact(id: number | string) {
        return this.getContacts()
            .then(heroes => heroes.find(hero => hero.id === +id));
    }
}
