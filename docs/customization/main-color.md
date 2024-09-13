# Change the main color

TODO: color fix.
Seafile has an orange main color with the color-code `#FF8000`. If this color does not match your custom logo, it might be useful to replace this main color with another color of your choice.

To do this we force Seafile to use custom css code to overwrite the main color.

The first step is you use the following color picker and select a new main color of your choice.

!!! success "Dark colors are better than bright ones"

    You should select a color that is dark enough to be a good background for white font color. To switch also the font color from white to black is not yet part of this manual.

=== "Version 11.x"

    Select a color and you will get the correspondent css code in the following grey box.

    <input type="color" id="cc_v11.x" onchange="update_custom_color('v11.x')" value="#ff8000" style="width:100px">
    <div id="cc_output_v11.x">
    ```
    Select a color and the css code will be created...
    ```
    </div>

    Use the copy-and-paste icon (:material-content-copy:) on the top right of the grey box to copy the complete css code to your clipboard.

=== "Version 10.x"

    Select a color and you will get the correspondent css code in the following grey box.

    <input type="color" id="cc_v10.x" onchange="update_custom_color('v10.x')" value="#ff8000" style="width:100px">
    <div id="cc_output_v10.x">
    ```
    Select a color and the css code will be created...
    ```
    </div>

    Use the copy-and-paste icon (:material-content-copy:) on the top right of the grey box to copy the complete css code to your clipboard.

## Configuration via environment file

<!--TODO: verlinken...-->

Save the css-code to your `/opt/seafile-compose/` folder and follow this guide to activate custom css. Don't forget to restart your container.

## Configuration via the web interface

Login to your SeaTable Server as system administrator and switch to the system admin area. Select the navigation point `Settings`. Team admins or normal users does not have the permission to access the system admin area.

First you should set the checkbox for `ENABLE_BRANDING_CSS`. Then simply copy and paste (:material-content-copy:) the css code and paste it to the input box of `Custom CSS`. Submit by clicking on the green :material-check:.

Reload your page of your browser and the color should be changed.
