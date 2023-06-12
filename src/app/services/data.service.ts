import { Injectable } from '@angular/core';

export interface Message {
  CompanyName: string;
  Role: string;
  date: string;
  id: number;
  salary: string;
  work: string;
  location:string;
  read: boolean;
  reward:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      CompanyName: 'Microsoft',
      Role: 'Product designer',
      date: '10 days ago',
      id: 0,
      salary:'55,000/year',
      work:'Full-time',
      location:'New-york',
      read: false,
      reward:'$ 500 USD'
    },
    {
      CompanyName: 'Asus',
      Role: 'Product designer',
      date: '10 days ago',
      id: 1,
      salary:'55,000/year',
      work:'Full-time',
      location:'New-york',
      read: false,
      reward:'$ 500 USD'
    },
    {
      CompanyName: 'Dell',
      Role: 'Product designer',
      date: '10 days ago',
      id: 2,
      salary:'55,000/year',
      work:'Full-time',
      location:'New-york',
      read: false,
      reward:'$ 500 USD'
    },
    
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
