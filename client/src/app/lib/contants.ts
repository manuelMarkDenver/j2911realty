type SocialMediaType = {
  type: string,
  link: string
}

const contact_info = [
  {
    email: "blhernandez0923@gmail.com",
  },
  { contact_number: "774 888 8571" },
];

const social_media_links: SocialMediaType[] = [
  {
    type: "fb_account",
    link: "https://www.facebook.com/blhernandez04",
  },
  {
    type: "fb_page",
    link: "https://www.facebook.com/profile.php?id:100091152622740",
  },
  { type: "ig_acct", link: "https://www.instagram.com/j.2911realty/" },
  { type: "air_bnb", link: "https://www.airbnb.com/users/show/318451841" },
];

export { contact_info, social_media_links };
