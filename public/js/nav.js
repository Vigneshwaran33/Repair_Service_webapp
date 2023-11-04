function menu(){
   const element = document.querySelector('.nlist');
   const val = getComputedStyle(element).getPropertyValue('display');
   if(val=="none")
   element.style.display="block";
   else
   element.style.display="none";

}