let root = document.documentElement;
root.style.setProperty('--black', '#d40000');
root.style.setProperty('--white', 'black');
root.style.setProperty('--link-color','#852a2a');
root.style.setProperty('--accent','#e03f3f');
root.style.setProperty('--blue_600','#852a2a');
root.style.setProperty('--blue_400','#b85151');
root.style.setProperty('--gray_200','#8c0000');
root.style.setProperty('--gray_600','#8c0000');
root.style.setProperty('--gray_300','#960000');
root.style.setProperty('--gray_400','#730000');
root.style.setProperty('--gray_500','#6f0000');
root.style.setProperty('--gray_700','#8a0000');
root.style.setProperty('--gray_800','#460000');
root.style.setProperty('--button-secondary-background-color','#650000');
root.style.setProperty('--steel_gray_60','black');
root.style.setProperty('--steel_gray_20','black');
root.style.setProperty('--steel_gray_80','#8a0000');
root.style.setProperty('--steel_gray_100','#920000');
root.style.setProperty('--steel_gray_120','#8e0202');
root.style.setProperty('--steel_gray_A540','black');
root.style.setProperty('--steel_gray_400','#904e4e');
root.style.setProperty('--steel_gray_500','#b10000');
root.style.setProperty('--steel_gray_200','#d45858');
root.style.setProperty('--light_blue_100','#d45858');
root.style.setProperty('--steel_gray_10','black');
root.style.setProperty('--steel_gray_40','black');
root.style.setProperty('--gray_900','#a20000');
root.style.setProperty('background','black');
document.querySelector(':root [scheme=vkcom_light]').style.setProperty('--vkui--color_text_primary','#d40000');


var all = document.getElementsByClassName("nim-dialog nim-dialog_classic");

if (all){
for (var i=0, max=all.length; i < max; i++) {
     if (!all[i].style.backgroundColor) all[i].style.backgroundColor = "black";
}
}

var all = document.getElementsByClassName("im-page--dialogs-footer ui_grey_block _im_dialogs_settings");

if (all){
     if(typeof all[0]!== "undefined"){
          if (!all[0].style.backgroundColor) all[0].style.background = "black";
     }
}

var all = document.getElementsByClassName("im-page--history-new-bar");

if (all){
for (var i=0, max=all.length; i < max; i++) {
     if (!all[i].style.backgroundColor) all[i].style.backgroundColor = "black";
}
}
