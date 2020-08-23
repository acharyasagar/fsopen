import {
  ADD_BLOG,
  DELETE_BLOG,
  INIT_BLOGS,
  LIKE_BLOG,
  PUSH_NOTIFICATION,
  SET_USER,
  REMOVE_NOTIFICATION,
} from './action-types'

export const initBlogsAction = blogs => ({
  type: INIT_BLOGS,
  data: blogs,
})

export const addBlogAction = blog => ({
  type: ADD_BLOG,
  data: blog,
})

export const likeBlogAction = blog => ({
  type: LIKE_BLOG,
  data: blog,
})

export const deleteBlogAction = blog => ({
  type: DELETE_BLOG,
  data: blog,
})

export const setUserAction = user => ({
  type: SET_USER,
  data: user,
})

export const pushNotificationAction = notification => ({
  type: PUSH_NOTIFICATION,
  data: notification,
})

export const removeNotificationAction = notification => ({
  type: REMOVE_NOTIFICATION,
  data: notification,
})