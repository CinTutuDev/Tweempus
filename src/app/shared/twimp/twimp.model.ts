import { AuthorModel } from '../author/author.model';

export class TwimpModel {
  private _id: string;
  private _url: string;
  private _author: AuthorModel;
  private _content: string;
  private _timestamp: string;
  private _favorite: boolean;

  constructor(
    id: string,
    url: string,
    author: AuthorModel,
    content: string,
    timestamp: string
  ) {
    this._id = id;
    this._url = url;
    this._author = author;
    this._content = content;
    this._timestamp = timestamp;
    this._favorite = false;
  }

  get id(): string {
    return this._id;
  }

  get url(): string {
    return this._url;
  }

  get author(): AuthorModel {
    return this._author;
  }

  get content(): string {
    return this._content;
  }

  get timestamp(): string {
    return this._timestamp;
  }

  get favorite(): boolean {
    return this._favorite;
  }

  set id(id: string) {
    this._id = id;
  }

  set url(url: string) {
    this._url = url;
  }

  set author(author: AuthorModel) {
    this._author = author;
  }

  set content(content: string) {
    this._content = content;
  }

  set timestamp(timestamp: string) {
    this._timestamp = timestamp;
  }

  set favorite(favorite: boolean) {
    this._favorite = favorite;
  }
}
