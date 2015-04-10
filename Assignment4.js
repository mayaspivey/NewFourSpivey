function MenuOptions()
{
    if (document.getElementById("menuselect").value== "Show Area One.")
    { 
  document.getElementById("SectionOne").style.visibility="visible";
  document.getElementById("SectionTwo").style.visibility="hidden";
    }
    else if (document.getElementById("menuselect").value=="Show Area Two.")
    {
        document.getElementById("SectionOne").style.visibility="hidden";
  document.getElementById("SectionTwo").style.visibility="visible";
    }
    else{
        document.getElementById("SectionOne").style.visibility="hidden";
  document.getElementById("SectionTwo").style.visibility="hidden"; 
    }
}