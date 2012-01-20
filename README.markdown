# SWTORTalents (Recruit by talent)

Show your Star Wars the Old Republic recruitment status by displaying the specific talent needed for each class.

###Empire or Republic

![which side](http://mottie.github.com/swtorTalents/demo/view1.jpg)

### Compact view 
`colorBackground` option - left `false` &amp; right `true`

![compact](http://mottie.github.com/swtorTalents/demo/view2.jpg)

## Features ([Demo](http://mottie.github.com/swtorTalents/)) ##

* This World of Warcraft class recruitment box shows the class needs by talent tree specialization.
* Icons are set to fade out as the need requirements lessen (set in the CSS).
* Tooltips show the need level with either the tooltip background or the text colored specifically to the need. See screen shot above, with `colorBackground` set to `true` and `false`.
* Minimal coding is required to set the needs of any one class.

## Requirements ##

* jQuery 1.2.6+
* Tooltip plugin (uses metadata & live events) - included with script

## Default Options ##
**Script**

```javascript
$(function(){

  $('.recruitTalent').wowTalents({
    side            : 'empire',  // Empire or Republic? case insensitive and only the first letter is required
    defaultNeed     : 'Low',     // Default need that is set when no setting is found
    colorBackground : true,      // Adds need level color to the tooltip background (true) or the text (false)
    tooltipClass    : 'tooltip', // Class added for tooltip script to target
    tooltipWidth    : 150,       // Tooltip width, added to the tooltip metadata
    tooltipMetadata : 'class',   // Location the tooltip meta data is added e.g. {width:150px;color:#ddd;background:#333;}
    addHeader       : true,      // Add headers between groups; set to false for compact view

    /* Empire specific options */
    juggernaut      : "x,x",
    marauder        : "x,x",
    assassin        : "x,x",
    sorceror        : "x,x",
    powertech       : "x,x",
    mercenary       : "x,x",
    operative       : "x,x",
    sniper          : "x,x",

    /* Republic specific options */
    guardian        : "x,x",
    sentinel        : "x,x",
    sage            : "x,x",
    shadow          : "x,x",
    scoundrel       : "x,x",
    gunslinger      : "x,x",
    commando        : "x,x",
    vanguard        : "x,x",

    displayNames    : {   // change the need level displayed in the tooltip (on the right side only)
     'None'   : 'None',   // e.g. 'None' : 'Closed'
     'Low'    : 'Low',    // the specific options above will still use "x", "n", "l", "m" and "h"
     'Medium' : 'Medium', // Look under the options section below for an expanded example
     'High'   : 'High'
    }

  });

});
```

**HTML**

```html
<div class="recruitTalent"></div>
```

## Customization ##

**CSS Styles:**

* `.recruitTalent` - Sets the overall style of the widget. Set to be 180px wide by default.
* `.high` - High priority text color (green by default). The tooltip background color is also set from this text color.
* `.medium` - Medium priority text color (yellow by default).
* `.low` - Low priority text color (red by default).
* `.none` - No needs text color (grey by default).
* `.usebg` - This sets the text color when the tooltip background color is being changed (black by default). Without this the text would be the same as the `#tooltip` definition.
* `.talentIcons .high`, `.talentIcons .medium`, `.talentIcons .low` and `.talentIcons .none` - sets the opacity of the icon at each priority. *Add a border color here if desired*.
* `.classIcon` - Styles the table cell that contains the class icon and class text. It also contains the background image sprite which contains an image of all the WoW classes
* `.classIcon span` - Styles only the class text. It was included to add padding between the icon and the text.
* `.talentIcons` - Styles the table cell that contains all three talent icons.
* `.talentIcon` - Contains the background image which contains all of the talent tree images.

**Options:**

* `defaultNeed` is set to "Low" by default
What this variable does is if you don't set the specific class need in the options, it will default to whatever this variable is set to.
You can set this variable to `l` (low), `m` (medium) or `h` (high), anything else defaults to `n` (none).

* `colorBackground` is set to true by default. When true, hovering over a talent tree icon will display a tooltip with the background color set.

* `addHeader` is set to true by default. When set to true, the header images are added (seen in the non-compact screen shots above). If set to false, the compact view will be seen.

* `tooltipWidth` is set to 150 by default (in pixels). You can adjust this to fit the tooltip contents. The contents are centered within the coding.

* `displayNames` allows you to change the name/language of the need levels. For example, to change the "None" to "Closed", do the following:

    ```javascript
    $('.recruitTalent').wowTalents({
      // the defaultNeed should still be set to the original name, like "None", NOT "Closed"
      defaultNeed     : 'None',

      // when adding the talent need level, use "n" for "Closed"
      // and "h" for "Open" to show up in the tooltip
      juggernaut      : "n,h",

      // Change the level shown in the tooltip as to open and closed.
      displayNames    : {
        'None' : 'Closed',
        'High' : 'Open'
      }
    });
    ```

* Use the class name to set each class need. Replace the `x` below with an `n` (none), `l` (low), `m` (medium) or `h` (high); adding anything else will cause the script to add the value of the `defaultNeed` option:

```javascript
/* Empire specific options */
juggernaut   : "x,x",
marauder     : "x,x",
assassin     : "x,x",
sorceror     : "x,x",
powertech    : "x,x",
mercenary    : "x,x",
operative    : "x,x",
sniper       : "x,x",

/* Republic specific options */
guardian     : "x,x",
sentinel     : "x,x",
sage         : "x,x",
shadow       : "x,x",
scoundrel    : "x,x",
gunslinger   : "x,x",
commando     : "x,x",
vanguard     : "x,x"
```

##Changelog##

###Version 1.1 (1/20/2012)

* Apparently I can't spell Jaggernaut nor Marauder.
* Added PSD files with the icons used in the design folder.

###**Version 1.0 (12/13/2011)**

* Initial version
