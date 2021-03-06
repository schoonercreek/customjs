
var loader;
var dropdown_modded = false;

function init() { 
 loader = document.createElement('div');
 loader.setAttribute("id","loader");
 var body = document.getElementById('sites');
 body.appendChild(loader);
 body.style.display= "block";
};

console._log = console.log

//window.addEventListener('load', function() { 
console.log = function(msg) {
console._log(msg)

if(dropdown_modded==false) {

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
   ["#rigging-loft","#custom-woodworking","#electrical","#mechanical-systems","#vessel-painting","http://archive.schoonercreek.com/images/rate_sheet_10-3-14.pdf"],
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
makeDd(pac12,dd3,["Specifications","Construction","Brochure (pdf)"],["#details","#construction","http://archive.schoonercreek.com/images/pacificcat12.pdf"],pc_url,3);

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


/* FADE-IN */

loader.style.opacity="0.0";
window.setTimeout(function() {
  loader.style.display='none';
},500);

//}, false);
}; //end if dropdown_modded
dropdown_modded=true;
}; // end console.log


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
 
}
