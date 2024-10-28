// Partial extraction from
// https://github.com/angular/angular-cli/blob/18.2.10/packages/angular_devkit/core/src/utils/strings.ts
const STRING_CAMELIZE_REGEXP = /(-|_|\.|\s)+(.)?/g

/**
 Returns the lowerCamelCase form of a string.

 ```javascript
 camelize('innerHTML');          // 'innerHTML'
 camelize('action_name');        // 'actionName'
 camelize('css-class-name');     // 'cssClassName'
 camelize('my favorite items');  // 'myFavoriteItems'
 camelize('My Favorite Items');  // 'myFavoriteItems'
 ```

 @method camelize
 @param {String} str The string to camelize.
 @return {String} the camelized string.
 */
export function camelize(str: string): string {
  return str
    .replace(
      STRING_CAMELIZE_REGEXP,
      (_match: string, _separator: string, chr: string) => {
        return chr ? chr.toUpperCase() : ''
      },
    )
    .replace(/^([A-Z])/, (match: string) => match.toLowerCase())
}

/**
 Returns the UpperCamelCase form of a string.

 @example
 ```javascript
 'innerHTML'.classify();          // 'InnerHTML'
 'action_name'.classify();        // 'ActionName'
 'css-class-name'.classify();     // 'CssClassName'
 'my favorite items'.classify();  // 'MyFavoriteItems'
 'app.component'.classify();      // 'AppComponent'
 ```
 @method classify
 @param {String} str the string to classify
 @return {String} the classified string
 */
export function classify(str: string): string {
  return str
    .split('.')
    .map((part) => capitalize(camelize(part)))
    .join('')
}

/**
 Returns the Capitalized form of a string

 ```javascript
 'innerHTML'.capitalize()         // 'InnerHTML'
 'action_name'.capitalize()       // 'Action_name'
 'css-class-name'.capitalize()    // 'Css-class-name'
 'my favorite items'.capitalize() // 'My favorite items'
 ```

 @method capitalize
 @param {String} str The string to capitalize.
 @return {String} The capitalized string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
