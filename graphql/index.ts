export const getUserQuery = `
 query getUser($email : String)
  user (by : {email : $email}) {
    id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
  }
`;
