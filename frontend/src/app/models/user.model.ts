export class User {
  id?: any;
  nomcomplet?: string;
  pseudo?: string;
  email?: string;
  role?: string;
  phone?: string;
  avatar?: any;
  statut?: any;
  createdAt?: any;
  updatedAt?: any;

  constructor(nomcomplet, pseudo, email, role ,phone) {
    this.nomcomplet = nomcomplet;
    this.pseudo = pseudo;
    this.email = email;
    this.role = role;
    this.phone = phone;
  }

}
