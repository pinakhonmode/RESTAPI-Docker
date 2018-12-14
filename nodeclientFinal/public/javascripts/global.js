// student data array for filling in info box
var GryffindorListData = [];
var HufflepuffListData = [];
var RavenclawListData = [];
var SlytherinListData = [];

var serverURL="http://192.168.99.100:8500"
// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the user table on initial page load
  populateTable();
  });

// Functions =============================================================

// Fill table with data
function populateTable() {
    populateGryffindorTable();
    populateHufflepuffTable();
    populateRavenclawTable();
    populateSlytherinTable();
  
};
// Fill table with Gryffindor data
function populateGryffindorTable() {
    var tableContent = '<table border="20px single black ">'
    $.getJSON( '/client/rest/Gryffindor', function( data ) {
    GryffindorListData = data;
    $.each(data, function(){
    tableContent += '<tr>';
    tableContent += '<td><a href="#" class="linkshowGryffindor" rel="' + this.name + '"><b>' + this.name + '</b></a></td>';
    tableContent += '<td><a href="#" class="linkdeleteGryffindor" rel="' + this._id + '">Depulso!!</a></td>';
    tableContent += '</tr>';
    });
    tableContent+='</table>'
    $('#Gryffindor').html(tableContent);
  });
};
// Fill table with Hufflepuff data
function populateHufflepuffTable() {
    var tableContent='<table border="20px single black ">'
  $.getJSON( '/client/rest/Hufflepuff', function( data ) {
    HufflepuffListData = data;
    $.each(data,function(){
    tableContent += '<tr>';
    tableContent += '<td><a href="#" class="linkshowHufflepuff" rel="' + this.name + '"><b>' + this.name + '</b></a></td>';
    tableContent += '<td><a href="#" class="linkdeleteHufflepuff" rel="' + this._id + '">Depulso!!</a></td>';
    tableContent += '</tr>';
    });
    tableContent+='</table>';
    $('#Hufflepuff').html(tableContent);
  });
};
// Fill table with Ravenclaw data
function populateRavenclawTable() {
    var tableContent='<table border="20px single black ">'
  $.getJSON( '/client/rest/Ravenclaw', function( data ) {
    RavenclawListData = data;
    $.each(data,function(){
    tableContent += '<tr>';
    tableContent += '<td><a href="#" class="linkshowRavenclaw" rel="' + this.name + '"><b>' + this.name + '</b></a></td>';
    tableContent += '<td><a href="#" class="linkdeleteRavenclaw" rel="' + this._id + '">Depulso!!</a></td>';
    tableContent += '</tr>';
    });
    tableContent+='</table>';
    $('#Ravenclaw').html(tableContent);
  });
};
// Fill table with Slytherin data
function populateSlytherinTable() {
    var tableContent='<table border="20px single black ">'
    $.getJSON( '/client/rest/Slytherin', function( data ) {
    SlytherinListData = data;
    $.each(data,function(){
    tableContent += '<tr>';
    tableContent += '<td><a href="#" class="linkshowSlytherin" rel="' + this.name + '"><b>' + this.name + '</b></a></td>';
    tableContent += '<td><a href="#" class="linkdeleteSlytherin" rel="' + this._id + '">Depulso!!</a></td>';
    tableContent += '</tr>';
    });
    tableContent+='</table>';
    $('#Slytherin').html(tableContent);
  });
};
  // Show Gryffindor student Info
function showGryffindorInfo(event) {
    // Prevent Link from Firing
    event.preventDefault();
    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');
    // Get Index of object based on id value
    var arrayPosition = GryffindorListData.map(function(arrayItem) { return arrayItem.name; }).indexOf(thisUserName);
    // Get our User Object
    var thisUserObject = GryffindorListData[arrayPosition];
    //Populate Info Box
    $('#userInfoName').text(thisUserObject.name);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
};
function showHufflepuffInfo(event) {
    // Prevent Link from Firing
    event.preventDefault();
    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');
    // Get Index of object based on id value
    var arrayPosition = HufflepuffListData.map(function(arrayItem) { return arrayItem.name; }).indexOf(thisUserName);
    // Get our User Object
    var thisUserObject = HufflepuffListData[arrayPosition];
    //Populate Info Box
    $('#userInfoName').text(thisUserObject.name);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
};
function showRavenclawInfo(event) {
    // Prevent Link from Firing
    event.preventDefault();
    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');
    // Get Index of object based on id value
    var arrayPosition = RavenclawListData.map(function(arrayItem) { return arrayItem.name; }).indexOf(thisUserName);
    // Get our User Object
    var thisUserObject = RavenclawListData[arrayPosition];
    //Populate Info Box
    $('#userInfoName').text(thisUserObject.name);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
};
function showSlytherinInfo(event) {
    // Prevent Link from Firing
    event.preventDefault();
    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');
    // Get Index of object based on id value
    var arrayPosition = SlytherinListData.map(function(arrayItem) { return arrayItem.name; }).indexOf(thisUserName);
    // Get our User Object
    var thisUserObject = SlytherinListData[arrayPosition];
    //Populate Info Box
    $('#userInfoName').text(thisUserObject.name);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
};

// Username link click
$('#Gryffindor').on('click', 'td a.linkshowGryffindor', showGryffindorInfo);
$('#Hufflepuff').on('click', 'td a.linkshowHufflepuff', showHufflepuffInfo);
$('#Ravenclaw').on('click', 'td a.linkshowRavenclaw', showRavenclawInfo);
$('#Slytherin').on('click', 'td a.linkshowSlytherin', showSlytherinInfo);

 // Add User button click
 $('#btnAddUser').on('click', addUser);

  // Add user client side
