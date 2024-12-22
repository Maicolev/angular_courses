export class Product {
    /**_description: string;
    _price: string;
  
    constructor() {
      this._description = 'iPhone 16 pro max';
      this._price = '$1200';
    }
    get description(): string {
      return this._description;
    }
  
    get price(): string {
      return this._price;
    }
  
    set description(description: string) {
      this._description = description;
    } **/
    constructor(
        public title: string,
        public price: number) {}
  }