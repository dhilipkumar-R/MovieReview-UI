export class ReviewsList {
  public id: string;
  public comments: string = '';
  public user: string = '';
  public isdeleted: boolean;
  constructor(comments: string, user: string, id: string , isdeleted: boolean) {
  this.comments = comments;
  this.user = user;
  this.id = id;
  this.isdeleted = isdeleted;
  }
}

export class DeletedList {
  public id: any;
  constructor( id: any) {
  this.id = id;
  }
}
