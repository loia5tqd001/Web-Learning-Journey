# Rename files for easier handling for [this project](https://github.com/loia5tqd001/Project-Clone-Netflix-For-HCI-Class)

```
yarn add log-to-file
// or npm install log-to-file --save
// or yarn        -- because already having package.json
// or npm install -- because already having package.json
```
### Execute script:
`node rename.js [folder-to-rename] [folder-to-rename] ...`

for example:

`node rename.js thumbnail-horizontal thumbnail-vertical`

you could clone the project and try this line with the sample data provided:

`node rename.js preprocessing-hor preprocessing-ver`

the result will be similar to the `postprocessing-hor` and `postprocessing-ver` folders

---
### References
https://www.npmjs.com/package/log-to-file