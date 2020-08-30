
//Opening the navigation menu.
function openNav() {
  document.getElementById("Sidenav").style.width = "200px";
  document.getElementsByClassName("main")[0].style.marginRight = "200px";
  document.getElementsByClassName("Menu")[0].style.right = "0px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


//Closing the navigation menu.
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementsByClassName("main")[0].style.marginRight= "0";
  document.getElementsByClassName("Menu")[0].style.right = "-200px";
  document.body.style.backgroundColor = "white";
}


//Changing the style of the selected element(the id of which is passed as a parameter) of the navigation menu.
function activateNavSel(id) {
    var navlink_gb_active = getComputedStyle(document.documentElement).getPropertyValue('--navlink_gb_active');
    deactivateAll(); //Deactivate all elements first to avoid two elements activated at the same time.
    document.getElementById(id).style.backgroundColor= navlink_gb_active;
    document.getElementById(id).getElementsByClassName("arrow")[0].style.display="block";
}


//Setting the default style for the all elements of the navigation menu.
function deactivateAll(){
    var navElements = document.getElementsByClassName("navElement");
    var nav_bg = getComputedStyle(document.documentElement).getPropertyValue('--nav_bg');

    for(var i=0;i<navElements.length;i++){
        navElements[i].style.backgroundColor= nav_bg;// " #273648";
        navElements[i].getElementsByClassName("arrow")[0].style.display= "none";
    }
   
}


//This function is called initially when uploading the page to check all the tasks with the data attribute 'data-checked' = true.
function checkAll(){
    
    //Getting the color variable from the CSS style sheet.
    var todo_text = getComputedStyle(document.documentElement).getPropertyValue('--todo_text');
    
    //Converting the color format from #Hex to RGB so that we can use rgba() and control the opacity without changing the color.
    var aRgbHex = todo_text.replace('#','');
    var r = parseInt(aRgbHex[1]+aRgbHex[2], 16);
    var g = parseInt(aRgbHex[3]+aRgbHex[4], 16);
    var b = parseInt(aRgbHex[5]+aRgbHex[6], 16);

    //Getting all the elements of class "task" then change their style if data attribute 'data-checked' = true.
    var tasks = document.getElementsByClassName("task");
    for(var i=0; i<tasks.length; i++){
        if(tasks[i].getAttribute('data-checked')=="true"){
            tasks[i].getElementsByClassName("checkIcon")[0].src="assets/icon-check.svg"; //Change the icon.
            tasks[i].style.color = 'rgba('+r+', '+g+', '+b+' ,0.5)'; //Set the text opacity to 50%
            tasks[i].style.textDecoration="line-through"; //Add line-through to the text.
        }
    }
}


//This function is called when a task is clicked to be checked/unchecked.
function checkTask(task){
    //Getting the color variable from the CSS style sheet.
    var todo_text = getComputedStyle(document.documentElement).getPropertyValue('--todo_text');
    
    //Converting the color format from #Hex to RGB so that we can use rgba() and control the opacity without changing the color.
    var aRgbHex = todo_text.replace('#','');
    var r = parseInt(aRgbHex[1]+aRgbHex[2], 16);
    var g = parseInt(aRgbHex[3]+aRgbHex[4], 16);
    var b = parseInt(aRgbHex[5]+aRgbHex[6], 16);
    //var string = 'rgba('+r+', '+g+', '+b+' ,0.1)';

    //If else statement to toggle between checked/unchecked based on the data attribute 'data-checked.
    if(task.getAttribute('data-checked')=="false"){
        task.getElementsByClassName("checkIcon")[0].src="assets/icon-check.svg"; //Change the icon.
        task.style.color = 'rgba('+r+', '+g+', '+b+' ,0.5)'; //Set the text opacity to 50%
        task.style.textDecoration="line-through"; //Add line-through to the text.
        task.setAttribute('data-checked', 'true'); //Toggle the data attribute 'data-checked
    }
    else{
        task.getElementsByClassName("checkIcon")[0].src="assets/icon-uncheck.svg"; //Change the icon.
        task.style.color = 'rgba('+r+', '+g+', '+b+' ,1)'; //Set the text opacity to 100%
        task.style.textDecoration="none"; //Remove line-through from the text.
        task.setAttribute('data-checked', 'false'); //Toggle the data attribute 'data-checked
    }
    
    
}



