export default class FrigoItem {
  /*
  constructor(frigoItemJSON) { // en paramètre un film au format JSON
    this._id = frigoItemJSON.id;
    this._nom = frigoItemJSON.nom;
    this._qty = frigoItemJSON.qty;
    this._photo = frigoItemJSON.photo ?? "";
  }
   */

  constructor(id, nom, qty, photo) {
    /*
    if (qty < 0) {
      throw Error("qty is negative");
    }

     */
    this._id = id;
    this._nom = nom;
    this._qty = qty;
    this._photo = photo ?? "";
  }

  get postOptions() {
    return this.addRemoveOrPostQtyOption(this.qty)
  }

  get addQtyOption() {
    return this.addRemoveOrPostQtyOption(this.qty + 1)
  }

  get removeQtyOption() {
    return this.addRemoveOrPostQtyOption(this.qty - 1)
  }

  addRemoveOrPostQtyOption(qtyToChange) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return {
      method: "PUT",
      //headers: myHeaders,
      body: JSON.stringify({id: this.id, nom: this.nom, qty: qtyToChange, photo: this.photo}),
    };
  }


  get id() {
    return this._id;
  }

  get nom() {
    return this._nom;
  }

  get qty() {
    return this._qty;
  }

  get photo() {
    return this._photo;
  }
}
