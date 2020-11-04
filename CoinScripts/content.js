var url = window.location.href;
if (url.search("https://catalog.usmint.gov/end-of-world-war-ii-75th-anniversary-american-eagle-silver-proof-coin-20XF.html?cgid=ae-silver-coins#start=1") != -1) {
  addtocart();
} else if (url == "https://catalog.usmint.gov/on/demandware.store/Sites-USM-Site/default/Cart-Show") {
  checkout();
} else {
  console.log("This isn't supported.");
}

var counter = 0;

var ccn = "";
var ccname = "";
var ccmonth = "";
var ccyear = "";
var ccv = "";
//var firstn = "";
//var lastn = "";
//var phone = "";
//var email = "";
//var address = "";
//var city = "";
//var state = "";
//var zip = "";

function addtocart() {
  var atcbutton = document.getElementsByClassName("pdp-add-to-bag");
  if(atcbutton[0] == null && url != "https://catalog.usmint.gov/end-of-world-war-ii-75th-anniversary-american-eagle-silver-proof-coin-20XF.html?cgid=ae-silver-coins#start=1")
  {
    console.log("Product not live.")
    location.reload();
  } else {
    console.log("Live.")
    atcbutton[0].click();
    monitorforsuccessfulatc();
    counter = 0;
  }
}

function monitorforsuccessfulatc() {
  var atcready = document.getElementsByClassName("mini-cart-link");
  if(atcready[0] == null)
  {
    setTimeout(monitorforsuccessfulatc, 10);
  } else {
    window.location.href = "https://catalog.usmint.gov/on/demandware.store/Sites-USM-Site/default/Cart-Show";
  }
}

function checkout() {
  console.log("Ready.");
  creditcardnumber();
}

function firstname() {
  chrome.storage.local.get(["firstn"], function(items){
    console.log(items);
    firstn = items.firstn;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_addressFields_firstName").value = firstn;
    lastname();
  });
}

function lastname() {
  chrome.storage.local.get(["lastn"], function(items){
    console.log(items);
    lastn = items.lastn;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_addressFields_lastName").value = lastn;
    emailaddress();
  });
}

function emailaddress() {
  chrome.storage.local.get(["email"], function(items){
    console.log(items);
    email = items.email;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_email").value = email;
    phonenumber();
  });
}

function phonenumber() {
  chrome.storage.local.get(["phone"], function(items){
    console.log(items);
    phone = items.phone;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_addressFields_phone").value = phone;
    addressthing();
  });
}

function addressthing() {
  chrome.storage.local.get(["address"], function(items){
    console.log(items);
    address = items.address;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_addressFields_address1").value = address;
    cityentry();
  });
}

function cityentry() {
  chrome.storage.local.get(["city"], function(items){
    console.log(items);
    city = items.city;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_addressFields_city").value = city;
    statething();
  });
}

async function statething() {
  await sleep(100);
  chrome.storage.local.get(["state"], function(items){
    console.log(items);
    state = items.state;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_addressFields_states_state").value = state;
    zipcode();
  });
}

function zipcode() {
  chrome.storage.local.get(["zip"], function(items){
    console.log(items);
    zip = items.zip;
    document.querySelector("#dwfrm_singleshipping_shippingAddress_addressFields_zip").value = zip;
    document.querySelector("#checkoutPaymentAccordionItem").className = "accordionItem active"
    //document.querySelector("#submitshippingbtn").click();
    creditcardnumber();
  });
}

function creditcardnumber() {
  chrome.storage.local.get(["ccn"], function(items){
    console.log(items);
    ccn = items.ccn;
    document.querySelector("#dwfrm_billing_paymentMethods_creditCard_number").value = ccn;
    creditcardname();
  });
}

function creditcardname() {
  chrome.storage.local.get(["ccname"], function(items){
    console.log(items);
    ccname = items.ccname;
    document.querySelector("#dwfrm_billing_paymentMethods_creditCard_owner").value = ccname;
    creditcardyear();
  });
}

function creditcardyear() {
  chrome.storage.local.get(["ccyear"], function(items){
    console.log(items);
    ccyear = items.ccyear;
    document.querySelector("#dwfrm_billing_paymentMethods_creditCard_year").value = ccyear;
    creditcardmonth();
  });
}

function creditcardmonth() {
  chrome.storage.local.get(["ccmonth"], function(items){
    console.log(items);
    ccmonth = items.ccmonth;
    document.querySelector("#dwfrm_billing_paymentMethods_creditCard_month").value = ccmonth;
    securitycode();
  });
}

function securitycode() {
  chrome.storage.local.get(["ccv"], function(items){
    console.log(items);
    ccv = items.ccv;
    document.querySelector("#dwfrm_billing_paymentMethods_creditCard_cvn").value = ccv;
    document.querySelector("#checkoutConfirmOrderAccordionItem").className = "accordionItem active"
    monitortocheckout();
  });
}

function monitortocheckout() {
  if (document.querySelector("#checkoutConfirmOrderAccordionItem").className == "accordionItem active") {
    console.log("COOOK");
    document.querySelector("#formAgreementLabel > span").click();
    document.querySelector("#submitOrderButton").click();
  } else {
    console.log("Monitoring.")
    setTimeout(monitortocheckout, 10);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
