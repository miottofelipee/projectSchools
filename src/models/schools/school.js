export default class School {
    constructor(name, email, age) {
      this.id = this.generateId();
      this.dataFund = dataFund;
      this.email = email;
      this.age = age;
      this.name = name;
    }
  
    generateId() {
      return Math.floor(Math.random() * 1000);
    }
  }