function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HoQyhzC2M1":
        Script1();
        break;
      case "5oCJ0FCOmMq":
        Script2();
        break;
      case "65PqdUtqk9G":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

