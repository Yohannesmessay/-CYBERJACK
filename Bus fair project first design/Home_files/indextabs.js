window.onload = tabs;


function tabs()
{
	var hme = 	document.getElementById( 'ome' );
	var abt = document.getElementById( 'boutus' );
	var lgn = document.getElementById( 'ogin' );
	var rgs = document.getElementById( 'egister' );
	
	
	hme.addEventListener('click', openTab, false);
	abt.addEventListener('click', openTab, false);
	lgn.addEventListener('click', openTab, false);
	rgs.addEventListener('click', openTab, false);
	
}

function openTab()
{
	document.getElementById('unregistereduser').style.display = 'none';
	document.getElementById('aboutus').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('register').style.display = 'none';

	
	var id = this.id;
	
	if( id == 'ome' )
	{
		document.getElementById('unregistereduser').style.display = 'Block';
	}
	else if( id == 'boutus' )
	{
		document.getElementById('aboutus').style.display = 'Block';
	}
	else if( id == 'ogin' )
	{
		document.getElementById('login').style.display = 'Block';
	}
	else if( id == 'egister' )
	{
		document.getElementById('register').style.display = 'Block';
	}
	
}




