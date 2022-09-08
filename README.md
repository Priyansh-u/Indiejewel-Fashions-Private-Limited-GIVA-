# Indiejewel-Fashions-Private-Limited-GIVA-
Assignment for the recruitment process
For the designing part :
I have make it simple and really quick that is combination of black and white with a google font Makonda.
The choice for that is normally in todays world simplicity is faded away but th emost catchy thing still is the simple things.

For the implementation:

For Register page:
I have created an component of register in which I am using the useState hooks but not three or four like different for every field in form but one consisting of object
that get automatically updated by even just  a change due  to the on Change attribute and there I am using a spread operator for the Json to simply update the new changes 
For th eSign Up button I have used OnClick  attribute so that on that we will store that credentials in our local storage.

For the login page:
The things are quite the same in the login page also but the only difference is of like on the onChange attribute we first check the credentials from local storage by using 
localStorage.getItem() and acc. to that take the decision .

For the Post Page:
There is an extra need for forming a one more component TableRow like for all the updates and submit we don't want to that manually that can be done by all by itself is 
using tha map function on the TableRow and for any changes th emaping will be done . Th eone thing to keep in mind is that of like when we click on the button 
we dont want to refresh so that's why Here comes the functionality of event.preventDefault(). There is also a useState hook for the array consisting all the objects for titles id and descriptions.


The only Thing left is Routing :
It is done by BrowserDefault,Route and Switches from the react-dom-router .
