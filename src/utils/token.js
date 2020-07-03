const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');



function generateToken({ private_key, application_id, acl, sub }) {
  if (!acl) {
    acl = {
      "paths": {
        "/**": {}
      }
    }
  }


  const now = (Date.now() / 1000)
  const ext = now + (((60 * 60)  * 60 ) * 24 )
  const props = {
    "iat": now,
    "nbf": now,
    "exp": ext,
    "jti": now,
    application_id,
    acl,
    sub
  }



  return jwt.sign(
    props,
    {
      key: private_key,
    },
    {
      algorithm: 'RS256',
    }
  )
}

export function generateUserToken(config) {
  const { private_key, application_id, user_name } = config;
  return generateToken({
    private_key,
    application_id,
    sub: user_name
  })
}

export function generateBEToken(config) {
  const { private_key, application_id } = config;
  return generateToken({
    private_key,
    application_id
  })
}