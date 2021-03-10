export class Device {
  id?: any;
  code?: string;
  nom?: string;
  phone?: string;
  attribut?: any;
  createdAt?: any;
  updatedAt?: any;

  constructor(code, nom, phone) {
    this.code = code;
    this.nom = nom;
    this.phone = phone;
  }

}
