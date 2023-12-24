export enum UserRole {
  EDITOR = 'editor',
  MOD = 'mod',
  ADMIN = 'admin',
  SUPER = 'superadmin'
}

export enum LinksOptions {
  POST = 'post',
  FAVORITE = 'favorite',
  COMMENT = 'comment',
  ABOUT = 'about'
}

export enum InnerText {
  PUBLIC = 'public',
  FAVORITES = 'favorites',
  COMMENTS = 'comments',
  ABOUT = 'about'
}

export enum PublicText {
  PUBLIC = 'public',
  PRIVATE = 'private',
  ALL = 'all'
}

export enum OrderText {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  VIEWED = 'viewed'
}

export enum Settings {
  AVATAR = 'avatar',
  DESCRIPTION = 'description',
  PASSWORD = 'password',
  LINKS = 'links',
  DELETE = 'deleteuser'
}
