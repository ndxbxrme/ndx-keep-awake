# ndx-keep-awake 
### keeps your [ndx-framework](https://github.com/ndxbxrme/ndx-framework) app awake on even the sleepiest hosts
install with  
`npm install --save ndx-keep-awake`  
then add it to your `.use` list  
`src/server/app.coffee`
```coffeescript
require 'ndx-server'
.config
  database: 'db'
.use 'ndx-keep-awake'
.start
```
## what it does
ndx-keep-awake creates the route `/api/keep-awake` and calls it every 5 minutes  
## why would i need that?
some hosts will put your app to sleep after a certain period of inactivity, ndx-keep-awake will prevent that happening
