$(document).on('submit','form.info',function(){
   var ccn  = document.querySelector("#ccn").value;
   var ccname  = document.querySelector("#ccname").value;
   var ccmonth  = document.querySelector("#ccmonth").value;
   var ccyear  = document.querySelector("#ccyear").value;
   var ccv  = document.querySelector("#ccv").value;
   /*var firstn = document.querySelector("#firstn").value;
   var lastn = document.querySelector("#lastn").value;
   var phone = document.querySelector("#phone").value;
   var email = document.querySelector("#email").value;
   var address = document.querySelector("#address").value;
   var city = document.querySelector("#city").value;
   var state = document.querySelector("#state").value;
   var zip = document.querySelector("#zip").value;
   chrome.storage.local.set({"firstn": firstn }, function(){
     console.log(firstn);
   });
   chrome.storage.local.set({"lastn": lastn }, function(){
     console.log(lastn);
   });
   chrome.storage.local.set({"phone": phone }, function(){
     console.log(phone);
   });
   chrome.storage.local.set({"email": email }, function(){
     console.log(email);
   });
   chrome.storage.local.set({"address": address }, function(){
     console.log(address);
   });
   chrome.storage.local.set({"city": city }, function(){
     console.log(city);
   });
   chrome.storage.local.set({"state": state }, function(){
     console.log(state);
   });
   chrome.storage.local.set({"zip": zip }, function(){
     console.log(zip);
   });*/
   chrome.storage.local.set({"ccn": ccn }, function(){
     console.log(ccn);
   });
   chrome.storage.local.set({"ccname": ccname }, function(){
     console.log(ccname);
   });
   chrome.storage.local.set({"ccmonth": ccmonth }, function(){
     console.log(ccmonth);
   });
   chrome.storage.local.set({"ccyear": ccyear }, function(){
     console.log(ccyear);
   });
   chrome.storage.local.set({"ccv": ccv }, function(){
     console.log(ccv);
   });
   alert("Success!");
});
