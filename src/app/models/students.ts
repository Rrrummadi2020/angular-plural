export class IStudents {

  constructor(public id: number,
    public name: string,
    public age: number,
    public dateOfBirth: string,
    public address: {street:string,pin:string}
  ) {
  }
}
