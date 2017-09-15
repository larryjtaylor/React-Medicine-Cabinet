import Moment from "moment";

class Medicine {
  constructor(name, dosage, frequency) {
    this.name = name;
    this.dosage = dosage;
    this.frequency = frequency;
    this.timeCreated = new Moment();
    this.timeSinceCreated = this.setTimeSinceCreated();
  }
  setTimeSinceCreated() {
    this.timeSinceCreated = this.timeCreated.fromNow(true);
  }
}

export default Medicine;
