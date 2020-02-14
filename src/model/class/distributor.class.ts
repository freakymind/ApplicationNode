import passwordHash from 'password-hash';

export class Distributor {
  private name: string;
  private email: string;
  private randomPassword: any;
  private password: any;
  private mobile: number;
  private country: number;
  private role: string;
  private status: boolean;

  constructor(name: string, email: string, mobile: number, country: number) {
    this.name = name;
    this.email = email;
    this.randomPassword = this.randomNumber();
    this.password = this.getPassword();
    this.mobile = mobile;
    this.country = country;
    this.role = "DISTRIBUTOR";
    this.status = false;
  }
  private randomNumber() {
    return "Ojas1525";
  }
  private getPassword() {
    return passwordHash.generate(this.randomPassword);
  }

}