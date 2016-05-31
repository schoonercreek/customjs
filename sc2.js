//by Evan Feenstra

if(!detectIE()){


var loader;
var counter;

/* DROPDOWN GENERATOR */
var makeDd = function(element,dd,text_,link_,url,pdf) {
 element.style.zIndex="99";
 var widthy = element.getBoundingClientRect().width;
 
 dd.style.cssText="position:absolute;width:"+widthy+"px;background-color:rgba(33,44,55,0.7);color:#eee;transform:translateY(-"+(text_.length*33)+"px);-webkit-transform:translateY(-"+(text_.length*33)+"px);transition:all 250ms ease-in;-webkit-transition:all 250ms ease-in;opacity:0;";
 element.insertBefore(dd,element.children[0]);
 
 for(var i=0; i<text_.length; i++) {
  var a = document.createElement("a");
  a.innerHTML = text_[i];
  if(pdf-1==i){
   a.setAttribute("target","_blank");
   url="";
  }
  a.setAttribute("href",url+link_[i]);
  dd.appendChild(a);
 }
 
}; //end madeDd


function init() { 
 loader = document.createElement('div');
 loader.setAttribute("id","loader");
 var body = document.getElementById('sites');
 body.appendChild(loader);
 body.style.display= "block";
 repeater();
};

var fadeAway = function() {
 loader.style.opacity="0.0";
  window.setTimeout(function() {
    loader.style.display='none';
  },500);
}
var repeater = function() {
 counter++
 if(counter>150){
   fadeAway() 
   return
 }
 var nav=document.getElementsByClassName('s-nav')[0]
 var mobile = document.getElementsByClassName('strikingly-drawer')[0]
 if(nav && mobile){
  gogogo();
 } else {
  console.log('.')
  window.setTimeout(function() {
   repeater()
  },100)
 }
}

var gogogo = function() {
 
 fadeAway() 

var nav =  document.getElementsByClassName('s-nav')[0];
var mobileNav =  document.getElementsByClassName('strikingly-drawer')[0].children[0];

var sc_url = "http://schoonercreek.com/";
var br_url = "http://boat-repair.schoonercreek.com/";
var cbb_url = "http://custom-boat-builder.schoonercreek.com/";
var pc_url = "http://pacific-cat.schoonercreek.com/";
if(this_site=='schoonercreek'){sc_url="";}
else if(this_site=='refit-repair'){br_url="";}
else if(this_site=='new-construction'){cbb_url="";}
else if(this_site=='pac-12'){pc_url="";}

/* ADD REFIT AND REPAIR DROPDOWN */
var refitRepair = nav.children[refit_repair_number-1]
var dd1 = document.createElement("div");
makeDd(refitRepair,dd1,
   ["Rigging Loft","Woodworking","Electrical","Mechanical","Painting","Rates (pdf)"],
   ["#rigging-loft","#custom-woodworking","#electrical","#mechanical-systems","#vessel-painting","https://uploads.strikinglycdn.com/files/86f683ca-bdd0-4783-a646-7f00d62edf98/RateSheet_2016.pdf"],
   br_url,
   6); // #6 is a PDF link

refitRepair.onmouseover = function() {
  dd1.setAttribute("class","down1");
}
refitRepair.onmouseout = function() {
  dd1.setAttribute("class","");
}



/* ADD NEW CONSTRUCTION DROPDOWN */
var newConstruction = nav.children[new_construction_number-1];
var dd2 = document.createElement("div");
makeDd(newConstruction,dd2,["Our Process","Recent Projects"],["#the-construction-process","#recent-projects"],cbb_url,0);

newConstruction.onmouseover = function() {
  dd2.setAttribute("class","down1");
}
newConstruction.onmouseout = function() {
  dd2.setAttribute("class","");
}



/* ADD PAC12 DROPDOWN */
var pac12 = nav.children[pac_12_number-1];
var dd3 = document.createElement("div");
makeDd(pac12,dd3,["Specifications","Construction","Brochure (pdf)"],["#details","#construction","https://uploads.strikinglycdn.com/files/c069746e-8336-4d13-aaf2-dee76828d3be/Flier_FullPage_2015.pdf"],pc_url,3);

pac12.onmouseover = function() {
  dd3.setAttribute("class","down1");
}
pac12.onmouseout = function() {
  dd3.setAttribute("class","");
}



/* SITE-SPECIFIC CUSTOMIZATIONS */

if(this_site=='schoonercreek') {

  /* MOVE CONTACT LINK */
  var contact = nav.children[contact_number-1]; //contact goes on end
  nav.removeChild(contact);
  nav.appendChild(contact);
  
  var mobileContact = mobileNav.children[contact_number-1];
  mobileNav.removeChild(mobileContact);
  mobileNav.appendChild(mobileContact);

}


else if(this_site=='pac-12'){
 /* MOVE PAC12 LINK */
 nav.removeChild(pac12);
 nav.appendChild(pac12);
 
 var mobilePac12 = mobileNav.children[pac_12_number-1];
 mobileNav.removeChild(mobilePac12);
 mobileNav.appendChild(mobilePac12);
 
 /* MOVE CONTACT LINK */
 var contact = nav.children[contact_number-2]; //contact goes on end
 nav.removeChild(contact);
 nav.appendChild(contact);
 
 var mobileContact = mobileNav.children[contact_number-2];
 mobileNav.removeChild(mobileContact);
 mobileNav.appendChild(mobileContact);
 
 /* MOVE HOME LINK */
 var home = nav.children[home_number-3];
 nav.removeChild(home);
 nav.insertBefore(home,nav.children[0]);

 var mobileHome = mobileNav.children[home_number-3];
 mobileNav.removeChild(mobileHome);
 mobileNav.insertBefore(mobileHome,mobileNav.children[0]);
}


else if(this_site=='new-construction'){
 /* MOVE NEW CONSTRUCTION LINK */
 nav.removeChild(newConstruction);
 nav.insertBefore(newConstruction,pac12);
 
 var mobileNewConstruction = mobileNav.children[new_construction_number-1];
 mobileNav.removeChild(mobileNewConstruction);
 var mobilePac12 = mobileNav.children[pac_12_number-1];
 mobileNav.insertBefore(mobileNewConstruction,mobilePac12);
 
 /* MOVE CONTACT LINK */
 var contact = nav.children[contact_number-2]; //contact goes on end
 nav.removeChild(contact);
 nav.appendChild(contact);
 
 var mobileContact = mobileNav.children[contact_number-2]; //contact goes on end
 mobileNav.removeChild(mobileContact);
 mobileNav.appendChild(mobileContact);
 
 /* MOVE ABOUT LINK */
 var about = nav.children[about_number-1];
 nav.removeChild(about);
 nav.insertBefore(about,nav.children[2]);
 
 var mobileAbout = mobileNav.children[about_number-1];
 mobileNav.removeChild(mobileAbout);
 mobileNav.insertBefore(mobileAbout,mobileNav.children[2]);

//ADD BLACK BOX AROUND TEXT BY VIDEO
    document.getElementsByClassName('s-title')[1].style.cssText="padding-top:30px;padding-right:30px;padding-left:30px;background-color:rgba(0,0,0,0.5);margin-bottom:0;"
    document.getElementsByClassName('s-subtitle')[1].style.cssText="padding:30px;background-color:rgba(0,0,0,0.5);"
}


else if(this_site=='refit-repair'){
 /* MOVE ABOUT LINK */
 var about = nav.children[about_number-1];
 nav.removeChild(about);
 nav.insertBefore(about,nav.children[0]);
 
 var mobileAbout = mobileNav.children[about_number-1];
 mobileNav.removeChild(mobileAbout);
 mobileNav.insertBefore(mobileAbout,mobileNav.children[0]);
 
 /* MOVE CONTACT LINK */
 var contact = nav.children[contact_number-1]; //contact goes on end
 nav.removeChild(contact);
 nav.appendChild(contact);
 
 var mobileContact = mobileNav.children[contact_number-1]; //contact goes on end
 mobileNav.removeChild(mobileContact);
 mobileNav.appendChild(mobileContact);
 
 /* MOVE HOME LINK */
 var home = nav.children[home_number-2];
 nav.removeChild(home);
 nav.insertBefore(home,nav.children[0]);
 
 var mobileHome = mobileNav.children[home_number-2];
 mobileNav.removeChild(mobileHome);
 mobileNav.insertBefore(mobileHome,mobileNav.children[0]);
 
 /* MOVE Boatyard LINK */
 var boatyard = nav.children[boatyard_number-2];
 nav.removeChild(boatyard);
 nav.insertBefore(boatyard,nav.children[2]);
 
 var mobileBoatyard = mobileNav.children[boatyard_number-2];
 mobileNav.removeChild(mobileBoatyard);
 mobileNav.insertBefore(mobileBoatyard,mobileNav.children[2]);
 
 //ADD BLACK BOXES AROUND SOME TEXT
    var boxes = document.getElementsByClassName('columns');
    boxes[1].style.marginLeft='0px'; //painting pic
    boxes[2].style.cssText='margin-right:0;background-color:rgba(0,0,0,0.5);';
    boxes[2].getElementsByClassName('s-title')[0].style.paddingLeft="20px";
    boxes[2].getElementsByClassName('s-subtitle')[0].style.paddingLeft="20px";
    boxes[7].getElementsByClassName('s-title-group')[0].style.cssText="padding:20px;background-color:rgba(0,0,0,0.5);"
    //boxes[3].getElementsByClassName('s-rva-media')[0].style.border="1px solid gray";
}

//}, false);

}; // end gogogo

/* INITIALIZATION */
if (document.readyState === "complete"
   || document.readyState === "loaded"
   || document.readyState === "interactive") {
  init()
} else {
  window.addEventListener("DOMContentLoaded", function () {
    //console.log('DOM is loaded');
  init();
  });
}

} //end if !detectIE

function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