function addUser(event) {
    event.preventDefault();
    var errorCount = 0;
    console.log(Math.floor(Math.random() * 4) + 1);
    var x=Math.floor(Math.random() * 4) + 1 ;
    console.log(x);
    $('#addUser input').each(function(index, val) {
      if($(this).val() === '') { errorCount++; }

    });
    if(errorCount === 0) {
    var newUser = { 'name': $('#addUser fieldset input#inputUserName').val(),
    'age': $('#addUser fieldset input#inputUserAge').val(),
    'gender': $('#addUser fieldset input#inputUserGender').val()}
    
    if (x==1)
    {
   $.ajax({
        type: 'POST',
        data: newUser,
        url: serverURL+'/Gryffindor',
        header: {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        dataType: 'JSON'
      }).done(function( response ) {
        // Check for successful (blank) response
        if (response.msg === '') {
       $('#addUser fieldset input').val('');
    }
    else {
        //alert('Error: ' + response.msg);
        $('#addUser fieldset input').val('');
      }
      populateGryffindorTable();
    });
}
    if(x==2)
    {
   $.ajax({
        type: 'POST',
        data: newUser,
        url: serverURL+'/Hufflepuff',

        header: {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        dataType: 'JSON'
      }).done(function( response ) {
        // Check for successful (blank) response
        if (response.msg === '') {
       $('#addUser fieldset input').val('');
    }
        else {
          //alert('Error: ' + response.msg);
          $('#addUser fieldset input').val('');
        }
        populateHufflepuffTable();
      });
    }
    if(x==3)
    {
        $.ajax({
        type: 'POST',
        data: newUser,
        url: serverURL+'/Ravenclaw',
        header: {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        dataType: 'JSON'
      }).done(function( response ) {
        // Check for successful (blank) response
        if (response.msg === '') {
       $('#addUser fieldset input').val('');
    }
        else {
          //alert('Error: ' + response.msg);
          $('#addUser fieldset input').val('');
        }
        populateRavenclawTable();
      });
    }
    if(x==4)
    {
    $.ajax({
        type: 'POST',
        data: newUser,
        url: serverURL+'/Slytherin',
        header: {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        dataType: 'JSON'
      }).done(function( response ) {
        // Check for successful (blank) response
        if (response.msg === '') {
       $('#addUser fieldset input').val('');
    }
        else {
         // alert('Error: ' + response.msg);
         $('#addUser fieldset input').val('');
        }
        populateSlytherinTable();
      });
    }
}
    else {
      alert('Please fill in the name correctly');
      return false;
    }
  };


// Delete User link click
$('#Gryffindor').on('click', 'td a.linkdeleteGryffindor', deleteGryffindor);
// Delete User link click
$('#Hufflepuff').on('click', 'td a.linkdeleteHufflepuff', deleteHufflepuff);
// Delete User link click
$('#Ravenclaw').on('click', 'td a.linkdeleteRavenclaw', deleteRavenclaw);
// Delete User link click
$('#Slytherin').on('click', 'td a.linkdeleteSlytherin', deleteSlytherin);
   // Delete Gryffindor student
function deleteGryffindor(event) {

    event.preventDefault();
    var confirmation = confirm('Cast a banishing spell?');
    if (confirmation === true) {
      $.ajax({
        type: 'DELETE',
        url: serverURL+'/Gryffindor/' + $(this).attr('rel'),
        timeout: 1000,
        header: {
          'Access-Control-Allow-Origin':'*'
        },
      }).done(function( response ) {
        if (response.msg === '') {
        }
        else {
          //alert('Error: ' + response.msg);
        }
        populateTable();
      });
    }
    else {
      return false;
    }
  };
   // Delete Hufflepuff
function deleteHufflepuff(event) {

    event.preventDefault();
    var confirmation = confirm('Cast a banishing spell?');
    if (confirmation === true) {
      $.ajax({
        type: 'DELETE',
        url: serverURL+'/Hufflepuff/' + $(this).attr('rel'),
        header: {
          'Access-Control-Allow-Origin':'*'
        },
      }).done(function( response ) {
        if (response.msg === '') {
        }
        else {
          //alert('Error: ' + response.msg);
        }
        populateTable();
      });
    }
    else {
      return false;
    }
  };
   // Delete Ravenclaw
function deleteRavenclaw(event) {

    event.preventDefault();
    var confirmation = confirm('Cast a banishing spell?');
    if (confirmation === true) {
      $.ajax({
        type: 'DELETE',
        url: serverURL+'/Ravenclaw/' + $(this).attr('rel'),
        header: {
          'Access-Control-Allow-Origin':'*'
        },
      }).done(function( response ) {
        if (response.msg === '') {
        }
        else {
          //alert('Error: ' + response.msg);
        }
        populateTable();
      });
    }
    else {
      return false;
    }
  };
   // Delete Slytherin
function deleteSlytherin(event) {

    event.preventDefault();
    var confirmation = confirm('Cast a banishing spell?');
    if (confirmation === true) {
      $.ajax({
        type: 'DELETE',
        url: serverURL+'/Slytherin/' + $(this).attr('rel'),
        header: {
          'Access-Control-Allow-Origin':'*'
        },
      }).done(function( response ) {
        if (response.msg === '') {
        }
        else {
          //alert('Error: ' + response.msg);
        }
        populateTable();
      });
    }
    else {
      return false;
    }
  };
  
