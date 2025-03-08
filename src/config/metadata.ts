export const metadata = {
  title: process.env.APP_META_TITLE || 'Blog title',
  description: process.env.APP_META_DESCRIPTION || 'Blog description',
  social: {
    facebook: process.env.APP_META_FACEBOOK_URL || '',
    instagram: process.env.APP_META_INSTAGRAM_URL || '',
    linkedin: process.env.APP_META_LINKEDIN_URL || '',
    github: process.env.APP_META_GITHUB_URL || '',
  },
};
