/* Star Wars the Old Republic Recruit By Talent Widget v1.1
 * by Rob G (Mottie) 2011
 * http://mottie.guildportal.com
 * licensed under the MIT license.
 */

(function($){
 $.swtorTalents = function(el, options){
  var o, base = this;
  base.$el = $(el);
  base.$el.data('swtorTalents', base);

  base.init = function(){
   base.options = o = $.extend({}, $.swtorTalents.defaultOptions, options);

   var c,i,j,k,t,tal,
   s = (/^e/i.test(o.side)) ? 'empire' : 'republic', // added to class - empire or republic?

   // Validate defaultNeed class
   n = o.defaultNeed.toLowerCase();
   o.defaultNeed = "None";
   if (/^l/.test(n)) { o.defaultNeed = 'Low'; }
   if (/^m/.test(n)) { o.defaultNeed = 'Medium'; }
   if (/^h/.test(n)) { o.defaultNeed = 'High'; }

   // To set tooltip background colors, we need to append objects
   // with the assigned class to get the CSS text color settings
   t = $('<div id="testsetcolors" style="display:none;"><p class="usebg"/><p class="none"/><p class="low"/><p class="medium"/><p class="high"/></div>');
   t.appendTo($('body'));
   o.bg = t.find('.usebg').css('color'); // text color when tooltip background is colored
   o.cn = t.find('.none').css('color');
   o.cl = t.find('.low').css('color');
   o.cm = t.find('.medium').css('color');
   o.ch = t.find('.high').css('color');
   o.cd = t.find('.' + o.defaultNeed.toLowerCase()).css('color');
   t.remove();

   // Make table
   // **********
   t = '<div>';
   // if side starts with an "e" then it's empire, all else is republic
   tal = $.swtorTalents[s];
   for (i in tal) {
    if (tal[i][0].hasOwnProperty('tree')){
     t += (o.addHeader) ? '<div class="groupIcon ' + s + 'GroupIcon icon_' + i.toLowerCase().replace(/\s+/g,'') + '">'+i+'</div>' : '';
     for (k=0; k < 2; k++){
      n = (o[tal[i][k].name.toLowerCase().replace(/\s+/g,'')] || ',').split(',');
      t += '<span class="' + s + 'ClassIcon classIcon ' + tal[i][k].icon + '"><span>';
      t += tal[i][k].name + '</span></span><span class="talentIcons">';

      // build tree x2 for each class
      for ( j=0; j<2; j++ ) {
       c = base.getStyle( n[j] || '' ); // get class c[0] & hex values c[1]
       // tooltip width, text color and background color added as metadata into the selected attribute
       t += '<span class="' + c[0].toLowerCase() + '"><span class="' + s + 'TalentIcon talentIcon ' + o.tooltipClass + ' ' +
        tal[i][k].tree[j][1] + ' ' + c[0].toLowerCase() + (o.tooltipMetadata === 'class' ? ' ' : '" ' + o.tooltipMetadata + '="') +
        '{width:' + o.tooltipWidth + 'px;color:' + (o.colorBackground ? o.bg + ';background:' : '') + c[1] +
        ';}" title="<div style=text-align:center>' + tal[i][k].tree[j][0] + ': ' + c[0] + '</div>"></span></span> ';
      }
      t += '</span><br class="clear">';
     }
    }
   }
   t += '</div>';
   base.$el.html(t);
  };

  // Return class & hex color
  base.getStyle = function(n){
   n = n.toLowerCase();
   if (/^n/.test(n)) { return [o.displayNames.None, o.cn]; }
   if (/^l/.test(n)) { return [o.displayNames.Low, o.cl]; }
   if (/^m/.test(n)) { return [o.displayNames.Medium, o.cm]; }
   if (/^h/.test(n)) { return [o.displayNames.High, o.ch]; }
   return [o.displayNames[o.defaultNeed], o.cd];
  };

  // Run initializer
  base.init();
 };

 $.swtorTalents.defaultOptions = {
  side            : 'empire',  // Empire or Republic?
  defaultNeed     : 'Low',     // Default need that is set when no setting is found
  colorBackground : true,      // Adds need level color to the tooltip background (true) or the text (false)
  tooltipClass    : 'tooltip', // Class added for tooltip script to target
  tooltipWidth    : 150,       // Tooltip width, added to the tooltip metadata
  tooltipMetadata : 'class',   // Location the tooltip meta data is added e.g. {width:150px;color:#ddd;background:#333;} - set to "rel" for GuildPortal version
  addHeader       : true,      // Add headers between groups
  displayNames    : {
   'None'   : 'None',
   'Low'    : 'Low',
   'Medium' : 'Medium',
   'High'   : 'High'
  }
  /* options used, but not listed; empty options will revert to the default need
  (Empire)   juggernaut, marauder, assassin, sorceror, powertech, mercenary, operative, sniper
  (Republic) guardian, sentinel, sage, shadow, scoundrel, gunslinger, commando, vanguard
  */
 };

 $.swtorTalents.empire = {
  "Sith Warrior": [{
    "name": "Juggernaut",
    "icon": "icon_juggernaut",
    "tree": [[ "Vengeance", "icon_juggernaut_veng" ],
            [ "Immortal", "icon_juggernaut_immort" ]]
  },{
    "name": "Marauder",
    "icon": "icon_marauder",
    "tree": [[ "Annihilation", "icon_marauder_annihilation" ],
            [ "Carnage", "icon_marauder_carnage" ]]
  }],
  "Sith Inquisitor": [{
    "name": "Assassin",
    "icon": "icon_assassin",
    "tree": [[ "Deception", "icon_assassin_deception" ],
            [ "Darkness", "icon_assassin_darkness" ]]
  },{
    "name": "Sorceror",
    "icon": "icon_sorceror",
    "tree": [[ "Corruption", "icon_sorceror_corruption" ],
            [ "Lightning", "icon_sorceror_lightning" ]]
  }],
  "Bounty Hunter": [{
    "name": "Powertech",
    "icon": "icon_powertech",
    "tree": [[ "Shield Tech", "icon_powertech_shield_tech" ],
            [ "Advanced Prototype", "icon_powertech_advanced_prototype" ]]
  },{
    "name": "Mercenary",
    "icon": "icon_mercenary",
    "tree": [[ "Arsenal", "icon_mercenary_arsenal" ],
            [ "Bodyguard", "icon_mercenary_bodyguard" ]]
  }],
  "Imperial Agent": [{
    "name": "Operative",
    "icon": "icon_operative",
    "tree": [[ "Concealment", "icon_operative_concealment" ],
            [ "Medic", "icon_operative_medic" ]]
  },{
    "name": "Sniper",
    "icon": "icon_sniper",
    "tree": [[ "Marksmanship", "icon_sniper_marksmanship" ],
            [ "Engineering", "icon_sniper_engineering" ]]
  }]
 };

 $.swtorTalents.republic = {
  "Jedi Knight": [{
    "name": "Guardian",
    "icon": "icon_guardian",
    "tree": [[ "Defense", "icon_guardian_defense" ],
            [ "Vigilance", "icon_guardian_vigilance" ]]
  },{
    "name": "Sentinel",
    "icon": "icon_sentinel",
    "tree": [[ "Watchman", "icon_sentinel_watchman" ],
            [ "Combat", "icon_sentinel_combat" ]]
  }],
  "Jedi Consular": [{
    "name": "Sage",
    "icon": "icon_sage",
    "tree": [[ "Seer", "icon_sage_seer" ],
            [ "Telekinetic", "icon_sage_telekinetic" ]]
  },{
    "name": "Shadow",
    "icon": "icon_shadow",
    "tree": [[ "Kinetic Combat", "icon_shadow_kinetic_combat" ],
            [ "Infiltration", "icon_shadow_infiltration" ]]
  }],
  "Smuggler": [{
    "name": "Scoundrel",
    "icon": "icon_scoundrel",
    "tree": [[ "Scrapper", "icon_scoundrel_scrapper" ],
            [ "Sawbones", "icon_scoundrel_sawbones" ]]
  },{
    "name": "Gunslinger",
    "icon": "icon_gunslinger",
    "tree": [[ "Sharpshooter", "icon_gunslinger_sharpshooter" ],
            [ "Sabeteur", "icon_gunslinger_sabeteur" ]]
  }],
  "Trooper": [{
    "name": "Commando",
    "icon": "icon_commando",
    "tree": [[ "Gunnery", "icon_commando_gunnery" ],
            [ "Combat Medic", "icon_commando_combat_medic" ]]
  },{
    "name": "Vanguard",
    "icon": "icon_vanguard",
    "tree": [[ "Shield Specialist", "icon_vanguard_shield_specialist" ],
            [ "Tactics", "icon_vanguard_tactics" ]]
  }]
 };

 $.fn.swtorTalents = function(options){
  return this.each(function(){
   (new $.swtorTalents(this, options));
  });
 };

})(jQuery);
