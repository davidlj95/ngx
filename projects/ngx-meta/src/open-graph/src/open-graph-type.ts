export const OPEN_GRAPH_TYPE_MUSIC_SONG = 'music.song'
export const OPEN_GRAPH_TYPE_MUSIC_ALBUM = 'music.album'
export const OPEN_GRAPH_TYPE_MUSIC_PLAYLIST = 'music.playlist'
export const OPEN_GRAPH_TYPE_MUSIC_RADIO_STATION = 'music.radio_station'
export const OPEN_GRAPH_TYPE_VIDEO_MOVIE = 'video.movie'
export const OPEN_GRAPH_TYPE_VIDEO_EPISODE = 'video.episode'
export const OPEN_GRAPH_TYPE_VIDEO_TV_SHOW = 'video.tv_show'
export const OPEN_GRAPH_TYPE_VIDEO_OTHER = 'video.other'
export const OPEN_GRAPH_TYPE_ARTICLE = 'article'
export const OPEN_GRAPH_TYPE_BOOK = 'book'
export const OPEN_GRAPH_TYPE_PROFILE = 'profile'
export const OPEN_GRAPH_TYPE_WEBSITE = 'website'
export type OpenGraphType =
  | typeof OPEN_GRAPH_TYPE_MUSIC_SONG
  | typeof OPEN_GRAPH_TYPE_MUSIC_ALBUM
  | typeof OPEN_GRAPH_TYPE_MUSIC_PLAYLIST
  | typeof OPEN_GRAPH_TYPE_MUSIC_RADIO_STATION
  | typeof OPEN_GRAPH_TYPE_VIDEO_MOVIE
  | typeof OPEN_GRAPH_TYPE_VIDEO_EPISODE
  | typeof OPEN_GRAPH_TYPE_VIDEO_TV_SHOW
  | typeof OPEN_GRAPH_TYPE_VIDEO_OTHER
  | typeof OPEN_GRAPH_TYPE_ARTICLE
  | typeof OPEN_GRAPH_TYPE_BOOK
  | typeof OPEN_GRAPH_TYPE_PROFILE
  | typeof OPEN_GRAPH_TYPE_WEBSITE
