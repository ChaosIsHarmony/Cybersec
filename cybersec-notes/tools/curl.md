---
id: curl
aliases:
  - Basics
tags: []
---

### Basics
#### GET
`$ curl [website/IP:<port>]`

#### POST
`$ curl -X POST [website/IP:<port>]`


### Options
- `-A "[user-agent]"`: set user-agent
- `-b "[cookie name]=[cookie value]"`: sets cookie
- `-d "[url param]=[value](&[url param 2]=[value 2]...)"`: sets data passed in URL params
- `--data-urlencode "[url param]=[value](&[url param 2]=[value 2]...)"`: sets data passed in URL params
- `-v`: gives verbose output (e.g., listing headers)
- `-X [HTTP METHOD]`: sets HTTP method
