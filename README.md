# Krish Minicart Drawer for SFRA B2C Commerce Cloud

This is the repository for the Minicart drawer functionality. This Cartridge enhances the app\_storefront\_base cartridge by providing cart drawer instead of minicart popup functionality, including the following capabilities:

* Shoppers can view their cart items at the time of adding them and can modify the items. This reduces friction in the shopping journey, allowing for faster checkouts.

*  The Minicart drawer feature contributes to a smoother, more efficient, and user-friendly shopping experience by keeping the cart and its contents within easy reach.

# Cartridge Path Considerations
The int\_minicart\_drawer cartridge requires the app\_storefront\_base cartridge. In your cartridge path, include the cartridges in the following order:

```
int_minicart_drawer:app_storefront_base
```

If you want to use custom cartridges with your functionalities, place it to the left of those cartridges on the cartridge path. For example:

```
my_customization_cartridge:int_minicart_drawer:app_storefront_base
```
# Template Conflicts

Each template in the following table is present in multiple cartridges. If the file exists in the app\_storefront\_base cartridge and in this cart drawer cartridge, the cartridge template overrides the base template. The presence of a template file in multiple plugin cartridges indicates a conflict that you have to resolve in a customization cartridge. However, if you are using only one of the conflicting plugin cartridges or custom cartridge, no action is necessary.

| Template File | Cartridge | Location |
| :--- | :--- | :--- |
|miniCart.isml|app\_storefront\_base|cartridge/templates/default/components/header/miniCart.isml|
|miniCart.isml|app\_storefront\_base|cartridge/templates/default/checkout/cart/miniCart.isml|

# Getting Started

1. Clone this repository. (The name of the top-level folder is int\_minicart\_drawer .)
2. In the top-level int\_minicart\_drawer folder, enter the following command: `npm install`. (This command installs all of the package dependencies required for this plugin.)
3. In the top-level int\_minicart\_drawer folder, edit the paths.base property in the package.json file. This property should contain a relative path to the local directory containing the Storefront Reference Architecture repository. For example:
```
"paths": {
    "base": "../storefront-reference-architecture-master/cartridges/app_storefront_base/"
}
```
4. In the top-level int\_minicart\_drawer folder, enter the following command: `npm run compile:js && npm run compile:scss`
5. In the top-level int\_minicart\_drawer folder, enter the following command: `npm run uploadCartridge`
6. Incase you have override miniCart.js file in your custom cartridge at location path - client/default/components/ , edit the paths.base property in the package.json file of custom cartridge. For example:
```
"paths": {
    "minicartdrawer":  "../minicart-drawer-master/cartridges/int_minicart_drawer/"
}
```

7. In your custom cartridge, add below code 
```
var minicartdrawer = require('minicartdrawer/components/miniCart');
module.exports = function () {
  minicartdrawer();
  // your custom code
}
```

# NPM Scripts

* Use the provided NPM scripts to compile and upload changes to your Sandbox.

## Compile Client-Side Code and SCSS

* `npm run compile:scss` - Compiles all scss files into css.
* `npm run compile:js` - Compiles all js files and aggregates them.

## Lint Your Code

* `npm run lint` - Execute linting for all JavaScript and SCSS files in the project. You should run this command before committing your code.

## Watch for Changes and Uploading

* `npm run watch:static` - Watches js and scss files for changes, recompiles them and uploads result to the sandbox. Requires a valid dw.json file at the root that is configured for the sandbox to upload.

* `npm run watch` - Watches everything and recompiles (if necessary) and uploads to the sandbox. Requires a valid dw.json file at the root that is configured for the sandbox to upload.
