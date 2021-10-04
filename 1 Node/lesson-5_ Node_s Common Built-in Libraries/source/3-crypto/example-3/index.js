const { Certificate } = require('crypto');

const spkac =
    'MIICRTCCAS0wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDjxA/Jo6spgr9HJV3Ca8FeZIhlywj6iR34vg3FFkaIkXZeD9nANuzphUEdx+n7KPZHvIiczxAHJ2OAi+k26xtZibgj1TZD0hkv0ORaiexPBU89Qz07jncVHKz/wXVaNgc8Wk3rRr61I4eqYrcJXb1ZV0lmSEy9pU6lz1e4sjnVQ3mrxJ/GPvC9PTIfoospBIFTJLl+Lcx1Mijxdu7AAxrpQdP0xh4JZCaSabbZAyLdrzhdKZtkZWs/+hD53HE7TYtIgXZkN3KBXg9iX5g7tZexbq0Wq2dJEXoVklBlFoA8FwM6Eg2qLSNVst1L8WqILkDh0FujaL8URET4iY+ZpkgpAgMBAAEWBWhlbGxvMA0GCSqGSIb3DQEBBAUAA4IBAQCBzFT8k8JVPOZ4lcIS0wzxI/PXeQksCvES0mWm1Ti9ICTrGDX/7CvXK7XlH0q7r+J5/otPF/383+bnX4coxyPchHiicq01cR6fJMjAZHbgd575WYtCgc404jSL9PZP+yKjy1zX2A7pDlVgXudoCvj4N83k7/SvybE3rDxLQN3EsH9kV/T0Q5SQe1GU5BIjy4upJZRszRq3TTOnrJarRJwECTTpP6RWIKZZ5yWkgmyq+dsdan9kIJJZcwhvYvhv+K/z8+R6hFSWfOBlIdnAiWbgpqI4aR6/beW8rIFEVZfH/Wrdw8+z0YPl6GKG5ehWYT+0xypYme8KOG71tYsQFbJF';

console.log(Certificate.verifySpkac(Buffer.from(spkac)));
