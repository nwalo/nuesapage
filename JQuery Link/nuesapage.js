var formm = $('#formright');
var nameList = ['Odugu', 'Okonko', 'Ini', 'Nwalo', 'Ugwu', 'Maduneme'];
var soundList = ['goddamnit', 'we need to have', 'who are you', 'you silly thing'];

$('#close').on('click', closeNotification);

function closeNotification(){
$('#note').remove();
}

$('#formright').hide();

$('.loginbut').click(openLogin);
function openLogin(){
  $('#formright').show();
}

$('.btn-right').click(function (){

var captureName = document.querySelector('#name').value;
var upperName = captureName.slice(0,1).toUpperCase();
var lowerName = captureName.slice(1).toLowerCase();
var outputName = upperName + lowerName;

if (nameList.includes(outputName)){
  $('#userName').text('Welcome ' + outputName);
  $('.loginbut').text('Log out');
  $('#loginbut').removeClass('loginbut');
  $('#loginbut').addClass('logoutbut');
  $('#formright').hide();
  var audio = new Audio('sounds/hello-4.wav');
  audio.play();
} else if(outputName === 'Alphonsus' || outputName === 'Omego'){
  $('#msg').addClass('warning');
  var help = '<a style="color: yellow" href="www.unn.edu.ng"><i>help<i></a>';
  $('#msg').html('Bastard!!! you no be student. <br>' + 'Click ' + help + ' to get support from Yaba-left');
  var audio = new Audio('sounds/shey you dey mad.m4a');
  audio.play();
} else if(outputName === ''){
  $('#msg').addClass('warning');
  var help = '<a style="color: yellow" href="www.unn.edu.ng"><i>help<i></a>';
  $('#msg').html('Kindly input your details as stated. Click ' + help + ' for more info.');
} else {

  $('#msg').addClass('warning');
  var help = '<a style="color: yellow" href="www.unn.edu.ng"><i>help<i></a>';
  $('#msg').html('Sorry, your profile can not be found on our database, Are you a student? ' + help);
  var audio = new Audio('sounds/' + soundList[Math.round(Math.random() * 3)] + '.wav');
  audio.play();
}

})

$('#loginbut').click(function (){
  $('#userName').text('  ');
    $('#loginbut').text('Log in');
    $('#loginbut').addClass('loginbut');
    $('#loginbut').removeClass('logoutbut');
})

$('#introduction').click(function (){
  $('#formright').hide(100);
} );
