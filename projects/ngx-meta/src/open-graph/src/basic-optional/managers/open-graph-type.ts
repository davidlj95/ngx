/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_MUSIC_SONG = 'music.song'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_MUSIC_ALBUM = 'music.album'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_MUSIC_PLAYLIST = 'music.playlist'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_MUSIC_RADIO_STATION = 'music.radio_station'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_VIDEO_MOVIE = 'video.movie'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_VIDEO_EPISODE = 'video.episode'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_VIDEO_TV_SHOW = 'video.tv_show'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_VIDEO_OTHER = 'video.other'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_ARTICLE = 'article'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_BOOK = 'book'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_PROFILE = 'profile'

/**
 * See {@link OpenGraphType}
 * @public
 */
export const OPEN_GRAPH_TYPE_WEBSITE = 'website'

// noinspection JSValidateJSDoc
/**
 * Types for {@link OpenGraph."type"} property
 *
 * @remarks
 *
 * Use one of the referenced constants to avoid typing them yourself :)
 *
 * @public
 */
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
