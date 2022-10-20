var form = document.getElementById('addForm');  
var itemList = document.getElementById('items');  

form.addEventListener('submit', addForm);   
itemList.addEventListener('click', removeItem); 

function addForm(e){
    e.preventDefault();     


      var fname = document.getElementById('fname').value; 
      var lname = document.getElementById('lname').value; 
   
      var p = document.createElement('p');  
     
    
      p.className = 'list-group-item';  
    
      p.appendChild(document.createTextNode(fname + " " + lname + " "));  
    
    itemList.appendChild(p);    

   
      var deletBtn = document.createElement('button'); 
   
      deletBtn.className= 'btn btn-danger btn-sm float-right delete'; 
  
      deletBtn.appendChild(document.createTextNode('X'));  
  
  p.appendChild(deletBtn);    

  p.addEventListener("click", () => {
    localStorage.removeItem(fname);
   
    p.remove();
  });

  
var editBtn = document.createElement('button'); 

editBtn.className= 'btn btn-danger btn-sm float-right delete'; 

editBtn.appendChild(document.createTextNode('edit'));  

p.appendChild(editBtn); 

    if(fname.length >0 && lname.length>0){
    let myObj = {
      inputfname: fname,  
      inputlname: lname
  };    
  
  let myobj_serialized = JSON.stringify(myObj); 
  localStorage.setItem(myObj.inputfname,myobj_serialized); 
  let myObj_deserialized = JSON.parse(localStorage.getItem(myObj.inputfname));  
  console.log(myObj_deserialized);   
}
}   