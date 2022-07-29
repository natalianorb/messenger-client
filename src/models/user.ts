export interface AvatarUrls {
  defaultUrl: string;
  [size: string]: string;
}

export default class User {
  public chats: string[] = [];

  constructor(
    public id: string,
    public email: string,
    public name = '',
    public avatarUrls: AvatarUrls = { defaultUrl: '' }
  ) {
  }
}
