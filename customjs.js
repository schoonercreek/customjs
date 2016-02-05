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

/* ADD REFIT AND REPAIR DROPDOWN */
var refitRepair = nav.children[refit_repair_number-1];
refitRepair.style.zIndex="99";
var widthy = refitRepair.getBoundingClientRect().width;

var dd1 = document.createElement("div");
dd1.style.cssText="position:absolute;width:"+widthy+"px;background-color:rgba(33,44,55,0.7);color:#eee;transform:translateY(-198px);-webkit-transform:translateY(-198px);transition:all 250ms ease-in;-webkit-transition:all 250ms ease-in;opacity:0;";
refitRepair.insertBefore(dd1,refitRepair.children[0]);

var rigging = document.createElement("a");
rigging.innerHTML = "Rigging Loft";
rigging.setAttribute("href","http://boat-repair.schoonercreek.com/#rigging-loft");
dd1.appendChild(rigging);

var woodworking = document.createElement("a");
woodworking.innerHTML = "Woodworking";
woodworking.setAttribute("href","http://boat-repair.schoonercreek.com/#custom-woodworking");
dd1.appendChild(woodworking);

var electrical = document.createElement("a");
electrical.innerHTML = "Electrical";
electrical.setAttribute("href","http://boat-repair.schoonercreek.com/#electrical");
dd1.appendChild(electrical);

var mechanical = document.createElement("a");
mechanical.innerHTML = "Mechanical";
mechanical.setAttribute("href","http://boat-repair.schoonercreek.com/#mechanical-systems");
dd1.appendChild(mechanical);

var painting = document.createElement("a");
painting.innerHTML = "Painting";
painting.setAttribute("href","http://boat-repair.schoonercreek.com/#vessel-painting");
dd1.appendChild(painting);

var rates = document.createElement("a");
rates.innerHTML = "Rates (pdf)";
rates.setAttribute("href","http://archive.schoonercreek.com/images/rate_sheet_10-3-14.pdf");
rates.setAttribute("target","_blank");
dd1.appendChild(rates);

refitRepair.onmouseover = function() {
  dd1.setAttribute("class","down1");
}
refitRepair.onmouseout = function() {
  dd1.setAttribute("class","");
}



/* ADD NEW CONSTRUCTION DROPDOWN */
var newConstruction = nav.children[new_construction_number-1];
newConstruction.style.zIndex="99";
var widthy2 = newConstruction.getBoundingClientRect().width;

var dd2 = document.createElement("div");
dd2.style.cssText="position:absolute;width:"+widthy2+"px;background-color:rgba(33,44,55,0.7);color:#eee;transform:translateY(-66px);-webkit-transform:translateY(-66px);transition:all 250ms ease-in;-webkit-transition:all 250ms ease-in;opacity:0;";
newConstruction.insertBefore(dd2,newConstruction.children[0]);

var process = document.createElement("a");
process.innerHTML = "Our Process";
process.setAttribute("href","http://custom-boat-builder.schoonercreek.com/#the-construction-process");
dd2.appendChild(process);

var recent = document.createElement("a");
recent.innerHTML = "Recent Projects";
recent.setAttribute("href","http://custom-boat-builder.schoonercreek.com/#recent-projects");
dd2.appendChild(recent);

newConstruction.onmouseover = function() {
  dd2.setAttribute("class","down1");
}
newConstruction.onmouseout = function() {
  dd2.setAttribute("class","");
}



/* ADD PAC12 DROPDOWN */
var pac12 = nav.children[pac_12_number-1];
pac12.style.zIndex="99";
var widthy3 = pac12.getBoundingClientRect().width;

var dd3 = document.createElement("div");
dd3.style.cssText="position:absolute;width:"+widthy3+"px;background-color:rgba(33,44,55,0.7);color:#eee;transform:translateY(-99px);-webkit-transform:translateY(-99px);transition:all 250ms ease-in;-webkit-transition:all 250ms ease-in;opacity:0;";
pac12.insertBefore(dd3,pac12.children[0]);

var specs = document.createElement("a");
specs.innerHTML = "Specifications";
specs.setAttribute("href","http://pacific-cat.schoonercreek.com/#details");
dd3.appendChild(specs);

var construc = document.createElement("a");
construc.innerHTML = "Construction";
construc.setAttribute("href","http://pacific-cat.schoonercreek.com/#construction");
dd3.appendChild(construc);

var brochure = document.createElement("a");
brochure.innerHTML = "Brochure (pdf)";
brochure.setAttribute("href","http://archive.schoonercreek.com/images/pacificcat12.pdf");
brochure.setAttribute("target","_blank");
dd3.appendChild(brochure);

pac12.onmouseover = function() {
  dd3.setAttribute("class","down1");
}
pac12.onmouseout = function() {
  dd3.setAttribute("class","");
}


if(this_site=='schoonercreek') {

  /* MOVE CONTACT LINK */
  var contact = nav.children[contact_number-1]; //contact goes on end
  nav.removeChild(contact);
  nav.appendChild(contact);

}



loader.style.opacity="0.2";
window.setTimeout(function() {
  loader.style.display='none';
},500);

//}, false);
}; //end if dropdown_modded
dropdown_modded=true;
}; // end console.log


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
