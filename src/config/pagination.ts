export const pagination = {
  perPage: +(process.env.PAGINATION_PER_PAGE || 8),
  homePagePosts: +(process.env.PAGINATION_HOME_PAGE_POSTS || 7),
  featuredPosts: +(process.env.PAGINATION_HOME_PAGE_FEATURED_POSTS || 1),
}
