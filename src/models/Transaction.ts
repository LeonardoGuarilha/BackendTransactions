import { uuid } from 'uuidv4';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  balance? = {};

  constructor({ title, value, type, balance }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
    this.balance = balance;
  }
}

export default Transaction;
