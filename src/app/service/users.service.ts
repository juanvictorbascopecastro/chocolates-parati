import { Injectable } from '@angular/core';

interface State {
  users: any[];
  loader: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
}
